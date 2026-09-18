---
repo: "cleder/gpc-init"
name: "gpc-init"
description: "Initialize a prek/pre-commit yaml with recommended checks"
readmeQualityOk: true
url: "https://github.com/cleder/gpc-init"
language: "Python"
languages: ["Python"]
languagePcts: [81]
topics: ["pre-commit", "pre-commit-hooks"]
stars: 8
forks: 6
openIssues: 5
closedIssues: 9
watchers: 0
contributors: 5
recentReleases: 0
createdAt: "2026-06-16T15:30:38Z"
lastCommitAt: "2026-09-18T14:02:56Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "fork_magnet"]
healthScore: 88
undervaluedScore: 58
maintainers: ["cleder", "pre-commit-ci[bot]", "ThibautMelen"]
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

## Alternatives

If you'd rather run one all-in-one Docker-based linter instead of wiring up individual pre-commit hooks, see [MegaLinter](https://github.com/oxsecurity/megalinter). `pc-init` takes the opposite approach: it generates a `.pre-commit-config.yaml` of individually-pinned, curated…
