---
repo: "mloda-ai/mloda-registry"
name: "mloda-registry"
description: "Registry of official plugins for mloda.ai"
readmeQualityOk: true
url: "https://github.com/mloda-ai/mloda-registry"
homepage: "https://github.com/mloda-ai/mloda"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["ai-agents", "community-driven", "context-engineering", "data-engineering", "data-pipeline", "feature-engineering", "lineage", "llm", "mlops", "plugin-framework"]
stars: 6
forks: 28
openIssues: 14
closedIssues: 550
watchers: 0
contributors: 22
recentReleases: 0
createdAt: "2025-12-12T16:34:18Z"
lastCommitAt: "2026-10-21T23:36:55Z"
lastReleaseAt: "2026-05-01T20:58:55Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "fork_magnet"]
healthScore: 99
undervaluedScore: 90
maintainers: ["TKaltofen", "suryakant-source", "semantic-release-bot"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1115300294/5ef070e9-70d9-44bd-86b6-71b3f7284522"
---

# mloda-registry

Community plugins, registry tooling, and development guides for [mloda](https://github.com/mloda-ai/mloda).

> **New to mloda?** Visit [mloda.ai](https://mloda.ai) for business context or the [core repository](https://github.com/mloda-ai/mloda) for technical details.

## Quick start

```bash
pip install mloda-community pandas
```

```python
from mloda.user import Feature, PluginLoader, mloda

PluginLoader.all()  # discover installed plugins

result = mloda.run_all(
    [Feature("name__upper"), Feature("name__length")],
    compute_frameworks=["PandasDataFrame"],
    api_data={"orders": {"name": ["alice", "bob"]}},
)
print(result[0])
#   name__upper  name__length
# 0       ALICE             5
# 1         BOB             3
```

Every plugin is requested by feature name (usually `{column}__{operation}`) and runs on PyArrow, Pandas, Polars lazy, DuckDB, and SQLite, each backend checked against the PyArrow reference; per-plugin coverage is in the [framework support matrix](https://github.com/mloda-ai/mloda-registry/blob/HEAD/docs/guides/data-operation-patterns/framework-support-matrix.md). Swap `compute_frameworks` between `PyArrowTable`, `PandasDataFrame`, and…
