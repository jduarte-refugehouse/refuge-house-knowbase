'use client'

import { Card } from '@/components/ui/card'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import ReactMarkdown from 'react-markdown'
import { FileText } from 'lucide-react'

interface DocumentViewerProps {
  document: {
    path: string
    content: string
  }
}

export function DocumentViewer({ document }: DocumentViewerProps) {
  return (
    <Card className="h-full flex flex-col">
      <div className="p-4 border-b border-border">
        <div className="flex items-center gap-2">
          <FileText className="w-4 h-4 text-primary" />
          <div className="flex-1 min-w-0">
            <h3 className="font-semibold text-sm truncate">{document.path}</h3>
            <p className="text-xs text-muted-foreground">Policy Document</p>
          </div>
        </div>
      </div>

      <Tabs defaultValue="preview" className="flex-1 flex flex-col">
        <div className="px-4 pt-3">
          <TabsList className="w-full">
            <TabsTrigger value="preview" className="flex-1">Preview</TabsTrigger>
            <TabsTrigger value="source" className="flex-1">Source</TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="preview" className="flex-1 mt-0">
          <ScrollArea className="h-full">
            <div className="p-6 prose prose-sm dark:prose-invert max-w-none">
              <ReactMarkdown>{document.content}</ReactMarkdown>
            </div>
          </ScrollArea>
        </TabsContent>

        <TabsContent value="source" className="flex-1 mt-0">
          <ScrollArea className="h-full">
            <pre className="p-6 text-xs font-mono">
              <code>{document.content}</code>
            </pre>
          </ScrollArea>
        </TabsContent>
      </Tabs>
    </Card>
  )
}
