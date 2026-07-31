---
repo: "databricks-solutions/consort"
name: "consort"
description: "Consort keeps AI-written code clean and correct: a coordinated ensemble of role agents, spec-first and test-driven, driven by a deterministic state machine against live branches of a real Lakebase database. Engineering discipline is no longer left to the whim of a model. Consort enforces it."
readmeQualityOk: true
url: "https://github.com/databricks-solutions/consort"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [85]
topics: ["agent-framework", "ai-agents", "claude-code", "lakebase", "spec-driven-development", "test-driven-development"]
stars: 5
forks: 4
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 3
recentReleases: 10
createdAt: "2026-05-23T16:31:59Z"
lastCommitAt: "2026-07-31T06:28:49Z"
lastReleaseAt: "2026-06-30T20:09:31Z"
status: "thriving"
tags: ["solo_builder", "release_machine"]
healthScore: 100
undervaluedScore: 77
maintainers: ["kevin-hartman"]
openGraphImageUrl: "https://avatars.githubusercontent.com/u/168765251?s=400&v=4"
---

<picture>
    <source media="(prefers-color-scheme: dark)" srcset="docs/logo/consort-lockup-white.svg">
  </picture>
</p>

**Consort keeps AI-written code clean and correct: spec-first and test-driven, driven by a deterministic state machine with human-approval gates and immutable tests. Engineering discipline is no longer left to chance at the whim of a model. Every green is a real test run on a live branch of a real Lakebase database, enforced by hard rules, not soft prompts.**

Consort takes its name from the field of music. A *consort* is an ensemble that plays in concert: each musician holds one part, and a conductor keeps them in time. Consort is that, applied to building software. A set of agents each take on one familiar role from the software lifecycle, a product owner, a spec author, an architect, a DBA, a test strategist, a UX designer, and a navigator/driver pair at the keyboard, while a deterministic conductor keeps them in sequence and a human approves every gate. No agent plays another's part.

## Why Consort

AI agents write code fast, but you can't trust that the code is correct or maintainable over the long haul. On their own they mark a task "done" with no test…
