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
stars: 8
forks: 0
openIssues: 0
closedIssues: 38
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-04-04T05:15:48Z"
lastCommitAt: "2026-10-25T02:47:48Z"
lastReleaseAt: "2026-07-23T05:27:07Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 100
undervaluedScore: 58
maintainers: ["scbrown"]
openGraphImageUrl: "https://opengraph.githubassets.com/a0669103e4049fdde825ec3094fcaeacbd7c8493cd690b43945e1a47c634e40a/intigraph/quipu"
---

# quipu

**Quipu is a governed, bitemporal knowledge store for AI coding agents and the
people who run them.** It can check writes against your rules, records where each fact came from, and answers what was true when. *Bitemporal* means keeping both
when a fact was recorded and, when supplied, when it was true.

The [60-second demo](https://github.com/intigraph/quipu/blob/HEAD/docs/demos/governed-memory-v0.13.0/) shows an enabled gate,
a refused write, corrected provenance, and a valid-time read.

Quipu answers standard SPARQL 1.1 as a CLI, REST server and Rust library, with its own MCP server (`quipu mcp` or `quipu-server` over HTTP).

[Domain shapes in practice](https://github.com/intigraph/quipu/blob/HEAD/docs/book/src/concepts/domain-shapes.md) describes
producer-owned Camayoc profiles, the Seeds work profile and the staged
load-before-remove transition from bundled domain examples.

A [quipu](https://en.wikipedia.org/wiki/Quipu) is the Andean knotted-cord record: cords are entities, knots are facts.

mcp-name: io.github.intigraph/quipu

## Install

```sh
curl -fsSL https://raw.githubusercontent.com/intigraph/quipu/main/install.sh | sh
```

Python 3.9+, curl, and a Linux or…
