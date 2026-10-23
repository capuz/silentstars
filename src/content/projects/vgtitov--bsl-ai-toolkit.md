---
repo: "vgtitov/bsl-ai-toolkit"
name: "bsl-ai-toolkit"
description: "AI agent toolkit for 1C:Enterprise 8.3 (BSL): rules, skills and MCP servers so the agent works from your real code, plus byte-perfect metadata editing verified in a test base. Docs in Russian."
originalDescription: "AI agent toolkit for 1C:Enterprise 8.3 (BSL): rules, skills and MCP servers so the agent works from your real code, plus byte-perfect metadata editing verified in a test base. Docs in Russian."
descriptionLang: "ru"
readmeQualityOk: true
url: "https://github.com/vgtitov/bsl-ai-toolkit"
language: "Python"
languages: ["Python"]
languagePcts: [85]
topics: ["1c", "1c-enterprise", "ai", "bsl", "claude", "claude-code", "code-analysis", "cursor", "developer-tools", "edt"]
stars: 33
forks: 9
openIssues: 0
closedIssues: 1
watchers: 1
contributors: 4
recentReleases: 8
createdAt: "2026-06-18T22:37:33Z"
lastCommitAt: "2026-10-23T08:46:54Z"
lastReleaseAt: "2026-09-11T09:39:53Z"
status: "thriving"
tags: ["hidden_gem", "release_machine"]
healthScore: 99
undervaluedScore: 49
maintainers: ["vgtitov", "ilyayakimets", "timsvensonliveru-debug"]
openGraphImageUrl: "https://opengraph.githubassets.com/415a70d0595896ac8fe553faf3f07431c6803bf0148438723b54cff011fb1926/vgtitov/bsl-ai-toolkit"
---

# bsl-ai-toolkit — AI agent writes 1C code from the real code, not from memory

*AI agent toolkit for 1C:Enterprise 8.3 (BSL) development. MIT. Documentation is in Russian.*

A set of **rules, skills and MCP servers** for developing **1C:Enterprise 8.3 (BSL)** with an AI agent. The agent searches the code of your configuration and extensions, gets BSL Language Server diagnostics after every edit, and changes metadata (forms, DCS, attributes) with a deterministic engine verified in a test database. The reference implementation is Claude Code; Cursor, Copilot, Gemini CLI, Codex, Cline, Windsurf and Aider connect through adapters built on the shared core. MIT license, no ties to any specific organization.

## Quick start
```bash
git clone https://github.com/vgtitov/bsl-ai-toolkit && cd bsl-ai-toolkit
bash onboard/onboard.sh          # macOS/Linux; 1C sources — from ONEC_SRC_DIR or --srcdir <path>
```
```powershell
git clone https://github.com/vgtitov/bsl-ai-toolkit ; cd bsl-ai-toolkit
.\onboard\onboard.ps1            # Windows; 1C sources — from ONEC_SRC_DIR or -SrcDir <path>
```
**You will need:** `git`, `uv`, `java`, `rg`, Claude Code (or another agent — `sh build.sh <agent>`, on…
