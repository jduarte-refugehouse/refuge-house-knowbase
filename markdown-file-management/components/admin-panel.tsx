'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Loader2, RefreshCw, Database, CheckCircle2, AlertCircle } from 'lucide-react';

interface AdminPanelProps {
  githubConfig: {
    owner: string;
    repo: string;
    token: string;
  };
  documents: any[];
}

export function AdminPanel({ githubConfig, documents }: AdminPanelProps) {
  const [isIndexing, setIsIndexing] = useState(false);
  const [indexStatus, setIndexStatus] = useState<{
    success: boolean;
    totalDocuments?: number;
    totalChunks?: number;
    errors?: string[];
  } | null>(null);

  const handleIndexDocuments = async () => {
    setIsIndexing(true);
    setIndexStatus(null);

    try {
      const response = await fetch('/api/index-documents', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          documents,
          githubConfig,
        }),
      });

      const result = await response.json();
      setIndexStatus(result);
    } catch (error) {
      setIndexStatus({
        success: false,
        errors: [error instanceof Error ? error.message : 'Unknown error'],
      });
    } finally {
      setIsIndexing(false);
    }
  };

  return (
    <div className="space-y-6">
      <Card className="p-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-lg font-semibold mb-1">Vector Database Index</h2>
            <p className="text-sm text-muted-foreground">
              Index documents for semantic search and AI Q&A
            </p>
          </div>
          <Database className="h-8 w-8 text-muted-foreground" />
        </div>

        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 border rounded-lg">
            <div>
              <div className="font-medium">Total Documents</div>
              <div className="text-2xl font-bold">{documents.length}</div>
            </div>
            <Button
              onClick={handleIndexDocuments}
              disabled={isIndexing || documents.length === 0}
              size="lg"
            >
              {isIndexing ? (
                <>
                  <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                  Indexing...
                </>
              ) : (
                <>
                  <RefreshCw className="h-4 w-4 mr-2" />
                  Index All Documents
                </>
              )}
            </Button>
          </div>

          {indexStatus && (
            <Card className={`p-4 ${indexStatus.success ? 'border-green-500/50 bg-green-500/5' : 'border-red-500/50 bg-red-500/5'}`}>
              <div className="flex items-start gap-3">
                {indexStatus.success ? (
                  <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5" />
                ) : (
                  <AlertCircle className="h-5 w-5 text-red-500 mt-0.5" />
                )}
                <div className="flex-1">
                  <div className="font-semibold mb-2">
                    {indexStatus.success ? 'Indexing Complete' : 'Indexing Failed'}
                  </div>
                  {indexStatus.totalDocuments && (
                    <div className="text-sm space-y-1">
                      <div>Documents processed: {indexStatus.totalDocuments}</div>
                      <div>Chunks created: {indexStatus.totalChunks}</div>
                    </div>
                  )}
                  {indexStatus.errors && indexStatus.errors.length > 0 && (
                    <div className="mt-2 text-sm">
                      <div className="font-medium mb-1">Errors:</div>
                      <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                        {indexStatus.errors.map((error, idx) => (
                          <li key={idx}>{error}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </Card>
          )}
        </div>
      </Card>

      <Card className="p-6">
        <h3 className="text-lg font-semibold mb-4">How It Works</h3>
        <div className="space-y-3 text-sm text-muted-foreground">
          <div className="flex gap-3">
            <Badge variant="outline" className="shrink-0">1</Badge>
            <p>Documents are split into smaller chunks (~1000 words each) for better retrieval</p>
          </div>
          <div className="flex gap-3">
            <Badge variant="outline" className="shrink-0">2</Badge>
            <p>Each chunk is converted into a vector embedding using AI</p>
          </div>
          <div className="flex gap-3">
            <Badge variant="outline" className="shrink-0">3</Badge>
            <p>Embeddings are stored in Upstash Vector for fast semantic search</p>
          </div>
          <div className="flex gap-3">
            <Badge variant="outline" className="shrink-0">4</Badge>
            <p>When you ask a question, the system finds the most relevant chunks and uses them to generate accurate answers</p>
          </div>
        </div>
      </Card>

      <Card className="p-6 bg-amber-500/5 border-amber-500/50">
        <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
          <AlertCircle className="h-5 w-5 text-amber-500" />
          Environment Variables Required
        </h3>
        <p className="text-sm text-muted-foreground mb-3">
          This app requires Upstash Vector database credentials:
        </p>
        <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
          <li><code className="bg-muted px-1 py-0.5 rounded">UPSTASH_VECTOR_REST_URL</code></li>
          <li><code className="bg-muted px-1 py-0.5 rounded">UPSTASH_VECTOR_REST_TOKEN</code></li>
          <li><code className="bg-muted px-1 py-0.5 rounded">ANTHROPIC_API_KEY</code> (optional, uses OpenAI by default)</li>
        </ul>
      </Card>
    </div>
  );
}
