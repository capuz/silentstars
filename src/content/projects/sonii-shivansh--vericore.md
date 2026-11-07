---
repo: "sonii-shivansh/Vericore"
name: "Vericore"
description: "The independent assurance layer for agent-made software. AI writes the change. Vericore builds the evidence that tells us whether it should be trusted.AI writes the change. Vericore builds the evidence that tells us whether it should be trusted."
readmeQualityOk: true
url: "https://github.com/sonii-shivansh/Vericore"
homepage: "https://sonii-shivansh.github.io/Vericore-Website/"
language: "Kotlin"
languages: ["Kotlin", "Python"]
languagePcts: [69, 24]
topics: ["contributions-welcome", "kotlin", "open-source", "developer-tools", "productivity", "cli", "ktor"]
stars: 31
forks: 4
openIssues: 0
closedIssues: 22
watchers: 0
contributors: 2
recentReleases: 10
createdAt: "2025-12-14T11:32:12Z"
lastCommitAt: "2026-11-07T09:31:13Z"
lastReleaseAt: "2026-10-20T10:22:38Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 99
undervaluedScore: 64
maintainers: ["sonii-shivansh"]
openGraphImageUrl: "https://opengraph.githubassets.com/3d66e00926a538365f067448f2111956b2e2c9bafca33defbba0d59b9413ef5c/sonii-shivansh/Vericore"
discussionCount: 5
---

## Get started

Install the latest published release. The installer verifies the downloaded archive's SHA-256 checksum; release archives include a Java runtime.

**Linux / macOS**
```bash
curl -fsSL https://raw.githubusercontent.com/sonii-shivansh/Vericore/main/scripts/install.sh | bash
```

**Windows PowerShell**
```powershell
irm https://raw.githubusercontent.com/sonii-shivansh/Vericore/main/scripts/install.ps1 | iex
```

Check the installation:
```bash
vericore doctor
vericore --version
```

Need manual installation? See [Getting Started](https://github.com/sonii-shivansh/Vericore/blob/HEAD/docs/GETTING_STARTED.md).  
Upgrading from 1.0.x? See the [2.0.0 Migration Guide](https://github.com/sonii-shivansh/Vericore/blob/HEAD/docs/MIGRATION_2.0.0.md).

## Verify an AI-assisted change

Run these steps from your Git repository. Replace the example path with a file your agent is expected to change.

**1. Before asking your coding agent to edit, record the intent and scope:**
```bash
vericore prepare "add payment validation" \
  --path . \
  --planned-path src/main/kotlin/com/example/PaymentService.kt
```

**2. Ask your coding agent to make the change.** Do not replace the saved…
