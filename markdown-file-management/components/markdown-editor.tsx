'use client'

import { useState } from 'react'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Textarea } from '@/components/ui/textarea'
import { useToast } from '@/hooks/use-toast'
import { Save, Eye, Edit, Loader2 } from 'lucide-react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

interface MarkdownEditorProps {
  file: {
    path: string
    content: string
    sha?: string
  }
  githubConfig: {
    owner: string
    repo: string
    token: string
  }
  onSave: (content: string) => void
}

export function MarkdownEditor({ file, githubConfig, onSave }: MarkdownEditorProps) {
  const [content, setContent] = useState(file.content)
  const [isSaving, setIsSaving] = useState(false)
  const { toast } = useToast()

  const handleSave = async () => {
    setIsSaving(true)
    try {
      const url = `https://api.github.com/repos/${githubConfig.owner}/${githubConfig.repo}/contents/${file.path}`
      
      const response = await fetch(url, {
        method: 'PUT',
        headers: {
          Authorization: `token ${githubConfig.token}`,
          Accept: 'application/vnd.github.v3+json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: `Update ${file.path}`,
          content: btoa(unescape(encodeURIComponent(content))),
          sha: file.sha,
        }),
      })

      if (!response.ok) throw new Error('Failed to save file')

      const data = await response.json()
      onSave(content)
      
      toast({
        title: 'File saved',
        description: `${file.path} has been updated successfully.`,
      })
    } catch (error) {
      console.error('Error saving file:', error)
      toast({
        title: 'Error saving file',
        description: 'Failed to update the file. Please try again.',
        variant: 'destructive',
      })
    } finally {
      setIsSaving(false)
    }
  }

  const hasChanges = content !== file.content

  return (
    <Card className="h-full flex flex-col">
      <div className="p-4 border-b border-border flex items-center justify-between">
        <div>
          <h3 className="font-semibold text-sm truncate">{file.path}</h3>
          <p className="text-xs text-muted-foreground">
            {hasChanges ? 'Unsaved changes' : 'Up to date'}
          </p>
        </div>
        <Button
          onClick={handleSave}
          disabled={!hasChanges || isSaving}
          size="sm"
        >
          {isSaving ? (
            <>
              <Loader2 className="w-4 h-4 mr-2 animate-spin" />
              Saving...
            </>
          ) : (
            <>
              <Save className="w-4 h-4 mr-2" />
              Save
            </>
          )}
        </Button>
      </div>

      <Tabs defaultValue="edit" className="flex-1 flex flex-col">
        <div className="px-4 pt-3">
          <TabsList className="w-full">
            <TabsTrigger value="edit" className="flex-1">
              <Edit className="w-4 h-4 mr-2" />
              Edit
            </TabsTrigger>
            <TabsTrigger value="preview" className="flex-1">
              <Eye className="w-4 h-4 mr-2" />
              Preview
            </TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="edit" className="flex-1 p-4 mt-0">
          <Textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="h-full font-mono text-sm resize-none"
            placeholder="Write your markdown here..."
          />
        </TabsContent>

        <TabsContent value="preview" className="flex-1 p-4 mt-0 overflow-auto">
          <div className="prose prose-sm dark:prose-invert max-w-none">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
              {content}
            </ReactMarkdown>
          </div>
        </TabsContent>
      </Tabs>
    </Card>
  )
}
