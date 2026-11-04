---
repo: "terrysimons/glitchygames"
name: "glitchygames"
description: "GlitchyGames is a Python3 native Pygame engine and tool kit that focuses on code readability and ease of use.  It includes a scene manager, enhanced sprite functionality, and enhanced event handling."
readmeQualityOk: true
url: "https://github.com/terrysimons/glitchygames"
language: "Python"
languages: ["Python"]
languagePcts: [99]
stars: 5
forks: 0
openIssues: 0
closedIssues: 5
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2019-06-17T07:07:48Z"
lastCommitAt: "2026-11-04T08:03:27Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 99
undervaluedScore: 73
maintainers: ["terrysimons"]
openGraphImageUrl: "https://opengraph.githubassets.com/031a5230b61a3e7d7947ec1345b8d819690e90eca4d77afd472d73ed509e3766/terrysimons/glitchygames"
---

# GlitchyGames Engine

A Python 3.14 game engine built on Pygame with an event-driven architecture. Includes Bitmappy, a full-featured pixel art editor with animation support, AI sprite generation, and voice recognition.

## Getting Started

### Prerequisites

- Python 3.14+
- [uv](https://docs.astral.sh/uv/) (recommended package manager)

### Installation

```bash
# Clone the repository
git clone https://github.com/terrysimons/glitchygames.git
cd glitchygames

# Install core dependencies (--all-packages: the workspace members too, every game under
# src/games/ and every app under src/apps/)
uv sync --all-packages

# Install with dev extras (testing, linting, type checking, security scanning)
uv sync --extra dev --all-packages

# Install with documentation extras (MkDocs)
uv sync --extra docs --all-packages

# Install everything: the engine, every game, every app and the dev tools (what development uses)
uv sync --all-extras --all-groups --all-packages
```

Every game and app is its own package (a [uv workspace](https://docs.astral.sh/uv/concepts/projects/workspaces/)
member under `src/games/` or `src/apps/`, depending on `glitchygames` like any third-party game;…
