---
repo: "phel-lang/web-skeleton"
name: "web-skeleton"
description: "A simple skeleton to build a website using Phel."
readmeQualityOk: true
url: "https://github.com/phel-lang/web-skeleton"
homepage: "https://phel-lang.org/"
language: "Shell"
languages: ["Shell", "PHP"]
languagePcts: [37, 35]
topics: ["functional-programming", "phel-lang", "scaffolding", "webapp", "php", "phel"]
stars: 16
forks: 2
openIssues: 0
closedIssues: 14
watchers: 2
contributors: 6
recentReleases: 0
createdAt: "2023-01-22T11:18:20Z"
lastCommitAt: "2026-11-15T11:19:01Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 91
undervaluedScore: 54
maintainers: ["Chemaclass"]
openGraphImageUrl: "https://opengraph.githubassets.com/c07a52d4b158baa838ecd7eda872c8a9ffe143a6d545bead0b48488334308c58/phel-lang/web-skeleton"
---

# Phel Web Skeleton

A small web app starter in [Phel](https://phel-lang.org/), a functional Lisp that compiles to PHP.

You get routing, JSON and HTML responses, middleware, request validation, tests, CI, and Docker images for development and production, in a handful of `.phel` files.

## Quick start

You need PHP 8.5 or newer and [Composer](https://getcomposer.org/).

The skeleton requires phel-lang `^1.0.0-rc3` to test the 1.0 release candidate. Pin a stable release before you ship an app.

```bash
composer install
composer run:dev    # http://localhost:8080, recompiles on every request
```

Try the sample routes:

| Request            | What it shows                                         |
| ------------------ | ----------------------------------------------------- |
| `GET /`            | HTML page built with `phel.html`                      |
| `GET /ping`        | JSON response                                         |
| `POST /ping`       | Echoes the parsed JSON body                           |
| `GET /greet/:name` | Path parameter checked with `phel.schema`             |
| `POST /greet`      | JSON body checked with `phel.schema`                  |
| anything else…
