---
repo: "hebasto/bitcoin-core-nightly"
name: "bitcoin-core-nightly"
description: "Nightly Bitcoin Core tests"
readmeQualityOk: true
url: "https://github.com/hebasto/bitcoin-core-nightly"
language: "Dockerfile"
languages: ["Dockerfile"]
languagePcts: [100]
stars: 8
forks: 5
openIssues: 2
closedIssues: 12
watchers: 4
contributors: 5
recentReleases: 0
createdAt: "2024-12-17T20:23:13Z"
lastCommitAt: "2026-11-07T09:29:29Z"
status: "thriving"
tags: ["hidden_gem", "fork_magnet"]
healthScore: 96
undervaluedScore: 78
maintainers: ["hebasto", "GingerAgent"]
openGraphImageUrl: "https://opengraph.githubassets.com/0f3bf6688db62ea757230e5902a3d8dc450c697c02d5b0fe4973e353988623ae/hebasto/bitcoin-core-nightly"
---

# Nightly Bitcoin Core Tests

This repository performs nightly tests of [Bitcoin Core](https://github.com/bitcoin/bitcoin) across various operating systems and compilers.

For another repository with nightly builds of Bitcoin Core, see [maflcko/b-c-nightly](https://github.com/maflcko/b-c-nightly).

## Modern BSD Derivatives

| Operating System | Releases | Status | Build with System Libs | Build with Depends |
|------------------|:--------:|--------|------------------------|--------------------|
| [FreeBSD](https://www.freebsd.org/) | 14.5, 15.1 | [](https://github.com/hebasto/bitcoin-core-nightly/actions/workflows/freebsd.yml?query=event%3Aworkflow_run) | USDT - N/A | Release |
| [OpenBSD](https://www.openbsd.org/) | 7.9, 8.0 | [](https://github.com/hebasto/bitcoin-core-nightly/actions/workflows/openbsd.yml?query=event%3Aworkflow_run) | USDT - N/A | Release |
| [NetBSD](https://netbsd.org/) | 10.2, 11.1 | [](https://github.com/hebasto/bitcoin-core-nightly/actions/workflows/netbsd.yml?query=event%3Aworkflow_run) | Qt - not installed <br> USDT - N/A | Release |

## [illumos](https://illumos.org/)-Based Systems

| Operating System | Releases |Status | Notes |…
