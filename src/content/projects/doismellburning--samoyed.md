---
repo: "doismellburning/samoyed"
name: "samoyed"
description: "Samoyed is a fully-featured software modem/TNC for packet radio. It supports AX.25 v2.2, FX.25, IL2P, APRS, multi-speed modems (300-9600 bps), digipeating, IGates, and more. Samoyed is a Go port of Dire Wolf."
readmeQualityOk: true
url: "https://github.com/doismellburning/samoyed"
homepage: "https://doismellburning.github.io/samoyed/"
language: "Go"
languages: ["Go"]
languagePcts: [99]
stars: 16
forks: 1
openIssues: 26
closedIssues: 54
watchers: 1
contributors: 4
recentReleases: 0
createdAt: "2025-06-01T17:05:14Z"
lastCommitAt: "2026-09-26T08:46:10Z"
lastReleaseAt: "2026-04-05T23:57:52Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 93
undervaluedScore: 66
maintainers: ["doismellburning"]
openGraphImageUrl: "https://opengraph.githubassets.com/d57c32f64a22c47f983238d85ef1d37dc2718022f59aa17c047dac7a2494a522/doismellburning/samoyed"
---

# Samoyed

Samoyed is a fully-featured software modem/TNC for packet radio.
It supports AX.25 v2.2, FX.25, IL2P, APRS, multi-speed modems (300-9600 bps), digipeating, IGates, and more.
Samoyed is a Go port of [Dire Wolf](https://github.com/wb2osz/direwolf).

> **Status:** Port functionally complete, but broad testing needed - consider this pre-release, and likely to contain bugs.
> Please [file issues](https://github.com/doismellburning/samoyed/issues) if you encounter problems.

## Why Samoyed?

Dire Wolf is a mature, capable piece of software written in C. Samoyed is (currently) a near-straight port to Go, motivated by:

- **Better tooling** — Go's testing, linting, and static analysis ecosystem, as well as the stdlib
- **Simpler builds** — no cmake, no preprocessor conditionals for test infrastructure
- **Reduced platform scope** — dropping old Windows / old CPU complexity makes the codebase easier to extend
- **Easier contribution** — idiomatic Go and improved test suites should make things more approachable for new contributors

Samoyed aims for broad-strokes compatibility with Dire Wolf to minimise switching costs.

## Features

Samoyed inherits Dire Wolf's feature set:

-…
