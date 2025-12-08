# Refuge House Knowledge Base - Integration Guide

**Purpose:** Configuration recommendations for integrating the Refuge House knowledge base with the markdown-file-management system

**Date:** January 2025  
**System:** v0 markdown-file-management (GitHub Search + AI Review + RAG)

---

## Executive Summary

The markdown-file-management system provides three core capabilities:
1. **GitHub Search** - Recursively fetches all `.md` files from your GitHub repository
2. **AI Q&A** - Keyword-based document filtering + AI-powered question answering
3. **AI Review** - Single-file review with AI assistance
4. **Semantic Search (RAG)** - Vector store integration for semantic similarity search

**Current Repository Status:** ✅ **Well-configured** - Your repository structure is already optimized for this system.

---

## Architecture Overview

### How the System Works

```
┌─────────────────────────────────────────────────────────────┐
│                    GITHUB REPOSITORY                         │
│  refuge-house-knowbase/                                      │
│  ├── policies-procedures/Policy/*.md                        │
│  ├── policies-procedures/Procedure/*.md                    │
│  ├── regulatory-references/markdown/*.md                   │
│  └── ... (all .md files recursively)                        │
└─────────────────────────────────────────────────────────────┘
                        │
                        ▼
┌─────────────────────────────────────────────────────────────┐
│              GITHUB API (Server Actions)                     │
│  - fetchAllMarkdownFilesRecursive()                         │
│  - Fetches all .md and .markdown files                       │
│  - Returns: { path, name, type }                            │
└─────────────────────────────────────────────────────────────┘
                        │
                        ▼
┌─────────────────────────────────────────────────────────────┐
│              DOCUMENT LOADING                                │
│  - loadAllDocuments() fetches content for each file          │
│  - Decodes base64 content from GitHub API                   │
│  - Returns: { path, content }                                │
└─────────────────────────────────────────────────────────────┘
                        │
        ┌───────────────┼───────────────┐
        ▼                               ▼
┌───────────────────┐          ┌───────────────────┐
│   AI Q&A          │          │  Semantic Search   │
│ (Keyword-based)   │          │   (Vector Store)  │
│                   │          │                    │
│ - Extract keywords│          │ - Chunk documents  │
│ - Score documents │          │ - Generate embeddings│
│ - Top 10 docs     │          │ - Store in Upstash │
│ - AI response     │          │ - Semantic search  │
└───────────────────┘          └───────────────────┘
```

---

## Current Repository Analysis

### ✅ Strengths (Already Optimized)

1. **Consistent File Extensions**
   - All documents use `.md` extension ✅
   - System will find all files automatically

2. **Descriptive File Names**
   - Files like `T3C Basic Foster Family Home Support Services Policy.md` contain keywords
   - Keyword matching will work well with your naming convention

3. **Organized Directory Structure**
   - Clear folder hierarchy: `policies-procedures/Policy/`, `Procedure/`, etc.
   - File paths are descriptive and searchable

4. **Index Files Present**
   - `README.md`, `CATALOG_SUMMARY.md`, `TAC-749-INDEX.md` serve as fallback documents
   - System uses these when no keyword matches found

5. **Regulatory Documents Split**
   - TAC Chapter 749 split into 13 parts (good for chunking)
   - Each part is manageable size for AI processing

### ⚠️ Areas for Optimization

1. **Large Regulatory Documents**
   - Some files may exceed 5000 character limit (gets truncated in keyword search)
   - **Recommendation:** Already split TAC-749 into parts ✅

2. **Metadata in Files**
   - No frontmatter metadata for better categorization
   - **Optional Enhancement:** Add YAML frontmatter for better search

3. **Document Chunking for RAG**
   - Vector store chunks documents at 1000 words with 200 word overlap
   - Current structure works, but could be optimized

---

## Configuration Recommendations

### 1. File Structure (✅ Already Optimal)

**Current Structure:**
```
refuge-house-knowbase/
├── policies-procedures/
│   ├── Policy/*.md
│   ├── Procedure/*.md
│   └── Package-Specific/*.md
├── regulatory-references/markdown/*.md
├── README.md
└── CATALOG_SUMMARY.md
```

**Status:** ✅ **No changes needed**

The system will:
- Recursively find all `.md` files
- Use file paths for identification
- Use file names and content for keyword matching

### 2. File Naming Conventions (✅ Already Good)

**Current Pattern:**
- `T3C Basic Foster Family Home Support Services Policy.md`
- `Admission Assessment Policy.md`
- `FC-MH-01 MENTAL & BEHAVIORAL HEALTH SUPPORT SERVICES.md`

