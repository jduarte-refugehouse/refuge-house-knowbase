# TAC Chapter 749 Conversion Guide

**Source Document:** [chapter-749-cpa.pdf](../source-pdfs/chapter-749-cpa.pdf)  
**Version:** November 2025  
**Total Pages:** 503  
**Estimated Tokens:** ~216,000

---

## Overview

This guide documents the process for converting the Chapter 749 CPA regulations PDF into searchable markdown files. The document is split into 13 parts for efficient AI consumption and better retrieval performance.

---

## Why Split This Document?

### For AI Consumption
- ✅ Exceeds single context window (200k tokens)
- ✅ Enables targeted retrieval (load only relevant sections)
- ✅ Better RAG/semantic search performance
- ✅ Faster query processing

### For Development
- ✅ Modular imports (import only what you need)
- ✅ Better version control (meaningful git diffs)
- ✅ Easier navigation and maintenance
- ✅ Parallel processing capability

---

## Recommended 13-Part Split

| Part | Pages | File Name | Content | Key Sections |
|------|-------|-----------|---------|--------------|
| 01 | 6-28 (23p) | `tac-749-part-01-intro-framework.md` | Introduction, Purpose & Scope, Definitions & Services | Introduction, Subchapter A, Subchapter B |
| 02 | 29-76 (48p) | `tac-749-part-02-organization.md` | Organization & Administration | Organization structure, administration requirements |
| 03 | 77-124 (48p) | `tac-749-part-03-reporting-personnel.md` | Reports, Record Keeping, Staff Requirements | Reporting, record keeping, personnel standards |
| 04 | 125-168 (44p) | `tac-749-part-04-training-rights.md` | Training, Professional Development, Children's Rights | Training requirements, children's rights |
| 05 | 169-212 (44p) | `tac-749-part-05-foster-admission.md` | Foster Care Admission & Service Planning | Admission, service planning (§749.1301-1335) |
| 06 | 213-264 (52p) | `tac-749-part-06-foster-medical-care.md` | Medical/Dental Care, Medication, Daily Care | Medical care (§749.1401-1435), medication (§749.1801-1819) |
| 07 | 265-289 (25p) | `tac-749-part-07-foster-behavior.md` | Emergency Behavior Intervention | Emergency behavior intervention (§749.339, §749.901) |
| 08 | 290-338 (49p) | `tac-749-part-08-foster-homes-screening.md` | Foster Home Screenings & Verifications | Home screening (§749.1301-1335), background checks (§749.811-815) |
| 09 | 339-383 (45p) | `tac-749-part-09-foster-homes-safety.md` | Foster Home Management, Health & Safety | Physical site requirements (§749.2751-2757), safety standards |
| 10 | 384-403 (20p) | `tac-749-part-10-foster-adoptive.md` | Foster-Adoptive Homes & Adoption Services (Children) | Foster-adoptive homes, adoption services for children |
| 11 | 404-430 (27p) | `tac-749-part-11-adoption-parents.md` | Adoption Services (Birth & Adoptive Parents) | Adoption services for parents |
| 12 | 431-454 (24p) | `tac-749-part-12-special-programs.md` | Assessment & Trafficking Victim Services | Special assessment programs, trafficking victim services |
| 13 | 455-503 (49p) | `tac-749-part-13-kinship-appendix.md` | Kinship Foster Homes & Definitions Appendix | Kinship foster homes, definitions appendix |

---

## File Structure

### Recommended Location

Place converted markdown files in:
```
regulatory-references/markdown/tac-749-parts/
├── tac-749-part-01-intro-framework.md
├── tac-749-part-02-organization.md
├── tac-749-part-03-reporting-personnel.md
├── tac-749-part-04-training-rights.md
├── tac-749-part-05-foster-admission.md
├── tac-749-part-06-foster-medical-care.md
├── tac-749-part-07-foster-behavior.md
├── tac-749-part-08-foster-homes-screening.md
├── tac-749-part-09-foster-homes-safety.md
├── tac-749-part-10-foster-adoptive.md
├── tac-749-part-11-adoption-parents.md
├── tac-749-part-12-special-programs.md
└── tac-749-part-13-kinship-appendix.md
```

### Markdown File Frontmatter Template

Each converted markdown file should include frontmatter:

