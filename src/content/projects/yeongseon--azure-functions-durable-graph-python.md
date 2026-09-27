---
repo: "yeongseon/azure-functions-durable-graph-python"
name: "azure-functions-durable-graph-python"
description: "Manifest-first graph runtime for Azure Functions with Durable Functions orchestration"
readmeQualityOk: true
url: "https://github.com/yeongseon/azure-functions-durable-graph-python"
homepage: "https://yeongseon.dev/azure-functions-python/durable-graph/"
language: "Python"
languages: ["Python"]
languagePcts: [95]
topics: ["azure", "azure-functions", "durable-functions", "graph", "orchestration", "python", "serverless", "workflow"]
stars: 5
forks: 0
openIssues: 3
closedIssues: 56
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-04-02T12:52:29Z"
lastCommitAt: "2026-09-27T09:27:15Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 95
undervaluedScore: 59
maintainers: ["yeongseon", "dependabot[bot]", "sisyphus-dev-ai"]
openGraphImageUrl: "https://opengraph.githubassets.com/5f1fb5947c58e26757efd43c2c1ede4d38e750509ca07885481ee6d1d0d96ca6/yeongseon/azure-functions-durable-graph-python"
---

# Azure Functions Durable Graph

> ⚠️ **Experimental** — pattern exploration. APIs and behavior may change. Not recommended as a production dependency yet.

> Part of the **Azure Functions Python DX Toolkit** — dogfood-tested by [azure-functions-cookbook-python](https://github.com/yeongseon/azure-functions-cookbook-python).

Read this in: [한국어](https://github.com/yeongseon/azure-functions-durable-graph-python/blob/HEAD/README.ko.md) | [日本語](https://github.com/yeongseon/azure-functions-durable-graph-python/blob/HEAD/README.ja.md) | [简体中文](https://github.com/yeongseon/azure-functions-durable-graph-python/blob/HEAD/README.zh-CN.md)

> **Alpha Notice** — This package is in early development (`0.1.0a0`). APIs may change without notice between releases. Do not use in production without thorough testing.

Manifest-first graph runtime for **Azure Functions** with **Durable Functions** orchestration.

---

Part of the **Azure Functions Python DX Toolkit**
→ Bring FastAPI-like developer experience to Azure Functions

## Why this exists

Running graph-shaped workflows on Azure Functions is harder than it should be:

- **Orchestrator determinism** — Durable Functions orchestrators must be…
