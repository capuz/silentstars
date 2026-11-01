---
repo: "Agenticstiger/forge-cli"
name: "forge-cli"
description: "The definitive CLI for declarative data products"
readmeQualityOk: true
url: "https://github.com/Agenticstiger/forge-cli"
homepage: "https://agenticstiger.github.io/forge_docs/"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 6
forks: 1
openIssues: 6
closedIssues: 135
watchers: 0
contributors: 4
recentReleases: 0
createdAt: "2026-04-16T07:45:28Z"
lastCommitAt: "2026-11-01T22:59:00Z"
lastReleaseAt: "2026-05-10T13:47:14Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 99
undervaluedScore: 62
maintainers: ["fas89", "dependabot[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1212248652/d197f39b-adcc-4606-b0fc-d2ced16056b5"
discussionCount: 0
---

**One YAML contract describes a data product — its schema, its quality rules, where its data is
allowed to live, and which AI agents may read it. `fluid` compiles that contract into cloud
infrastructure, and refuses to deploy anything the contract forbids.**

[Documentation](https://agenticstiger.github.io/forge_docs/) ·
[Getting started](https://agenticstiger.github.io/forge_docs/getting-started/) ·
[Demos](https://agenticstiger.github.io/forge_docs/demos/) ·
[FLUID Spec](https://open-data-protocol.github.io/fluid/) ·
[Changelog](https://github.com/Agenticstiger/forge-cli/blob/main/CHANGELOG.md)

different cloud, agentPolicy enforcement, the AI copilot — in the

## Install and run it

Requires Python 3.10 or newer. The `[local]` extra adds the DuckDB provider, so the first run needs
no cloud account and no credentials.

```bash
pip install "data-product-forge[local]"

fluid init demo --template hello-world
cd demo
fluid validate contract.fluid.yaml     # ✅ Valid FLUID contract (schema v0.7.2)
fluid plan contract.fluid.yaml         # 2 actions: provision a dataset, schedule a task
fluid apply contract.fluid.yaml --yes  # ✅ Data product deployed successfully — 1.35s
```

`apply`…
