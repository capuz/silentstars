---
repo: "cycodehq/vscode-extension"
name: "vscode-extension"
description: "Cycode for Visual Studio Code"
readmeQualityOk: true
url: "https://github.com/cycodehq/vscode-extension"
homepage: "https://cycode.com"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [99]
stars: 6
forks: 2
openIssues: 0
closedIssues: 0
watchers: 3
contributors: 14
recentReleases: 0
createdAt: "2023-03-08T08:45:38Z"
lastCommitAt: "2026-11-05T08:04:57Z"
lastReleaseAt: "2024-04-16T10:19:15Z"
status: "thriving"
tags: []
healthScore: 78
undervaluedScore: 56
maintainers: ["omer-roth", "dependabot[bot]", "aaron-butler-cy-int"]
openGraphImageUrl: "https://opengraph.githubassets.com/480fab0e0f2915e8b7f8f10ff5baa296a1765000972335b696075fc3141dca5e/cycodehq/vscode-extension"
---

# Cycode VS Code Extension

The Cycode VS Code Extension is a plugin for Microsoft's Visual Studio Code (VS Code) that helps users to adopt a
shift-left strategy, by enabling code scanning early in the development lifecycle, which could significantly help
businesses avoid costly repairs and potential complications down the line.

## Features

Cycode VS Code Extension scans your code for exposed secrets, passwords, tokens, keys, and other credentials, as well as
open-source packages' vulnerabilities. The extension provides functionalities such as:

- A tree view, broken down by:
    - Scanning categories: 
      - Hardcoded Secrets
      - Open-source Threats (SCA)
      - Infrastructure as Code (IaC)
      - Code Security (SAST)
    - Files
- Cycode console features a "View Problem" card that enables in-depth violation analysis with remediation
  recommendations.
- Company’s Custom Remediation Guidelines - If your company has set custom remediation guidelines via the Cycode portal, you'll see a field for "Company Guidelines" that contains those guidelines.
- Running a new scan from your IDE even before committing the code.
- Triggering a scan automatically whenever a file is…
