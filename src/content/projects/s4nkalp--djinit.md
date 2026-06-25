---
repo: "S4NKALP/djinit"
name: "djinit"
description: "A command-line tool to quickly set up a production-ready Django project structure."
url: "https://github.com/S4NKALP/djinit"
homepage: "https://pypi.org/project/djinitx/"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["django", "django-starter-template", "backend", "django-project", "project-bootstrapping", "starter-template"]
stars: 5
forks: 0
openIssues: 0
closedIssues: 1
watchers: 1
contributors: 1
recentReleases: 2
createdAt: "2025-10-28T13:44:11Z"
lastCommitAt: "2026-06-25T06:41:01Z"
lastReleaseAt: "2026-05-28T05:05:35Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 98
undervaluedScore: 71
maintainers: ["S4NKALP", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/0795dab40d6b7e3ed80fed36facd353fdcbe6fc18171f6ac7f1016ae0eaac144/S4NKALP/djinit"
discussionCount: 0
---

# djinit

> PyPI didn't allow the original name, so you'll find it as **djinitx** on PyPI

</div>

A CLI that scaffolds production-ready Django projects with DRF, JWT auth, API docs, and deployment configs - all through an interactive wizard. No more copy-pasting settings or wiring up apps by hand.

```bash
pipx install djinitx
djinit setup
```

## Installation

```bash
# Recommended - isolated environment
pipx install djinitx

# Or with uv
uv tool install djinitx

# Or with pip
pip install djinitx
```

Requires Python 3.13+.

## Usage

### Create a project

```bash
djinit setup
# or
dj setup
```

The wizard walks you through these choices:

1. **Project structure** - Standard, Predefined (`apps/` + `api/`), Unified (`core/` + `apps/`), or Single Folder
2. **Project name and directory**
3. **Database** - PostgreSQL or MySQL; `DATABASE_URL` or individual env vars
4. **Frontend tools** - Tailwind CSS, HTMX, and/or Vite (optional)
5. **Django apps** - Name them; optionally nest under an `apps/` package
6. **CI/CD** - GitHub Actions, GitLab CI, both, or none

When you're done, you have a fully configured Django project ready to run.

### Add apps later

```bash
djinit app users…
