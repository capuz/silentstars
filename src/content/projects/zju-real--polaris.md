---
repo: "ZJU-REAL/Polaris"
name: "Polaris"
description: "Toward Autonomous Scientific Discovery"
readmeQualityOk: true
url: "https://github.com/ZJU-REAL/Polaris"
homepage: "https://zju-real.github.io/Polaris/"
language: "Python"
languages: ["Python", "TypeScript"]
languagePcts: [66, 32]
topics: ["ai-agents", "ai-scientist", "auto-research", "polaris-agent", "dsh-plugin"]
stars: 230
forks: 30
openIssues: 15
closedIssues: 198
watchers: 1
contributors: 6
recentReleases: 10
createdAt: "2026-07-22T18:28:44Z"
lastCommitAt: "2026-09-07T08:35:03Z"
lastReleaseAt: "2026-08-12T11:39:21Z"
status: "newborn"
tags: ["solo_builder", "release_machine"]
healthScore: 98
undervaluedScore: 34
maintainers: ["tricktreat", "yyy-OPS"]
openGraphImageUrl: "https://opengraph.githubassets.com/5b699da282e8f0abf3eb260237430bb4e8876089c047b2e665c5e1d57d2d9229/ZJU-REAL/Polaris"
---

</p>

  <strong>Autonomous, end-to-end AI research: from literature to a reviewed paper.</strong><br>
  Powered by a long-running agent core that plans, executes, and self-verifies its own work, turning every task into a resumable, auditable, human-gated run.
</p>

</p>

  <strong>English</strong> · <a href="README.zh-CN.md">简体中文</a>
</p>

</p>

---

Polaris runs the entire research lifecycle as a single web application: literature survey, idea
generation, idea review, experiment building on real GPU servers, LaTeX paper writing, and paper
review. It is built for a research lab, with multi-user access, RBAC, and invite-code registration, and
it treats every long task as a **Voyage**: a persisted, resumable, human-gated agent run that can span
hours or days without losing state.

> [!NOTE]
> Polaris is not a chatbot wrapper. The heavy lifting (crawling, parsing, deduplication, metric parsing,
> citation matching) is deterministic code. LLMs are reserved for the judgement calls: scoring,
> synthesis, drafting, and review. This split keeps runs cheap, reproducible, and auditable.

## Demo

A 2-minute tour of the platform: the six-stage pipeline, the Voyage agent core, a real…
