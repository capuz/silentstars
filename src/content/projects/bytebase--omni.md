---
repo: "bytebase/omni"
name: "omni"
description: "SQL language infrastructure for multiple database engines"
readmeQualityOk: true
url: "https://github.com/bytebase/omni"
language: "Go"
languages: ["Go"]
languagePcts: [98]
stars: 19
forks: 8
openIssues: 3
closedIssues: 2
watchers: 0
contributors: 6
recentReleases: 0
createdAt: "2026-03-13T02:59:55Z"
lastCommitAt: "2026-11-13T05:39:35Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 88
undervaluedScore: 48
maintainers: ["d-bytebase", "rebelice"]
openGraphImageUrl: "https://opengraph.githubassets.com/bd720d6f864eab3b1c68d9c51d9b028b064ef41d560a8ea24c2907ff2c3dfefe/bytebase/omni"
---

# Omni

SQL toolchain for multiple database engines. Each engine provides a parser, AST, and additional components such as catalog simulation and semantic analysis -- all in pure Go with zero dependencies.

## Features

- **Zero dependencies** -- pure Go, no CGo, no generated code at runtime
- **Full AST** -- every parsed statement produces a complete abstract syntax tree
- **Position tracking** -- every AST node carries byte-offset location info
- **Beyond parsing** -- catalog simulation, DDL semantic analysis, and more per engine

## Engines

Every engine lives in its own top-level directory and follows the same shape: `ast/` holds the node types, `parser/` the hand-written recursive descent parser, and further packages add capabilities on top. The table lists the packages each engine ships today.

| Engine | Directory | Packages beyond `ast` + `parser` |
|--------|-----------|----------------------------------|
| PostgreSQL | `pg/` | `catalog`, `completion`, `plpgsql`, `pgregress`, `splittest` |
| Amazon Redshift | `redshift/` | `catalog`, `completion`, `analysis`, `plpgsql`, `compat`, `pgregress` |
| MySQL | `mysql/` | `catalog`, `completion`, `deparse`, `validate`, `scope`,…
