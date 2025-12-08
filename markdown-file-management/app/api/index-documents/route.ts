import { NextRequest } from 'next/server';
import { chunkDocument, indexDocument } from '@/lib/vector-store';

export async function POST(req: NextRequest) {
  try {
    const { documents, githubConfig } = await req.json();

    console.log('[v0] Starting document indexing for', documents.length, 'documents');

    let totalChunks = 0;
    const errors: string[] = [];

    // Process documents in batches to avoid overwhelming the API
    for (const doc of documents) {
      try {
        console.log('[v0] Processing:', doc.path);
        
        // Fetch the actual content from GitHub
        const response = await fetch(
          `https://api.github.com/repos/${githubConfig.owner}/${githubConfig.repo}/contents/${doc.path}`,
          {
            headers: {
              Authorization: `token ${githubConfig.token}`,
              Accept: 'application/vnd.github.v3.raw',
            },
          }
        );

        if (!response.ok) {
          throw new Error(`Failed to fetch ${doc.path}: ${response.statusText}`);
        }

        const content = await response.text();
        
        // Chunk the document
        const chunks = chunkDocument(content, doc.path);
        console.log('[v0] Created', chunks.length, 'chunks for', doc.path);
        
        // Index chunks
        await indexDocument(chunks);
        totalChunks += chunks.length;
        
      } catch (error) {
        const errorMsg = `Error processing ${doc.path}: ${error instanceof Error ? error.message : 'Unknown error'}`;
        console.error('[v0]', errorMsg);
        errors.push(errorMsg);
      }
    }

    console.log('[v0] Indexing complete:', totalChunks, 'total chunks');

    return Response.json({
      success: true,
      totalDocuments: documents.length,
      totalChunks,
      errors: errors.length > 0 ? errors : undefined,
    });

  } catch (error) {
    console.error('[v0] Indexing error:', error);
    return Response.json(
      { 
        error: 'Failed to index documents', 
        details: error instanceof Error ? error.message : 'Unknown error' 
      },
      { status: 500 }
    );
  }
}
