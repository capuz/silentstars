---
repo: "basefoundry/base"
name: "base"
description: "Mac-first workspace orchestrator for bootstrapping developer environments, managing shell startup, and coordinating commands across peer project repos."
url: "https://github.com/basefoundry/base"
language: "Python"
languages: ["Python", "Shell"]
languagePcts: [52, 48]
topics: ["automation", "bash-scripts", "bootstrap", "cli", "dev-environment", "developer-tools", "dotfiles-macos", "homebrew", "macos", "multi-repo"]
stars: 116
forks: 13
openIssues: 11
closedIssues: 524
watchers: 6
contributors: 3
recentReleases: 10
createdAt: "2019-03-09T23:26:24Z"
lastCommitAt: "2026-06-27T00:34:32Z"
lastReleaseAt: "2026-06-14T14:49:20Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero", "release_machine"]
healthScore: 99
undervaluedScore: 50
maintainers: ["codeforester"]
openGraphImageUrl: "https://opengraph.githubassets.com/f16d9b3133f38bf527aaa98e7adadbcafbd79a8478dc7cf6c93b230b6c766529/basefoundry/base"
discussionCount: 0
---

# Base

![Tests](https://github.com/basefoundry/base/actions/workflows/tests.yml/badge.svg)
![Lint](https://github.com/basefoundry/base/actions/workflows/pylint.yml/badge.svg)
![Platform: macOS](https://img.shields.io/badge/platform-macOS-lightgrey)
![Version](https://img.shields.io/badge/version-1.2.0-blue)

Base is a workspace control plane for developers who keep multiple repositories
checked out side by side.

It gives that workspace one common layer for setup, diagnostics, project
discovery, shell activation, and test execution without turning the workspace
into a monorepo or moving project-specific logic into Base.

## Why Base Exists

Most real engineering environments are not a single repository.

A developer may need:

- one repo for shared tooling
- several project repos checked out side by side
- a consistent shell environment across machines
- common shell and Python helper libraries
- a clean way to run project commands through wrappers instead of directly

Base exists to provide that missing common layer.

For a concise evaluator view of where Base fits, what it gives a multi-repo
workspace, and how it compares with adjacent tools, see
[Why Base](docs/why-base.md).…
