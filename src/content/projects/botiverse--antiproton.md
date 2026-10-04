---
repo: "botiverse/antiproton"
name: "antiproton"
description: "Durable, multi-tenant runtime for agents that act on real systems — credentials never enter the model's context"
readmeQualityOk: true
url: "https://github.com/botiverse/antiproton"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [97]
stars: 26
forks: 2
openIssues: 7
closedIssues: 9
watchers: 0
contributors: 5
recentReleases: 0
createdAt: "2026-09-08T11:50:08Z"
lastCommitAt: "2026-10-04T10:00:46Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 91
undervaluedScore: 37
maintainers: ["TennyZhuang"]
openGraphImageUrl: "https://opengraph.githubassets.com/4bd244c6c724e733cea5bdb920c18135f456f3588ae4b7bff73116a387685321/botiverse/antiproton"
discussionCount: 0
---

# antiproton

> A durable, multi-tenant runtime for AI agents that interact with real-world systems, built on serverless infrastructure that costs nothing while idle.

The agent loop itself is commodity — bring your own, or use the reference harness. Antiproton provides the durable execution substrate underneath it, designed around four core architectural guarantees:

- **Structural multi-tenancy:** Distinct tenants execute in discrete Durable Objects backed by dedicated SQLite databases. Cross-tenant data is physically absent from the querying database rather than filtered by application `WHERE` clauses.
- **Serverless durability:** Runs in the cloud without long-lived background daemons, local laptop requirements, or state directories. Agents survive crashes, process evictions, and code deployments, resuming execution transparently.
- **True scale-to-zero:** Idle agents consume zero compute: no active processes, no background polling, no armed timers, and no active containers. Inactive state costs storage only; incoming requests reconstruct the agent from its event log.
- **Zero-trust credential isolation:** Agents act on external APIs and systems without credentials ever…
