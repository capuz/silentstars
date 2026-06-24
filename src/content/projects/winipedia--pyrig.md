---
repo: "Winipedia/pyrig"
name: "pyrig"
description: "Pyrig is a toolkit that standardizes and automates Python project setup, configuration, development, and maintenance."
url: "https://github.com/Winipedia/pyrig"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 23
forks: 1
openIssues: 3
closedIssues: 69
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2025-11-17T17:54:34Z"
lastCommitAt: "2026-06-24T23:38:47Z"
lastReleaseAt: "2025-11-19T00:19:16Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 99
undervaluedScore: 46
maintainers: ["Winipedia"]
openGraphImageUrl: "https://opengraph.githubassets.com/a629adb19a0a60dc07cab2da64a6d7a04627cbf629472f3489699f8d9364bf68/Winipedia/pyrig"
---

# pyrig

---

> Pyrig is a toolkit that standardizes and automates Python project setup, configuration, development, and maintenance.

---

## What is pyrig?

pyrig is a package and tool that **rigs up** your project.
It scaffolds and initializes a complete, fully configured, installed and
working Python project with one command and makes the process of developing
and maintaining it more seamless and efficient by automating things like
configuration management, CLI generation, testing infrastructure, and more.

## Requirements

- Python 3.12+
- Git
- uv

## Quick Start

```bash
uv init
uv add pyrig
uv run pyrig init
```

See the [Getting Started Guide](https://Winipedia.github.io/pyrig/getting-started)
for detailed setup instructions to also fully integrate with GitHub and
CI/CD from the start.

## Features

### [Project Scaffolding & Initialization](https://Winipedia.github.io/pyrig/scaffolding)

`pyrig init` generates a complete project in one command that works out of the box.
This includes everything a modern python project needs:

- Standardized directory structure
- Fully configured dev tools (linters, formatters, type checkers, test
frameworks, git hooks, etc.)
- End-to-end…