**Status:** ✅ **Optimized for keyword search**

**Why it works:**
- Descriptive names contain searchable keywords
- Policy numbers (FC-T3C-01, FC2-01) are searchable
- Package names (T3C, Mental Health, IDD) are in filenames

### 3. Document Size Management (✅ Handled)

**Current Approach:**
- TAC Chapter 749 split into 13 parts (~216,000 tokens total)
- Each part is manageable size

**System Behavior:**
- Keyword search: Truncates to 5000 chars per document
- Vector search: Chunks at 1000 words with 200 word overlap
- Both approaches work with your current structure

**Recommendation:** ✅ **No changes needed**

### 4. Metadata Enhancement (Optional)

**Current:** No frontmatter in markdown files

**Optional Enhancement - Add YAML Frontmatter:**
```markdown
---
title: "T3C Basic Foster Family Home Support Services Policy"
policy_number: "FC-T3C-01"
effective_date: "2025-05-25"
revision: "7/14/25.2"
applies_to: ["T3C Basic", "All Add-Ons"]
keywords: ["T3C-basic", "umbrella-policy", "foster-care", "credentialing"]
regulatory_references: ["T3C Blueprint Pages 47-55", "TAC §749.1301-1335"]
---

# T3C Basic Foster Family Home Support Services Policy
...
```

**Benefits:**
- Better categorization for future enhancements
- Structured metadata for filtering
- Not required for current system (works without it)

**Recommendation:** ⚠️ **Optional** - System works without frontmatter, but could enhance future features

### 5. Index Files (✅ Already Present)

**Current Index Files:**
- `README.md` - Main repository index
- `CATALOG_SUMMARY.md` - Complete inventory
- `regulatory-references/markdown/TAC-749-INDEX.md` - Regulatory index
- `regulatory-references/markdown/T3C-BLUEPRINT-INDEX.md` - T3C index
- `regulatory-references/markdown/RCC-REQUIREMENTS-INDEX.md` - RCC index

**System Behavior:**
- Uses index files as fallback when no keyword matches
- Searches for files containing "CATALOG", "README", or "INDEX" in path

**Recommendation:** ✅ **Perfect** - Keep these files, they serve as excellent fallbacks

### 6. Document Content Format (✅ Already Good)

**Current Format:**
- Well-structured markdown with headers
- Clear sections and subsections
- Policy numbers and references included

**System Benefits:**
- Headers help with chunking (vector store respects structure)
- Policy numbers searchable in content
- References provide cross-linking context

**Recommendation:** ✅ **No changes needed**

---

## Integration Checklist

### ✅ Pre-Integration (Already Complete)

- [x] All documents use `.md` extension
- [x] Files have descriptive names with keywords
- [x] Directory structure is organized
- [x] Index files present (README, CATALOG, INDEX files)
- [x] Large documents split (TAC-749 into parts)
- [x] Regulatory documents indexed

### 🔧 System Configuration Needed

1. **Environment Variables** (Set in deployment)
   ```bash
   GITHUB_TOKEN=ghp_xxxxxxxxxxxxx
   NEXT_PUBLIC_GITHUB_OWNER=jduarte-refugehouse
   NEXT_PUBLIC_GITHUB_REPO=refuge-house-knowbase
   OPENAI_API_KEY=sk-... (or use Vercel AI Gateway)
   # Optional for RAG:
   UPSTASH_SEARCH_REST_URL=...
   UPSTASH_SEARCH_REST_TOKEN=...
   ```

2. **GitHub Token Permissions**
   - Required: `repo` scope (Full control of private repositories)
   - Or fine-grained token with: Repository access > Contents > Read

3. **Initial Document Indexing** (For RAG/Semantic Search)
   - Run indexing API: `POST /api/index-documents`
   - Processes all documents into vector store
   - One-time setup, then incremental updates

### 📊 Expected Performance

**Document Count:**
- ~60+ markdown files in repository
- System handles this volume easily

**Search Performance:**
- **Keyword Search:** Fast (in-memory filtering)
- **Semantic Search:** Fast after initial indexing (vector similarity)

**AI Response Quality:**
- Keyword search: Top 10 most relevant documents
- Semantic search: Top 5-10 most semantically similar chunks
- Both provide good context for AI responses

---

## Search Behavior Analysis

### How Keyword Search Works with Your Files

**Example Query:** "What are the admission assessment requirements?"

