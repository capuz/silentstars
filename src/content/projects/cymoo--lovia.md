---
repo: "cymoo/lovia"
name: "lovia"
description: "A lightweight and elegant AI Agent framework"
readmeQualityOk: true
url: "https://github.com/cymoo/lovia"
homepage: "https://cymoo.github.io/lovia"
language: "Python"
languages: ["Python", "JavaScript"]
languagePcts: [75, 21]
topics: ["agent", "agent-framework", "ai", "ai-sdk", "harness", "harness-engineering"]
stars: 19
forks: 2
openIssues: 54
closedIssues: 42
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-05-22T17:52:11Z"
lastCommitAt: "2026-11-26T12:50:57Z"
lastReleaseAt: "2026-08-03T16:59:05Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 89
undervaluedScore: 42
maintainers: ["cymoo"]
openGraphImageUrl: "https://opengraph.githubassets.com/4cbca38b05efd428f6e513aac46276444a3cd8922f0034ce1bf999b5ad707b88/cymoo/lovia"
---

# lovia

**English** | [简体中文](https://github.com/cymoo/lovia/blob/main/README-zh.md)

**One agent loop, three ways to use it.** lovia is a Python agent framework you
can import as a library, run as a ready-made assistant in your browser, or take
apart to build your own. Each layer is built on the one below, so going from a
script to a product never means switching frameworks. The core depends only on
`httpx`, `pydantic` and `pyyaml`; everything else is opt-in.

| Use lovia as… | What you get | Start with |
| --- | --- | --- |
| [**A library**](https://github.com/cymoo/lovia#a-library) | An agent loop in ordinary Python: tools, streaming, sessions, approvals, context management | `pip install lovia` |
| [**A ready-made harness**](https://github.com/cymoo/lovia#a-ready-made-harness-lovia-web) | A local assistant that works in your project folders, with files, shell, memory, skills and MCP | `pip install "lovia[web]"`, then `lovia web` |
| [**The base for your own**](https://github.com/cymoo/lovia#the-base-for-your-own-harness) | That assistant as a toolkit: add tools, brand the page, add views, or keep only the API | `lovia[web]`, then `default_app()` or `create_app()` |
