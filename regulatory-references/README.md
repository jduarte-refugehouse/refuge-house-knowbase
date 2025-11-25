# Regulatory References

**Purpose:** Official regulatory documents from state and federal agencies  
**Type:** Requirements and specifications that Refuge House must comply with  
**Status:** Reference materials - these are the "what must be done" documents

---

## Overview

This directory contains official regulatory documents from:

- **Texas Department of Family and Protective Services (DFPS)** - T3C Blueprint (System specifications)
- **Texas Health and Human Services Commission (HHSC)** - TAC Chapter 749 (Minimum Standards for CPAs)
- **Residential Child Care (RCC) Contract** - Contract requirements
- **Other Regulatory Agencies** - Additional regulatory documents as added

### Three Primary Regulatory Frameworks

Refuge House must comply with **three primary regulatory frameworks**:

1. **TAC Chapter 749 (HHSC)** - Administrative code establishing minimum standards for all Child Placing Agencies
2. **T3C Blueprint (DFPS)** - System specifications for Texas Child-Centered Care service delivery
3. **RCC Contract Requirements (RCC)** - Contractual obligations for residential child care operations

**How They Work Together:**
- **TAC Chapter 749** = General CPA licensing standards (applies to all CPAs)
- **T3C Blueprint** = Specific T3C system requirements (applies to T3C-credentialed CPAs)
- **RCC Contract** = Contractual obligations for residential operations (applies to CPAs operating under RCC contracts)

**Relationship:**
- Many CPAs operate under RCC contracts and must comply with **all three** frameworks
- Chapter 749 = Licensing standards
- T3C Blueprint = T3C system specifications
- RCC Contract = Contractual service delivery requirements

Refuge House policies operationalize requirements from **all three** regulatory documents.

---

## Directory Structure

```
regulatory-references/
├── README.md                    # This file
├── source-pdfs/                 # Original PDF documents from agencies
│   ├── chapter-749-cpa.pdf     # TAC Chapter 749 (HHSC)
│   ├── t3c_blueprint.pdf       # T3C Blueprint (DFPS)
│   ├── 24_Hour_RCC_Requirements.pdf  # RCC Contract
│   ├── 24_Hour_RCC_Requirements_Addendum.pdf  # RCC Addendum
│   └── [new regulatory documents]  # Additional regulatory PDFs
│
└── markdown/                    # Searchable markdown indices & conversions
    ├── TAC-749-INDEX.md         # TAC Chapter 749 index
    ├── TAC-749-CONVERSION-GUIDE.md  # Guide for converting Chapter 749
    ├── T3C-BLUEPRINT-INDEX.md   # T3C Blueprint index
    ├── RCC-REQUIREMENTS-INDEX.md # RCC Contract index
    ├── RCC-ADDENDUM-INDEX.md    # RCC Addendum index
    ├── tac-749-parts/           # Split Chapter 749 documents (in progress)
    └── [new regulatory indices]  # Indices for new regulatory documents
```

---

## Current Regulatory Documents

| Document | Agency | Type | Pages | Status | Index File | Conversion Status |
|----------|--------|------|-------|--------|------------|-------------------|
| **TAC Chapter 749** | HHSC | Administrative Code | 503 | ✅ Indexed | [TAC-749-INDEX.md](markdown/TAC-749-INDEX.md) | ⏳ Split conversion in progress (13 parts) - **Parts 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 & 13 Complete** ✅ |
| **T3C Blueprint** | DFPS | System Specification | ~400+ | ✅ Indexed | [T3C-BLUEPRINT-INDEX.md](markdown/T3C-BLUEPRINT-INDEX.md) | ✅ Indexed (page-based references) |
| **RCC Contract Requirements** | RCC | Contract Terms | 113 | ✅ Indexed | [RCC-REQUIREMENTS-INDEX.md](markdown/RCC-REQUIREMENTS-INDEX.md) | ✅ Can convert to single file (no splitting needed) |
| RCC Contract Addendum | RCC | Contract Addendum | - | ✅ Indexed | [RCC-ADDENDUM-INDEX.md](markdown/RCC-ADDENDUM-INDEX.md) | ✅ Indexed |
| [New Document 1] | [Agency] | [Type] | - | ⏳ Pending | [Index file] | ⏳ Pending |
| [New Document 2] | [Agency] | [Type] | - | ⏳ Pending | [Index file] | ⏳ Pending |

### Primary Regulatory Documents

#### 1. TAC Chapter 749 (HHSC)
- **Purpose:** Minimum Standards for Child Placing Agencies
- **Format:** Section numbers (§749.xxx)
- **Pages:** 503 pages
- **Status:** Indexed, split conversion in progress
- **Conversion:** Being split into 13 markdown parts for efficient AI processing (~216,000 tokens)
- **See:** [TAC-749-CONVERSION-GUIDE.md](markdown/TAC-749-CONVERSION-GUIDE.md)

