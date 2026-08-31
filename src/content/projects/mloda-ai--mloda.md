---
repo: "mloda-ai/mloda"
name: "mloda"
description: "mloda.ai - Open Data Access for AI and ML. Plugin-based. Traceable. Framework-agnostic."
readmeQualityOk: true
url: "https://github.com/mloda-ai/mloda"
homepage: "https://mloda.ai"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["community-driven", "context-engineering", "data-engineering", "feature-engineering", "plugin-framework", "ai-agents", "data-access", "data-pipeline", "llm", "mlops"]
stars: 81
forks: 45
openIssues: 8
closedIssues: 503
watchers: 3
contributors: 33
recentReleases: 0
createdAt: "2025-01-04T16:31:21Z"
lastCommitAt: "2026-08-31T09:58:54Z"
lastReleaseAt: "2025-03-30T18:53:42Z"
status: "thriving"
tags: ["needs_contributors", "hidden_gem", "fork_magnet"]
healthScore: 99
undervaluedScore: 56
maintainers: ["TKaltofen", "dchaudhari7177", "semantic-release-bot"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/912112456/b609d6b1-084b-4171-893a-28e5542e852b"
---

# [mloda.ai](https://mloda.ai): Open Data Access for ML & AI

> **Declarative data access for AI agents. Describe what you need - mloda delivers it.**

```bash
pip install mloda
```

## 30-Second Example

Your AI describes what it needs. mloda figures out how to get it:

```python
from mloda.user import PluginLoader, mloda
PluginLoader.all()

result = mloda.run_all(
    features=["customer_id", "income", "income__sum_aggr", "age__avg_aggr"],
    compute_frameworks=["PandasDataFrame"],
    api_data={"SampleData": {
        "customer_id": ["C001", "C002", "C003", "C004", "C005"],
        "age": [25, 35, 45, 30, 50],
        "income": [50000, 75000, 90000, 60000, 85000]
    }}
)
```

Copy, paste, run. mloda resolves dependencies, chains plugins, delivers data.

---

## What mloda Does

```
┌─────────────────────────────────────────────────────────────────┐
│                      DATA USERS                                 │
│  AI Agents  •  ML Pipelines  •  Data Science  •  Analytics      │
└───────────────────────────┬─────────────────────────────────────┘
                            │ describe what they need
                            ▼
                    ┌───────────────┐…
