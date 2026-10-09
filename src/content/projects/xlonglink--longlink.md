---
repo: "xLongLink/longlink"
name: "longlink"
description: "Code-first platform for building and operating dedicated solutions."
readmeQualityOk: true
url: "https://github.com/xLongLink/longlink"
homepage: "https://longlink.dev"
language: "Python"
languages: ["Python", "TypeScript"]
languagePcts: [53, 42]
topics: ["python", "fastapi", "platform", "business-applications", "developer-tools", "internal-tools", "workflow-automation"]
stars: 28
forks: 3
openIssues: 20
closedIssues: 83
watchers: 0
contributors: 5
recentReleases: 9
createdAt: "2026-01-06T00:25:10Z"
lastCommitAt: "2026-10-09T18:55:55Z"
lastReleaseAt: "2026-07-27T16:27:09Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 96
undervaluedScore: 58
maintainers: ["Sau1707", "dependabot[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1128645108/440969c2-abc8-4bcf-8e08-eb75220ea7d2"
discussionCount: 0
---

> [!WARNING]
> LongLink is under active development. APIs may change before version 1.0.

## Introduction

LongLink helps you build and run applications with Python.

Use FastAPI, SQLModel, and Pydantic to define how your application works. LongLink handles users, access control, databases, storage, and deployment, so you don't have to build those services yourself.

## Create a Solution

Requirements: Python 3.12 or later and [`uv`](https://docs.astral.sh/uv/).

```bash
uvx --from longlink longlink init --folder . --ci github
uv sync --group dev
uv run longlink dev
```

Open `http://127.0.0.1:1707` to preview your Solution.

> [!NOTE]
> See the [sample Solution](https://github.com/xLongLink/sample) for a complete example.

```bash
python -m pip install longlink
longlink init --folder . --ci github
python -m venv .venv
source .venv/bin/activate
python -m pip install -e .
longlink dev
```

## How it works

`LongLink()` is a headless FastAPI application with the common runtime already configured. Your routes remain standard FastAPI routes, while `Context` provides access to the current user, database, and storage.

The same code runs in development, testing, and production. When…
