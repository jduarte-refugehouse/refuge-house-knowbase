# RCC Contract Requirements Conversion Guide

**Source Document:** [24_Hour_RCC_Requirements.pdf](../source-pdfs/24_Hour_RCC_Requirements.pdf)  
**Document Type:** 24-Hour Residential Child Care Requirements  
**Agency:** Residential Child Care (RCC) / DFPS  
**Pages:** 113  
**Estimated Tokens:** ~65,000

---

## Overview

This guide documents the process for converting the RCC Contract Requirements PDF into a searchable markdown file. **Unlike Chapter 749, this document does NOT need to be split** - it can be converted as a single file.

---

## Why No Splitting Required?

### Document Size Comparison

| Document | Pages | Tokens | Splitting Required? |
|----------|-------|--------|---------------------|
| TAC Chapter 749 | 503 | ~216,000 | ✅ Yes (13 parts) |
| **RCC Requirements** | **113** | **~65,000** | ❌ **No - Single file** |
| T3C Blueprint | ~400+ | ~200,000+ | ✅ Indexed (page-based) |

### Why Single File Works

- ✅ **Fits in AI context window** (~65,000 tokens is well within limits)
- ✅ **Simpler processing** - One conversion operation vs. 13
- ✅ **Easier maintenance** - Single file to update
- ✅ **Better navigation** - Complete document in one place
- ✅ **Faster conversion** - 30-45 minutes vs. 2-4 hours

---

## Document Structure

### Sections

| Section | Pages | Content |
|---------|-------|---------|
| Section 1000 | 9-31 | Contract Compliance |
| Section 2000 | 32-36 | Services to Caregivers |
| Section 3000 | 36-39 | Provider's Obligation to Children |
| Section 4000 | 39-50 | Services to Children |
| Section 5000 | 51-58 | Behavioral Health and Healthcare Services |
| Section 6000 | 58-64 | Educational and Vocational Activities |
| Section 7000 | 64 | Transferring a Child |
| Section 8000 | 64-79 | Discharge of Children |
| Appendices I-V | 80-113 | Supplemental requirements and procedures |

### Key Contract Terms Referenced

- **Contract Term 5** - Alternative and Substitute Care
- **Contract Term 7** - Service delivery requirements (most frequently referenced)
- **Contract Term 8** - Service coordination
- **Contract Term 10** - Discharge and permanency

---

## Conversion Process

### Step 1: Single File Conversion

Unlike Chapter 749, this document can be converted in one operation:

1. **Upload PDF** to conversion tool (Claude, etc.)
2. **Request markdown conversion** with:
   - Preserved section numbers (Section 1000-8000)
   - Proper header hierarchy
   - Table of contents formatting
   - Contract term references preserved
3. **Review output** for formatting consistency
4. **Save as single file**: `rcc-requirements.md`

### Step 2: File Location

Place converted file in:
```
regulatory-references/markdown/rcc-requirements/
├── README.md                    # Overview and navigation
└── 24-hour-rcc-requirements.md  # Single converted markdown file
```

### Step 3: Add Frontmatter

Add frontmatter to the converted markdown file:

```yaml
---
document: "24-Hour Residential Child Care Requirements"
agency: "RCC / DFPS"
type: "Contract Requirements"
source_pdf: "../source-pdfs/24_Hour_RCC_Requirements.pdf"
pages: "113"
sections: ["Section 1000", "Section 2000", "Section 3000", "Section 4000", "Section 5000", "Section 6000", "Section 7000", "Section 8000"]
contract_terms: ["Term 5", "Term 7", "Term 8", "Term 10"]
version: "June 2021"
last_updated: "2021-06"
---
```

---

## Integration with Existing Repository

### Update RCC-REQUIREMENTS-INDEX.md

Once converted, update the index file to include a link to the full markdown document:

```markdown
## Full Document Access

The complete RCC Contract Requirements document is available in markdown format:

- [Full Document (Single File)](rcc-requirements/24-hour-rcc-requirements.md)
- [Source PDF](../source-pdfs/24_Hour_RCC_Requirements.pdf)
```

