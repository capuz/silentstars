---
repo: "pywr/pywr-next"
name: "pywr-next"
description: "An experimental repository exploring ideas for a major revision to Pywr using Rust as a backend."
readmeQualityOk: true
url: "https://github.com/pywr/pywr-next"
language: "Rust"
languages: ["Rust"]
languagePcts: [95]
stars: 13
forks: 7
openIssues: 48
closedIssues: 46
watchers: 6
contributors: 8
recentReleases: 6
createdAt: "2020-11-17T11:45:20Z"
lastCommitAt: "2026-10-23T09:33:28Z"
lastReleaseAt: "2026-10-03T14:06:11Z"
status: "thriving"
tags: ["needs_contributors", "legacy_hero", "release_machine", "fork_magnet"]
healthScore: 89
undervaluedScore: 72
maintainers: ["Batch21", "jetuk", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/f765e343f4c68e3a712f12e9eac6a8176b11f209b2f3a2ede6fde673810d3191/pywr/pywr-next"
discussionCount: 0
---

The next major release of <a href="https://github.com/pywr/pywr">Pywr</a>, a water-resource allocation
    modelling system. Pywr v2 combines a Rust computational core with Python bindings and a command line interface.
    It is now at its first release candidate, moving beyond the experimental stage towards a stable v2.0 release.
    ·
    ·

## About The Project

Pywr simulates the allocation of water through a network of sources, stores, links and demands. Costs and constraints
control allocation at each time step, while parameters describe changing conditions and operating rules across
scenarios.

This repository contains Pywr v2. It retains the flexible, parameter-driven modelling approach of Pywr v1.x, with a
redesigned Rust core, a typed JSON model schema, and Python interfaces for running models and extending their behaviour.

### Benefits over Pywr v1.x

- **A reusable computational core.** The Rust engine can be used independently of Python, with separate crates for
  model schemas, project composition and command line tools. Python remains available for custom model logic and
  analysis.
- **Explicit model definitions and validation.** A typed JSON schema and structured…
