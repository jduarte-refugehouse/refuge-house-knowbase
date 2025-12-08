# Knowledge Base Q&A - Technical Documentation

A Next.js application that connects to a GitHub repository containing markdown documents (policies, procedures, regulatory documents) and provides an AI-powered question-answering interface using keyword-based document retrieval.

---

## Table of Contents

1. [Architecture Overview](#architecture-overview)
2. [Technology Stack](#technology-stack)
3. [Project Structure](#project-structure)
4. [Environment Variables](#environment-variables)
5. [Core Components](#core-components)
6. [Data Flow](#data-flow)
7. [API Routes](#api-routes)
8. [Server Actions](#server-actions)
9. [UI Components](#ui-components)
10. [Styling System](#styling-system)
11. [Step-by-Step Implementation Guide](#step-by-step-implementation-guide)
12. [Key Implementation Details](#key-implementation-details)
13. [Future Improvements (RAG System)](#future-improvements-rag-system)

---

## Architecture Overview

\`\`\`
┌─────────────────────────────────────────────────────────────────────────────┐
│                              USER INTERFACE                                  │
│  ┌─────────────────────┐  ┌─────────────────────┐  ┌─────────────────────┐  │
│  │   Connect Screen    │  │      Q&A Tab        │  │   Documents Tab     │  │
│  │   (Initial Load)    │  │  (Chat Interface)   │  │   (File Browser)    │  │
│  └─────────────────────┘  └─────────────────────┘  └─────────────────────┘  │
└─────────────────────────────────────────────────────────────────────────────┘
                                      │
                                      ▼
┌─────────────────────────────────────────────────────────────────────────────┐
│                           CLIENT COMPONENTS                                  │
│  ┌─────────────────────┐  ┌─────────────────────┐  ┌─────────────────────┐  │
│  │  DocumentLibrary    │  │     PolicyQA        │  │     app/page.tsx    │  │
│  │  (GitHub Loader)    │  │  (Chat Component)   │  │   (State Manager)   │  │
│  └─────────────────────┘  └─────────────────────┘  └─────────────────────┘  │
└─────────────────────────────────────────────────────────────────────────────┘
                                      │
                    ┌─────────────────┼─────────────────┐
                    ▼                                   ▼
┌───────────────────────────────────┐  ┌───────────────────────────────────────┐
│        SERVER ACTIONS             │  │            API ROUTES                 │
│  ┌─────────────────────────────┐  │  │  ┌─────────────────────────────────┐  │
│  │  app/actions/github-actions │  │  │  │    app/api/policy-qa/route.ts   │  │
│  │  - fetchDocuments()         │  │  │  │    - POST /api/policy-qa        │  │
│  │  - fetchFileContent()       │  │  │  │    - Keyword filtering          │  │
│  │  - loadAllDocuments()       │  │  │  │    - AI text generation         │  │
│  └─────────────────────────────┘  │  │  └─────────────────────────────────┘  │
└───────────────────────────────────┘  └───────────────────────────────────────┘
                    │                                   │
                    ▼                                   ▼
┌───────────────────────────────────┐  ┌───────────────────────────────────────┐
│           GITHUB API              │  │              AI SDK                   │
│  - GET /repos/{owner}/{repo}/     │  │  - generateText() from 'ai' package   │
│    contents/{path}                │  │  - Model: openai/gpt-4o-mini          │
│  - Recursive directory traversal  │  │  - System prompt with document context│
│  - Base64 content decoding        │  │  - Streaming disabled (full response) │
└───────────────────────────────────┘  └───────────────────────────────────────┘
\`\`\`

---

## Technology Stack

| Category | Technology | Version | Purpose |
|----------|------------|---------|---------|
| **Framework** | Next.js | 16.0.3 | React framework with App Router |
| **Runtime** | React | 19.2.0 | UI library |
| **Language** | TypeScript | 5.x | Type safety |
| **AI SDK** | Vercel AI SDK | 5.0.93 | AI text generation |
| **Styling** | Tailwind CSS | 4.1.9 | Utility-first CSS |
| **UI Components** | shadcn/ui | Latest | Pre-built accessible components |
| **Icons** | Lucide React | 0.454.0 | Icon library |
| **Markdown** | react-markdown | 10.1.0 | Markdown rendering |

---

## Project Structure

\`\`\`
project-root/
├── app/
│   ├── actions/
│   │   └── github-actions.ts      # Server actions for GitHub API
│   ├── api/
│   │   └── policy-qa/
│   │       └── route.ts           # AI Q&A endpoint
│   ├── globals.css                # Global styles + Tailwind config
│   ├── layout.tsx                 # Root layout with fonts
│   └── page.tsx                   # Main page component (entry point)
├── components/
│   ├── document-library.tsx       # GitHub document fetcher/browser
│   ├── policy-qa.tsx              # AI chat interface
│   └── ui/                        # shadcn/ui components
│       ├── badge.tsx
│       ├── button.tsx
│       ├── card.tsx
│       ├── input.tsx
│       ├── scroll-area.tsx
│       ├── tabs.tsx
│       └── ... (other shadcn components)
├── lib/
│   └── utils.ts                   # Utility functions (cn helper)
├── package.json
└── README.md
\`\`\`

---

## Environment Variables

### Required Variables

\`\`\`bash
# GitHub Configuration (for accessing the repository)
GITHUB_TOKEN=ghp_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
NEXT_PUBLIC_GITHUB_OWNER=your-github-username
NEXT_PUBLIC_GITHUB_REPO=your-repository-name

# AI Configuration (choose one)
# Option 1: OpenAI via Vercel AI Gateway (default)
# No key needed - uses Vercel AI Gateway

# Option 2: Anthropic Claude (alternative)
ANTHROPIC_API_KEY=sk-ant-xxxxxxxxxxxxxxxxxxxxxxxxxxxx
\`\`\`

### GitHub Token Requirements

The GitHub Personal Access Token needs the following permissions:
- **Classic Token**: Check the `repo` scope (Full control of private repositories)
- **Fine-grained Token**: Repository access > Contents > Read

To create a token:
1. Go to https://github.com/settings/tokens/new
2. Select "Generate new token (classic)"
3. Check the `repo` scope
4. Generate and copy the token

---

## Core Components

### 1. Main Page (`app/page.tsx`)

**Purpose**: Root component that manages application state and routing between connect screen and main interface.

**State Management**:
\`\`\`typescript
const [githubConfig] = useState({
  owner: process.env.NEXT_PUBLIC_GITHUB_OWNER || 'default-owner',
  repo: process.env.NEXT_PUBLIC_GITHUB_REPO || 'default-repo',
});
const [isConnected, setIsConnected] = useState(false);
const [documents, setDocuments] = useState<any[]>([]);
\`\`\`

**Key Behaviors**:
- Shows `DocumentLibrary` connect screen when `isConnected === false`
- Shows tabbed interface (Q&A + Documents) when `isConnected === true`
- Passes loaded documents to `PolicyQA` component

**Component Flow**:
\`\`\`
Initial Load → DocumentLibrary (Connect Screen)
                     │
                     ▼ (User clicks "Connect")
             Fetch GitHub Documents
                     │
                     ▼ (Success)
            setIsConnected(true)
            setDocuments(loadedDocs)
                     │
                     ▼
         Main Interface with Tabs
         ├── Q&A Tab (PolicyQA)
         └── Documents Tab (File List)
\`\`\`

---

### 2. Document Library (`components/document-library.tsx`)

**Purpose**: Fetches and displays all markdown files from a GitHub repository.

**Props Interface**:
\`\`\`typescript
interface DocumentLibraryProps {
  githubConfig: {
    owner: string
    repo: string
  }
  onConnect: (docs: any[]) => void
}
\`\`\`

**Key Functions**:

1. **handleFetchDocuments()**: Main loading function
   - Calls `fetchDocuments()` server action
   - Then calls `loadAllDocuments()` to get file contents
   - Triggers `onConnect(allDocs)` callback on success

**UI States**:
- **Initial**: "Connect" button
- **Loading**: Spinner with "Scanning repository..."
- **Error**: Red error banner with message
- **Success**: Triggers parent callback

---

### 3. Policy Q&A (`components/policy-qa.tsx`)

**Purpose**: Chat interface for asking questions about loaded documents.

**Props Interface**:
\`\`\`typescript
interface PolicyQAProps {
  documents: Array<{
    path: string
    content: string
  }>
}
\`\`\`

**Message Structure**:
\`\`\`typescript
interface Message {
  role: 'user' | 'assistant'
  content: string
  sources?: string[]  // File paths referenced in response
}
\`\`\`

**Key Functions**:

1. **handleSend()**: Sends question to API
   \`\`\`typescript
   const response = await fetch('/api/policy-qa', {
     method: 'POST',
     headers: { 'Content-Type': 'application/json' },
     body: JSON.stringify({
       messages: [...messages, userMessage],
       documents,
     }),
   })
   \`\`\`

**UI Features**:
- Auto-scroll to latest message
- Loading indicator (bouncing dots)
- Source citations as badges
- Enter key to send

---

## Data Flow

### Document Loading Flow

\`\`\`
1. User lands on app
   └── page.tsx renders DocumentLibrary in "connect" state

2. User clicks "Connect" button
   └── DocumentLibrary.handleFetchDocuments() called

3. Fetch document list from GitHub
   └── Server Action: fetchDocuments({ owner, repo })
       └── fetchAllMarkdownFilesRecursive()
           └── GitHub API: GET /repos/{owner}/{repo}/contents/
           └── Recursively traverse all directories
           └── Filter for .md and .markdown files
           └── Return array of { path, name, type }

4. Load document contents
   └── Server Action: loadAllDocuments(owner, repo, filePaths)
       └── For each file path:
           └── fetchFileContent(owner, repo, path)
               └── GitHub API: GET /repos/{owner}/{repo}/contents/{path}
               └── Decode base64 content
               └── Return { path, content }

5. Return to client
   └── DocumentLibrary calls onConnect(allDocs)
   └── page.tsx sets isConnected=true, documents=allDocs
   └── UI switches to tabbed interface
\`\`\`

### Question-Answering Flow

\`\`\`
1. User types question and presses Enter/Send
   └── PolicyQA.handleSend()

2. Send to API
   └── POST /api/policy-qa
       └── Body: { messages, documents }

3. API processing (route.ts)
   ├── Extract keywords from user question
   │   └── Split by spaces, filter words > 3 chars, take first 10
   │
   ├── Score documents by keyword matches
   │   └── For each doc: count keyword occurrences in path + content
   │
   ├── Select top 10 relevant documents
   │   └── Sort by score descending, take top 10 with score > 0
   │
   ├── Build system prompt with document context
   │   └── Include truncated content (max 5000 chars per doc)
   │
   └── Call AI model
       └── generateText({ model: 'openai/gpt-4o-mini', ... })

4. Return response
   └── { text: string, sources: string[] }

5. Display in chat
   └── PolicyQA adds assistant message with sources
\`\`\`

---

## API Routes

### POST `/api/policy-qa`

**File**: `app/api/policy-qa/route.ts`

**Request Body**:
\`\`\`typescript
{
  messages: Array<{ role: 'user' | 'assistant', content: string }>,
  documents: Array<{ path: string, content: string }>,
  // Legacy fields (optional, for backward compatibility)
  currentDocument?: { path: string, content: string },
  allDocuments?: Array<{ path: string, content: string }>,
  searchScope?: 'current' | 'all'
}
\`\`\`

**Response**:
\`\`\`typescript
{
  text: string,      // AI-generated answer
  sources: string[]  // Array of document paths referenced
}
\`\`\`

**Error Response**:
\`\`\`typescript
{
  error: string,
  details?: string
}
\`\`\`

**Key Algorithm - Keyword Filtering**:
\`\`\`typescript
// 1. Extract keywords from user's question
const keywords = lastUserMessage
  .split(/\s+/)
  .filter(word => word.length > 3)
  .slice(0, 10)

// 2. Score each document
const scoredDocs = documents.map(doc => {
  const docText = (doc.path + ' ' + doc.content).toLowerCase()
  const score = keywords.reduce((acc, keyword) => {
    return acc + (docText.includes(keyword) ? 1 : 0)
  }, 0)
  return { doc, score }
})

// 3. Select top 10 with matches
const relevantDocuments = scoredDocs
  .sort((a, b) => b.score - a.score)
  .slice(0, 10)
  .filter(item => item.score > 0)
  .map(item => item.doc)
\`\`\`

**System Prompt Template**:
\`\`\`
You are an expert policy and regulatory document assistant for Refuge House, 
a foster care and child placement agency. Your role is to help users understand 
and navigate organizational policies, procedures, job descriptions, treatment 
models, and regulatory documents.

You have access to {relevantDocuments.length} relevant documents from a knowledge 
base of {allDocuments.length} total documents:

### Document: {doc.path}
{doc.content (truncated to 5000 chars)}
---

Your responsibilities:
- Answer questions accurately based on the document content provided
- Reference specific policies, sections, or procedures when relevant
- Explain complex regulatory requirements in clear terms
- Help users find information across multiple documents
- Identify related policies or procedures that might be relevant
- Always cite which document(s) you're referencing
- If information isn't in the provided documents, say so clearly
\`\`\`

---

## Server Actions

### File: `app/actions/github-actions.ts`

**Directive**: `'use server'` - Ensures these functions run only on the server.

### Functions

#### 1. `fetchGitHub(url: string)`

**Purpose**: Authenticated wrapper for GitHub API calls.

\`\`\`typescript
async function fetchGitHub(url: string) {
  const token = process.env.GITHUB_TOKEN
  if (!token) {
    throw new Error('GITHUB_TOKEN environment variable is not set')
  }

  const response = await fetch(url, {
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: 'application/vnd.github.v3+json',
    },
  })

  // Error handling for 401 (invalid token) and 404 (repo not found)
  if (!response.ok) {
    if (response.status === 401) {
      throw new Error('Invalid GitHub token')
    } else if (response.status === 404) {
      throw new Error('Repository not found')
    }
    throw new Error(`GitHub API error (${response.status})`)
  }

  return response.json()
}
\`\`\`

#### 2. `fetchAllMarkdownFilesRecursive(owner, repo, path)`

**Purpose**: Recursively traverse repository to find all markdown files.

\`\`\`typescript
async function fetchAllMarkdownFilesRecursive(
  owner: string,
  repo: string,
  path: string = ''
): Promise<Document[]> {
  const url = `https://api.github.com/repos/${owner}/${repo}/contents/${path}`
  const data = await fetchGitHub(url)
  
  const items = Array.isArray(data) ? data : [data]
  const allFiles: Document[] = []

  for (const item of items) {
    if (item.type === 'file' && 
        (item.name.endsWith('.md') || item.name.endsWith('.markdown'))) {
      allFiles.push({ path: item.path, name: item.name, type: 'file' })
    } else if (item.type === 'dir') {
      // Recursively search subdirectories
      const subFiles = await fetchAllMarkdownFilesRecursive(owner, repo, item.path)
      allFiles.push(...subFiles)
    }
  }

  return allFiles
}
\`\`\`

#### 3. `fetchDocuments(config: GitHubConfig)`

**Purpose**: Entry point for fetching document list.

\`\`\`typescript
export async function fetchDocuments(config: GitHubConfig) {
  try {
    const allMarkdownFiles = await fetchAllMarkdownFilesRecursive(
      config.owner, 
      config.repo
    )
    allMarkdownFiles.sort((a, b) => a.path.localeCompare(b.path))
    return { success: true, documents: allMarkdownFiles }
  } catch (error: any) {
    return { success: false, error: error.message }
  }
}
\`\`\`

#### 4. `fetchFileContent(owner, repo, path)`

**Purpose**: Fetch and decode a single file's content.

\`\`\`typescript
export async function fetchFileContent(
  owner: string, 
  repo: string, 
  path: string
) {
  try {
    const url = `https://api.github.com/repos/${owner}/${repo}/contents/${path}`
    const data = await fetchGitHub(url)
    // GitHub returns content as base64 encoded
    const content = Buffer.from(data.content, 'base64').toString('utf-8')
    return { success: true, content }
  } catch (error: any) {
    return { success: false, error: error.message }
  }
}
\`\`\`

#### 5. `loadAllDocuments(owner, repo, filePaths)`

**Purpose**: Bulk load all document contents.

\`\`\`typescript
export async function loadAllDocuments(
  owner: string, 
  repo: string, 
  filePaths: string[]
) {
  const allDocs: Array<{ path: string; content: string }> = []
  
  for (const path of filePaths) {
    try {
      const result = await fetchFileContent(owner, repo, path)
      if (result.success && result.content) {
        allDocs.push({ path, content: result.content })
      }
    } catch (error) {
      console.error(`Failed to load ${path}`, error)
    }
  }
  
  return allDocs
}
\`\`\`

---

## UI Components

### shadcn/ui Components Used

| Component | Import Path | Usage |
|-----------|-------------|-------|
| Button | `@/components/ui/button` | Actions, submit |
| Card | `@/components/ui/card` | Content containers |
| Input | `@/components/ui/input` | Text input |
| ScrollArea | `@/components/ui/scroll-area` | Scrollable containers |
| Tabs | `@/components/ui/tabs` | Tab navigation |
| Badge | `@/components/ui/badge` | Source citations |

### Icon Components (Lucide)

\`\`\`typescript
import { Database, MessageSquare, BookOpen, Send, Sparkles, FileText, Loader2, RefreshCw, AlertCircle, Search, Folder } from 'lucide-react'
\`\`\`

---

## Styling System

### Tailwind CSS v4 Configuration

The project uses Tailwind CSS v4 with custom CSS variables for theming.

**File**: `app/globals.css`

### Color System (CSS Custom Properties)

\`\`\`css
:root {
  /* Light mode colors */
  --background: oklch(0.99 0 0);
  --foreground: oklch(0.15 0 0);
  --card: oklch(1 0 0);
  --card-foreground: oklch(0.15 0 0);
  --primary: oklch(0.45 0.15 250);      /* Blue accent */
  --primary-foreground: oklch(0.99 0 0);
  --secondary: oklch(0.95 0.01 250);
  --muted: oklch(0.96 0.005 250);
  --muted-foreground: oklch(0.50 0 0);
  --accent: oklch(0.96 0.01 250);
  --destructive: oklch(0.577 0.245 27.325);  /* Red for errors */
  --border: oklch(0.90 0.005 250);
  --input: oklch(0.90 0.005 250);
  --ring: oklch(0.45 0.15 250);
  --radius: 0.5rem;
}

.dark {
  /* Dark mode overrides */
  --background: oklch(0.10 0.005 250);
  --foreground: oklch(0.97 0 0);
  /* ... etc */
}
\`\`\`

### Typography

\`\`\`css
@theme inline {
  --font-sans: 'Geist', 'Geist Fallback';
  --font-mono: 'Geist Mono', 'Geist Mono Fallback';
}
\`\`\`

### Utility Classes Used

\`\`\`css
/* Layout */
flex, items-center, justify-between, gap-2, gap-3, gap-4
grid, grid-cols-2

/* Spacing */
p-2, p-3, p-4, p-6, px-3, px-4, py-2, py-3, py-4
m-2, mb-2, mb-3, mb-4, mt-2, mt-3, mt-6

/* Sizing */
h-4, h-6, h-8, w-4, w-6, w-full, max-w-md, max-w-[85%]
min-h-screen

/* Colors (using CSS variables) */
bg-background, bg-card, bg-primary, bg-muted, bg-accent
text-foreground, text-muted-foreground, text-primary
border-border

/* Effects */
rounded-lg, rounded-md
shadow-xs
backdrop-blur
animate-spin, animate-bounce

/* Interactive */
hover:bg-accent, hover:underline
transition-colors
disabled:opacity-50
\`\`\`

---

## Step-by-Step Implementation Guide

### Step 1: Project Setup

\`\`\`bash
# Create Next.js project
npx create-next-app@latest knowledge-base-qa --typescript --tailwind --app

# Install dependencies
npm install ai @ai-sdk/react lucide-react react-markdown remark-gfm

# Install shadcn/ui
npx shadcn@latest init
npx shadcn@latest add button card input tabs scroll-area badge
\`\`\`

### Step 2: Environment Setup

Create `.env.local`:
\`\`\`bash
GITHUB_TOKEN=your_github_token
NEXT_PUBLIC_GITHUB_OWNER=your_username
NEXT_PUBLIC_GITHUB_REPO=your_repo
\`\`\`

### Step 3: Create Server Actions

Create `app/actions/github-actions.ts` with:
- `fetchGitHub()` - Authenticated API wrapper
- `fetchAllMarkdownFilesRecursive()` - Directory traversal
- `fetchDocuments()` - Entry point
- `fetchFileContent()` - Single file loader
- `loadAllDocuments()` - Bulk loader

### Step 4: Create API Route

Create `app/api/policy-qa/route.ts` with:
- POST handler
- Keyword extraction algorithm
- Document scoring and filtering
- AI SDK integration
- Source extraction

### Step 5: Create UI Components

1. **DocumentLibrary** (`components/document-library.tsx`)
   - Connect button
   - Loading states
   - Error handling

2. **PolicyQA** (`components/policy-qa.tsx`)
   - Chat interface
   - Message list
   - Input with send button
   - Source badges

### Step 6: Create Main Page

Create `app/page.tsx` with:
- State management for connection status
- Conditional rendering (connect vs main interface)
- Tab navigation

---

## Key Implementation Details

### 1. Recursive Directory Traversal

GitHub API returns directory contents one level at a time. To get all files:
- Start at root (`/repos/{owner}/{repo}/contents/`)
- For each item, check `type` field
- If `type === 'dir'`, recursively call with `item.path`
- If `type === 'file'` and name ends with `.md`, add to results

### 2. Base64 Content Decoding

GitHub API returns file content as base64:
\`\`\`typescript
const content = Buffer.from(data.content, 'base64').toString('utf-8')
\`\`\`

### 3. Token Security

- GitHub token is **server-side only** via Server Actions
- Never expose in client components
- Environment variable: `GITHUB_TOKEN` (no `NEXT_PUBLIC_` prefix)

### 4. Keyword-Based Document Selection

Since AI models have token limits, we can't send all documents. The algorithm:
1. Extract significant words (>3 chars) from the question
2. Score each document by counting keyword matches
3. Select top 10 highest-scoring documents
4. Truncate each document to 5000 characters

### 5. Source Citation

After AI generates response, extract sources by checking which document paths are mentioned:
\`\`\`typescript
const sources = relevantDocuments
  .filter(doc => 
    text.toLowerCase().includes(doc.path.toLowerCase()) ||
    text.toLowerCase().includes(doc.path.split('/').pop()?.toLowerCase() || '')
  )
  .map(doc => doc.path)
\`\`\`

---

## Future Improvements (RAG System)

For production use with larger document sets, implement RAG (Retrieval Augmented Generation):

### Components Needed:

1. **Vector Database** (e.g., Upstash Vector, Pinecone)
   - Store document embeddings
   - Semantic similarity search

2. **Document Chunking**
   - Split documents into ~500 token chunks
   - Maintain metadata (source file, section)

3. **Embedding Generation**
   - Use OpenAI embeddings API or similar
   - Generate embeddings for each chunk

4. **Semantic Search**
   - Convert user question to embedding
   - Find top-k similar chunks
   - Pass only relevant chunks to AI

### Environment Variables for RAG:
\`\`\`bash
UPSTASH_SEARCH_REST_URL=your_upstash_url
UPSTASH_SEARCH_REST_TOKEN=your_upstash_token
UPSTASH_SEARCH_REST_READONLY_TOKEN=your_readonly_token
\`\`\`

---

## Troubleshooting

### Common Issues:

1. **"Resource not accessible by personal access token"**
   - Token doesn't have `repo` scope
   - Create new token with `repo` checked

2. **"Repository not found"**
   - Check owner/repo spelling
   - Verify token has access to the repo

3. **White screen after connect**
   - Check browser console for errors
   - Verify all environment variables are set

4. **AI responses fail**
   - Check AI API key is configured
   - Check document content isn't too large

### Debug Logging:

The codebase includes `console.log('[v0] ...')` statements for debugging:
- `[v0] Fetching documents from:` - GitHub config
- `[v0] Loaded documents:` - Document count
- `[v0] Sending question with X documents` - Q&A request
- `[v0] Extracted keywords:` - Keyword filtering
- `[v0] Using X documents:` - Selected documents
- `[v0] AI response generated` - Success confirmation

---

## License

MIT License - Feel free to use and modify for your projects.
