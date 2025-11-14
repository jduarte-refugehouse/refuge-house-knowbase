# IT System Access and Security Procedures

| Procedure Information | Details |
| :---- | :---- |
| **PROCEDURE NAME** | IT System Access and Security Procedures |
| **PROCEDURE NUMBER** | IT-001-01.1 |
| **RELATED POLICY** | IT-001-01 Information Technology Data Management and Security Policy |
| **EFFECTIVE DATE** | April 1, 2025 |
| **REVISION DATE** | N/A |

| \#\# APPLICABLE T3C PACKAGES: | \#\# APPLICABLE T3C ADD-ON SERVICES: |
| :---- | :---- |
| ☒ T3C Basic Foster Family Home | ☒ Transition Support Services for Youth & Young Adults |
| ☐ Substance Use Support Services | ☒ Kinship Caregiver Support Services |
| ☐ Short-Term Assessment | ☒ Pregnant & Parenting Youth or Young Adult |
| ☐ Mental & Behavioral Health |  |
| ☐ Sexual Aggression/Sex Offender |  |
| ☐ Complex Medical Needs or Medically Fragile |  |
| ☐ Human Trafficking Victim/Survivor |  |
| ☐ Intellectual or Developmental Disability (IDD)/Autism Spectrum Disorder |  |
| ☐ T3C Treatment Foster Family Care |  |

## PURPOSE

This procedure operationalizes our commitment to maintaining secure IT systems by providing step-by-step guidance for managing user access, ensuring appropriate security controls, and protecting sensitive information. These procedures ensure that every team member understands their role in maintaining system security while enabling efficient access to the tools needed for quality service delivery.

## RESPONSIBILITY

- **Executive Director**: Overall security oversight and policy compliance  
- **IT Administrator**: Technical implementation and system maintenance  
- **F1IT Consultant**: Infrastructure management and security monitoring  
- **Department Managers**: User access approval and staff compliance  
- **All Staff**: Following security protocols and reporting concerns  
- **Quality Development Director**: Audit and compliance verification

## PROCEDURE

### 1\. NEW USER ACCESS PROVISIONING

#### Purpose and Overview

Getting new team members connected to our systems quickly and securely is essential for both operational efficiency and child safety. Our multi-layered approach ensures that each person has exactly the access they need—no more and no less—to perform their duties effectively while protecting confidential information.

**CRITICAL REQUIREMENT:** All system access must be provisioned **within 2 business days** of hire date to ensure staff can complete required documentation timely per TAC §749.1301.

| Who | How | When | Where | Regulatory Reference |
| :---- | :---- | :---- | :---- | :---- |
| HR Manager | 1\. Submit System Access Request Form (IT-F01) with: • Employee name and position • Department and supervisor • Start date • Required system access levels 2\. Obtain supervisor approval signature 3\. Forward to IT Administrator | Within 24 hours of hire confirmation | Email to IT Administrator with PDF attachment | TAC §749.1029 \- Personnel Records |
| IT Administrator | 1\. Create Azure AD account with: • Unique username following firstname.lastname format • Temporary password meeting complexity requirements • Multi-factor authentication enrollment requirement 2\. Assign appropriate security groups based on position 3\. Configure Virtual Desktop access 4\. Document in access control log | Within 1 business day of receiving request | Azure AD Admin Portal | HIPAA Security Rule 45 CFR §164.308 |
| IT Administrator with Department Manager | 1\. Determine Radius jurisdiction assignments: • Review position requirements • Identify specific children/families for access • Set appropriate permission levels 2\. Create Radius user account 3\. Configure role-based permissions 4\. Test access levels | Within 2 business days of hire | Radius Admin Module via Virtual Desktop | T3C Blueprint p.464 \- Role-Based Access |
| Department Manager | 1\. Schedule security training covering: • Password requirements • Multi-factor authentication setup • Acceptable use policies • PHI protection requirements • Security incident reporting 2\. Document training completion | Within first week of employment | Training room or virtual session | TAC §749.1059 \- Orientation |

### 2\. ONGOING ACCESS MANAGEMENT

#### Purpose and Overview

System access is not a "set it and forget it" process. Regular reviews ensure that access remains appropriate as roles change and that we maintain the principle of least privilege—giving people access to only what they need for their current responsibilities.

**HIGH-WEIGHT STANDARD:** Quarterly access reviews are critical for maintaining compliance and preventing unauthorized access to confidential information.

| Who | How | When | Where | Regulatory Reference |
| :---- | :---- | :---- | :---- | :---- |
| IT Administrator | 1\. Generate user access reports showing: • All active accounts • Last login dates • Assigned permissions • Virtual Desktop usage 2\. Distribute to Department Managers 3\. Flag accounts inactive \>30 days | First Monday of each quarter | Azure AD and Radius reporting tools | DFPS IS Requirements 1800 |
| Department Managers | 1\. Review staff access lists 2\. Verify current job responsibilities 3\. Identify needed changes: • Staff transfers • Role changes • Terminations 4\. Submit Access Change Form (IT-F05) for modifications 5\. \*\*Sign quarterly attestation\*\* | Within 5 business days of receiving report | Secure email response | T3C Blueprint p.466 \- Access Controls |
| IT Administrator | 1\. Process all access changes 2\. Update both Azure AD and Radius 3\. Document changes in audit log 4\. Confirm completion to managers | Within 2 business days of change request | System admin portals | HIPAA §164.308(a)(4) |

### 3\. TERMINATION AND ROLE CHANGE PROCEDURES

#### Purpose and Overview

