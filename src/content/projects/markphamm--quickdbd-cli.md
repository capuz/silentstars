---
repo: "MarkPhamm/quickdbd-cli"
name: "quickdbd-cli"
description: "Turn QuickDBD, DBML or dbt schemas into interactive ER diagrams that stay readable at 200+ tables."
readmeQualityOk: true
url: "https://github.com/MarkPhamm/quickdbd-cli"
homepage: "https://qdbd.dev/"
language: "JavaScript"
languages: ["JavaScript", "Python"]
languagePcts: [69, 21]
stars: 7
forks: 1
openIssues: 1
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 10
createdAt: "2026-10-17T04:41:25Z"
lastCommitAt: "2026-10-31T15:59:06Z"
lastReleaseAt: "2026-10-19T08:18:15Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 80
undervaluedScore: 51
maintainers: ["MarkPhamm"]
openGraphImageUrl: "https://opengraph.githubassets.com/a2792f8b90dd8a254f86dc9f4c64f87902ceac93117e32f84cea3b7c28e62d53/MarkPhamm/quickdbd-cli"
---

## What is qdbd?

qdbd is a **command-line tool that turns a database schema written as text into an interactive ER diagram**.

- Diagrams drawn by hand look good, but they live outside the repo and go stale the first time the schema changes.
- Generated diagrams stay current, but most become unreadable past a few dozen tables.

With qdbd the schema is a plain-text file in git, written in [QuickDBD](https://www.quickdatabasediagrams.com)'s syntax or [DBML](https://dbml.dbdiagram.io/docs/) (dbdiagram.io's), or generated from a dbt project. qdbd checks it, lays it out, and builds **one self-contained HTML page** you can search, filter, click through and share.

You get **a diagram that lives next to your code** and **stays usable at hundreds of tables**.

qdbd is not affiliated with QuickDBD or dbdiagram.io. It reads the same text syntaxes, so schemas copy back and forth, and `qdbd convert` turns one syntax into the other.

## Key features

- **QuickDBD-compatible**: the parser mirrors QuickDBD's own, error messages included. A file that passes `qdbd check --strict` pastes into QuickDBD unchanged.
- **dbt import**: `qdbd import dbt` reads `manifest.json`. Primary keys come from…