**Process:**
1. Extract keywords: `["admission", "assessment", "requirements"]`
2. Score documents:
   - `Admission Assessment Policy.md` - High score (keywords in path + content)
   - `Admission Assessment Procedure.md` - High score
   - `T3C Basic Foster Family Home Support Services Policy.md` - Medium score (mentions admission)
3. Select top 10 documents
4. Send to AI with context

**Your Repository Advantages:**
- Descriptive filenames boost keyword matching
- Policy numbers (FC2-01) are searchable
- Package names (T3C, Mental Health) in filenames

### How Semantic Search Works (RAG)

**Example Query:** "How do I complete a service plan?"

**Process:**
1. Convert query to embedding vector
2. Search vector store for similar document chunks
3. Retrieve top 5-10 chunks from:
   - `Individual Service Planning Policy.md`
   - `Individual Service Planning Procedure.md`
   - Related policy documents
4. Send relevant chunks to AI

**Your Repository Advantages:**
- Well-structured documents chunk well
- Clear headers help maintain context
- Cross-references provide related content

---

## Recommendations Summary

### ✅ Keep As-Is (No Changes Needed)

1. **File Structure** - Already optimal
2. **File Naming** - Descriptive and searchable
3. **Directory Organization** - Clear hierarchy
4. **Document Splitting** - TAC-749 already split
5. **Index Files** - Present and useful

### 🔧 System Configuration (Required)

1. **Set Environment Variables** - GitHub token, API keys
2. **Configure GitHub Access** - Token with repo permissions
3. **Initial Indexing** - Run document indexing for RAG (optional)

### ⚠️ Optional Enhancements (Future)

1. **Add Frontmatter** - YAML metadata for better categorization
2. **Enhance Keywords** - Add keyword tags to files
3. **Document Versioning** - Track document versions in metadata

---

## Testing Recommendations

### Test Scenarios

1. **Basic Search**
   - Query: "admission assessment"
   - Expected: Finds `Admission Assessment Policy.md` and related files

2. **Policy Number Search**
   - Query: "FC-T3C-01"
   - Expected: Finds T3C Basic policy

3. **Package-Specific Search**
   - Query: "Mental & Behavioral Health requirements"
   - Expected: Finds FC-MH-01 and related documents

4. **Regulatory Search**
   - Query: "TAC Chapter 749 requirements"
   - Expected: Finds TAC-749-INDEX.md and related parts

5. **Cross-Document Search**
   - Query: "service planning and discharge"
   - Expected: Finds multiple related policies

### Validation Checklist

- [ ] All markdown files are discoverable
- [ ] Keyword search finds relevant documents
- [ ] AI responses cite correct sources
- [ ] Index files serve as fallback
- [ ] Large documents are handled correctly
- [ ] Policy numbers are searchable
- [ ] Package names are searchable

---

## Troubleshooting Guide

### Issue: Documents Not Found

**Symptoms:** System reports "No markdown files found"

**Solutions:**
1. Verify GitHub token has `repo` scope
2. Check owner/repo name spelling
3. Verify repository is accessible with token
4. Check file extensions are `.md` or `.markdown`

### Issue: Poor Search Results

**Symptoms:** AI responses not relevant or missing information

**Solutions:**
1. Check keyword matching - ensure descriptive filenames
2. Verify document content contains searchable terms
3. For semantic search: Re-index documents
4. Check document size - very large files may be truncated

### Issue: AI Review Not Working

**Symptoms:** AI reviewer component shows errors

**Solutions:**
1. Verify AI API key is configured
2. Check file content is valid markdown
3. Verify file path is accessible
4. Check API route `/api/ai-review` is working

---

## Next Steps

1. **Deploy System** - Set up environment variables and deploy
2. **Test Integration** - Run test queries against repository
3. **Index Documents** - Run initial indexing for semantic search (optional)
4. **Monitor Performance** - Track search quality and AI response accuracy
5. **Iterate** - Adjust based on usage patterns

---

## Conclusion

**Your Refuge House knowledge base is already well-configured for this system.** The repository structure, file naming, and organization are optimal for both keyword-based and semantic search. No changes to your markdown files are required.

**Key Strengths:**
- ✅ Descriptive file names with keywords
- ✅ Organized directory structure
- ✅ Index files for fallback
- ✅ Large documents already split
- ✅ Consistent `.md` extensions

**The system will work immediately with your current repository structure.**

---

**Last Updated:** January 2025  
**Prepared By:** AI Assistant (Cursor)  
**System Version:** v0 markdown-file-management


