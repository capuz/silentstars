---
repo: "emacs-taf/emacs-taf"
name: "emacs-taf"
description: "Workspace orchestration, development policy and integration checkpoints for the ETAF ecosystem"
readmeQualityOk: true
url: "https://github.com/emacs-taf/emacs-taf"
homepage: "https://etaf.top"
language: "Python"
languages: ["Python", "Emacs Lisp"]
languagePcts: [75, 23]
topics: ["development-tooling", "emacs", "workspace"]
stars: 24
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-10-12T16:52:54Z"
lastCommitAt: "2026-11-27T16:25:02Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 39
maintainers: ["Kinneyzhang"]
openGraphImageUrl: "https://opengraph.githubassets.com/ee02eff04cb6aacff8e300fee95e5954ceb4e5308c197050418a5394fc23f3df/emacs-taf/emacs-taf"
discussionCount: 0
---

# Emacs TAF workspace

[中文](https://github.com/emacs-taf/emacs-taf/blob/HEAD/README.zh-CN.md)

This repository owns the shared development policy and orchestration for the
Emacs TAF ecosystem: its framework packages, applications and games. Every
package is a directory under `packages/` in one Jujutsu checkout, registered in
`workspace.json`; each still publishes as its own repository with its own
version, public interfaces, releases and behavior checks.

## Development

This repository (`https://github.com/emacs-taf/emacs-taf`) is the public monorepo
and canonical entry point for development and pull requests across the ETAF
ecosystem. Every registered package lives under `packages/`, so a single change
and PR can span a provider and the applications that consume it.
