import { generateText } from 'ai'

export async function POST(req: Request) {
  try {
    const { messages, currentDocument, allDocuments, searchScope } = await req.json()

    console.log('[v0] API called with:', {
      messageCount: messages.length,
      searchScope,
      currentDocPath: currentDocument?.path,
      totalDocs: allDocuments.length
    })

    if (!allDocuments || allDocuments.length === 0) {
      console.error('[v0] No documents provided to API')
      return Response.json(
        { error: 'No documents available. Please ensure documents are loaded.' },
        { status: 400 }
      )
    }

    let relevantDocuments = []
    
    if (searchScope === 'current' && currentDocument) {
      // Only use the current document
      relevantDocuments = [currentDocument]
    } else {
      // For 'all' scope, use keyword-based filtering to find relevant documents
      const lastUserMessage = messages[messages.length - 1]?.content?.toLowerCase() || ''
      
      // Extract potential keywords from the question
      const keywords = lastUserMessage
        .split(/\s+/)
        .filter(word => word.length > 3)
        .slice(0, 10) // Use first 10 significant words
      
      console.log('[v0] Extracted keywords:', keywords)
      
      // Score documents based on keyword matches
      const scoredDocs = allDocuments.map((doc: { path: string; content: string }) => {
        const docText = (doc.path + ' ' + doc.content).toLowerCase()
        const score = keywords.reduce((acc, keyword) => {
          return acc + (docText.includes(keyword) ? 1 : 0)
        }, 0)
        return { doc, score }
      })
      
      // Take top 10 most relevant documents, or all if total is small
      relevantDocuments = scoredDocs
        .sort((a, b) => b.score - a.score)
        .slice(0, 10)
        .filter(item => item.score > 0) // Only include docs with matches
        .map(item => item.doc)
      
      // If no matches found, include catalog and readme as fallback
      if (relevantDocuments.length === 0) {
        console.log('[v0] No keyword matches, using fallback documents')
        relevantDocuments = allDocuments
          .filter((doc: { path: string }) => 
            doc.path.includes('CATALOG') || 
            doc.path.includes('README') ||
            doc.path.includes('INDEX')
          )
          .slice(0, 5)
      }
      
      if (relevantDocuments.length === 0) {
        console.log('[v0] Using first 5 documents as last resort')
        relevantDocuments = allDocuments.slice(0, 5)
      }
    }

    console.log('[v0] Using', relevantDocuments.length, 'documents:', relevantDocuments.map((d: any) => d.path))

    // Build context from relevant documents
    const documentsContext = relevantDocuments
      .map((doc: { path: string; content: string }) => {
        // Truncate very long documents to prevent token overflow
        const truncatedContent = doc.content.length > 5000 
          ? doc.content.substring(0, 5000) + '\n\n[Content truncated...]'
          : doc.content
        return `### Document: ${doc.path}\n\n${truncatedContent}\n\n---\n`
      })
      .join('\n')

    console.log('[v0] Total context length:', documentsContext.length, 'characters')

    const systemPrompt = `You are an expert policy and regulatory document assistant for Refuge House, a foster care and child placement agency. Your role is to help users understand and navigate organizational policies, procedures, job descriptions, treatment models, and regulatory documents.

You have access to ${relevantDocuments.length} relevant documents from a knowledge base of ${allDocuments.length} total documents:

${documentsContext}

Your responsibilities:
- Answer questions accurately based on the document content provided
- Reference specific policies, sections, or procedures when relevant
- Explain complex regulatory requirements in clear terms
- Help users find information across multiple documents
- Identify related policies or procedures that might be relevant
- Always cite which document(s) you're referencing
- If information isn't in the provided documents, say so clearly

Be precise, professional, and helpful. When you reference information, always mention which document it comes from.`

    console.log('[v0] Calling AI model...')

    const { text } = await generateText({
      model: 'openai/gpt-4o-mini',
      messages: [
        {
          role: 'system',
          content: systemPrompt,
        },
        ...messages.map((msg: { role: string; content: string }) => ({
          role: msg.role,
          content: msg.content,
        })),
      ],
      maxTokens: 2000,
      temperature: 0.3,
    })

    console.log('[v0] AI response generated successfully, length:', text.length)

    // Extract document references from the response
    const sources = relevantDocuments
      .filter((doc: { path: string }) => 
        text.toLowerCase().includes(doc.path.toLowerCase()) ||
        text.toLowerCase().includes(doc.path.split('/').pop()?.toLowerCase() || '')
      )
      .map((doc: { path: string }) => doc.path)

    console.log('[v0] Sources identified:', sources.length)

    return Response.json({ text, sources })
  } catch (error) {
    console.error('[v0] Error in policy Q&A:', error)
    if (error instanceof Error) {
      console.error('[v0] Error name:', error.name)
      console.error('[v0] Error message:', error.message)
      console.error('[v0] Error stack:', error.stack)
    }
    return Response.json(
      { 
        error: 'Failed to generate AI response', 
        details: error instanceof Error ? error.message : String(error)
      },
      { status: 500 }
    )
  }
}
