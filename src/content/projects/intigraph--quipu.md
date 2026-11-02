---
repo: "intigraph/quipu"
name: "quipu"
description: "AI-native knowledge graph with strict ontology enforcement"
readmeQualityOk: true
url: "https://github.com/intigraph/quipu"
homepage: "https://intigraph.github.io/quipu/"
language: "Rust"
languages: ["Rust"]
languagePcts: [86]
topics: ["ai-agents", "knowledge-graph", "llm", "ontology", "owl", "rdf", "rust", "shacl", "sparql", "sqlite"]
stars: 9
forks: 0
openIssues: 0
closedIssues: 38
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-04-04T05:15:48Z"
lastCommitAt: "2026-11-02T11:37:59Z"
lastReleaseAt: "2026-07-23T05:27:07Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 99
undervaluedScore: 58
maintainers: ["scbrown"]
openGraphImageUrl: "https://opengraph.githubassets.com/45da6614e88998a45ff98bbc61997a99e8de46915427f7c4d7091fd591a2a5b6/intigraph/quipu"
---

**Quipu is a governed, bitemporal knowledge store for AI agents and the people
who run them.** Use it from the command line, REST, MCP or a Rust application.
A quipu is an Andean knotted-cord record: cords are entities, knots are facts.

## Why you would want it

- **Governed:** check incoming knowledge against your vocabulary and shapes.
- **Bitemporal:** keep a queryable history of facts and decisions.
- **Reusable agent knowledge:** store memory agents can read, reuse and share across tools.
- **Time-aware entities:** attach event-triggering time attributes for [Chaski](https://github.com/intigraph/chaski) to react to.

Use Quipu as the **central graph and base for many tools**: see [the stack](#-the-stack).
The full case is in [Why Quipu](https://intigraph.github.io/quipu/why-quipu.html).

## Install

```sh
curl -fsSL https://raw.githubusercontent.com/intigraph/quipu/main/install.sh | sh
```

Linux and macOS, x86_64 and arm64; requires Python 3.9+ and curl.
The installer verifies the published archive checksum and executable version.
Then run `quipu --version`. [Install, upgrade or remove Quipu](https://intigraph.github.io/quipu/getting-started/installation.html).
For the…
