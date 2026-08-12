---
repo: "CurateLabs/graphforge"
name: "graphforge"
description: "An embedded, openCypher-compatible graph workspace for Python, Node, (Swift, and Kotlin coming soon)"
readmeQualityOk: true
url: "https://github.com/CurateLabs/graphforge"
homepage: "http://docs.graphforge.sh/"
language: "Rust"
languages: ["Rust"]
languagePcts: [67]
stars: 50
forks: 2
openIssues: 32
closedIssues: 237
watchers: 1
contributors: 2
recentReleases: 3
createdAt: "2026-07-28T14:39:23Z"
lastCommitAt: "2026-08-12T05:14:59Z"
lastReleaseAt: "2026-08-04T18:25:26Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "under_pressure"]
healthScore: 96
undervaluedScore: 44
maintainers: ["DecisionNerd", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/a06464e4c57ac1cc43ec3fe139c6caa396cf8c98f8a619417532d5dfa1b67dc5/CurateLabs/graphforge"
discussionCount: 2
---

<h1 align="center">GraphForge</h1>

</p>

  <strong>Composable graph tooling for analysis, construction, and refinement</strong>
</p>

  An embedded, openCypher-compatible graph engine with a Rust core, Arrow results,
  and Parquet persistence — for research and investigative workflows
</p>

---

## Table of Contents

- [Why GraphForge?](#why-graphforge)
- [Installation](#installation)
- [Quick Start](#quick-start)
- [Cypher Features](#cypher-features)
- [Datasets](#datasets)
- [Architecture](#architecture)
- [Development](#development)
- [Roadmap](#roadmap)
- [License](#license)

---

## Why GraphForge?

> *We are not building a database for applications.*
> *We are building a graph execution environment for thinking.*

Modern data science and ML workflows increasingly produce graph-shaped data —
entity relationships extracted by LLMs, citation networks, dependency graphs,
social connections, knowledge bases. Working with this data shouldn't require
running a database server. GraphForge brings openCypher and analyst-intent verbs
to notebooks and scripts: zero configuration, Parquet-backed projects, and
first-class Arrow results across language bindings.

| | NetworkX |…
