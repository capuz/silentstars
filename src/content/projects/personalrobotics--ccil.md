---
repo: "personalrobotics/CCIL"
name: "CCIL"
description: "Code release and project site for \"CCIL: Continuity-based Data Augmentation for Corrective Imitation Learning\""
readmeQualityOk: true
url: "https://github.com/personalrobotics/CCIL"
homepage: "https://personalrobotics.github.io/CCIL/"
language: "Python"
languages: ["Python"]
languagePcts: [99]
topics: ["data-augmentation", "imitation-learning", "robot-learning", "robotics"]
stars: 23
forks: 6
openIssues: 30
closedIssues: 26
watchers: 4
contributors: 4
recentReleases: 0
createdAt: "2024-04-02T23:18:31Z"
lastCommitAt: "2026-10-26T20:59:23Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 89
undervaluedScore: 60
maintainers: ["siddhss5"]
openGraphImageUrl: "https://opengraph.githubassets.com/cdd9afe4554399fc04a5dc7bf974047509290b230ebae91d84114717e8a0cb34/personalrobotics/CCIL"
---

# CCIL: Continuity-based Data Augmentation for Imitation Learning

Official repo for CCIL: Continuity-based Data Augmentation for Imitation Learning. This codebase allows you to
- Train dynamics functions from demonstration data while enforcing some form of local Lipschitz continuity
- Generate corrective labels using dynamics function
- Train behavior cloning agents from demonstrations or augmented dataset

> **Consolidation in progress.** This repository is being rebuilt around a maintained CCIL core. State-based workflows come first; end-to-end image integration is deferred to M5 while `image_ccil` remains in active development. Scope, benchmarks and policies are set by the [migration contract](https://github.com/personalrobotics/CCIL/blob/HEAD/docs/migration-contract.md); history, inventory, reproducibility ledger and artifacts are under [docs/](https://github.com/personalrobotics/CCIL/blob/HEAD/docs/).

## Setup

The `ccil` core is managed with [uv](https://docs.astral.sh/uv/) and supports Python 3.10 and newer:

```bash
git clone https://github.com/personalrobotics/CCIL.git
cd CCIL
uv sync                     # create .venv from uv.lock
uv run ccil --help          # schema,…
