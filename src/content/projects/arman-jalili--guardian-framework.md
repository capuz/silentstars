---
repo: "arman-jalili/guardian-framework"
name: "guardian-framework"
description: "Architecture Enforcement Framework for AI-Assisted Development"
readmeQualityOk: true
url: "https://github.com/arman-jalili/guardian-framework"
language: "TypeScript"
languages: ["TypeScript", "Shell"]
languagePcts: [60, 38]
stars: 25
forks: 0
openIssues: 0
closedIssues: 39
watchers: 0
contributors: 2
recentReleases: 8
createdAt: "2026-04-25T20:28:08Z"
lastCommitAt: "2026-07-17T05:59:26Z"
lastReleaseAt: "2026-07-12T12:09:38Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 95
undervaluedScore: 49
maintainers: ["arman-jalili"]
openGraphImageUrl: "https://opengraph.githubassets.com/313ca6c31e8344e6fc2193bcfdba99e4ad8609eb6ddc90ca0266817859efb84d/arman-jalili/guardian-framework"
---

<picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://img.shields.io/badge/Guardian-SDLC%20Orchestrator-00bcd4?style=for-the-badge&labelColor=222">
  </picture>

  <h3>Business intent → enforced architecture → production code.<br/>One flow, no drift.</h3>

  <br/>

  <br/>
</div>

---

Guardian is an SDLC orchestrator for AI-assisted development. It takes you from a business intent — *"I need to build audit logging for regulated financial transactions"* — to an enforcement pipeline that blocks merges if the implementation violates the architecture.

The entire lifecycle lives in a single `.pi/` directory. Every artifact (modules, ADRs, roadmap, issues, CI scripts, agent skills) is generated from that directory. Nothing is handwritten twice. Nothing drifts.

---

## The Full SDLC

```
You have a business intent
    │
    ▼
Domain Exploration     ←─ you and the agent explore, iterate, refine
    │
    ▼
Architecture Modules   ←─ you review, adjust, approve
    │
    ▼
Enrich Module Docs     ←─ agent fills DDD content from exploration
    │
    ▼
ADRs, Diagrams, Specs  ←─ you challenge decisions, finalize
    │
    ▼
Roadmap Plan           ←─ you adopt phases,…
