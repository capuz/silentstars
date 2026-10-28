---
repo: "TokenNotIncluded/lmm-api"
name: "lmm-api"
description: "Frontier AI gateway."
originalDescription: "Frontier AI gateway."
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/TokenNotIncluded/lmm-api"
homepage: "https://api.lmm.best"
language: "TypeScript"
languages: ["TypeScript", "Rust"]
languagePcts: [49, 21]
stars: 17
forks: 20
openIssues: 98
closedIssues: 154
watchers: 0
contributors: 16
recentReleases: 10
createdAt: "2026-07-31T03:24:00Z"
lastCommitAt: "2026-10-28T09:50:30Z"
lastReleaseAt: "2026-08-13T23:31:46Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine", "fork_magnet"]
healthScore: 92
undervaluedScore: 64
maintainers: ["LIghtJUNction", "cursoragent"]
openGraphImageUrl: "https://opengraph.githubassets.com/7710216dbd2597886194f8adb94db189d3ca3dad17845701d749a6dcc001f558/TokenNotIncluded/lmm-api"
---

**LMM is Language Model Mesh, a "network of language models".** Simply put, it is a model gateway: your accounts, permissions, balances, and model calls all go through here. Business matters such as the store, tool marketplace, assistants, operations, and payments are handled by pluggable extensions. It is called Mesh because we want multiple models, multiple channels, and multiple components to connect with each other like a mesh, rather than being tied to one place.

> [!WARNING]
> **To be clear up front: this branch is a from-scratch microservices rewrite that is still under construction (WIP), and it cannot yet replace the live website.**
> Passing module tests does not mean that the full site's calls, payments, and funds flow are connected end to end. The migration of historical funds, subscriptions, and API Keys is still being reconciled entry by entry in an isolated copy and has not been accepted.
> The new program will not connect to the old business database, will not quietly upgrade table schemas, and will not quietly fall back to the old monolith. The remaining work is listed in [Architecture and…
