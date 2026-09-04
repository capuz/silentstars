---
repo: "pass-culture/data-gcp"
name: "data-gcp"
description: "Repo pour la team data sur GCP"
readmeQualityOk: true
url: "https://github.com/pass-culture/data-gcp"
language: "Python"
languages: ["Python"]
languagePcts: [96]
stars: 7
forks: 2
openIssues: 0
closedIssues: 3
watchers: 1
contributors: 51
recentReleases: 0
createdAt: "2020-10-16T08:54:10Z"
lastCommitAt: "2026-09-04T08:11:23Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero"]
healthScore: 99
undervaluedScore: 80
maintainers: ["tdurmus-pass", "cibrahim-pass", "cdelabre-pass"]
openGraphImageUrl: "https://opengraph.githubassets.com/48558eb45f8590e5225294d38e81abb02e0f7286bb75ed841fc430fee19a1615/pass-culture/data-gcp"
---

# Data GCP 🚀

> Data Engineering Platform for Pass Culture on Google Cloud Platform (GCP)

## 📚 Overview

This repository contains the core components of our data platform:

- **Airflow DAGs** for workflow orchestration
- **DBT models** for data transformation
- **ML models** for machine learning services
- **ETL jobs** for data processing

## 📖 Documentation

- [Project Overview](https://pass-culture.github.io/data-gcp/) - Main data models, glossary, and technical references
- [Orchestration Guide](https://github.com/pass-culture/data-gcp/blob/HEAD/orchestration/README.md) - Airflow DAGs documentation
- [Structure and Data Flow](https://github.com/pass-culture/data-gcp/blob/HEAD/docs/project_structure_and_data_flow.md) - Deep dive into project folders and data lifecycle
- [CI/CD Documentation](https://github.com/pass-culture/data-gcp/blob/HEAD/.github/workflows/README.md) - Deployment and pipeline details

## 🏗️ Architecture

```
+-- orchestration
| +-- dags
|    +-- dependencies
|    +-- jobs
|    +-- data_gcp_dbt
+-- jobs
| +-- etl_jobs
|   +-- external
|     +-- ...
|   +-- internal
|     +-- ...
| +-- ml_jobs
|   +-- ...
```

## 🚀 Getting Started

### Prerequisites

-…
