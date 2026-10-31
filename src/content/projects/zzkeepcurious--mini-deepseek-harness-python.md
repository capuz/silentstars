---
repo: "ZZKeepCurious/mini-deepseek-harness-python"
name: "mini-deepseek-harness-python"
description: "Educational re-implementation of DeepSeek Harness in pure Python stdlib — event sourcing, plugin bus, agent loop. For learning only."
readmeQualityOk: true
url: "https://github.com/ZZKeepCurious/mini-deepseek-harness-python"
homepage: "https://zzkeepcurious.github.io/mini-deepseek-harness-python/"
language: "Python"
languages: ["Python"]
languagePcts: [90]
stars: 5
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-08-14T14:55:53Z"
lastCommitAt: "2026-10-31T15:50:37Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 79
undervaluedScore: 54
maintainers: ["ZZKeepCurious"]
openGraphImageUrl: "https://opengraph.githubassets.com/47cd70f51d6505658711617f8657414e1def7f7ccc78d7be4ef55d59f0206d1c/ZZKeepCurious/mini-deepseek-harness-python"
---

# Mini DeepSeek Harness (Python)

English | [中文](https://github.com/ZZKeepCurious/mini-deepseek-harness-python/blob/HEAD/README.zh.md)

Full docs (MkDocs): https://zzkeepcurious.github.io/mini-deepseek-harness-python/ · In-repo hub [docs/index.md](https://github.com/ZZKeepCurious/mini-deepseek-harness-python/blob/HEAD/docs/index.md)

**Mini DeepSeek Harness** is a Python agent runtime that re-implements the core contracts of [DeepSeek Harness](https://github.com/deepseek-ai/deepseek-harness) (`dsh`, the open-source harness by [DeepSeek AI](https://deepseek.com)), aiming to be production-ready. It depends on `httpx`, `filelock`, `watchdog`, and `pyyaml`; the web transport layer is an optional extra: `pip install ".[web]"` (`fastapi` + `uvicorn`).

Upstream is built on **everything is a plugin** and [Cordis](https://github.com/cordiverse/cordis) ([_A Programming Paradigm for Spatiotemporal Composability_](https://github.com/cordiverse/paper)). This repo rebuilds the event-sourced session log, plugin event bus, turn/step agent loop, and the capability-seam triangle (Service Definition / Provider / Consumer).

> **Production-oriented re-implementation, not a byte-for-byte port.** Not…
