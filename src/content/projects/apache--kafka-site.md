---
repo: "apache/kafka-site"
name: "kafka-site"
description: "Mirror of Apache Kafka site"
readmeQualityOk: true
url: "https://github.com/apache/kafka-site"
language: "HTML"
languages: ["HTML"]
languagePcts: [100]
topics: ["scala", "kafka"]
stars: 90
forks: 406
openIssues: 0
closedIssues: 0
watchers: 28
contributors: 61
recentReleases: 0
createdAt: "2015-08-25T07:00:05Z"
lastCommitAt: "2026-09-29T10:04:01Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero", "fork_magnet"]
healthScore: 85
undervaluedScore: 42
maintainers: ["dependabot[bot]", "bbejeck", "mimaison"]
openGraphImageUrl: "https://opengraph.githubassets.com/00f11f335297f47bc6bad566b2a89d2062e185238001e60f39f28211ac3761ef/apache/kafka-site"
---

# Apache Kafka Documentation Website

This repository contains the source for the Apache Kafka documentation website. The site is built using [Hugo](https://gohugo.io/) with the [Docsy](https://www.docsy.dev/) theme, providing a modern, maintainable, and feature-rich documentation experience.

## Structure of the Website

### Documentation Versioning

The documentation is organized by Kafka versions in the `content/en` directory:

```
content/en/
├── _index.md                 # Landing page
├── 42/                       # Latest version (4.2)
│   ├── apis/
│   ├── configuration/
│   ├── design/
│   └── ...
├── 41/                       # Previous version (4.1)
├── 40/                       # Version 4.0
└── ...
```

Each version directory contains the complete documentation for that specific Kafka release. The latest version (currently 4.2) is the default documentation shown to users.

> **Important**: The version-specific documentation (under directories like `42/`, `41/`, etc.) is sourced from the corresponding release branches in the [apache/kafka](https://github.com/apache/kafka) repository. The `docs` directory in each branch serves as the source of truth. During the website…
