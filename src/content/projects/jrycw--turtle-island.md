---
repo: "jrycw/turtle-island"
name: "turtle-island"
description: "A Utility Kit for Polars Expressions"
readmeQualityOk: true
url: "https://github.com/jrycw/turtle-island"
homepage: "https://jrycw.github.io/turtle-island/"
language: "Python"
languages: ["Python"]
languagePcts: [99]
topics: ["polars", "python"]
stars: 10
forks: 0
openIssues: 4
closedIssues: 12
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2024-09-12T08:02:28Z"
lastCommitAt: "2026-10-12T11:13:48Z"
lastReleaseAt: "2025-08-29T11:08:46Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 94
undervaluedScore: 63
maintainers: ["jrycw"]
openGraphImageUrl: "https://opengraph.githubassets.com/05e78962f2b21269cd74c1958b38130f6245c33f60cccb0a8e007fb9147b1683/jrycw/turtle-island"
---

# 🐢 Turtle Island

**Turtle Island** is a lightweight utility library that provides helper functions to reduce boilerplate when writing [Polars](https://pola.rs) expressions. It aims to simplify common expression patterns and improve developer productivity when working with the Polars API.

> ⚠️ **Disclaimer**: This project is in early development. The API is still evolving and may change without notice. Use with caution in production environments.

## 🚀 Installation
**Turtle Island** is not yet published on PyPI. The recommended way to install it is using `uv add`:

```bash
uv add git+https://github.com/jrycw/turtle-island.git
```

## 📦 Recommended Import
To keep your code clean and idiomatic, it's recommended to import **Turtle Island** as a top-level module:

```python
import turtle_island as ti
```

## ⚙️ Core Spirit
The core spirit of **Turtle Island** is to embrace **expressions over columns**.

When wrangling data, it's common to create temporary helper columns as part of the transformation process. However, many of these columns are just intermediate artifacts — not part of the final output we actually want. They exist solely to assist with intermediate steps.

Polars…
