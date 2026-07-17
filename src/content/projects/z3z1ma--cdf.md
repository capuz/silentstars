---
repo: "z3z1ma/cdf"
name: "cdf"
description: "A framework to manage data, continuously"
readmeQualityOk: true
url: "https://github.com/z3z1ma/cdf"
language: "Rust"
languages: ["Rust"]
languagePcts: [97]
topics: ["data", "framework", "pipelines", "transformation"]
stars: 35
forks: 3
openIssues: 0
closedIssues: 7
watchers: 2
contributors: 1
recentReleases: 1
createdAt: "2023-10-26T05:31:25Z"
lastCommitAt: "2026-07-17T05:57:13Z"
lastReleaseAt: "2026-07-11T07:45:35Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 100
undervaluedScore: 60
maintainers: ["z3z1ma"]
openGraphImageUrl: "https://opengraph.githubassets.com/bd181e411b0af87b400fb50f2594127d1517554ba65ca76482006ae71da2bc35/z3z1ma/cdf"
---

# CDF

CDF is the Continuous Data Framework.

It is a Rust-native, DataFusion-powered framework for data movement. Its job is
to make a load behave less like a connector run and more like a build: planned
before it has effects, captured as an artifact, checked against contracts,
committed through a destination receipt, and recoverable without guessing.

CDF is ambitious on purpose. It draws from dlt, Singer, Airbyte, Meltano, Sling,
Mage, Arrow, DataFusion, reproducible builds, conformance testing, and
operational systems that have to survive bad days. The goal is a next generation
data system, not a larger connector catalog.

If a pipeline reads from GitHub, writes to DuckDB, and moves a cursor, CDF wants
the repository, the package store, the destination, and the checkpoint ledger to
answer ordinary questions:

- What was the planned read?
- Which filters did the source handle, and with what fidelity?
- What schema and type information was observed?
- Which rows passed, froze, or went to quarantine?
- What package was produced?
- What did the destination commit?
- Which receipt proves it?
- Which state transition was recorded?
- Can the same package be replayed somewhere else?…
