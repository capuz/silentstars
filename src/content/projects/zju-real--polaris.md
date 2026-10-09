---
repo: "ZJU-REAL/Polaris"
name: "Polaris"
description: "Toward Autonomous Scientific Discovery"
readmeQualityOk: true
url: "https://github.com/ZJU-REAL/Polaris"
homepage: "https://zju-real.github.io/Polaris/"
language: "Python"
languages: ["Python", "TypeScript"]
languagePcts: [66, 33]
topics: ["ai-agents", "ai-scientist", "auto-research", "polaris-agent", "dsh-plugin"]
stars: 252
forks: 36
openIssues: 7
closedIssues: 269
watchers: 1
contributors: 6
recentReleases: 10
createdAt: "2026-07-22T18:28:44Z"
lastCommitAt: "2026-10-09T18:56:39Z"
lastReleaseAt: "2026-08-12T11:39:21Z"
status: "thriving"
tags: ["solo_builder", "release_machine"]
healthScore: 98
undervaluedScore: 34
maintainers: ["tricktreat"]
openGraphImageUrl: "https://opengraph.githubassets.com/3087addbf6de14d46affda94df848c9b601ca821cf1774c6c2e968226bf9b9f8/ZJU-REAL/Polaris"
---

Powered by a long-running agent core that plans, executes, and self-verifies its own work, turning every task into a resumable, auditable, human-gated run.

---

Polaris runs the entire research lifecycle in one desktop app: literature survey, idea generation,
idea review, experiment building on real GPU servers, LaTeX paper writing, and paper review. It is
built for one researcher on their own computer — everything runs locally, with no server to set up —
and it treats every long task as a **Voyage**: a persisted, resumable, human-gated agent run that can
span hours or days without losing state.

> [!NOTE]
> Polaris is not a chatbot wrapper. The heavy lifting (crawling, parsing, deduplication, metric parsing,
> citation matching) is deterministic code. LLMs are reserved for the judgement calls: scoring,
> synthesis, drafting, and review. This split keeps runs cheap, reproducible, and auditable.

## Demo

A 2-minute tour of the platform: the six-stage pipeline, the Voyage agent core, a real experiment
run, and PolarisBuddy.

https://github.com/user-attachments/assets/388972c1-7ffa-45f2-94c4-07f388379ba2

### Try it live

A guest account on an older, frozen web instance, for…
