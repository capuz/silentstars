---
repo: "SilvioBaratto/optimizer"
name: "optimizer"
description: "LLM agents decide, skfolio optimizes, you approve. Portfolio optimization with a market-data pipeline and paper trading."
readmeQualityOk: true
url: "https://github.com/SilvioBaratto/optimizer"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["ai", "quantfinance", "skfolio"]
stars: 177
forks: 12
openIssues: 35
closedIssues: 1009
watchers: 4
contributors: 2
recentReleases: 0
createdAt: "2026-02-17T15:15:16Z"
lastCommitAt: "2026-11-03T10:51:47Z"
status: "thriving"
tags: ["solo_builder", "under_pressure"]
healthScore: 93
undervaluedScore: 34
maintainers: ["SilvioBaratto", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/211a111508e97650d994388bd146640bde2d66ca0fd7cd8bd6c2682b009cef55/SilvioBaratto/optimizer"
---

# Optimizer

> Portfolio optimization in one **uv workspace**: a composable skfolio /
> scikit-learn optimization **library**, a scheduled market-data **ingestion
> daemon** that keeps PostgreSQL fresh, a shared **database layer**, and an agentic
> **fund** where an LLM chooses, the optimizer computes, and paper trades wait
> behind human approval gates — four packages, one shared virtual environment.

---

## What's in here

`optimizer` is not a single program — it is a workspace of four cooperating
Python packages that share one virtual environment but keep strict import
boundaries:

| You want to… | Use | Needs a database / Docker? |
|---|---|---|
| Build and tune portfolio-optimization pipelines in your own code | the **`optimizer`** library (`portopt-core`) | **No** — pure Python (numpy/pandas/skfolio) |
| Keep a PostgreSQL store of market / fundamental / macro data fresh on a schedule | the **`portopt`** ingestion daemon | Yes — PostgreSQL (via Docker) |
| Share models, repositories and migrations across packages | the **`portopt-db`** layer | Yes — it *is* the DB layer |
| Run an LLM-driven fund manager that decides and lets the optimizer compute | the **`fund`** bridge…
