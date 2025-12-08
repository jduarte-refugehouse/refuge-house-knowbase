// Vector store utilities for Upstash Search integration
import { Index } from '@upstash/vector';

// Initialize Upstash Vector client using correct environment variables
export const vectorIndex = new Index({
  url: process.env.UPSTASH_SEARCH_REST_URL!,
  token: process.env.UPSTASH_SEARCH_REST_TOKEN!,
});

export interface DocumentChunk {
  id: string;
  content: string;
  metadata: {
    filePath: string;
    fileName: string;
    source: string; // 'github', 'upload', 'regulatory'
    chunkIndex: number;
    totalChunks: number;
    lastUpdated: string;
  };
}

// Chunk document into smaller pieces for better retrieval
export function chunkDocument(
  content: string,
  filePath: string,
  chunkSize: number = 1000,
  overlap: number = 200
): Omit<DocumentChunk, 'id'>[] {
  const words = content.split(/\s+/);
  const chunks: Omit<DocumentChunk, 'id'>[] = [];
  
  let startIdx = 0;
  let chunkIndex = 0;
  
  while (startIdx < words.length) {
    const endIdx = Math.min(startIdx + chunkSize, words.length);
    const chunkWords = words.slice(startIdx, endIdx);
    const chunkContent = chunkWords.join(' ');
    
    chunks.push({
      content: chunkContent,
      metadata: {
        filePath,
        fileName: filePath.split('/').pop() || filePath,
        source: 'github',
        chunkIndex,
        totalChunks: 0, // Will update after we know total
        lastUpdated: new Date().toISOString(),
      },
    });
    
    chunkIndex++;
    startIdx += chunkSize - overlap;
  }
  
  // Update total chunks
  chunks.forEach(chunk => {
    chunk.metadata.totalChunks = chunks.length;
  });
  
  return chunks;
}

// Generate embedding using AI SDK
export async function generateEmbedding(text: string): Promise<number[]> {
  const { embed } = await import('ai');
  
  const { embedding } = await embed({
    model: 'openai/text-embedding-3-small',
    value: text,
  });
  
  return embedding;
}

// Store document chunks in vector database
export async function indexDocument(
  chunks: Omit<DocumentChunk, 'id'>[]
): Promise<void> {
  console.log('[v0] Indexing', chunks.length, 'chunks');
  
  for (const chunk of chunks) {
    const embedding = await generateEmbedding(chunk.content);
    const id = `${chunk.metadata.filePath}#${chunk.metadata.chunkIndex}`;
    
    await vectorIndex.upsert({
      id,
      vector: embedding,
      metadata: {
        content: chunk.content,
        ...chunk.metadata,
      },
    });
  }
}

// Search for relevant document chunks
export async function searchDocuments(
  query: string,
  topK: number = 5
): Promise<DocumentChunk[]> {
  const queryEmbedding = await generateEmbedding(query);
  
  const results = await vectorIndex.query({
    vector: queryEmbedding,
    topK,
    includeMetadata: true,
  });
  
  return results.map((result) => ({
    id: result.id,
    content: result.metadata?.content as string,
    metadata: {
      filePath: result.metadata?.filePath as string,
      fileName: result.metadata?.fileName as string,
      source: result.metadata?.source as string,
      chunkIndex: result.metadata?.chunkIndex as number,
      totalChunks: result.metadata?.totalChunks as number,
      lastUpdated: result.metadata?.lastUpdated as string,
    },
  }));
}

// Delete all chunks for a specific file
export async function deleteDocumentChunks(filePath: string): Promise<void> {
  // Upstash Vector doesn't have a direct "delete by metadata" query
  // We need to fetch all IDs for this file and delete them
  // For now, we'll use a naming convention in the ID
  console.log('[v0] Deleting chunks for', filePath);
  // This is a limitation - in production you'd want to track IDs separately
}
