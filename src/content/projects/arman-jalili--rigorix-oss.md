---
repo: "arman-jalili/rigorix-oss"
name: "rigorix-oss"
description: "A deterministic coding-agent runtime for repeatable, auditable AI software engineering."
readmeQualityOk: true
url: "https://github.com/arman-jalili/rigorix-oss"
homepage: "https://github.com/arman-jalili/rigorix-oss"
language: "Rust"
languages: ["Rust"]
languagePcts: [65]
topics: ["ai", "ci-cd", "coding-agent", "dag", "governance", "llm", "oss", "rust", "template-driven"]
stars: 15
forks: 1
openIssues: 0
closedIssues: 379
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-06-13T05:28:27Z"
lastCommitAt: "2026-07-12T06:17:40Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 99
undervaluedScore: 51
maintainers: ["arman-jalili"]
openGraphImageUrl: "https://opengraph.githubassets.com/9cb737612770143aee760306906b349120b29d129a4dfc3c4ed67497df75598f/arman-jalili/rigorix-oss"
---

# Rigorix

**A deterministic coding-agent runtime for repeatable, auditable AI software engineering.**

Rigorix compiles natural-language development tasks into executable Directed Acyclic Graphs (DAGs). Instead of relying on an open-ended agent loop, it separates planning from execution: the execution plan is generated, validated, and then executed within configurable policy, permission, and budget constraints. The result is AI-assisted software engineering that is repeatable, inspectable, and suitable for automated environments such as CI/CD.

The LLM generates code; Rigorix governs execution.

Rigorix operates through three modes:

- **CLI** (`rigorix`) — Interactive TUI + flag-based scripting for local development
- **GitHub Action** (`rigorix-action`) — PR governance and automated code generation in CI/CD
- **Engine** — The core library powering both

Rigorix is built with the [Guardian Framework](https://github.com/arman-jalili/guardian-framework) — **an architecture enforcement framework for AI-assisted development.** Guardian ensures every change is traceable to canonical architecture specs, validated by proof scripts, and governed by frozen module contracts.

---

## Why…
