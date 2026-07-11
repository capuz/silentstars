---
repo: "c2siorg/dataloom"
name: "dataloom"
description: "Project is to design and implement a web-based GUI for data wrangling, aimed at simplifying the process of managing and transforming tabular datasets. This application will serve as a graphical interface for the powerful Python library, allowing users to perform complex data manipulation tasks without the need for in-depth programming knowledge. "
readmeQualityOk: true
url: "https://github.com/c2siorg/dataloom"
language: "Python"
languages: ["Python", "TypeScript", "JavaScript"]
languagePcts: [45, 29, 26]
stars: 24
forks: 88
openIssues: 42
closedIssues: 116
watchers: 4
contributors: 34
recentReleases: 0
createdAt: "2024-02-11T18:57:43Z"
lastCommitAt: "2026-07-11T05:57:09Z"
status: "thriving"
tags: ["hidden_gem", "fork_magnet"]
healthScore: 92
undervaluedScore: 69
maintainers: ["SHIVAM-KUMAR-59", "hanzalahwaheed", "nodesagar"]
openGraphImageUrl: "https://opengraph.githubassets.com/a841e823eac1ea1cf232eb9f3653d25b94de0b90dd7604520fbf03e2bd8deab5/c2siorg/dataloom"
---

# DataLoom

A web-based GUI for data wrangling — manage and transform tabular datasets (CSV, TSV, JSON, XLSX, Parquet) through a graphical interface powered by pandas, without writing code.

## Supported File Formats

- CSV (.csv)
- TSV (.tsv)
- JSON (.json)
- XLSX (.xlsx)
- Parquet (.parquet)

## Features

- Upload and manage datasets in CSV, TSV, JSON, XLSX, and Parquet formats through a graphical interface
- Apply pandas-powered transformations: filter, sort, pivot, deduplicate, and more
- Inline cell editing and row/column management
- Checkpoint system — save and revert dataset states
- Full action history tracking via change logs

## Prerequisites

- Node.js >= 18
- Python 3.12+
- [uv](https://docs.astral.sh/uv/) (Python package manager)
- PostgreSQL

## Getting Started

### Backend

```bash
cd dataloom-backend
cp .env.example .env          # Configure DB credentials
uv sync
uv run uvicorn app.main:app --reload --port 4200
```

### Frontend

```bash
cd dataloom-frontend
npm install
npm run dev
```

| Service  | Port |
|----------|------|
| Frontend | 3200 |
| Backend  | 4200 |

## Running Tests

```bash
# Backend
cd dataloom-backend && uv run pytest

# Frontend
cd…
