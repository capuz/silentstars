---
repo: "Xerxes-2/fate-sandbox"
name: "fate-sandbox"
description: "A deterministic, tool-driven AI narrative runtime for TYPE-MOON settings, built on pi."
readmeQualityOk: true
url: "https://github.com/Xerxes-2/fate-sandbox"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [99]
stars: 20
forks: 2
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-06-02T19:32:41Z"
lastCommitAt: "2026-07-19T06:12:18Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 79
undervaluedScore: 39
maintainers: ["Xerxes-2"]
openGraphImageUrl: "https://opengraph.githubassets.com/97b26f2cafbdee9474f442d0516f8fdc3e1c8670cb3a6ae9d2157fe5ab3cf645/Xerxes-2/fate-sandbox"
---

# fate-sandbox

[中文说明](https://github.com/Xerxes-2/fate-sandbox/blob/HEAD/README_ZH.md)

A local interactive narrative runtime for TYPE-MOON settings, built on the pi coding agent.

`fate-sandbox` treats the language model as an unreliable planner rather than a state store. A deterministic TypeScript engine validates domain events, advances time, protects hidden information, and records an auditable turn history. The model handles decisions and prose; the engine owns the game state.

> Experimental fan project. Fate and TYPE-MOON rights belong to their respective holders. See [License and fan-content notice](#license-and-fan-content-notice).

## Engineering overview

Each player turn runs through separate settlement and rendering passes:

```mermaid
flowchart LR
    A[Player input] --> B[Settlement model]
    B --> C[Domain-event tools]
    C --> D[Deterministic engine]
    D --> E[(Versioned game state)]
    D --> F[Direction packet]
    F --> G[Render model]
    G --> H[Prose lint and rewrite]
    H --> I[Player-visible prose]
```

The runtime enforces the boundaries that prompts cannot guarantee:

- **Domain events instead of raw patches.** Travel, wounds, purchases, secret…
