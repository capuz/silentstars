---
repo: "ohtf/clincalc"
name: "clincalc"
description: "Fast, reliable, LLM-friendly clinical calculator CLI"
readmeQualityOk: true
url: "https://github.com/ohtf/clincalc"
homepage: "https://ohtf.github.io/clincalc/"
language: "Rust"
languages: ["Rust"]
languagePcts: [92]
stars: 6
forks: 0
openIssues: 2
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 3
createdAt: "2026-03-23T22:08:14Z"
lastCommitAt: "2026-11-17T14:35:04Z"
lastReleaseAt: "2026-11-11T09:04:29Z"
status: "thriving"
tags: ["hidden_gem", "funded"]
healthScore: 79
undervaluedScore: 57
maintainers: ["pacharanero", "dependabot[bot]", "claude"]
openGraphImageUrl: "https://opengraph.githubassets.com/6ad14f2eb37668aba0e76ee2ca3592385fbeaa31657770495bbe041c92773994/ohtf/clincalc"
fundingLinks: ["GITHUB:https://github.com/bawmedical"]
---

# clincalc - open clinical calculators

Open source, community-auditable clinical calculators. One Rust crate is the scoring engine; every surface - CLI, Python package, MCP tool, REST API, desktop GUI, web UI, and embeddable Rust library - is driven from that single source of truth.

A score is computed once, in the core library, and the result is identical wherever it appears. Every calculator cites primary literature, is tested against published vectors, and records the licence it is distributed under.

> **Development status:** `clincalc` is published for software development, research, education, and evaluation. It is not a finished medical device and must not be used on its own to make decisions about an individual patient's care. Anyone incorporating it into a product or deploying it for clinical use is responsible for that product or deployment's clinical-safety and regulatory obligations.

`clincalc` is a project of the [Open Health Technology Foundation](https://openhealthtechnology.org) (OHTF), a UK community interest company providing a neutral, long-term home for open-source health software. Marcus Baw remains the project's named maintainer. See [the OHTF project…
