---
repo: "ProteoWizard/pwiz-ai"
name: "pwiz-ai"
description: "AI tooling and documentation for ProteoWizard/Skyline development"
url: "https://github.com/ProteoWizard/pwiz-ai"
language: "PowerShell"
languages: ["PowerShell", "Python"]
languagePcts: [66, 29]
stars: 16
forks: 2
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 7
recentReleases: 0
createdAt: "2026-01-10T21:00:48Z"
lastCommitAt: "2026-06-24T23:38:49Z"
status: "thriving"
tags: []
healthScore: 90
undervaluedScore: 41
maintainers: ["brendanx67", "bspratt", "vagisha"]
openGraphImageUrl: "https://opengraph.githubassets.com/9d6645df1d67c658663bb712b5999b32e89fbc45188f8e74e9b62ee74eef1b09/ProteoWizard/pwiz-ai"
---

# AI-Assisted Development Documentation

This directory contains all documentation for LLM-assisted development on the Skyline/ProteoWizard project.

## Quick Start

**New LLM session? Start here:**
1. Read [CRITICAL-RULES.md](CRITICAL-RULES.md) - Absolute constraints (<100 lines)
2. Read [MEMORY.md](MEMORY.md) - Project context and critical gotchas (~150 lines)
3. Read [WORKFLOW.md](WORKFLOW.md) - Git workflows and TODO system (~170 lines)
4. Read active TODO in [todos/active/](todos/active/) - Current branch context

**Total: <500 lines for essential context.**

**Need more?** See [TOC.md](TOC.md) for a complete index of all 58 documents with descriptions.

## Core Files (Read Every Session)

These files are kept small (<200 lines each) for quick loading:

- **[CRITICAL-RULES.md](CRITICAL-RULES.md)**
  - Bare constraints only, no explanations
  - File format, async patterns, testing rules, naming conventions
  - Absolute prohibitions (NEVER sections)

- **[MEMORY.md](MEMORY.md)**
  - Project scale (900K LOC, 17 years, 8 devs)
  - Critical gotchas (async/await, resource strings, translation-proof testing)
  - Threading, DRY principles, build system
  - Project structure and…
