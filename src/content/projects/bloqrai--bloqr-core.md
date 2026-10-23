---
repo: "BloqrAI/bloqr-core"
name: "bloqr-core"
description: "Bloqr AI core open-source libraries and applications. This repository is for the DIY crowd and includes everything you need to build the core compiler, multi-language wrappers, a fully interactive UI CLI Dashboard, with a native UI coming soon."
readmeQualityOk: true
url: "https://github.com/BloqrAI/bloqr-core"
homepage: "http://core.bloqr.dev/"
language: "TypeScript"
languages: ["TypeScript", "C#"]
languagePcts: [37, 26]
topics: ["ad-blocker", "adguard", "api-client", "blocking", "compilers"]
stars: 6
forks: 0
openIssues: 15
closedIssues: 85
watchers: 1
contributors: 3
recentReleases: 3
createdAt: "2023-01-29T00:18:13Z"
lastCommitAt: "2026-10-23T09:33:06Z"
lastReleaseAt: "2026-08-14T08:00:46Z"
status: "thriving"
tags: ["hidden_gem", "funded"]
healthScore: 95
undervaluedScore: 87
maintainers: ["jaypatrick", "dependabot[bot]", "claude"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/594570862/852bbb88-b919-4aea-a86e-78b515fe77b3"
fundingLinks: ["GITHUB:https://github.com/jaypatrick", "PATREON:https://patreon.com/bloqr", "BUY_ME_A_COFFEE:https://buymeacoffee.com/bloqr"]
discussionCount: 3
---

# Bloqr Core

A multi-language toolkit for compiling and validating AdGuard-syntax ad-blocking filter rules. Five independent rules compilers (TypeScript, C#/.NET, Python, Rust, Swift), a PowerShell toolkit, a Rust validation library, and a Gatsby documentation site all live here and share one configuration schema.

🚀 **Active development** — multi-language support, a Docker development environment, and CI/CD coverage across every component.

## What's in this repo

- **Rules compilers** for TypeScript/Deno, C#/.NET, Python, Rust, and Swift, plus a PowerShell toolkit — all reading the same JSON/JSONC configuration schema and producing identical output.
- **`@bloqr/compiler-core`** (`src/compilers/typescript/`) — the canonical, dependency-free compilation engine, published on [JSR](https://jsr.io/@bloqr/compiler-core). The .NET, Python, Rust, and Swift compilers shell out to it via Deno rather than reimplementing compilation logic.
- **BloqrCompiler PowerShell toolkit** (`src/compilers/powershell/`) — the sole cross-platform scripting-language compiler (PowerShell 7+ runs on Windows/Linux/macOS); class-based modules (`Common`, `BloqrCompiler`) with Pester test suites.
-…
