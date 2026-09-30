---
repo: "fadwen/ai-powershell-standards"
name: "ai-powershell-standards"
description: "Enterprise-grade PowerShell development standards, shipped as GitHub Copilot instructions and Claude Code rules, for consistent, secure, and high-quality PowerShell code across teams and projects."
readmeQualityOk: true
url: "https://github.com/fadwen/ai-powershell-standards"
homepage: "https://techbyjeff.net"
language: "PowerShell"
languages: ["PowerShell"]
languagePcts: [100]
topics: ["githubcopilot", "powershell", "claude", "claude-code", "claude-skills", "copilot", "copilot-coding-agent", "pester", "windows-powershell"]
stars: 19
forks: 3
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2025-06-01T07:01:59Z"
lastCommitAt: "2026-09-30T09:56:24Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 86
undervaluedScore: 54
maintainers: ["fadwen"]
openGraphImageUrl: "https://opengraph.githubassets.com/dd6dcf0dbcdcab0db01c6b151fa4d1eec68f5cc1b10d81d37a8bc507705703e8/fadwen/ai-powershell-standards"
---

# AI PowerShell Standards

Enterprise-grade PowerShell development standards, shipped as GitHub Copilot instructions and Claude Code
rules, for consistent, secure, and high-quality PowerShell code across teams and projects.

> **Target versions** (verified 2026-08-01): **PowerShell 7.6 (LTS)** is the default target,
> supported through 14-Nov-2028. Windows PowerShell 5.1 remains supported as a compatibility
> target. **PowerShell 7.4 and 7.5 both reach end of support on 10-Nov-2026** — plan upgrades now.
> See [powershell-version.instructions.md](https://github.com/fadwen/ai-powershell-standards/blob/HEAD/.github/instructions/powershell-version.instructions.md)
> for the full lifecycle table, version-gated features, and breaking changes.

## 🚀 Quick Start

### For New Projects

```bash
# Use as template repository or clone
git clone https://github.com/fadwen/ai-powershell-standards.git
cd ai-powershell-standards

# Install standards in your project
./Tools/Install-CopilotStandards.ps1 -ProjectPath "C:\YourProject" -StandardsType "Module"
```

### For Existing Projects

```bash
# Add as submodule
git submodule add https://github.com/fadwen/ai-powershell-standards.git…
