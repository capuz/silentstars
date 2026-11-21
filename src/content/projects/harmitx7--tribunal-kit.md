---
repo: "Harmitx7/tribunal-kit"
name: "tribunal-kit"
description: "A universal, native-Rust governance layer for AI coding agents. Enforces Subagent-Driven Development (SDD) to stop hallucinations before they hit disk."
readmeQualityOk: true
url: "https://github.com/Harmitx7/tribunal-kit"
homepage: "https://tribunal-kit-doc.vercel.app/"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [87]
topics: ["ai-agents", "ai-coding-assistant", "aider", "anti-hallucination", "antigravity", "claude-code", "claude-code-marketplace", "claude-code-plugin", "cursor-rules", "devtools"]
stars: 7
forks: 1
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 1
createdAt: "2026-02-20T18:45:08Z"
lastCommitAt: "2026-11-21T11:38:38Z"
lastReleaseAt: "2026-09-08T06:08:27Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 69
undervaluedScore: 58
maintainers: ["Harmitx7"]
openGraphImageUrl: "https://opengraph.githubassets.com/266dd960045012949e1dfc415d89c41ae186db2be64119235a6bfd7ffec5076c/Harmitx7/tribunal-kit"
---

Tribunal Kit
    A low-dependency governance layer with one production runtime dependency, zod, and a neurosymbolic verification envelope for AI coding agents. Intercepts AI hallucinations, phantom packages, and architectural regressions locally before code reaches disk.

  

  

  

  

---

## 📑 Structured Directory & Index

---

## 01 // Architecture & Core Invariants

### What is Tribunal Kit?

AI coding assistants hallucinate. They invent packages that do not exist on public package registries (**"slopsquatting"**), invoke deprecated framework APIs, emit unparameterized SQL queries, invent non-existent database columns, and repeat identical blunders across development sessions.

Compilers and linters catch these errors only **after** the code is already written to disk—completely blind to multi-file semantic intent or agent task planning during generation.

**Tribunal Kit acts as a neurosymbolic verification envelope.** It intercepts AI agent outputs locally before disk writes, validates proposals against your repository's live AST and schema models, and evaluates them with a deterministic 28-reviewer swarm running across 3 partitioned waves.
