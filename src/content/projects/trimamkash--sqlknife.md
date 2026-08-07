---
repo: "Trimamkash/SqlKnife"
name: "SqlKnife"
description: "Command-line post-exploitation toolkit for Microsoft SQL Server — enabling RCE, privilege escalation, persistence, and defense evasion via T-SQL."
readmeQualityOk: true
url: "https://github.com/Trimamkash/SqlKnife"
language: "C++"
languages: ["C++", "C#"]
languagePcts: [58, 39]
topics: ["firewall-bypass", "mssql", "offensive-security", "ole-automation", "os-command-execution", "penetration-testing", "privilege-escalation", "rce", "sql-injection", "sql-injection-attack"]
stars: 6
forks: 2
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2025-12-06T10:46:53Z"
lastCommitAt: "2026-08-07T05:14:44Z"
lastReleaseAt: "2025-12-06T10:47:05Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded"]
healthScore: 80
undervaluedScore: 59
maintainers: []
openGraphImageUrl: "https://opengraph.githubassets.com/3d176628300b59b3872a7de1ff95770a3e1a2fd392d6172737db8e30c5fac31d/Trimamkash/SqlKnife"
fundingLinks: ["CUSTOM:SqlKnife"]
---

# MSSQL Commandline Post-Exploitation Toolkit

**MSSQL-Based System Management**

A fully featured command line tool for post-exploitation operations on Microsoft SQL Server instances. Provides RCE (Remote Code Execution), privilege escalation, persistence, evasion, and cleanup capabilities via T-SQL injection or authenticated access.

> Designed for red team members, pentesters, and offensive security researchers who want to move from SQL injection to the SYSTEM shell with a single command.

## Features

- **Remote Code Execution** via multiple vectors:
  - `xp_cmdshell`
  - `sp_OACreate` (OLE Automation)
  - **Custom CLR Assemblies** (`SqlCmdExec`, `DownLoadExec`, `PotatoInSQL`, `EfsPotatoCmd`)
- **Privilege Escalation & Environment Prep**:
  - Enable advanced procedures
  - Enable CLR integration
  - Set `TRUSTWORTHY ON`
- **Defense Evasion**:
  - Disable Windows Firewall (Domain/Public/Private profiles)
  - Disable Windows Defender via registry
- **Persistence**:
  - Sticky Keys hijack (`sethc.exe` → `cmd.exe`)
- **Lateral Movement Prep**:
  - Enable RDP and disable Network Level Authentication (NLA)
- **Cleanup & Reversal**:
  - Drop malicious procedures/assemblies
  -…
