---
repo: "Saevarl/Kontra"
name: "Kontra"
description: "A data quality engine for validating datasets against declarative contracts."
readmeQualityOk: true
url: "https://github.com/Saevarl/Kontra"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 8
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2025-10-19T16:39:57Z"
lastCommitAt: "2026-11-01T10:44:42Z"
lastReleaseAt: "2026-07-17T23:00:02Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 82
undervaluedScore: 49
maintainers: ["Saevarl", "saevar-paperclip-agent[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/d57718f5700dc77bcbb8e5b975a53213f8566e3c525db3383aaaa50b8a804e49/Saevarl/Kontra"
---

# Kontra

**Fast data quality validation for files, databases, and DataFrames.**

Kontra validates data against declarative rules. It stays fast on large datasets by resolving checks from metadata when possible, then running the rest via batched SQL pushdown (DuckDB / PostgreSQL / SQL Server / ClickHouse / Trino).

```bash
pip install kontra
```

## Quick Start

```python
import kontra
from kontra import rules

result = kontra.validate("users.parquet", rules=[
    rules.not_null("user_id"),
    rules.unique("email"),
    rules.range("age", min=0, max=120),
])

result.passed        # True
result.to_dict()     # Structured output for CI/services
result.to_llm()      # Token-optimized summary for agents
```

DataFrames work too:

```python
result = kontra.validate(df, rules=[...])  # Polars or pandas
```

## CLI

```bash
kontra profile users.parquet --draft > contract.yml
kontra validate contract.yml
```

```
✅ users — PASSED (4 of 4 rules)
  ✅ COL:user_id:not_null [metadata]
  ✅ COL:age:range [metadata]
  ✅ COL:email:unique [sql]
  ✅ COL:status:allowed_values [sql]
```

## Execution

Metadata (preplan) resolves what it can prove. Remaining rules run via SQL pushdown when available,…
