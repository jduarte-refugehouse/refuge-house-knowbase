import { NextRequest } from 'next/server';
import { searchDocuments } from '@/lib/vector-store';
import { streamText } from 'ai';

export async function POST(req: NextRequest) {
  try {
    const { question } = await req.json();

    console.log('[v0] Searching for:', question);

    // Search for relevant document chunks
    const relevantChunks = await searchDocuments(question, 10);
    
    console.log('[v0] Found', relevantChunks.length, 'relevant chunks');

    // Build context from relevant chunks
    const context = relevantChunks
      .map((chunk, idx) => {
        return `[Document ${idx + 1}: ${chunk.metadata.fileName}]\n${chunk.content}`;
      })
      .join('\n\n---\n\n');

    // Generate response using Claude with Anthropic API
    const result = streamText({
      model: process.env.ANTHROPIC_API_KEY 
        ? 'anthropic/claude-3-5-sonnet-20241022'
        : 'openai/gpt-4o-mini',
      system: `You are an AI assistant helping users understand policy, procedure, and regulatory documents.

You have access to relevant excerpts from the knowledge base. Answer questions accurately based on the provided context.

IMPORTANT:
- Cite specific documents when providing information
- If the answer isn't in the provided context, say so
- Be precise and reference specific policies/procedures when applicable
- Use clear, professional language

Context from knowledge base:
${context}`,
      prompt: question,
      maxOutputTokens: 2000,
      temperature: 0.3, // Lower temperature for more factual responses
    });

    // Get the sources for citation
    const sources = relevantChunks.map(chunk => ({
      fileName: chunk.metadata.fileName,
      filePath: chunk.metadata.filePath,
    }));

    // Remove duplicates
    const uniqueSources = Array.from(
      new Map(sources.map(s => [s.filePath, s])).values()
    );

    return result.toUIMessageStreamResponse({
      headers: {
        'X-Sources': JSON.stringify(uniqueSources),
      },
    });

  } catch (error) {
    console.error('[v0] Search error:', error);
    return Response.json(
      { 
        error: 'Failed to search documents', 
        details: error instanceof Error ? error.message : 'Unknown error' 
      },
      { status: 500 }
    );
  }
}
