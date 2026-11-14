---
repo: "albertas/deadcode"
name: "deadcode"
description: "Find and fix unused Python code using command line."
readmeQualityOk: true
url: "https://github.com/albertas/deadcode"
language: "Python"
languages: ["Python"]
languagePcts: [99]
topics: ["auto-fix", "code-quality", "deadcode", "lithuanian", "python", "unused-code"]
stars: 178
forks: 14
openIssues: 2
closedIssues: 34
watchers: 2
contributors: 4
recentReleases: 1
createdAt: "2023-06-18T19:24:56Z"
lastCommitAt: "2026-11-14T10:47:14Z"
lastReleaseAt: "2026-11-11T07:30:31Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 99
undervaluedScore: 43
maintainers: ["albertas", "dependabot[bot]", "Ujas-PersistentCoder"]
openGraphImageUrl: "https://opengraph.githubassets.com/39664cd00be5c1a2a5862153d76c9ca0b226dd954ae757e05056309fc209a35e/albertas/deadcode"
---

## Installation
```shell
pip install deadcode
```

## Usage

> **Full documentation:** [deadcode.readthedocs.io](https://deadcode.readthedocs.io/)

To see unused code findings:
```shell
deadcode .
```

To see suggested fixes for all files:
```shell
deadcode . --fix --dry
```

To see suggested fixes only for `foo.py` file:
```shell
deadcode . --fix --dry --only foo.py
```

To fix:
```shell
deadcode . --fix
```

Tune out some of the false positives, e.g.:
```
deadcode . --exclude=venv,tests --ignore-names=BaseTestCase,*Mixin --ignore-names-in-files=migrations
```

The same options can be provided in `pyproject.toml` settings file:
```
[tool.deadcode]
exclude = ["venv", "tests"]
ignore-names = ["BaseTestCase", "*Mixin"]
ignore-names-in-files = ["migrations"]
ignore-names-if-inherits-from = ["BaseModel", "*.ObjectType"]
```

## Using deadcode on a FastAPI project

FastAPI registers handlers through decorators and populates Pydantic model fields at runtime, so both look unused to a static analyser.
Configure deadcode like this:

```toml
[tool.deadcode]
ignore-names-if-decorated-with = ["@app.*", "@router.*"]
ignore-bodies-if-inherits-from = ["BaseModel"]
```

Read the [FastAPI…
