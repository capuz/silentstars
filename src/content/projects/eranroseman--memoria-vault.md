---
repo: "eranroseman/memoria-vault"
name: "memoria-vault"
description: "A research operating system — seven AI agents that read, enrich, and write inside your Obsidian vault under a human approval gate"
readmeQualityOk: true
url: "https://github.com/eranroseman/memoria-vault"
homepage: "https://eranroseman.github.io/memoria-vault/"
language: "Python"
languages: ["Python"]
languagePcts: [97]
topics: ["ai-a", "hermes-agent", "knowledge-management", "llm", "obsidi", "pkm", "pkm-obsidian", "research", "zettlekasten"]
stars: 5
forks: 0
openIssues: 33
closedIssues: 349
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-05-27T17:24:29Z"
lastCommitAt: "2026-08-01T06:14:30Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "under_pressure"]
healthScore: 97
undervaluedScore: 58
maintainers: ["eranroseman"]
openGraphImageUrl: "https://opengraph.githubassets.com/db80496b0b3fc0bce81b31f62e62af81f289d65293606d1400c571ef04efc019/eranroseman/memoria-vault"
discussionCount: 1
---

# Memoria

Memoria is a standalone local CLI and research engine for a single researcher.
It builds a checked Markdown workspace from sources, interviews, digests, notes,
projects, citations, and attention items.

The engine owns requests, records, verdicts, and recovery state in SQLite. The
Markdown workspace stays human-readable, while machine writes go through the
request envelope, checks, quarantine, and read barrier before they are trusted.

> **Status: v0.1 alpha source install.** No formal release has been cut yet; the install commands below run from current `main`. Alpha checkpoints are internal milestones. Check the [milestones](https://github.com/eranroseman/memoria-vault/milestones) and [open issues](https://github.com/eranroseman/memoria-vault/issues) for current checkpoint state before installing.

---

For the system model, start at [Home](https://github.com/eranroseman/memoria-vault/blob/HEAD/docs/README.md). For the command surface,
see [CLI](https://github.com/eranroseman/memoria-vault/blob/HEAD/docs/reference/commands-and-transports/cli.md).

## How it works

The installer creates your chosen runtime folder (default `~/Memoria`,
deliberately off OneDrive),…