### Update README.md

Add to the Regulatory References section:

```markdown
#### RCC Contract Requirements

The RCC Contract Requirements document (113 pages) is available as a single markdown file:
- **Location:** `regulatory-references/markdown/rcc-requirements/24-hour-rcc-requirements.md`
- **Index:** [RCC-REQUIREMENTS-INDEX.md](regulatory-references/markdown/RCC-REQUIREMENTS-INDEX.md)
- **Conversion:** Single file (no splitting required)
```

---

## Section Number Mapping

### Key Sections by Contract Term

**Contract Term 7 (Service Delivery):**
- Most frequently referenced in Refuge House policies
- Referenced in: FC-T3C-01, FC2-01, FC3-01, FC7-01, FC10-01, FC14-01, FC-AF-01, FC-16, FC-17

**Contract Term 5 (Alternative Care):**
- Referenced in: FC18-01.1 (Alternative and Substitute Care Procedure)

**Contract Term 8 (Service Coordination):**
- Referenced in: FC18-01.1

**Contract Term 10 (Discharge):**
- Referenced in: FC14-01 (Discharge and Permanency Planning Policy), FC18-01.1

---

## Search Tips

Once converted, you can:

1. **Search by Section Number:** Find specific sections (Section 1000, Section 5000, etc.)
2. **Search by Contract Term:** Find requirements by contract term (Term 7, Term 10, etc.)
3. **Search by Topic:** Use section names for semantic search
4. **Load Entire Document:** Load complete document into AI context for comprehensive queries

---

## Quality Checklist

Before marking conversion complete:

- [ ] **Content Completeness**
  - [ ] All 8 sections present (1000-8000)
  - [ ] All 5 appendices included
  - [ ] Table of contents matches content
  - [ ] No missing pages or sections

- [ ] **Formatting Quality**
  - [ ] Section numbers properly formatted
  - [ ] Headers use appropriate markdown levels
  - [ ] Subsections clearly nested
  - [ ] Contract term references preserved

- [ ] **Integration**
  - [ ] README.md created in rcc-requirements/ folder
  - [ ] File placed in correct directory
  - [ ] RCC-REQUIREMENTS-INDEX.md updated with link
  - [ ] Main README updated

- [ ] **Usability**
  - [ ] Easy to navigate
  - [ ] Section numbers searchable
  - [ ] Contract terms identifiable
  - [ ] Readable formatting

---

## Comparison: RCC vs Chapter 749

| Aspect | Chapter 749 | RCC Requirements |
|--------|-------------|------------------|
| **Pages** | 503 | 113 |
| **Tokens** | ~216,000 | ~65,000 |
| **Splitting Required** | ✅ Yes (13 parts) | ❌ No |
| **Processing Time** | 2-4 hours | 30-45 minutes |
| **File Structure** | 13 markdown files | 1 markdown file |
| **Verification** | 13-item checklist | Single file check |

---

## Maintenance

### When Contract Updates

1. Update source PDF in `regulatory-references/source-pdfs/`
2. Re-convert entire document (single operation)
3. Update frontmatter with new version date
4. Update RCC-REQUIREMENTS-INDEX.md with changes
5. Review policies for compliance updates needed

### Version Control

- Track version changes in git
- Document version in frontmatter
- Maintain changelog in RCC-REQUIREMENTS-INDEX.md

---

## Next Steps

1. ✅ Create `regulatory-references/markdown/rcc-requirements/` directory
2. ⏳ Convert PDF to single markdown file
3. ⏳ Add frontmatter to converted file
4. ⏳ Create README.md in rcc-requirements/ folder
5. ⏳ Update RCC-REQUIREMENTS-INDEX.md with link
6. ⏳ Update main README.md with conversion status
7. ⏳ Verify section numbers and contract term references

---

**Last Updated:** January 2025  
**Conversion Status:** Ready for conversion (single file operation)  
**Estimated Time:** 30-45 minutes




