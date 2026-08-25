---
repo: "skhynix/MemFlow"
name: "MemFlow"
description: "Procedural Memory layer for AI agents"
readmeQualityOk: true
url: "https://github.com/skhynix/MemFlow"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 10
forks: 4
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 4
recentReleases: 0
createdAt: "2026-03-31T02:26:33Z"
lastCommitAt: "2026-08-24T07:57:12Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 77
undervaluedScore: 48
maintainers: ["hyeongtakji", "giocafe", "honggyukim"]
openGraphImageUrl: "https://opengraph.githubassets.com/bc3e5f36c170c0061c574aadf7e639cc655e06858016c0e2da3b93d5a8e0c00d/skhynix/MemFlow"
---

# MemFlow

Procedural Memory layer for AI agents.

MemFlow captures how-to knowledge (step-by-step instructions, workflows, SOPs)
and makes them retrievable and executable.

## Benchmarks

Benchmark harnesses live in [benchmark/](https://github.com/skhynix/MemFlow/blob/HEAD/benchmark/README.md). The WikiHow
Procedure Silver benchmark vendors its query bank, but full retrieval
evaluation requires rebuilding the local procedure corpus from Kaggle source
shards.

Install the optional benchmark dependencies before downloading the WikiHow
source data:

```bash
uv sync --extra benchmark
uv run kaggle datasets download \
  -d paolop/human-instructions-dataset-updated-json-files \
  -p benchmark/wikihow_procedure_silver/raw \
  --unzip
uv run benchmark/install_benchmark.py wikihow_procedure_silver \
  --raw-dir benchmark/wikihow_procedure_silver/raw
```
