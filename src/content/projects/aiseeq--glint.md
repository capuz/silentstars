---
repo: "aiseeq/glint"
name: "glint"
description: "Fast, configurable static analyzer for Go projects"
readmeQualityOk: true
url: "https://github.com/aiseeq/glint"
language: "Go"
languages: ["Go"]
languagePcts: [100]
stars: 22
forks: 5
openIssues: 0
closedIssues: 5
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-01-08T12:22:08Z"
lastCommitAt: "2026-10-16T08:26:39Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 90
undervaluedScore: 56
maintainers: ["aiseeq"]
openGraphImageUrl: "https://opengraph.githubassets.com/1a021e0b2211c755f4ce19ac73b97126dbba8a253a9a2f706f1dd02783bd2e7a/aiseeq/glint"
---

# Glint

Fast, configurable static analyzer for Go projects.

Originally built to help AI agents understand codebases, but useful for any project.

## Features

- **Rules in 8 categories** — architecture, duplication, patterns, typesafety, security, deadcode, naming, documentation (`glint rules` prints the authoritative list)
- **Auto-fix support** — automatic fixes for common issues (v1.1+)
- **Single-pass analysis** — files are read and parsed once, AST is cached
- **Parallel execution** — reading, parsing and rule evaluation use all CPU cores; findings stay byte-for-byte reproducible
- **YAML configuration** — with `extends` inheritance, severity overrides and per-rule exceptions
- **Multiple output formats** — console, JSON, summary (optimized for AI agents)
- **Go and TypeScript support** — regex and AST-based analysis

## Installation

```bash
go install github.com/aiseeq/glint/cmd/glint@latest
```

This build needs no C compiler: the SQL rules parse with libpg_query compiled
to WebAssembly, which adds about a second and a few hundred MB to a run that
parses SQL. Where a C compiler (gcc or clang) is installed and cgo is on,
build the native parser instead:

```bash
go…
