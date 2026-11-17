---
repo: "cofin/flow"
name: "flow"
description: "Context-Driven Development toolkit for AI agents — spec-first planning, TDD workflow, and Beads integration."
readmeQualityOk: true
url: "https://github.com/cofin/flow"
language: "Python"
languages: ["Python", "JavaScript"]
languagePcts: [45, 38]
topics: ["agent-skills", "ai-agents", "beads", "claude-code", "codex", "context-driven-development", "cursor", "developer-tools", "gemini-cli", "opencode"]
stars: 20
forks: 5
openIssues: 0
closedIssues: 14
watchers: 1
contributors: 6
recentReleases: 0
createdAt: "2026-01-20T22:58:22Z"
lastCommitAt: "2026-11-17T14:34:53Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 89
undervaluedScore: 41
maintainers: ["cofin"]
openGraphImageUrl: "https://opengraph.githubassets.com/45978ace3f7cbf4a414fe77355f68cbdfe8e247c48839b3390c1afd8880ff53a/cofin/flow"
---

&middot;
    &middot;
    &middot;
    &middot;

Flow is a unified toolkit for **Spec-Driven Development** backed by **Open Knowledge Format (`OKF v0.2`)** bundles. It works natively from a single repository root across **Google Antigravity** (IDE & CLI), **Claude Code**, **Codex CLI**, **Cursor**, **OpenCode V2**, and **VS Code / Copilot**.

## Architecture & Lifecycle

Flow separates planning and review from isolated task execution:

1. **Setup (`/flow:setup`)**:
   - Runs **Brownfield Alignment & Legacy Migration** (`align` mode) to upgrade existing `.agents/` layouts without data loss, or initializes a new repository from scratch.
   - Probes host binaries (`uv`, `python3`, `cargo`, `go`, `bun`, `pnpm`, `npm`, `make`, `just`, `pwsh`, `powershell`) and scaffolds core context chapters (`product/product.md`, `product/product-guidelines.md`, `product/tech-stack.md`, `knowledge/workflow.md`). Adds `<= 40`-line `` blocks and nested `knowledge/**` chapters anchored to `path/to/file::Symbol`.
   - Seeds engineering disciplines (deep-module design, domain modeling, public-interface TDD, bug diagnosis, and first-time reader docs) alongside stack-specific `.agents/skills/<domain>/`,…
