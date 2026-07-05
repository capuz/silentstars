---
repo: "Team-Deepiri/diri-helox"
name: "diri-helox"
description: "Deepiri's Model fine-tuning and model versioning framework"
readmeQualityOk: true
url: "https://github.com/Team-Deepiri/diri-helox"
language: "Python"
languages: ["Python"]
languagePcts: [98]
stars: 8
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 23
recentReleases: 0
createdAt: "2025-12-11T17:02:25Z"
lastCommitAt: "2026-07-05T20:55:27Z"
status: "thriving"
tags: []
healthScore: 88
undervaluedScore: 47
maintainers: ["jrb00013", "dependabot[bot]", "Nathan-123"]
openGraphImageUrl: "https://opengraph.githubassets.com/6aec633ae33864beb25ba38944a7f168bf012edf13207f915be1037f71e39df5/Team-Deepiri/diri-helox"
---

# Diri-Helox:

## Structure

```
diri-helox/
├── pipelines/          # Training pipelines
├── experiments/        # Research notebooks
├── data/              # Data management
├── models/            # Model checkpoints
├── mlops/             # MLOps tools
├── scripts/           # Training scripts
└── utils/             # Utilities
```

## Setup

This project uses [Poetry](https://python-poetry.org/) for dependency management.

### Prerequisites

Install Poetry if you haven't already:
```bash
curl -sSL https://install.python-poetry.org | python3 -
```

Or on Windows (PowerShell):
```powershell
(Invoke-WebRequest -Uri https://install.python-poetry.org -UseBasicParsing).Content | python -
```

### Installation

```bash
# Install all dependencies (production + dev)
poetry install

# Install only production dependencies
poetry install --no-dev

# Install with optional groups
poetry install --with visualization,optional
```

### Using Poetry

```bash
# Activate the virtual environment
poetry shell

# Run commands within the Poetry environment
poetry run python scripts/train_task_classifier.py

# Add a new dependency
poetry add…
