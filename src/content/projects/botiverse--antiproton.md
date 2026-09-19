---
repo: "botiverse/antiproton"
name: "antiproton"
description: "Durable, multi-tenant runtime for agents that act on real systems — credentials never enter the model's context"
readmeQualityOk: true
url: "https://github.com/botiverse/antiproton"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [94]
stars: 14
forks: 1
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 6
recentReleases: 0
createdAt: "2026-09-08T11:50:08Z"
lastCommitAt: "2026-09-19T01:22:14Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 100
undervaluedScore: 48
maintainers: ["TennyZhuang", "stdrc"]
openGraphImageUrl: "https://opengraph.githubassets.com/88d031c249edd4e43d5fea245283f089a8c9b31c3126dd96d68cb3866070d183/botiverse/antiproton"
---

# antiproton

> A durable, multi-tenant runtime for AI agents that interact with real-world systems, built on serverless infrastructure that costs nothing while idle.

The agent loop itself is commodity — bring your own, or use the reference harness. Antiproton provides the durable execution substrate underneath it, designed around four core architectural guarantees:

- **Structural multi-tenancy:** Distinct tenants execute in discrete Durable Objects backed by dedicated SQLite databases. Cross-tenant data is physically absent from the querying database rather than filtered by application `WHERE` clauses.
- **Serverless durability:** Runs in the cloud without long-lived background daemons, local laptop requirements, or state directories. Agents survive crashes, process evictions, and code deployments, resuming execution transparently.
- **True scale-to-zero:** Idle agents consume zero compute: no active processes, no background polling, no armed timers, and no active containers. Inactive state costs storage only; incoming requests reconstruct the agent from its event log.
- **Zero-trust credential isolation:** Agents act on external APIs and systems without credentials ever…
