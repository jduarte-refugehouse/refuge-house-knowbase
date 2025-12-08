'use client'

import { useState, useEffect } from 'react'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { ScrollArea } from '@/components/ui/scroll-area'
import { File, Folder, ChevronRight, ChevronDown, Search, RefreshCw } from 'lucide-react'
import { cn } from '@/lib/utils'

interface FileNode {
  name: string
  path: string
  type: 'file' | 'dir'
  sha?: string
}

interface FileBrowserProps {
  githubConfig: {
    owner: string
    repo: string
    token: string
  }
  onFileSelect: (file: { path: string; content: string; sha?: string }) => void
  selectedPath?: string
}

export function FileBrowser({ githubConfig, onFileSelect, selectedPath }: FileBrowserProps) {
  const [files, setFiles] = useState<FileNode[]>([])
  const [expandedDirs, setExpandedDirs] = useState<Set<string>>(new Set())
  const [searchQuery, setSearchQuery] = useState('')
  const [loading, setLoading] = useState(false)

  const fetchFiles = async (path = '') => {
    setLoading(true)
    try {
      const url = `https://api.github.com/repos/${githubConfig.owner}/${githubConfig.repo}/contents/${path}`
      const response = await fetch(url, {
        headers: {
          Authorization: `token ${githubConfig.token}`,
          Accept: 'application/vnd.github.v3+json',
        },
      })

      if (!response.ok) throw new Error('Failed to fetch files')

      const data = await response.json()
      return Array.isArray(data) ? data : []
    } catch (error) {
      console.error('Error fetching files:', error)
      return []
    } finally {
      setLoading(false)
    }
  }

  const loadRootFiles = async () => {
    const rootFiles = await fetchFiles()
    setFiles(rootFiles)
  }

  useEffect(() => {
    loadRootFiles()
  }, [githubConfig])

  const toggleDirectory = async (path: string) => {
    const newExpanded = new Set(expandedDirs)
    if (newExpanded.has(path)) {
      newExpanded.delete(path)
    } else {
      newExpanded.add(path)
      // Load directory contents if not already loaded
      const dirFiles = await fetchFiles(path)
      setFiles((prev) => {
        const updated = [...prev]
        const insertIndex = updated.findIndex((f) => f.path === path) + 1
        // Remove old children
        const filteredFiles = updated.filter(
          (f) => !f.path.startsWith(path + '/') || f.path === path
        )
        // Insert new children
        filteredFiles.splice(insertIndex, 0, ...dirFiles)
        return filteredFiles
      })
    }
    setExpandedDirs(newExpanded)
  }

  const handleFileClick = async (file: FileNode) => {
    if (file.type === 'dir') {
      toggleDirectory(file.path)
      return
    }

    if (!file.name.endsWith('.md') && !file.name.endsWith('.markdown')) {
      return
    }

    try {
      const url = `https://api.github.com/repos/${githubConfig.owner}/${githubConfig.repo}/contents/${file.path}`
      const response = await fetch(url, {
        headers: {
          Authorization: `token ${githubConfig.token}`,
          Accept: 'application/vnd.github.v3+json',
        },
      })

      const data = await response.json()
      const content = atob(data.content)
      onFileSelect({ path: file.path, content, sha: data.sha })
    } catch (error) {
      console.error('Error loading file:', error)
    }
  }

  const filteredFiles = files.filter((file) =>
    file.name.toLowerCase().includes(searchQuery.toLowerCase())
  )

  const getFileDepth = (path: string) => {
    return path.split('/').length - 1
  }

  return (
    <Card className="h-full flex flex-col">
      <div className="p-4 border-b border-border space-y-3">
        <div className="flex items-center justify-between">
          <h3 className="font-semibold text-sm">Files</h3>
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8"
            onClick={loadRootFiles}
            disabled={loading}
          >
            <RefreshCw className={cn("w-4 h-4", loading && "animate-spin")} />
          </Button>
        </div>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input
            placeholder="Search files..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-9 h-9"
          />
        </div>
      </div>

      <ScrollArea className="flex-1">
        <div className="p-2">
          {filteredFiles.map((file) => {
            const depth = getFileDepth(file.path)
            const isExpanded = expandedDirs.has(file.path)
            const isSelected = selectedPath === file.path
            const isMarkdown = file.name.endsWith('.md') || file.name.endsWith('.markdown')

            return (
              <button
                key={file.path}
                onClick={() => handleFileClick(file)}
                className={cn(
                  'w-full flex items-center gap-2 px-2 py-1.5 rounded-md text-sm transition-colors text-left',
                  isSelected
                    ? 'bg-primary/10 text-primary font-medium'
                    : 'hover:bg-accent text-foreground',
                  !isMarkdown && file.type === 'file' && 'opacity-50'
                )}
                style={{ paddingLeft: `${depth * 16 + 8}px` }}
              >
                {file.type === 'dir' && (
                  <>
                    {isExpanded ? (
                      <ChevronDown className="w-4 h-4 shrink-0" />
                    ) : (
                      <ChevronRight className="w-4 h-4 shrink-0" />
                    )}
                    <Folder className="w-4 h-4 shrink-0" />
                  </>
                )}
                {file.type === 'file' && <File className="w-4 h-4 shrink-0" />}
                <span className="truncate">{file.name}</span>
              </button>
            )
          })}
        </div>
      </ScrollArea>
    </Card>
  )
}
