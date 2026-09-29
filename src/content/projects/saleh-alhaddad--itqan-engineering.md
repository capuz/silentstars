---
repo: "saleh-alhaddad/itqan-engineering"
name: "itqan-engineering"
description: "Itqan (إتقان — mastery of the craft): a model-agnostic AI engineering skills suite that runs the full software-engineering lifecycle. 12 skills — a resumable orchestrator plus six phases and five specialists. Approval gates before code, test-first builds, evidence before done."
readmeQualityOk: true
url: "https://github.com/saleh-alhaddad/itqan-engineering"
homepage: "https://saleh-alhaddad.github.io/itqan-engineering/"
language: "Shell"
languages: ["Shell", "Go Template"]
languagePcts: [68, 32]
topics: ["agent-skills", "ai-agents", "claude-code", "code-review", "developer-tools", "sdlc", "software-engineering", "tdd"]
stars: 10
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 5
recentReleases: 2
createdAt: "2026-07-21T15:02:12Z"
lastCommitAt: "2026-09-29T09:58:27Z"
lastReleaseAt: "2026-09-01T12:24:16Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 79
undervaluedScore: 37
maintainers: ["saleh-alhaddad"]
openGraphImageUrl: "https://opengraph.githubassets.com/0f47a56f7d792097b89f93294c5beb4f5cba279c50ce9740687958255fb8c2f3/saleh-alhaddad/itqan-engineering"
---

# Itqan — engineering skills suite

*إتقان — mastery of the craft.*

**One resumable orchestrator that runs the full software-engineering lifecycle — spec → plan → build → verify → review → ship — with approval gates you control and evidence required at every step.**

Pure Markdown skills, installable on 70+ agents (Claude Code, Cursor, Codex, Gemini CLI, Windsurf, Zed, Hermes, …).
It adapts to your stack by reading your repo, never fires on its own, and keeps every
artifact in an `engineering/` workspace that survives sessions, machines, and hand-offs.

```mermaid
flowchart LR
    DIS[discover<br/><i>what to build</i>] -. optional .-> DEF
    DEF[define<br/><i>spec / PRD</i>] --> A1{{"👤 approve spec"}}
    A1 --> BP[blueprint<br/><i>ordered task plan</i>] --> A2{{"👤 approve plan"}}
    A2 --> CON[construct<br/><i>TDD build</i>] --> VER[verify<br/><i>prove it works</i>]
    VER --> INS[inspect<br/><i>senior review</i>] --> REL[release<br/><i>GO / NO-GO</i>]
    HAR[harden<br/><i>security audit</i>] -. auth/PII/payments .-> REL
    DES[design<br/><i>UI craft</i>] -. UI tasks .-> DEF
    REL -->|loop mode| DEF

    style A1 fill:#f9e79f,stroke:#b7950b
    style A2…
