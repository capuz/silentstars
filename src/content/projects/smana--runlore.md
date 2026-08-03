---
repo: "Smana/runlore"
name: "runlore"
description: "The self-improving SRE agent"
readmeQualityOk: true
url: "https://github.com/Smana/runlore"
language: "Go"
languages: ["Go"]
languagePcts: [97]
topics: ["aiops", "gitops", "incident-response", "kubernetes", "llm-agent", "root-cause-analysis", "sre"]
stars: 13
forks: 2
openIssues: 4
closedIssues: 13
watchers: 1
contributors: 3
recentReleases: 10
createdAt: "2026-06-20T10:42:31Z"
lastCommitAt: "2026-08-03T06:46:05Z"
lastReleaseAt: "2026-07-11T16:45:00Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 94
undervaluedScore: 53
maintainers: ["Smana", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/5d8ea823e7331c7becc90a8e0f2f995e08963ca581bf4065f24d3b7c68a1836d/Smana/runlore"
discussionCount: 0
---

<picture>
  <source media="(prefers-color-scheme: dark)" srcset="assets/logo-dark.png" />
</picture>

# RunLore

**An open-source SRE agent that investigates incidents — and remembers what it learns.**

### 📖 Read the docs → **[runlore.io](https://runlore.io/)**

</div>

---

RunLore is an open-source SRE agent that investigates any incident — *what changed? what's wrong?*
— and posts a confidence-scored root cause to chat (Slack, Matrix…). It is **read-only by default**:
it reads your cluster, metrics, logs, and network flows — its only writes go to Git, via reviewed PRs.

What sets it apart: it learns **your** platform. Every investigation opens a PR in a Git repo you
own; a human merges it, building a knowledge base of your incidents and context. The same pattern
next time gets an instant answer — no fresh investigation.

**Learns your platform · single Go binary · runs in your cluster · on your models.**

> **The autonomy ladder.** Teams that want more than the read-only default can climb `suggest` →
> `approve`: even at the top supported rung RunLore only executes *reversible* GitOps operations after
> an **explicit human approval** — a human stays in the loop at every step…
