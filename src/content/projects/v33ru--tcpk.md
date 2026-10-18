---
repo: "V33RU/tcpk"
name: "tcpk"
description: "Thick client penetration testing and MSIX security audit toolkit for Windows. Audits .NET, Electron and native binaries: static and runtime checks, IL-verified findings, computed CVSS v4.0, CWE/ATT&CK mapping, SBOM, HTML/Excel reports. PowerShell engine, GUI, MCP server and agentic AI triage."
readmeQualityOk: true
url: "https://github.com/V33RU/tcpk"
homepage: "https://v33ru.github.io/tcpk/"
language: "PowerShell"
languages: ["PowerShell"]
languagePcts: [100]
topics: ["appsec", "cvss", "mcp-server", "msix", "offensive-security", "penetration-testing", "pentesting", "powershell", "reverse-engineering", "sbom"]
stars: 23
forks: 2
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-05-31T06:29:33Z"
lastCommitAt: "2026-10-18T08:16:40Z"
lastReleaseAt: "2026-06-17T15:36:00Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 89
undervaluedScore: 41
maintainers: ["V33RU"]
openGraphImageUrl: "https://opengraph.githubassets.com/90881bcf9bada7f00af66fb9634a9603bdfda70eae121fa325214356f19a5162/V33RU/tcpk"
discussionCount: 0
---

# TCPK -- Thick Client Pentest Kit

  Portable Windows thick-client / MSIX security audit tool.
  **Find. Verify. Report.**

  PowerShell engine, WinForms GUI, an agentic AI workbench (loopback browser UI), and a native MCP server.
  Authorized testing only.

  
  

  [Docs](https://v33ru.github.io/tcpk/) - [Real audit report (DVTA)](https://github.com/V33RU/tcpk/blob/HEAD/docs/samples/dvta/report.md) - [Check catalogue](https://github.com/V33RU/tcpk/blob/HEAD/docs/CHECKS.md)

---

Desktop apps ship secrets in config files, disable TLS certificate validation, and load DLLs
from writable paths. Web scanners never see any of it. TCPK audits the binaries themselves
(MSIX, .NET, Electron, native EXE), proves the real bugs by decompiling the IL, and writes the
client-ready report.

## Quick start

```powershell
git clone https://github.com/V33RU/tcpk.git
cd tcpk
.\TCPK.bat
```

That opens the GUI (keep the whole folder together). Accept the authorized-use prompt, pick a
target, click **Run Audit**. Or drive the same engine from PowerShell:

```powershell
Import-Module .\TCPK\TCPK.psd1 -Force
Invoke-TcpkAudit -Target 'C:\Path\To\App' -Acknowledge              # static + OS + network ...…
