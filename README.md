# Refuge House Knowledge Base

**Version-Controlled Policy, Procedure, and Regulatory Reference Repository for T3C Service Delivery**

---

## Table of Contents

- [Quick Start](#quick-start)
- [Repository Overview](#repository-overview)
- [Core Organizational Structure](#core-organizational-structure)
- [Directory Guide](#directory-guide)
  - [Policies & Procedures](#policies--procedures)
  - [Package-Specific Resources](#package-specific-resources)
  - [Guides](#guides)
  - [Job Descriptions](#job-descriptions)
  - [Models](#models)
  - [Plans](#plans)
  - [Regulatory References](#regulatory-references)
  - [Historical Documents](#historical-documents)
- [Document Index](#document-index)
- [Search Guide](#search-guide)
- [File Naming Conventions](#file-naming-conventions)
- [AI Agent Integration](#ai-agent-integration)
- [Maintenance & Updates](#maintenance--updates)

---

## Quick Start

### What is This Repository?

This repository serves as the **single source of truth** for all Refuge House organizational policies, procedures, regulatory references, guides, and supporting materials for T3C (Texas Child-Centered Care) service delivery. It is designed to be:

- **Version-controlled** - Track changes and revisions over time
- **AI-agent friendly** - Optimized for Claude Projects and Cursor AI integration
- **Searchable** - Comprehensive indexing and keyword tagging
- **Compliant** - Direct links to regulatory requirements and references

### Key Entry Points

1. **New to T3C?** Start with: [`T3C Basic Foster Family Home Support Services Policy`](policies-procedures/Policy/T3C%20Basic%20Foster%20Family%20Home%20Support%20Services%20Policy.md)
2. **Looking for a specific policy?** See [Document Index](#document-index) or use [Search Guide](#search-guide)
3. **Need regulatory references?** See [Regulatory References](#regulatory-references)
4. **Package-specific content?** See [Package-Specific Resources](#package-specific-resources)

### How to Use This Repository

- **For Staff:** Use the [Search Guide](#search-guide) to find policies and procedures by topic, T3C package, or regulatory requirement
- **For AI Agents:** See [AI Agent Integration](#ai-agent-integration) for recommended search patterns and document relationships
- **For Compliance:** All documents include regulatory references in their `REFERENCES` sections

---

## Repository Overview

### Repository Statistics

- **Total Markdown Files:** 60+
- **Policies:** 13
- **Procedures:** 13
- **Combined Policy-Procedures:** 2
- **Package-Specific Documents:** 6
- **Job Descriptions:** 18
- **Implementation Plans:** 8
- **Regulatory PDFs:** 4
- **Historical Documents:** 38 (source DOCX files)

### Repository Structure

```
refuge-house-knowbase/
├── policies-procedures/          # Core policies and procedures
│   ├── Policy/                   # Standalone policies
│   ├── Procedure/                # Standalone procedures
│   ├── Policy-and-Procedure/     # Combined documents
│   └── Package-Specific/         # T3C package-specific resources
├── guides/                       # Organizational guides
├── job-descriptions/             # Position descriptions
├── models/                       # Treatment models (TBRI®)
├── plans/                        # Implementation and credentialing plans
├── regulatory-references/        # Regulatory documents
│   ├── source-pdfs/             # Original PDF documents
│   └── markdown/                # Searchable markdown indices (to be created)
└── historical-docs/              # Legacy documents
    ├── source-documents/        # Original DOCX files
    └── markdown-conversions/    # Converted markdown files
```

---

## Core Organizational Structure

### Umbrella Documents

These foundational documents establish the framework for all T3C service delivery:

#### 1. **T3C Basic Foster Family Home Support Services Policy** (`FC-T3C-01`)
- **Location:** `policies-procedures/Policy/T3C Basic Foster Family Home Support Services Policy.md`
- **Status:** Active - Effective 5/25/25, Revised 7/14/25.2
- **Applies To:** All T3C Basic placements + Add-On Services
- **Keywords:** `#T3C-basic #umbrella-policy #foster-care #credentialing #CANS-assessment #aftercare`
- **Regulatory References:** T3C Blueprint Pages 47-55; TAC §749.1301-1335; RCC Contract Term 7

**Related Documents:**
- FC-T3C-01.1 T3C Basic Foster Family Home Support Services Procedure
- FC-CRED-01.1 Foster Family Home Credentialing Procedure
- FC3-01.1 Individual Service Planning Procedure
- FC2-01.1 Admission Assessment Procedure
- FC7-01.1 Family Connections and Engagement Procedure
- FC8-01.1 Aftercare Services Procedure
- FC14-01.1 Discharge and Permanency Planning Procedure

#### 2. **T3C Discharge and Permanency Planning Policy** (`FC14-01`)
- **Location:** `policies-procedures/Policy/T3C Discharge and Permanency Planning Policy.md`
- **Status:** Active - Effective 9/1/24, Revised 12/27/24.1
- **Applies To:** All T3C Packages
- **Keywords:** `#discharge #permanency #transition #aftercare #continued-stay-review`
- **Regulatory References:** T3C Blueprint Pages 47-55, 71-73, 78-86, 123-135; TAC §749.503, §749.665, §749.673, §749.1361-1363

**Related Documents:**
- FC14-01.1 T3C Discharge and Permanency Planning Procedure
- FC-AF-01 Aftercare Services Policy and Procedure
- FC3-01.1 Individual Service Planning Procedure
- FC7-01.1 Family Connections and Engagement Procedure

#### 3. **Admission Assessment Policy** (`FC2-01`)
- **Location:** `policies-procedures/Policy/Admission Assessment Policy.md`
- **Status:** Active - Effective 5/15/25, Revised 7/10/25.3
- **Applies To:** T3C Basic, Mental & Behavioral Health, IDD/Autism
- **Keywords:** `#admission #assessment #trauma-informed #TBRI #CANS #screening`
- **Regulatory References:** T3C Blueprint FC 2.01-2.06; TAC §749.1301-1317

**Related Documents:**
- FC2-01.1 Admission Assessment Procedure
- FC1-01 Admission Screening Policy
- FC1-01.1 Admission Screening Procedure
- FC3-01 Individual Service Planning Policy

#### 4. **Individual Service Planning Policy** (`FC3-01`)
- **Location:** `policies-procedures/Policy/Individual Service Planning Policy.md`
- **Status:** Active
- **Applies To:** All T3C Packages
- **Keywords:** `#service-planning #CANS #treatment-planning #goals #outcomes`
- **Regulatory References:** T3C Blueprint Pages 47-55, 76-86, 123-135; TAC §749.1301-1335

**Related Documents:**
- FC3-01.1 Individual Service Planning Procedure
- FC2-01.1 Admission Assessment Procedure
- FC7-01.1 Family Connections and Engagement Procedure
- FC14-01.1 Discharge and Permanency Planning Procedure

---

## Directory Guide

### Policies & Procedures

#### Policy Folder (`policies-procedures/Policy/`)

| Document Name | Policy Number | Effective Date | Revision | Applies To | Keywords |
|--------------|--------------|----------------|----------|------------|-----------|
| [T3C Basic Foster Family Home Support Services Policy](policies-procedures/Policy/T3C%20Basic%20Foster%20Family%20Home%20Support%20Services%20Policy.md) | FC-T3C-01 | 5/25/25 | 7/14/25.2 | All T3C Basic + Add-Ons | `#T3C-basic #umbrella #credentialing` |
| [Admission Assessment Policy](policies-procedures/Policy/Admission%20Assessment%20Policy.md) | FC2-01 | 5/15/25 | 7/10/25.3 | Basic, MH, IDD | `#admission #assessment #TBRI` |
| [Individual Service Planning Policy](policies-procedures/Policy/Individual%20Service%20Planning%20Policy.md) | FC3-01 | - | - | All Packages | `#service-planning #CANS` |
| [T3C Discharge and Permanency Planning Policy](policies-procedures/Policy/T3C%20Discharge%20and%20Permanency%20Planning%20Policy.md) | FC14-01 | 9/1/24 | 12/27/24.1 | All Packages | `#discharge #permanency` |
| [Home Studies Policy](policies-procedures/Policy/Home%20Studies%20Policy.md) | FC-17 | 2/20/12 | 7/16/25.1 | All Packages | `#home-studies #credentialing` |
| [Recruitment and Retention of Foster Families Policy](policies-procedures/Policy/Recruitment%20and%20Retention%20of%20Foster%20Families%20Policy.md) | FC-16 | - | - | All Packages | `#recruitment #retention` |
| [Physical and Mental Health Care Policy](policies-procedures/Policy/Physical%20and%20Mental%20Health%20Care%20Policy.md) | FC10-01 | - | - | All Packages | `#healthcare #STAR-health` |
| [Family Connections and Engagement Policy](policies-procedures/Policy/Family%20Connections%20and%20Engagement%20.md) | FC7-01 | - | - | All Packages | `#family-engagement #visitation` |
| [Alternative and Substitute Care Policy](policies-procedures/Policy/Alternative%20and%20Substitute%20Care.md) | FC18-01 | - | - | All Packages | `#alternative-care #substitute-care` |
| [Information Technology Data Management and Security Policy](policies-procedures/Policy/Information%20Technology%20Data%20Management%20and%20Security%20Policy.md) | IT-001 | - | - | All Operations | `#IT #data-security #privacy` |
| [REFUGE HOUSE FC-IDD-01 INTELLECTUAL OR DEVELOPMENTAL DISABILITY (IDD):AUTISM SPECTRUM DISORDER SUPPORT SERVICES POLICY](policies-procedures/Policy/REFUGE%20HOUSE%20FC-IDD-01%20INTELLECTUAL%20OR%20DEVELOPMENTAL%20DISABILITY%20(IDD):AUTISM%20SPECTRUM%20DISORDER%20SUPPORT%20SERVICES%20POLICY.md) | FC-IDD-01 | - | - | IDD/Autism Package | `#IDD #autism #developmental-disability` |

#### Procedure Folder (`policies-procedures/Procedure/`)

| Document Name | Procedure Number | Related Policy | Keywords |
|--------------|-----------------|----------------|-----------|
| [Admission Assessment Procedure](policies-procedures/Procedure/Admission%20Assessment%20Procedure.md) | FC2-01.1 | FC2-01 | `#admission #assessment #procedure` |
| [Admission Screening Procedure](policies-procedures/Procedure/Admission%20Screening%20Procedure.md) | FC1-01.1 | FC1-01 | `#screening #intake` |
| [Admission Matching & Criteria for Child Placement Procedure](policies-procedures/Procedure/Admission%20Matching%20&%20Criteria%20for%20Child%20Placement%20Procedure.md) | FC6-01.1 | FC6-01 | `#matching #placement` |
| [Individual Service Planning Procedure](policies-procedures/Procedure/Individual%20Service%20Planning%20Procedure.md) | FC3-01.1 | FC3-01 | `#service-planning #procedure` |
| [Family Connections and Engagement Procedure](policies-procedures/Procedure/Family%20Connections%20and%20Engagement%20Procedure.md) | FC7-01.1 | FC7-01 | `#family-engagement #procedure` |
| [Foster Home Studies Procedure](policies-procedures/Procedure/Foster%20Home%20Studies%20Procedure.md) | FC17-01.1 | FC-17 | `#home-studies #credentialing` |
| [Recruitment and Retention of Foster Families Procedure](policies-procedures/Procedure/Recruitment%20and%20Retention%20of%20Foster%20Families%20Procedure.md) | FC-16.1 | FC-16 | `#recruitment #procedure` |
| [Physical and Mental Health Care Procedure](policies-procedures/Procedure/Physical%20and%20Mental%20Health%20Care%20Procedure.md) | FC10-01.1 | FC10-01 | `#healthcare #procedure` |
| [STAR Health Coordination Procedure](policies-procedures/Procedure/STAR%20Health%20Coordination%20Procedure.md) | FC10-01.2 | FC10-01 | `#STAR-health #coordination` |
| [Alternative and Substitute Care Procedure](policies-procedures/Procedure/Alternative%20and%20Substitute%20Care%20Procedure.md) | FC18-01.1 | FC18-01 | `#alternative-care #procedure` |
| [Billing System and Foster Parent Pass-Through Procedures](policies-procedures/Procedure/Billing%20System%20and%20Foster%20Parent%20Pass-Through%20Procedures.md) | - | - | `#billing #financial` |
| [IT System Access and Security Procedures](policies-procedures/Procedure/IT%20System%20Access%20and%20Security%20Procedures.md) | IT-001-01.1 | IT-001 | `#IT #security #procedure` |
| [T3C Discharge and Permanency Planning Procedure](policies-procedures/Procedure/%20T3C%20Discharge%20and%20Permanency%20Planning%20Procedure.md) | FC14-01.1 | FC14-01 | `#discharge #permanency #procedure` |

#### Policy-and-Procedure Folder (`policies-procedures/Policy-and-Procedure/`)

| Document Name | Policy/Procedure Number | Keywords |
|--------------|------------------------|----------|
| [Aftercare Services Policy and Procedure](policies-procedures/Policy-and-Procedure/Aftercare%20Services%20Policy%20and%20Procedure.md) | FC-AF-01 / FC-AF-01.1 | `#aftercare #transition #mandatory` |
| [Crisis Management Policy and Procedure](policies-procedures/Policy-and-Procedure/Crisis%20Management%20Policy%20and%20Procedure.md) | FC-04 | `#crisis #emergency #TBRI #de-escalation` |

### Package-Specific Resources

Located in `policies-procedures/Package-Specific/`, these documents provide detailed requirements for specific T3C service packages:

| Document Name | Package | Policy Number | Keywords |
|--------------|---------|---------------|----------|
| [FC-MH-01 MENTAL & BEHAVIORAL HEALTH SUPPORT SERVICES](policies-procedures/Package-Specific/FC-MH-01%20MENTAL%20&%20BEHAVIORAL%20HEALTH%20SUPPORT%20SERVICES.md) | Mental & Behavioral Health | FC-MH-01 | `#mental-health #behavioral-health #treatment-director #therapy` |
| [FC-IDD-01 INTELLECTUAL OR DEVELOPMENTAL DISABILITY (IDD):AUTISM SPECTRUM DISORDER SUPPORT SERVICES](policies-procedures/Package-Specific/FC-IDD-01%20INTELLECTUAL%20OR%20DEVELOPMENTAL%20DISABILITY%20(IDD):AUTISM%20SPECTRUM%20DISORDER%20SUPPORT%20SERVICES.md) | IDD/Autism | FC-IDD-01 | `#IDD #autism #developmental-disability #RN` |
| [Kinship Caregiver Support Services Add-On Policy](policies-procedures/Package-Specific/Kinship%20Caregiver%20Support%20Services%20Add-On%20Policy.md) | Kinship Add-On | FC-KIN-01 | `#kinship #relative-care #add-on` |
| [Kinship Caregiver Support Services Add-On Procedure](policies-procedures/Package-Specific/Kinship%20Caregiver%20Support%20Services%20Add-On%20Procedure.md) | Kinship Add-On | FC-KIN-01.1 | `#kinship #procedure` |
| [YOUTH TRANSITION SUPPORT SERVICES ADD-O](policies-procedures/Package-Specific/YOUTH%20TRANSITION%20SUPPORT%20SERVICES%20ADD-O.md) | Transition Add-On | - | `#transition #PAL #independent-living #add-on` |
| [PREGNANT & PARENTING YOUTH SUPPORT SERVICES ADD-ON](policies-procedures/Package-Specific/PREGNANT%20&%20PARENTING%20YOUTH%20SUPPORT%20SERVICES%20ADD-ON.md) | Pregnant & Parenting Add-On | - | `#pregnant #parenting #dual-generation #add-on` |

### Guides

| Document Name | Type | Location |
|--------------|------|----------|
| [Personnel Manual and HR Handbook](guides/Personnel%20Manual%20and%20HR%20Handbook.html) | HTML | `guides/` |

### Job Descriptions

Located in `job-descriptions/`, these documents describe roles and responsibilities:

| Document Name | Role Type | Keywords |
|--------------|-----------|----------|
| [Aftercare Case Manager](job-descriptions/Aftercare%20Case%20Manager%20_.md) | Case Management | `#aftercare #case-manager` |
| [Aftercare Coordinator](job-descriptions/Aftercare%20Coordinator%20_.md) | Case Management | `#aftercare #coordinator` |
| [Behavior Support Specialist_Mentor](job-descriptions/Behavior%20Support%20Specialist_Mentor%20_%20.md) | Clinical Support | `#BSS #mentor #behavioral-support` |
| [Billing Claims Administrator](job-descriptions/Billing%20Claims%20Administrator%20SCOPE%20OF%20WORK%20_.md) | Administrative | `#billing #claims` |
| [Caregiver_Staff Recruitment & Retention Specialist](job-descriptions/Caregiver_Staff%20Recruitment%20&%20Retention%20Specialist%20_.md) | Recruitment | `#recruitment #retention` |
| [Case Manager - Child Placing Agency _ Case Specialist](job-descriptions/Case%20Manager%20-%20Child%20Placing%20Agency%20_%20Case%20Specialist.md) | Case Management | `#case-manager #CPA` |
| [Continuous Quality Improvement Coordinator](job-descriptions/Continuous%20Quality%20Improvement%20Coordinator%20_.md) | Quality Assurance | `#CQI #quality-improvement` |
| [Cross System Coordinator](job-descriptions/Cross%20System%20Coordinator%20_.md) | Coordination | `#coordination #systems` |
| [Education Liaison](job-descriptions/Education%20Liaison%20_.md) | Education | `#education #liaison` |
| [Foster Family Development & Retention Manager](job-descriptions/Foster%20Family%20Development%20&%20Retention%20Manager.md) | Management | `#foster-family #retention` |
| [HOME AND PLACEMENT AIDE CONTRACTOR](job-descriptions/HOME%20AND%20PLACEMENT%20AIDE%20CONTRACTOR.md) | Support Staff | `#aide #contractor` |
| [Human Resources, Quality Assurance Director](job-descriptions/Human%20Resources,%20Quality%20Assurance%20Director.md) | Management | `#HR #QA #director` |
| [Intake_Placement Specialist](job-descriptions/Intake_Placement%20Specialist.md) | Intake | `#intake #placement` |
| [Licensed Child Placing Agency Administrator (LCPAA)](job-descriptions/Licensed%20Child%20Placing%20Agency%20Administrator%20(LCPAA).md) | Administration | `#LCPAA #administrator` |
| [Program Director and Licensed Child Placing Agency Administrator](job-descriptions/Program%20Director%20and%20Licensed%20Child%20Placing%20Agency%20Administrator.md) | Management | `#program-director #LCPAA` |
| [Program Director](job-descriptions/Program%20Director.md) | Management | `#program-director` |
| [Treatment Director - Part-Time](job-descriptions/Treatment%20Director%20-%20Part-Time.md) | Clinical | `#treatment-director #clinical` |
| [Treatment Director](job-descriptions/Treatment%20Director.md) | Clinical | `#treatment-director #clinical` |

### Models

| Document Name | Model Type | Keywords |
|--------------|------------|----------|
| [Trust-Based Relational Intervention (TBRI®) as Evidence-Informed Treatment Model](models/Trust-Based%20Relational%20Intervention%20(TBRI®)%20as%20Evidence-Informed%20Treatment%20Model.md) | Treatment Model | `#TBRI #trauma-informed #evidence-based #treatment-model` |

### Plans

Located in `plans/`, these documents outline implementation strategies and credentialing programs:

| Document Name | Plan Type | Keywords |
|--------------|-----------|----------|
| [Behavioral Support Specialist_Mentor & Crisis Management Staff](plans/Behavioral%20Support%20Specialist_Mentor%20&%20Crisis%20Management%20Staff.md) | Credentialing Plan | `#BSS #crisis-management #credentialing` |
| [FOSTER FAMILY RE-ASSESSMENT AND RE-CREDENTIALING PLAN](plans/FOSTER%20FAMILY%20RE-ASSESSMENT%20AND%20RE-CREDENTIALING%20PLAN.md) | Credentialing Plan | `#re-credentialing #foster-family` |
| [Refuge House Behavioral Support Specialist_Mentor Credentialing Program](plans/Refuge%20House%20Behavioral%20Support%20Specialist_Mentor%20Credentialing%20Program.md) | Credentialing Program | `#BSS #credentialing-program` |
| [Refuge House Crisis Management Staff Credentialing Program](plans/Refuge%20House%20Crisis%20Management%20Staff%20Credentialing%20Program.md) | Credentialing Program | `#crisis-management #credentialing` |
| [Refuge House T3C Credentialing Implementation Plan](plans/Refuge%20House%20T3C%20Credentialing%20Implementation%20Plan.md) | Implementation Plan | `#T3C #credentialing #implementation` |
| [T3C CRISIS RESPONSE TRAINING CURRICULUM](plans/T3C%20CRISIS%20RESPONSE%20TRAINING%20CURRICULUM.md) | Training Curriculum | `#crisis #training #curriculum` |
| [Trust-Based Relational Intervention (TBRI®) Implementation](plans/Trust-Based%20Relational%20Intervention%20(TBRI®)%20Implementation.md) | Implementation Plan | `#TBRI #implementation` |
| [Universal Human Trafficking Prevention Training Procedure](plans/Universal%20Human%20Trafficking%20Prevention%20Training%20Procedure.md) | Training Procedure | `#human-trafficking #prevention #training` |

### Regulatory References

Located in `regulatory-references/source-pdfs/`, these are the authoritative regulatory documents:

| Document Name | Document Type | Last Updated | Referenced In |
|--------------|---------------|--------------|---------------|
| [chapter-749-cpa.pdf](regulatory-references/source-pdfs/chapter-749-cpa.pdf) | TAC Chapter 749 | - | All policies |
| [t3c_blueprint.pdf](regulatory-references/source-pdfs/t3c_blueprint.pdf) | T3C Blueprint | April 2025 | All T3C policies |
| [24_Hour_RCC_Requirements.pdf](regulatory-references/source-pdfs/24_Hour_RCC_Requirements.pdf) | RCC Contract | - | Multiple policies |
| [24_Hour_RCC_Requirements_Addendum.pdf](regulatory-references/source-pdfs/24_Hour_RCC_Requirements_Addendum.pdf) | RCC Addendum | - | Multiple policies |

**Note:** Searchable markdown indices for these PDFs are being created in `regulatory-references/markdown/` (see [Regulatory Reference Indices](#regulatory-reference-indices)).

### Historical Documents

Located in `historical-docs/`:

- **Source Documents:** 38 DOCX files in `historical-docs/source-documents/` (legacy policies and procedures)
- **Markdown Conversions:** `historical-docs/markdown-conversions/` (currently empty - conversion in progress)

---

## Document Index

### Complete Document Inventory

| Document Name | Type | Policy/Proc # | Folder | T3C Packages | Revision Date |
|--------------|------|--------------|--------|--------------|---------------|
| T3C Basic Foster Family Home Support Services Policy | Policy | FC-T3C-01 | Policy/ | All Basic + Add-Ons | 7/14/25.2 |
| Admission Assessment Policy | Policy | FC2-01 | Policy/ | Basic, MH, IDD | 7/10/25.3 |
| Individual Service Planning Policy | Policy | FC3-01 | Policy/ | All Packages | - |
| T3C Discharge and Permanency Planning Policy | Policy | FC14-01 | Policy/ | All Packages | 12/27/24.1 |
| Home Studies Policy | Policy | FC-17 | Policy/ | All Packages | 7/16/25.1 |
| Recruitment and Retention of Foster Families Policy | Policy | FC-16 | Policy/ | All Packages | - |
| Physical and Mental Health Care Policy | Policy | FC10-01 | Policy/ | All Packages | - |
| Family Connections and Engagement Policy | Policy | FC7-01 | Policy/ | All Packages | - |
| Alternative and Substitute Care Policy | Policy | FC18-01 | Policy/ | All Packages | - |
| Information Technology Data Management and Security Policy | Policy | IT-001 | Policy/ | All Operations | - |
| REFUGE HOUSE FC-IDD-01 Policy | Policy | FC-IDD-01 | Policy/ | IDD/Autism | - |
| Admission Assessment Procedure | Procedure | FC2-01.1 | Procedure/ | Basic, MH, IDD | 7/10/25.3 |
| Admission Screening Procedure | Procedure | FC1-01.1 | Procedure/ | All Packages | 5/15/25 |
| Admission Matching & Criteria Procedure | Procedure | FC6-01.1 | Procedure/ | All Packages | - |
| Individual Service Planning Procedure | Procedure | FC3-01.1 | Procedure/ | All Packages | - |
| Family Connections and Engagement Procedure | Procedure | FC7-01.1 | Procedure/ | All Packages | - |
| Foster Home Studies Procedure | Procedure | FC17-01.1 | Procedure/ | All Packages | 8/25/25.1 |
| Recruitment and Retention Procedure | Procedure | FC-16.1 | Procedure/ | All Packages | - |
| Physical and Mental Health Care Procedure | Procedure | FC10-01.1 | Procedure/ | All Packages | - |
| STAR Health Coordination Procedure | Procedure | FC10-01.2 | Procedure/ | All Packages | - |
| Alternative and Substitute Care Procedure | Procedure | FC18-01.1 | Procedure/ | All Packages | - |
| Billing System Procedures | Procedure | - | Procedure/ | All Operations | - |
| IT System Access and Security Procedures | Procedure | IT-001-01.1 | Procedure/ | All Operations | - |
| T3C Discharge and Permanency Planning Procedure | Procedure | FC14-01.1 | Procedure/ | All Packages | - |
| Aftercare Services Policy and Procedure | Combined | FC-AF-01 / FC-AF-01.1 | Policy-and-Procedure/ | All Packages (Mandatory for MH/IDD) | 12/27/24.1 |
| Crisis Management Policy and Procedure | Combined | FC-04 | Policy-and-Procedure/ | Basic, MH, IDD | - |
| FC-MH-01 Mental & Behavioral Health | Package-Specific | FC-MH-01 | Package-Specific/ | Mental & Behavioral Health | - |
| FC-IDD-01 IDD/Autism | Package-Specific | FC-IDD-01 | Package-Specific/ | IDD/Autism | - |
| Kinship Caregiver Support Services Add-On Policy | Package-Specific | FC-KIN-01 | Package-Specific/ | Kinship Add-On | - |
| Kinship Caregiver Support Services Add-On Procedure | Package-Specific | FC-KIN-01.1 | Package-Specific/ | Kinship Add-On | - |
| Youth Transition Support Services Add-On | Package-Specific | - | Package-Specific/ | Transition Add-On | - |
| Pregnant & Parenting Youth Support Services Add-On | Package-Specific | - | Package-Specific/ | Pregnant & Parenting Add-On | - |

---

## Search Guide

### Finding Content by Topic

#### By Function/Process

- **Admission & Intake:** 
  - Policies: FC1-01 (Screening), FC2-01 (Assessment), FC6-01 (Matching)
  - Procedures: FC1-01.1, FC2-01.1, FC6-01.1
  - Keywords: `#admission #screening #assessment #matching #intake`

- **Service Planning:**
  - Policy: FC3-01 (Individual Service Planning)
  - Procedure: FC3-01.1
  - Keywords: `#service-planning #CANS #treatment-planning #goals`

- **Family Engagement:**
  - Policy: FC7-01 (Family Connections and Engagement)
  - Procedure: FC7-01.1
  - Keywords: `#family-engagement #visitation #connections`

- **Discharge & Permanency:**
  - Policy: FC14-01 (Discharge and Permanency Planning)
  - Procedure: FC14-01.1
  - Keywords: `#discharge #permanency #transition`

- **Aftercare:**
  - Policy/Procedure: FC-AF-01 / FC-AF-01.1
  - Keywords: `#aftercare #transition #mandatory`

- **Crisis Management:**
  - Policy/Procedure: FC-04
  - Keywords: `#crisis #emergency #TBRI #de-escalation`

- **Health Care:**
  - Policy: FC10-01 (Physical and Mental Health Care)
  - Procedures: FC10-01.1, FC10-01.2 (STAR Health Coordination)
  - Keywords: `#healthcare #STAR-health #medical #mental-health`

- **Foster Family Management:**
  - Policies: FC-16 (Recruitment and Retention), FC-17 (Home Studies)
  - Procedures: FC-16.1, FC17-01.1
  - Keywords: `#recruitment #retention #home-studies #credentialing`

#### By T3C Package

- **T3C Basic Foster Family Home:**
  - Umbrella: FC-T3C-01 (T3C Basic Foster Family Home Support Services Policy)
  - All core policies and procedures apply
  - Keywords: `#T3C-basic`

- **Mental & Behavioral Health Support Services:**
  - Package Document: FC-MH-01
  - Enhanced requirements in: FC2-01, FC3-01, FC14-01, FC-AF-01
  - Keywords: `#mental-health #behavioral-health #MH`

- **IDD/Autism Spectrum Disorder Support Services:**
  - Package Document: FC-IDD-01
  - Enhanced requirements in: FC2-01, FC3-01, FC14-01, FC-AF-01
  - Keywords: `#IDD #autism #developmental-disability`

- **Add-On Services:**
  - Transition Support: `#transition #PAL #add-on`
  - Kinship Caregiver: `#kinship #add-on`
  - Pregnant & Parenting: `#pregnant #parenting #add-on`

#### By Regulatory Requirement

- **T3C Blueprint:** Referenced in all T3C policies
  - Pages 47-55: T3C Basic requirements
  - Pages 76-86: Mental & Behavioral Health requirements
  - Pages 123-135: IDD/Autism requirements
  - Pages 148-164: Add-On Services requirements

- **TAC Chapter 749:** Referenced in all policies
  - §749.1301-1335: Service Planning Requirements
  - §749.1401-1435: Medical and Dental Care
  - §749.503: Discharge Planning
  - §749.339: Emergency Behavior Intervention

- **RCC Contract:** Referenced in multiple policies
  - Contract Term 7: Service delivery requirements
  - Contract Term 5, 8, 10: Various service requirements

#### By Document Type

- **Policies:** Located in `policies-procedures/Policy/` - Establish governing principles
- **Procedures:** Located in `policies-procedures/Procedure/` - Operationalize policies
- **Combined:** Located in `policies-procedures/Policy-and-Procedure/` - Both policy and procedure in one document
- **Package-Specific:** Located in `policies-procedures/Package-Specific/` - T3C package requirements

---

## File Naming Conventions

### Current Naming Patterns

#### Policies
- Format: `[Policy Name] Policy.md`
- Examples:
  - `T3C Basic Foster Family Home Support Services Policy.md`
  - `Admission Assessment Policy.md`
  - `Home Studies Policy.md`

#### Procedures
- Format: `[Procedure Name] Procedure.md`
- Examples:
  - `Admission Assessment Procedure.md`
  - `Individual Service Planning Procedure.md`
  - `Foster Home Studies Procedure.md`

#### Policy Numbers
- **T3C Umbrella:** FC-T3C-01
- **Functional Areas:** FC[number]-01 (e.g., FC2-01, FC3-01, FC14-01)
- **Package-Specific:** FC-[PACKAGE]-01 (e.g., FC-MH-01, FC-IDD-01)
- **Add-Ons:** FC-[ADDON]-01 (e.g., FC-KIN-01)
- **IT/Other:** IT-001, FC-04, FC-AF-01

#### Procedure Numbers
- Format: `[Policy Number].1` (e.g., FC2-01.1, FC3-01.1)
- Some variations: FC-16.1, FC-17.1, FC10-01.2 (sub-procedures)

### Recommendations

The current naming convention is generally consistent but could benefit from:

1. **Standardized Policy Number Prefixes:** Consider using consistent prefixes (e.g., all use FC-##-01 format)
2. **File Name Alignment:** Consider including policy numbers in filenames for easier searching (e.g., `FC2-01 Admission Assessment Policy.md`)
3. **Package-Specific Naming:** Consider consistent format for package documents (e.g., `FC-MH-01 Mental & Behavioral Health Support Services Policy.md`)

**Note:** These are recommendations only. No files will be renamed without explicit approval.

---

## AI Agent Integration

### For Claude Projects

#### Recommended Folder Priority for Loading

1. **Primary (Essential):**
   - `policies-procedures/Policy/` - All policies
   - `policies-procedures/Procedure/` - All procedures
   - `policies-procedures/Package-Specific/` - Package-specific requirements

2. **Secondary (Supporting):**
   - `policies-procedures/Policy-and-Procedure/` - Combined documents
   - `models/` - TBRI® treatment model
   - `regulatory-references/markdown/` - Regulatory indices (when available)

3. **Tertiary (Reference):**
   - `plans/` - Implementation plans
   - `job-descriptions/` - Role descriptions
   - `guides/` - Organizational guides

#### Recommended Project Structure

```
Claude Project: Refuge House T3C Knowledge Base
├── Core Policies (Priority 1)
├── Core Procedures (Priority 1)
├── Package-Specific Documents (Priority 1)
├── Regulatory References (Priority 2)
├── Treatment Model (Priority 2)
└── Supporting Documents (Priority 3)
```

### For Cursor Integration

#### How Cursor Should Reference This Repo

1. **Policy Awareness:** When coding or documenting, reference relevant policy numbers (e.g., "Per FC2-01, admission assessments must...")
2. **Regulatory Compliance:** Always check regulatory references in policy documents before implementing changes
3. **Cross-Reference Checking:** Verify that related procedures match their parent policies

#### Suggested Prompt Patterns

- "What does FC2-01 say about [topic]?"
- "Find all policies related to [T3C package]"
- "What are the regulatory requirements for [function]?"
- "Show me the procedure for [process]"

### Search Pattern Guidance

#### Sample Queries That Should Work Well

1. **Package-Specific Content:**
   - "Find all Mental & Behavioral Health requirements"
   - "What are the IDD/Autism admission requirements?"
   - "Show me Transition Support Services add-on requirements"

2. **Functional Searches:**
   - "How do I complete an admission assessment?"
   - "What is the discharge planning process?"
   - "What are the aftercare service requirements?"

3. **Regulatory Searches:**
   - "What T3C Blueprint pages apply to Basic Foster Care?"
   - "What TAC sections govern service planning?"
   - "What are the RCC Contract requirements?"

4. **Cross-Reference Searches:**
   - "What procedures relate to FC2-01?"
   - "What policies reference T3C Blueprint page 47?"
   - "Show me all documents that mention CANS 3.0"

---

## Maintenance & Updates

### How Files Are Organized for Growth

The repository structure is designed to accommodate growth:

1. **Policies & Procedures:** Organized by type (Policy/, Procedure/, Policy-and-Procedure/) and function
2. **Package-Specific:** Separate folder for T3C package requirements
3. **Regulatory References:** Centralized location with PDFs and markdown indices
4. **Supporting Documents:** Separate folders for plans, job descriptions, guides, and models

### Where to Add New Content

- **New Policy:** Add to `policies-procedures/Policy/`
- **New Procedure:** Add to `policies-procedures/Procedure/`
- **New Package Document:** Add to `policies-procedures/Package-Specific/`
- **New Implementation Plan:** Add to `plans/`
- **New Job Description:** Add to `job-descriptions/`
- **New Regulatory Document:** Add PDF to `regulatory-references/source-pdfs/` and create markdown index in `regulatory-references/markdown/`

### Version Control Practices

1. **Commit Messages:** Use format: `docs: [brief description] - [date]`
2. **Revision Tracking:** Document revision dates in policy/procedure headers
3. **Change Log:** Update this README when adding significant new documents
4. **Branch Strategy:** Use feature branches for major updates, merge to main after review

### Updating This README

When adding new content:

1. **Add to Directory Guide:** Update the relevant section table
2. **Add to Document Index:** Include in the complete inventory table
3. **Update Statistics:** Adjust file counts in Repository Overview
4. **Add Keywords:** Include appropriate tags for searchability
5. **Cross-Reference:** Link related documents in the Core Organizational Structure section

---

## Regulatory Reference Indices

**Status:** In Progress

Searchable markdown indices are being created for each regulatory PDF in `regulatory-references/markdown/`:

- `TAC-749-INDEX.md` - TAC Chapter 749 Index & Reference Guide
- `T3C-BLUEPRINT-INDEX.md` - T3C Blueprint Index & Reference Guide
- `RCC-REQUIREMENTS-INDEX.md` - RCC Contract Requirements Index
- `RCC-ADDENDUM-INDEX.md` - RCC Addendum Index

These indices will include:
- Document title and date
- Brief overview
- Table of contents with section links
- Key requirements summary
- Where this document is referenced in organizational policies
- Note: "Full document stored as [filename].pdf in source-pdfs/"

---

## Change Log / Recent Updates

### 2025 Updates

- **July 2025:** T3C Basic Foster Family Home Support Services Policy revised (7/14/25.2)
- **July 2025:** Admission Assessment Policy and Procedure revised (7/10/25.3)
- **July 2025:** Home Studies Policy revised (7/16/25.1)
- **August 2025:** Foster Home Studies Procedure revised (8/25/25.1)
- **December 2024:** T3C Discharge and Permanency Planning Policy revised (12/27/24.1)
- **December 2024:** Aftercare Services Policy and Procedure revised (12/27/24.1)

### Organization Improvements

- **2025:** Comprehensive README created with hierarchical structure and searchable index
- **2025:** Regulatory reference indices in development
- **2025:** Keyword tagging system implemented for AI searchability

---

## Questions or Issues?

For questions about this repository or to report issues:

1. Check the [Search Guide](#search-guide) for finding specific content
2. Review the [Document Index](#document-index) for complete inventory
3. Consult regulatory references in individual policy documents
4. Contact the repository maintainer for clarification

---

**Last Updated:** January 2025  
**Repository Maintainer:** Refuge House, Inc.  
**Version:** 1.0
