---
repo: "cleder/gpc-init"
name: "gpc-init"
description: "Initialize a prek/pre-commit yaml with recommended checks"
url: "https://github.com/cleder/gpc-init"
language: "Python"
languages: ["Python"]
languagePcts: [75]
topics: ["pre-commit", "pre-commit-hooks"]
stars: 5
forks: 2
openIssues: 3
closedIssues: 6
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-06-16T15:30:38Z"
lastCommitAt: "2026-06-26T21:31:38Z"
status: "newborn"
tags: ["solo_builder", "needs_contributors", "hidden_gem"]
healthScore: 93
undervaluedScore: 56
maintainers: ["cleder", "slackline", "Copilot"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1271361105/da8e810b-3379-4bc0-b265-7486aa9e1523"
---

# pc-init

Generate a [pre-commit](https://pre-commit.com/) or [prek](https://github.com/j178/prek/) `.pre-commit-config.yaml` for your project from curated language and framework presets — so you get the right linters, formatters, and quality tools wired up with a single command instead of copying configs between repos.
Works with [prek](https://github.com/j178/prek/) and [pre-commit](https://pre-commit.com/)

## Motivation

Every new repository needs a `.pre-commit-config.yaml`.
Each language and framework has its own recommended linters, formatters, and quality tools, each with its own hook URL and revision.
`pc-init` encodes those choices in version-controlled presets so you run one command instead of copying configs and looking up hook URLs.
The bundled presets pin specific hook revisions — run `pre-commit autoupdate` or `prek autoupdate` after generation to pull in the latest versions.

## Awesome Pre-commit Hooks

The curated hooks bundled with `pc-init` are also published as a standalone reference at [awesome-pre-commit-hooks](https://github.com/cleder/awesome-pre-commit-hooks) — a browsable list of every hook organised by language and framework.

## Installation

```bash…
