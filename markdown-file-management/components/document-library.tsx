'use client'

import { useState, useEffect } from 'react'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Button } from '@/components/ui/button'
import { FileText, Folder, Search, Loader2, RefreshCw, AlertCircle } from 'lucide-react'
import { cn } from '@/lib/utils'
import { fetchDocuments, fetchFileContent, loadAllDocuments } from '@/app/actions/github-actions'

interface Document {
  path: string
  name: string
  type: 'file' | 'dir'
}

interface DocumentLibraryProps {
  githubConfig: {
    owner: string
    repo: string
  }
  onConnect: (docs: any[]) => void
}

export function DocumentLibrary({
  githubConfig,
  onConnect,
}: DocumentLibraryProps) {
  const [documents, setDocuments] = useState<Document[]>([])
  const [searchQuery, setSearchQuery] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [loadingProgress, setLoadingProgress] = useState({ current: 0, total: 0 })

  const handleFetchDocuments = async () => {
    if (!githubConfig.owner || !githubConfig.repo) {
      setError('Please provide both GitHub owner and repository name')
      return
    }

    console.log('[v0] Fetching documents from:', githubConfig)
    setIsLoading(true)
    setError(null)
    
    try {
      const result = await fetchDocuments(githubConfig)
      
      console.log('[v0] Fetch result:', result)
      
      if (!result.success) {
        setError(result.error || 'Failed to load documents')
        return
      }

      if (!result.documents || result.documents.length === 0) {
        setError('No markdown files found in the repository')
        return
      }

      // Load all document contents
      const filePaths = result.documents.map((doc: Document) => doc.path)
      const allDocs = await loadAllDocuments(githubConfig.owner, githubConfig.repo, filePaths)
      
      console.log('[v0] Loaded documents:', allDocs.length)
      
      onConnect(allDocs)
      setDocuments(result.documents)
    } catch (err: any) {
      console.error('[v0] Error loading documents:', err)
      setError(err.message || 'Failed to load documents')
    } finally {
      setIsLoading(false)
    }
  }

  const handleDocumentClick = async (doc: Document) => {
    try {
      const content = await fetchFileContent(githubConfig.owner, githubConfig.repo, doc.path)
      onConnect([{ path: doc.path, content }])
    } catch (err) {
      console.error('[v0] Failed to load document:', err)
      setError('Failed to load document content')
    }
  }

  // useEffect(() => {
  //   handleFetchDocuments()
  // }, [githubConfig])

  const filteredDocuments = documents.filter((doc) =>
    doc.path.toLowerCase().includes(searchQuery.toLowerCase()) ||
    doc.name.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <Card className="h-full flex flex-col">
      <div className="p-4 border-b border-border space-y-3">
        <div className="flex items-center justify-between">
          <h3 className="font-semibold text-sm">
            Document Library {documents.length > 0 && `(${documents.length})`}
          </h3>
          {documents.length === 0 ? (
            <Button
              onClick={handleFetchDocuments}
              disabled={isLoading || !githubConfig.owner || !githubConfig.repo}
              size="sm"
            >
              {isLoading ? (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  Loading...
                </>
              ) : (
                'Connect'
              )}
            </Button>
          ) : (
            <Button
              size="icon"
              variant="ghost"
              onClick={handleFetchDocuments}
              disabled={isLoading || !githubConfig.owner || !githubConfig.repo}
            >
              <RefreshCw className={cn('w-4 h-4', isLoading && 'animate-spin')} />
            </Button>
          )}
        </div>
        {documents.length > 0 && (
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              placeholder="Search by filename or path..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-9"
            />
          </div>
        )}
      </div>

      <ScrollArea className="flex-1">
        <div className="p-2">
          {error && (
            <div className="p-3 mb-2 text-sm bg-destructive/10 text-destructive rounded-lg flex items-start gap-2">
              <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
              <span>{error}</span>
            </div>
          )}

          {isLoading ? (
            <div className="flex flex-col items-center justify-center py-12 gap-3">
              <Loader2 className="w-6 h-6 animate-spin text-muted-foreground" />
              <div className="text-xs text-muted-foreground text-center">
                {loadingProgress.total > 0 ? (
                  <>
                    Loading documents...<br />
                    {loadingProgress.current} of {loadingProgress.total}
                  </>
                ) : (
                  'Scanning repository...'
                )}
              </div>
            </div>
          ) : filteredDocuments.length === 0 ? (
            <div className="text-center py-12 text-muted-foreground text-sm">
              {documents.length === 0 
                ? 'Click "Connect" to load documents from GitHub' 
                : 'No documents match your search'}
            </div>
          ) : (
            <div className="space-y-1">
              {filteredDocuments.map((doc) => (
                <button
                  key={doc.path}
                  onClick={() => handleDocumentClick(doc)}
                  className={cn(
                    'w-full flex items-start gap-2 px-3 py-2 text-sm rounded-lg hover:bg-accent transition-colors text-left',
                    // selectedPath === doc.path && 'bg-accent'
                  )}
                >
                  <FileText className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                  <div className="flex flex-col min-w-0 flex-1">
                    <span className="font-medium truncate">{doc.name}</span>
                    <span className="text-xs text-muted-foreground truncate">{doc.path}</span>
                  </div>
                </button>
              ))}
            </div>
          )}
        </div>
      </ScrollArea>
    </Card>
  )
}
