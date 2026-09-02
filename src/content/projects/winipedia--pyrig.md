---
repo: "Winipedia/pyrig"
name: "pyrig"
description: "A tool that standardizes and automates Python project setup, configuration, development, and maintenance."
readmeQualityOk: true
url: "https://github.com/Winipedia/pyrig"
homepage: "https://Winipedia.github.io/pyrig"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["automation", "boilerplate", "ci-cd", "code-quality", "configuration", "developer-tools", "devops", "project-template", "scaffolding", "project-setup"]
stars: 47
forks: 2
openIssues: 12
closedIssues: 83
watchers: 2
contributors: 1
recentReleases: 0
createdAt: "2025-11-17T17:54:34Z"
lastCommitAt: "2026-09-02T08:04:35Z"
lastReleaseAt: "2025-11-19T00:19:16Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "under_pressure"]
healthScore: 97
undervaluedScore: 47
maintainers: ["Winipedia"]
openGraphImageUrl: "https://opengraph.githubassets.com/312ad4670a938778e8fd2ebf49c592f440d6cbd00dfa447beacc8e093c750478/Winipedia/pyrig"
---

# pyrig

---

> A tool that standardizes and automates Python project setup, configuration, development, and maintenance.

---

## What is pyrig?

pyrig is a package and tool that **rigs up** Python projects with Convention-over-Configuration.
It scaffolds a complete, fully configured, installed and working Python project
with everything a modern Python project **should** have and makes the process of
developing and maintaining it more seamless and efficient by automating things
like configuration management, CLI generation, testing infrastructure, and more.

## Requirements

- Python 3.12+
- Git
- uv

## Quick Start

```bash
uv init my-project --python 3.12
cd my-project
uv add pyrig --dev
uv run pyrig init
```

See the [Getting Started Guide](https://Winipedia.github.io/pyrig/getting-started)
for detailed setup instructions to also fully integrate with GitHub and
CI/CD from the start.

## Features

### [Project Scaffolding & Initialization](https://Winipedia.github.io/pyrig/scaffolding)

The `pyrig init` command generates a complete project, this includes, but is not
limited to:

- Standardized directory structure
- Fully configured dev tools (linters, formatters, type checkers,…
