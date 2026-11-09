---
repo: "rotifer-protocol/rotifer-playground"
name: "rotifer-playground"
description: "Local dev environment — Rust core + TypeScript CLI for gene development & Arena competition"
readmeQualityOk: true
url: "https://github.com/rotifer-protocol/rotifer-playground"
language: "TypeScript"
languages: ["TypeScript", "Rust"]
languagePcts: [54, 29]
topics: ["dsh-plugin"]
stars: 6
forks: 1
openIssues: 12
closedIssues: 25
watchers: 0
contributors: 3
recentReleases: 4
createdAt: "2026-03-22T09:56:17Z"
lastCommitAt: "2026-11-09T04:35:29Z"
lastReleaseAt: "2026-08-15T01:32:23Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 93
undervaluedScore: 66
maintainers: ["xiaoba-dev"]
openGraphImageUrl: "https://opengraph.githubassets.com/96b867346cfc66ba05663531d32ca9dbd4935c988251784ba42e3910fac2cf19/rotifer-protocol/rotifer-playground"
---

# Rotifer Playground

Development environment for the **Rotifer Protocol** — **WASM-Native, Polyglot by Design**: build genes in TypeScript / Rust / AssemblyScript / Go / C, compete in Arenas, share via Cloud, and simulate agent evolution.

> **Status:** v0.35.x — `rotifer hello --template <id>` now tells you what to do about missing genes: gene by gene, it prints the `rotifer install @rotifer-protocol/<gene>` command to copy, or says why the gene can't be installed. A run that did nothing no longer reports success, and `--list-templates` shows which templates can run. `uiux-diagnosis`, `content-analysis` and `web3-toolkit` run once their genes are installed from Rotifer Cloud; `code-security` and `doc-qa` are not available yet. `hello` never installs anything itself. The experimental P2P node now tries to keep 8 outbound connections to peers it chose itself, so it relies less on whoever connects to it. When no bootstrap node is connected it redials one right away, backing off after failures, and a restart dials back only peers it had actually reached, not every address it heard about. When more than 10 peers share one IP address, they now keep their score penalty after one of…
