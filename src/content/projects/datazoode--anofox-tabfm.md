---
repo: "DataZooDE/anofox-tabfm"
name: "anofox-tabfm"
description: "DuckDB extension for tabular foundation models — zero-shot classification & regression in SQL. Built-in Mitra, TabPFN v2, TabICL v2, and Google TabFM (selectable by name); register your own in SQL. ONNX Runtime CPU/CUDA/ROCm."
readmeQualityOk: true
url: "https://github.com/DataZooDE/anofox-tabfm"
language: "Python"
languages: ["Python", "C++"]
languagePcts: [49, 47]
topics: ["duckdb", "foundation-models", "machine-learning", "onnxruntime", "sql", "tabpfn", "tabular-data", "zero-shot-learning"]
stars: 10
forks: 2
openIssues: 1
closedIssues: 5
watchers: 1
contributors: 4
recentReleases: 4
createdAt: "2026-07-04T07:17:56Z"
lastCommitAt: "2026-11-02T11:36:08Z"
lastReleaseAt: "2026-08-14T07:54:25Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 94
undervaluedScore: 57
maintainers: ["jrosskopf", "maxdemarzi", "sipemu"]
openGraphImageUrl: "https://opengraph.githubassets.com/c21fa944334b463d2f77133807562a066723e27811309402ab781ee8d6b3ebb6/DataZooDE/anofox-tabfm"
---

This extension runs **tabular foundation models**, TabPFN-style in-context learners, so classification
and regression become a single SQL statement. No Python, no training loop, no MLOps: the model reads your
labelled rows as context and predicts the rest.

```sql
SELECT customer_id, yhat AS will_churn, yhat_score
FROM tabfm_classify('history', 'churned', test := 'prospects', model := 'mitra');
```

> **Built with StableAI LimiX.** The `limix-2m` model is StableAI's LimiX-2M, used under the Stable AI
> Technology Co., Ltd. License v1.0 ([licence](https://huggingface.co/stable-ai/LimiX-2M/blob/main/LICENSE.txt)).
> Several models are **non-commercial**: check the `commercial` column in [Models](#models) before you build
> on one.

## Key Features

### Predict
- **Classification and regression** in one call: `tabfm_classify`, `tabfm_regress`
- **Two forms**: an explicit train / test pair, or one table whose missing targets are the rows to score
- **Probabilities**, not just labels: `yhat_score` and a `proba` map per row

### 13 models, plus your own
- **Built in, selectable by name**: Mitra, TabDPT, TabPFN v2 / 2.5 / 2.5-real / 2.6 / 3, TabICL v2, Causilo,
  LimiX-2M, Orion-BiX,…
