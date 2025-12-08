'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Loader2, Send, FileText } from 'lucide-react';
import { useChat } from '@ai-sdk/react';

export function SemanticQA() {
  const [sources, setSources] = useState<any[]>([]);
  
  const { messages, input, handleInputChange, handleSubmit, isLoading } = useChat({
    api: '/api/semantic-search',
    onResponse: (response) => {
      const sourcesHeader = response.headers.get('X-Sources');
      if (sourcesHeader) {
        setSources(JSON.parse(sourcesHeader));
      }
    },
  });

  return (
    <div className="grid gap-6 lg:grid-cols-3">
      <Card className="lg:col-span-2 p-6 flex flex-col h-[600px]">
        <h2 className="text-lg font-semibold mb-4">Ask Questions</h2>
        
        <div className="flex-1 overflow-y-auto space-y-4 mb-4">
          {messages.length === 0 && (
            <div className="text-center text-muted-foreground py-12">
              <MessageSquare className="h-12 w-12 mx-auto mb-4 opacity-50" />
              <p>Ask any question about your policy and regulatory documents</p>
            </div>
          )}
          
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${
                message.role === 'user' ? 'justify-end' : 'justify-start'
              }`}
            >
              <div
                className={`rounded-lg px-4 py-3 max-w-[80%] ${
                  message.role === 'user'
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-muted'
                }`}
              >
                <div className="text-sm whitespace-pre-wrap">{message.content}</div>
              </div>
            </div>
          ))}
          
          {isLoading && (
            <div className="flex justify-start">
              <div className="bg-muted rounded-lg px-4 py-3">
                <Loader2 className="h-4 w-4 animate-spin" />
              </div>
            </div>
          )}
        </div>

        <form onSubmit={handleSubmit} className="flex gap-2">
          <Textarea
            value={input}
            onChange={handleInputChange}
            placeholder="Ask about policies, procedures, or regulations..."
            className="min-h-[60px]"
            disabled={isLoading}
          />
          <Button type="submit" size="icon" disabled={isLoading || !input.trim()}>
            {isLoading ? (
              <Loader2 className="h-4 w-4 animate-spin" />
            ) : (
              <Send className="h-4 w-4" />
            )}
          </Button>
        </form>
      </Card>

      <Card className="p-6">
        <h3 className="text-sm font-semibold mb-4 flex items-center gap-2">
          <FileText className="h-4 w-4" />
          Referenced Documents
        </h3>
        
        {sources.length === 0 ? (
          <p className="text-sm text-muted-foreground">
            Sources will appear here after you ask a question
          </p>
        ) : (
          <div className="space-y-2">
            {sources.map((source, idx) => (
              <div
                key={idx}
                className="p-3 border rounded-lg hover:bg-accent/50 transition-colors"
              >
                <div className="font-medium text-sm">{source.fileName}</div>
                <div className="text-xs text-muted-foreground mt-1">
                  {source.filePath}
                </div>
              </div>
            ))}
          </div>
        )}
      </Card>
    </div>
  );
}

function MessageSquare({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
  );
}
