---
repo: "sorobanguard-dev/soroban-guard"
name: "soroban-guard"
description: "Making Soroban tokens safer to integrate. Automated SEP-41 compliance checks, clear reports, and open-source tooling for Stellar."
readmeQualityOk: true
url: "https://github.com/sorobanguard-dev/soroban-guard"
homepage: "https://sorobanguard.com"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [83]
stars: 6
forks: 0
openIssues: 3
closedIssues: 1
watchers: 0
contributors: 2
recentReleases: 3
createdAt: "2026-09-30T09:55:23Z"
lastCommitAt: "2026-11-24T14:09:20Z"
lastReleaseAt: "2026-10-19T14:36:14Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 54
maintainers: ["birserg", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/ffdb3b79e91c0db363920991fdd2ddc9580890fa0ca010e01b22002b902358c3/sorobanguard-dev/soroban-guard"
---

# soroban-guard

Conformance testing for deployed [SEP-41](https://github.com/stellar/stellar-protocol/blob/master/ecosystem/sep-0041.md)
Soroban token contracts on Stellar **testnet**. Point it at a contract,
it exercises the interface for real — reads, writes, and refusals — and
reports which clauses hold, with evidence.

Try it in the browser at **[sorobanguard.com](https://sorobanguard.com)**,
or watch the walkthrough — the CLI and the web checker, start to finish:

- [Status](#status)
- [Install](#install)
- [Usage](#usage)
  - [Example reports](#example-reports)
  - [Checking writes](#checking-writes)
  - [Exit codes](#exit-codes)
- [Web UI](#web-ui)
- [Why](#why)
- [Scope](#scope)
- [Current limitations](#current-limitations)
- [License](#license)
