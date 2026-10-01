---
repo: "xLongLink/longlink"
name: "longlink"
description: "Code-first platform for building and operating business solutions."
readmeQualityOk: true
url: "https://github.com/xLongLink/longlink"
homepage: "https://longlink.dev"
language: "Python"
languages: ["Python", "TypeScript"]
languagePcts: [62, 34]
topics: ["python", "longlink", "fastapi", "platform", "business-applications", "developer-tools", "internal-tools", "workflow-automation", "business", "solutions"]
stars: 21
forks: 3
openIssues: 26
closedIssues: 69
watchers: 1
contributors: 5
recentReleases: 10
createdAt: "2026-01-06T00:25:10Z"
lastCommitAt: "2026-10-01T10:24:25Z"
lastReleaseAt: "2026-07-27T16:27:09Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 94
undervaluedScore: 60
maintainers: ["Sau1707", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/629ad7e048c4c1ddad526c600a3a077bc28afdabd4624fc3ac3bd2aa869a1cf0/xLongLink/longlink"
discussionCount: 0
---

<br />

</div>

<br />

## Introduction

LongLink is a code-first platform for building and operating process-specific business software with Python.

Build your Solution as a standard FastAPI application, using SQLModel for data and Pydantic for validation. LongLink provides the common runtime and services around the application: user management, permissions, database, storage, deployment, and logging.

The result is software you can develop, test, version, review, and change using normal engineering tools.

> [!WARNING]
> LongLink is under active development. APIs may change before 1.0.

<br />

## Create a Solution

Requirements: `Python 3.12` or newer and [`uv`](https://docs.astral.sh/uv/).

```bash
uvx --from longlink longlink init --folder .
uv sync --group dev
uv run longlink dev
```

Open `http://127.0.0.1:1707` to preview your Solution.

> [!NOTE]
> See the [sample Solution](https://github.com/xLongLink/sample) for a complete example.

<details>
<summary>What about classic pip?</summary>

```bash
python -m pip install longlink
longlink init --folder .
python -m venv .venv
source .venv/bin/activate
python -m pip install -e .
longlink dev
```

</details>

<br />

## How it…
