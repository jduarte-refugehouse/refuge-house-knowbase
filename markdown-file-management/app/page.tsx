'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { DocumentLibrary } from '@/components/document-library';
import { PolicyQA } from '@/components/policy-qa';
import { Database, MessageSquare, BookOpen } from 'lucide-react';

export default function Home() {
  const [githubConfig] = useState({
    owner: process.env.NEXT_PUBLIC_GITHUB_OWNER || 'jduarte-refugehouse',
    repo: process.env.NEXT_PUBLIC_GITHUB_REPO || 'refuge-house-knowbase',
  });
  const [isConnected, setIsConnected] = useState(false);
  const [documents, setDocuments] = useState<any[]>([]);

  const handleConnect = (docs: any[]) => {
    console.log('[v0] Connected with documents:', docs.length);
    setIsConnected(true);
    setDocuments(docs);
  };

  if (!isConnected) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-4">
        <Card className="w-full max-w-md p-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 rounded-lg bg-primary/10">
              <BookOpen className="h-8 w-8 text-primary" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-balance">Knowledge Base Q&A</h1>
              <p className="text-sm text-muted-foreground">
                AI-powered policy and regulatory document search
              </p>
            </div>
          </div>

          <DocumentLibrary
            githubConfig={githubConfig}
            onConnect={handleConnect}
          />
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b bg-card/50 backdrop-blur">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Database className="h-6 w-6 text-primary" />
            <div>
              <h1 className="text-xl font-bold">Knowledge Base Q&A</h1>
              <p className="text-xs text-muted-foreground">
                {githubConfig.owner}/{githubConfig.repo} • {documents.length} documents
              </p>
            </div>
          </div>
          <Button
            variant="outline"
            size="sm"
            onClick={() => setIsConnected(false)}
          >
            Reconnect
          </Button>
        </div>
      </header>

      <main className="container mx-auto p-4">
        <Tabs defaultValue="qa" className="w-full">
          <TabsList className="grid w-full grid-cols-2 max-w-md">
            <TabsTrigger value="qa">
              <MessageSquare className="h-4 w-4 mr-2" />
              Q&A
            </TabsTrigger>
            <TabsTrigger value="docs">
              <Database className="h-4 w-4 mr-2" />
              Documents
            </TabsTrigger>
          </TabsList>

          <TabsContent value="qa" className="mt-6">
            <PolicyQA documents={documents} />
          </TabsContent>

          <TabsContent value="docs" className="mt-6">
            <Card className="p-6">
              <h2 className="text-lg font-semibold mb-4">
                Document Library ({documents.length} files)
              </h2>
              <div className="space-y-2 max-h-[600px] overflow-y-auto">
                {documents.map((doc) => (
                  <div
                    key={doc.path}
                    className="p-3 border rounded-lg hover:bg-accent/50 transition-colors"
                  >
                    <div className="font-medium text-sm">{doc.name}</div>
                    <div className="text-xs text-muted-foreground">{doc.path}</div>
                  </div>
                ))}
              </div>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
}
