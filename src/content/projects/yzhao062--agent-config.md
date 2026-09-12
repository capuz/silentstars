---
repo: "yzhao062/agent-config"
name: "agent-config"
description: "Personal agent configuration for Codex and Claude Code. Not intended for general use."
readmeQualityOk: true
url: "https://github.com/yzhao062/agent-config"
language: "Python"
languages: ["Python"]
languagePcts: [77]
stars: 14
forks: 0
openIssues: 0
closedIssues: 6
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-03-21T05:05:14Z"
lastCommitAt: "2026-09-12T08:00:32Z"
status: "thriving"
tags: ["solo_builder", "funded"]
healthScore: 88
undervaluedScore: 44
maintainers: ["yzhao062"]
openGraphImageUrl: "https://opengraph.githubassets.com/8686a9bddc4e51a3d47f447bcd8dfcd0d59e96c35a52557e4ceaa7b67bdf4336/yzhao062/agent-config"
fundingLinks: ["GITHUB:https://github.com/yzhao062"]
---

# agent-config

Personal shared configuration for Codex and Claude Code. Not intended for general use.

## Relationship with `anywhere-agents` (long-term co-maintenance)

This repo is the **canonical source** of shared agent configuration. Its **sanitized public downstream** lives at [`yzhao062/anywhere-agents`](https://github.com/yzhao062/anywhere-agents) and ships the subset safe for general audiences — no USC-internal content, no `reference-skills/`, no archived planning artifacts.

**Sibling repos in the same family**:

- [`yzhao062/anywhere-agents`](https://github.com/yzhao062/anywhere-agents): the public consumer and STRICT-parity mirror of ac for everything except maintainer-only docs (`pack-architecture.md`, `vision.md`, `anywhere-agents.md`, `archive/`). PyPI / npm distribution lives here.
- [`yzhao062/agent-style`](https://github.com/yzhao062/agent-style): the writing rule pack composed into every consumer's `AGENTS.md` by default. 21 rules (12 classic + 9 LLM-observed) with BAD -> GOOD examples per rule.
- [`yzhao062/agent-pack`](https://github.com/yzhao062/agent-pack): public reference example for third-party pack authors. Declares 3 packs (`profile` passive,…
