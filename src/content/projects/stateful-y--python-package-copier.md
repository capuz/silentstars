---
repo: "stateful-y/python-package-copier"
name: "python-package-copier"
description: "A Python package template repository based on copier that uses uv, ruff, ty, nox, and mkdocs"
readmeQualityOk: true
url: "https://github.com/stateful-y/python-package-copier"
homepage: "https://python-package-copier.readthedocs.io/en/latest/"
language: "Python"
languages: ["Python", "Jinja"]
languagePcts: [65, 34]
topics: ["packaging", "python", "template"]
stars: 5
forks: 1
openIssues: 3
closedIssues: 10
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2026-01-19T16:34:48Z"
lastCommitAt: "2026-09-20T08:45:15Z"
lastReleaseAt: "2026-02-04T21:18:34Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 95
undervaluedScore: 65
maintainers: ["stateful-y-renovate[bot]", "gtauzin", "stateful-y-automation[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/dc82be1f9adb774d201ece19f8690bf39b33ef0dcb253485911fbab0b41c0c6d/stateful-y/python-package-copier"
discussionCount: 0
---

<picture>
    <source media="(prefers-color-scheme: light)" srcset="https://raw.githubusercontent.com/stateful-y/python-package-copier/main/docs/assets/logo_light.png">
    <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/stateful-y/python-package-copier/main/docs/assets/logo_dark.png">
  </picture>
</p>

A modern, production-ready Python package template using [Copier](https://copier.readthedocs.io/). Save hours of setup time with best practices, modern tooling (uv, ruff, ty, pytest), and comprehensive CI/CD pipelines already configured.

📚 **[Full Documentation](https://python-package-copier.readthedocs.io/)**

## Quick Start

```bash
# Create a new package
uvx copier copy gh:stateful-y/python-package-copier my-package

# Initialize
cd my-package
uv sync --group dev
uv run pytest
```

## Features

- Fast package management with [uv](https://github.com/astral-sh/uv)
- Code formatting and linting with [ruff](https://github.com/astral-sh/ruff)
- Type checking with [ty](https://github.com/astral-sh/ty)
- Testing with [pytest](https://pytest.org/) and coverage via Codecov
- Documentation with [MkDocs…