When staff leave the organization or change roles, swift action protects both the organization and the individuals we serve. Our procedures ensure that access is appropriately modified without disrupting ongoing services.

**CRITICAL:** Access must be terminated **immediately upon notification** of employee termination to prevent unauthorized access to PHI.

| Who | How | When | Where | Regulatory Reference |
| :---- | :---- | :---- | :---- | :---- |
| HR Manager | 1\. Notify IT Administrator via phone AND email of: • Employee name • Termination date/time • Type (voluntary/involuntary) 2\. Complete Termination Checklist including IT section | **Immediately** upon termination decision | Phone followed by secure email | HIPAA §164.308(a)(3) |
| IT Administrator | 1\. **Immediately disable**: • Azure AD account • Radius access • Email account (set out-of-office) • Virtual Desktop access 2\. Change any shared system passwords 3\. Document in termination log | Within 1 hour of notification | All system admin portals | DFPS Contract Term 8.11 |
| F1IT Consultant | 1\. Revoke any infrastructure access 2\. Remove from IP whitelist 3\. Review audit logs for unusual activity 4\. Secure any company devices | Within 4 hours of notification | Azure Portal and firewall config | HIPAA Security Rule |

### 4\. SECURITY MONITORING AND INCIDENT RESPONSE

#### Purpose and Overview

Proactive monitoring helps us identify potential security issues before they become problems. Our partnership with F1IT provides 24/7 monitoring capabilities that exceed what most child welfare agencies can achieve independently.

| Who | How | When | Where | Regulatory Reference |
| :---- | :---- | :---- | :---- | :---- |
| F1IT Consultant | 1\. Monitor Azure Security Center alerts 2\. Review login anomalies 3\. Check for unauthorized access attempts 4\. Validate backup completion 5\. Generate weekly security report | Continuous automated monitoring with daily review | Azure Security Center | DFPS IS 1800.16 |
| IT Administrator | 1\. Review security reports 2\. Investigate any alerts 3\. Apply security patches per F1IT recommendations 4\. Update Executive Director on status | Weekly review, immediate for critical alerts | Virtual Desktop secure session | HIPAA §164.308(a)(6) |
| All Staff | 1\. Report suspicious activity: • Unexpected system behavior • Potential phishing emails • Unauthorized access attempts 2\. \*\*Do not attempt to investigate independently\*\* 3\. Contact IT immediately | Immediately upon discovery | Phone to IT Administrator | T3C Blueprint p.11 \- Incident Reporting |

### 5\. FOSTER PARENT AND EXTERNAL ACCESS

#### Purpose and Overview

Our foster parents need secure access to specific information while maintaining appropriate boundaries. We've implemented user-friendly solutions that balance accessibility with security.

| Who | How | When | Where | Regulatory Reference |
| :---- | :---- | :---- | :---- | :---- |
| Case Manager | 1\. Identify foster parents needing payment access 2\. Submit External Access Request with: • Foster parent name • Email address • Specific access needs 3\. Obtain supervisor approval | Upon home verification or as needed | Email to IT Administrator | TAC §749.1407 \- Information Sharing |
| IT Administrator | 1\. Create secure Google Drive folder 2\. Set read-only permissions 3\. Share only payment statements 4\. Enable access logging 5\. Send instructions to foster parent | Within 2 business days of request | Google Workspace Admin | HIPAA §164.514 \- Minimum Necessary |
| Foster Parents | 1\. Access shared folder via secure link 2\. View payment statements only 3\. Use Egnyte file request for document submission 4\. Contact Case Manager for any issues | As needed for payment verification | Personal device with internet | RCC Contract Payment Terms |

### 6\. EXTERNAL TOOL INTEGRATION (Effective August 2025\)

#### Purpose and Overview

As we implement new tools like the Learning Management System and caregiver check-in system, maintaining our security standards while improving functionality is paramount.

| Who | How | When | Where | Regulatory Reference |
| :---- | :---- | :---- | :---- | :---- |
| IT Administrator with F1IT | 1\. Configure Single Sign-On (SSO) with Azure AD 2\. Test authentication flow 3\. Verify data encryption 4\. Document integration architecture 5\. Create user guides | Prior to go-live date | Development environment first | T3C Blueprint p.404 \- System Integration |
| Training Coordinator | 1\. Develop training materials for new tools 2\. Schedule training sessions 3\. Create quick reference guides 4\. Track completion in LMS | 2 weeks before launch | LMS platform | TAC §749.1059 |

## REGULATORY REFERENCES

- HIPAA Security Rule \- 45 CFR Part 164, Subpart C  
- HIPAA Privacy Rule \- 45 CFR Part 164, Subpart E  
- TAC §749 Subchapter C \- Personnel  
- T3C System Blueprint (April 2025\) \- Information Technology Requirements  
- DFPS Information Security Requirements Section 1800  
- DFPS Vendor Supplemental Conditions Section II Article 8

## FORMS/ATTACHMENTS

- IT-F01 \- System Access Request Form  
- IT-F03 \- Security Incident Report Form  
- IT-F05 \- Access Change Request Form  
- IT-G01 \- New User Security Checklist  
- IT-G02 \- Quarterly Access Review Template  
- IT-G03 \- Termination IT Checklist

---

*This procedure document operationalizes the principles established in the corresponding policy by providing specific implementation details (who, when, where, and how). While policies require Board approval and remain relatively stable, procedures may be updated by the Executive Director to adapt to regulatory changes, technological advancements, or operational improvements without requiring Board approval, provided such changes maintain alignment with the policy's intent.*  
