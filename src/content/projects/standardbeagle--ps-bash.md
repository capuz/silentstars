---
repo: "standardbeagle/ps-bash"
name: "ps-bash"
description: "Bash commands for PowerShell — real flags, real output, typed objects underneath. 67 commands, 775 tests, cross-platform."
readmeQualityOk: true
url: "https://github.com/standardbeagle/ps-bash"
homepage: "https://standardbeagle.github.io/ps-bash/"
language: "C#"
languages: ["C#"]
languagePcts: [93]
topics: ["bash", "cli", "cross-platform", "devops", "linux", "macos", "pipeline", "powershell", "powershell-module", "shell"]
stars: 17
forks: 1
openIssues: 2
closedIssues: 5
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-04-03T04:59:40Z"
lastCommitAt: "2026-10-23T07:33:49Z"
lastReleaseAt: "2026-04-12T05:07:25Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 94
undervaluedScore: 48
maintainers: ["andylbrummer", "claude"]
openGraphImageUrl: "https://opengraph.githubassets.com/470ca3af3be80dc163f8febc71cb5bde85a7df07a8150f72c5a5867390f43787/standardbeagle/ps-bash"
---

# PsBash

**Real bash commands on Windows. No WSL, Git Bash, or Cygwin required.**

PsBash transpiles bash to PowerShell — `rm -rf`, `ls -la`, `grep -r`, `sort -k3` all work natively. Every command returns **typed .NET objects** while producing bash-identical text output. Includes a standalone shell binary that AI coding agents (Claude Code, OpenCode, GitHub Copilot) can use as a drop-in bash replacement.

## Quick Install

**As a PowerShell module:**

```powershell
Install-Module PsBash
```

**As a standalone shell binary (no .NET runtime required):**

```powershell
# Windows
iwr https://raw.githubusercontent.com/standardbeagle/ps-bash/main/install.ps1 | iex

# Linux / macOS
curl -fsSL https://raw.githubusercontent.com/standardbeagle/ps-bash/main/install.sh | bash
```

On Windows, `-InstallDir` must be empty or marked as a PsBash package by this installer.
Move an older unmarked installation aside before upgrading. Upgrades retain the old
package in a unique `.previous-*` directory; existing backups are preserved.

## Why PsBash?

PowerShell ships aliases for `ls`, `cat`, `sort`, `rm` — but they're lies. `rm -rf` fails. `ls -la` fails. `sort -k3 -rn` fails. They're…