#### 2. T3C Blueprint (DFPS)
- **Purpose:** Texas Child-Centered Care System specifications
- **Format:** Page numbers and Functional Components (FC)
- **Pages:** ~400+ pages
- **Status:** Fully indexed with page-based references
- **Updates:** Quarterly (January, April, July, October)
- **Key Sections:** Service packages (Pages 47-55, 76-86, 123-135), Add-ons (Pages 148-164)
- **Conversion:** Indexed by page numbers (no splitting needed for current use)

#### 3. RCC Contract Requirements (RCC)
- **Purpose:** Contractual obligations for residential child care operations
- **Format:** Section numbers (Section 1000-8000) and Contract Terms
- **Pages:** 113 pages
- **Status:** Indexed
- **Conversion:** ✅ **No splitting required** - Can be converted to single markdown file (~65,000 tokens)
- **Applies To:** CPAs operating under Residential Contracts (RCC)
- **Key Sections:** Contract Compliance, Services to Children, Healthcare, Education, Discharge
- **See:** [RCC-REQUIREMENTS-INDEX.md](markdown/RCC-REQUIREMENTS-INDEX.md)

---

## How Regulatory Documents Relate to Refuge House Policies

### The Relationship

1. **Regulatory Documents** (this directory) define **requirements** ("what must be done")
2. **Refuge House Policies** (`../policies-procedures/`) define **implementation** ("how we do it")

### Example Flow

```
T3C Blueprint (Regulatory)
  ↓ (requires)
"Service plans must be completed within 30 days"
  ↓ (implemented by)
FC3-01 Individual Service Planning Policy (Refuge House)
  ↓ (operationalized by)
FC3-01.1 Individual Service Planning Procedure (Refuge House)
```

### Cross-References

Every Refuge House policy/procedure includes a `REFERENCES` section that links back to specific regulatory requirements:

- **T3C Blueprint:** Pages 47-55, FC 2.01, etc.
- **TAC Chapter 749:** §749.1301, §749.1401, etc.
- **RCC Contract:** Contract Term 7, etc.

---

## Adding New Regulatory Documents

### Step 1: Add Source PDF
1. Place PDF in `source-pdfs/`
2. Use descriptive filename: `[agency]-[document-name].pdf`
3. Example: `hhsc-medical-standards.pdf`

### Step 2: Create Index File
1. Create markdown index in `markdown/`
2. Filename: `[DOCUMENT]-INDEX.md`
3. Include:
   - Document title and agency
   - Last updated date
   - Quick navigation (table of contents)
   - Key requirements summary
   - Where referenced in Refuge House policies
   - Link to source PDF

### Step 3: Update This README
1. Add document to "Current Regulatory Documents" table
2. Update statistics if needed

### Step 4: Update Main README
1. Add to Regulatory References section in main README.md
2. Update repository statistics

### Step 5: Cross-Reference in Policies
1. When creating/updating policies, add references to new regulatory document
2. Update policy `REFERENCES` sections as needed

---

## Document Types

### Administrative Codes
- **TAC Chapter 749** - Minimum Standards for Child Placing Agencies
- **Format:** Section numbers (§749.xxx)
- **Updates:** As HHSC publishes updates

### System Specifications
- **T3C Blueprint** - Texas Child-Centered Care System specifications
- **Format:** Page numbers and functional components (FC)
- **Updates:** Quarterly (January, April, July, October)

### Contract Requirements
- **RCC Contract** - Residential Child Care contract terms
- **Format:** Contract terms and addenda
- **Updates:** As contract is amended

### Other Regulatory Documents
- Additional documents from various agencies
- Each will have its own format and update schedule

---

## Search Tips

### Finding Regulatory Requirements

1. **By Section Number:** Use index files to find specific sections
   - Example: "Find §749.1301" → Check TAC-749-INDEX.md

2. **By Topic:** Use index files to find relevant sections
   - Example: "Service planning requirements" → Check T3C-BLUEPRINT-INDEX.md

3. **By Policy:** Check policy `REFERENCES` sections
   - Example: FC3-01 references T3C Blueprint Pages 47-55

4. **Cross-Reference:** Use index files to see where regulations are referenced
   - Example: TAC-749-INDEX.md shows which policies reference §749.1301

---

## Maintenance

### Quarterly Updates (T3C Blueprint)
- T3C Blueprint updates quarterly (Jan, Apr, Jul, Oct)
- Update T3C-BLUEPRINT-INDEX.md with new version
- Review policies for compliance updates needed

### As Needed Updates
- Other regulatory documents update as agencies publish changes
- Update corresponding index files
- Review policies for compliance updates needed

### Version Control
- Track regulatory document versions in index files
- Document changes in index file changelog
- Update main README when significant changes occur

---

## Important Notes

⚠️ **These are reference documents only** - They define requirements but do not constitute Refuge House's operational procedures.

✅ **Refuge House policies operationalize these requirements** - See `../policies-procedures/` for how we implement these requirements.

📋 **Always check current versions** - Regulatory documents may be updated. Check index files for version information.

🔗 **Cross-references are maintained** - Each Refuge House policy links to specific regulatory requirements in its `REFERENCES` section.

---

**Last Updated:** January 2025  
**Maintained By:** Refuge House Compliance Team

