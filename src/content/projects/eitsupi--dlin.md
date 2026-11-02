---
repo: "eitsupi/dlin"
name: "dlin"
description: "Give coding agents instant dbt lineage — no dbt compile, no Python, no grep."
readmeQualityOk: true
url: "https://github.com/eitsupi/dlin"
language: "Rust"
languages: ["Rust"]
languagePcts: [96]
topics: ["dbt", "dbt-core", "rust", "cli"]
stars: 17
forks: 0
openIssues: 1
closedIssues: 4
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-03-05T12:54:21Z"
lastCommitAt: "2026-11-02T15:17:07Z"
lastReleaseAt: "2026-05-22T17:30:20Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 94
undervaluedScore: 49
maintainers: ["eitsupi", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/a7c07836617a1d9ba3bcf55ca25f2368c4606b38e676013e44027fc853c9b071/eitsupi/dlin"
---

# dlin

dbt model lineage CLI. Parses SQL files directly or reads a compiled `manifest.json`. No Python required.

Works for developers navigating live SQL files, analysts exploring a shared manifest, AI agents via CLI prompt or MCP server, and CI pipelines.

Column-level lineage (`dlin column upstream` / `dlin column downstream`) requires a compiled `manifest.json` and is usable in practice while remaining Experimental for coverage reasons.

## Motivation

When I edited dbt models in VS Code, [dbt Power User](https://marketplace.visualstudio.com/items?itemName=innoverio.vscode-dbt-power-user) was my go-to companion for navigating lineage. AI agents have no such companion. I watched them `grep` through dbt projects to find model dependencies. It works, but they end up calling `grep` repeatedly and relying on fragile string matching to piece together `ref()` and `source()` relationships.

dlin is designed to fill that gap: a CLI tool that lets AI agents understand a dbt project's structure without falling back to `grep`. It is equally useful for humans, and its stdin/stdout interface makes it easy to combine with `jq`, `git diff`, and other CLI tools.

To replace `grep`, speed and…
