---
repo: "unionai/unionai-docs"
name: "unionai-docs"
description: "The Flyte and Union documentation site"
readmeQualityOk: true
url: "https://github.com/unionai/unionai-docs"
language: "Python"
languages: ["Python", "Jupyter Notebook"]
languagePcts: [75, 23]
stars: 6
forks: 14
openIssues: 5
closedIssues: 2
watchers: 3
contributors: 44
recentReleases: 0
createdAt: "2024-05-10T13:33:21Z"
lastCommitAt: "2026-09-05T07:49:59Z"
status: "thriving"
tags: ["hidden_gem", "fork_magnet"]
healthScore: 85
undervaluedScore: 79
maintainers: ["ppiegaze", "unionai-docsy-bot[bot]", "dansola"]
openGraphImageUrl: "https://opengraph.githubassets.com/2ae3bd16083d7f4b4f3e66433c5085558da1434840d692ea88f93506c15b2295/unionai/unionai-docs"
---

# Flyte and Union.ai documentation

- **[Flyte Docs](https://www.union.ai/docs/v2/flyte/user-guide/)**
- **[Union Docs](https://www.union.ai/docs/v2/union/user-guide/)** (covers both BYOC and Self-managed deployments)

This repository holds all documentation for the [Flyte OSS project](https://www.flyte.org) and the [Union.ai](https://www.union.ai) products.

## Repository structure

The docs system uses three repositories:

- **[unionai-docs](https://github.com/unionai/unionai-docs)** (this repo) — version-specific content (`content/`, `data/`, `linkmap/`, `include/`), configuration (`api-packages.toml`, `makefile.inc`), and CI workflows.
- **[unionai-docs-infra](https://github.com/unionai/unionai-docs-infra)** (submodule within `unionai-docs` at `unionai-docs-infra/`) — shared build infrastructure: Hugo config, layouts, themes, Python tools, scripts, and redirect data. Identical across `main` (v2) and `v1` branches.
- **[unionai-examples](https://github.com/unionai/unionai-examples)** (submodule within `unionai-docs` at `unionai-examples/`), contains example code referenced by the docs.

## Quick start

```shell
# Clone with submodules
git clone --recurse-submodules…
