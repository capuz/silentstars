---
repo: "kak-smko/renus"
name: "renus"
description: "Renus is an async-first Python ASGI framework for APIs and realtime services, with built-in ORM, caching, scheduling, WebSockets, and CLI — lightweight core, batteries included."
readmeQualityOk: true
url: "https://github.com/kak-smko/renus"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["python", "python-framework", "python-frameworks", "python3", "renus"]
stars: 8
forks: 2
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 9
createdAt: "2022-12-05T10:06:04Z"
lastCommitAt: "2026-11-05T08:05:34Z"
lastReleaseAt: "2026-11-03T13:02:44Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 89
undervaluedScore: 80
maintainers: ["kak-smko", "github-actions[bot]", "nadia102"]
openGraphImageUrl: "https://opengraph.githubassets.com/5b9b20bbe0c68d235ad55ddd5cbb041d43d38724ff11e86514aaf6c50ad820ca/kak-smko/renus"
---

# Renus

**An async-first Python ASGI framework with routing, WebSockets, ORM, caching,
scheduling, and CLI tools in one small core.**

- **Documentation:** [codenus.com/renus](https://codenus.com/renus)
- **Source:** [github.com/kak-smko/renus](https://github.com/kak-smko/renus)

## Features

- ASGI application support for HTTP, WebSockets, and lifespan events
- Decorator-based and fluent routing with typed path parameters
- Text, HTML, JSON, redirect, file, streaming, and private responses
- Application, router, and route-level middleware
- Request parsing for headers, cookies, query parameters, JSON, forms, and uploads
- Built-in XSS protection for form and WebSocket input helpers
- Background tasks and startup/shutdown hooks
- File- and Redis-backed caching, including route and function caching
- Async ORM with models, validation, repositories, queries, mutations, and transactions
- SQLite, MySQL, and MongoDB integrations through optional dependencies
- Database migrations, backup/restore, and plugin hooks
- Fluent task scheduling and a built-in `renus` CLI

## Installation

Renus requires Python 3.11 or newer. Install the core package with pip:

```bash
python -m pip install…