```yaml
---
part: 1
title: "Introduction & Core Framework"
source_pdf: "../source-pdfs/chapter-749-cpa.pdf"
pages: "6-28"
sections: ["Introduction", "Subchapter A: General Provisions", "Subchapter B: Definitions & Services"]
topics: ["definitions", "purpose", "scope", "services"]
regulations: ["§749.1", "§749.43"]
version: "November 2025"
last_updated: "2025-11-21"
---
```

---

## Conversion Process

### Step 1: Split PDF

Using Adobe Acrobat, PDFtk, or similar tool:

```bash
# Example using pdftk (if installed):
cd regulatory-references/source-pdfs/
pdftk chapter-749-cpa.pdf cat 6-28 output ../markdown/tac-749-parts/tac-749-part-01-intro-framework.pdf
pdftk chapter-749-cpa.pdf cat 29-76 output ../markdown/tac-749-parts/tac-749-part-02-organization.pdf
# ... continue for all 13 parts
```

### Step 2: Convert to Markdown

Upload each PDF part for markdown conversion. Suggested order:
1. Start with Part 01 (foundational definitions)
2. Continue sequentially through Part 13

### Step 3: Add Frontmatter

Add the frontmatter template (above) to each converted markdown file.

### Step 4: Verify Section Numbers

After conversion, spot-check section numbers (§749.xxx) for accuracy.

### Step 5: Update Index

Update `TAC-749-INDEX.md` to reference the split documents.

---

## Integration with Existing Repository

### Update TAC-749-INDEX.md

Once converted, update the index file to include links to each part:

```markdown
## Full Document Access

The complete Chapter 749 document is available in split markdown format:

- [Part 01: Introduction & Framework](tac-749-parts/tac-749-part-01-intro-framework.md)
- [Part 02: Organization & Administration](tac-749-parts/tac-749-part-02-organization.md)
- ... (etc.)
```

### Update README.md

Add a section in the Regulatory References section:

```markdown
### TAC Chapter 749 - Split Documents

The Chapter 749 document has been split into 13 parts for efficient AI processing:
- See [TAC-749-CONVERSION-GUIDE.md](regulatory-references/markdown/TAC-749-CONVERSION-GUIDE.md) for details
- Access individual parts in `regulatory-references/markdown/tac-749-parts/`
```

---

## Section Number Mapping

### Key Sections by Part

**Part 05 (Foster Admission):**
- §749.1301-1335: Service Planning Requirements (HIGH WEIGHT STANDARD)
- Referenced in: FC-T3C-01, FC2-01, FC3-01, FC2-01.1, FC3-01.1

**Part 06 (Medical Care):**
- §749.1401-1435: Medical and Dental Care
- §749.1801-1819: Medication Requirements
- Referenced in: FC10-01, FC10-01.1, FC10-01.2

**Part 07 (Behavior):**
- §749.339: Emergency Behavior Intervention
- §749.901: Emergency Behavior Intervention Requirements
- Referenced in: FC-04 (Crisis Management)

**Part 08 (Home Screening):**
- §749.811-815: Background Check Requirements
- §749.1301-1335: Home Screening and Verification
- Referenced in: FC17-01.1 (Foster Home Studies)

---

## Search Tips

Once converted, you can:

1. **Search by Section Number:** Find specific regulations (§749.1301, etc.)
2. **Search by Topic:** Use frontmatter topics for semantic search
3. **Load Specific Parts:** Load only relevant parts into AI context
4. **Cross-Reference:** Use section numbers to find related policies

---

## Maintenance

### When Regulations Update

1. Update source PDF in `regulatory-references/source-pdfs/`
2. Re-split and convert updated parts
3. Update frontmatter with new version date
4. Update TAC-749-INDEX.md with changes
5. Review policies for compliance updates needed

### Version Control

- Track version changes in git
- Document version in frontmatter
- Maintain changelog in TAC-749-INDEX.md

---

## Next Steps

1. ✅ Create `regulatory-references/markdown/tac-749-parts/` directory
2. ⏳ Split PDF into 13 parts
3. ⏳ Convert each part to markdown
4. ⏳ Add frontmatter to each file
5. ⏳ Update TAC-749-INDEX.md with links
6. ⏳ Update README.md with conversion guide reference
7. ⏳ Verify section numbers and cross-references

---

**Last Updated:** January 2025  
**Conversion Status:** In Progress




