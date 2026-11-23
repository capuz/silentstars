---
repo: "mengqi1436/dsh-db-tool"
name: "dsh-db-tool"
description: "DSH plugin: chat-driven database admin tool (8 databases, per-project grants, danger confirmation, sidebar console)"
originalDescription: "DSH plugin: chat-driven database admin tool (8 databases, per-project grants, danger confirmation, sidebar console)"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/mengqi1436/dsh-db-tool"
language: "TypeScript"
languages: ["TypeScript", "HTML"]
languagePcts: [61, 28]
topics: ["database", "dsh", "dsh-plugin", "mysql", "postgresql"]
stars: 8
forks: 5
openIssues: 0
closedIssues: 1
watchers: 1
contributors: 4
recentReleases: 0
createdAt: "2026-09-25T14:31:34Z"
lastCommitAt: "2026-11-23T10:29:07Z"
status: "newborn"
tags: ["hidden_gem", "fork_magnet"]
healthScore: 96
undervaluedScore: 61
maintainers: ["mengqi1436", "mengqi1436-superagent", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/5f3dbd79ba319fcf197136a143adf91d9f9bdda44cba815245edca4971b1faab/mengqi1436/dsh-db-tool"
---

# dsh-db-tool

[English](https://github.com/mengqi1436/dsh-db-tool/blob/HEAD/README_EN.md) | Simplified Chinese

DSH host plugin. Safely operate databases from within chat: nine database types, fine-grained project-level authorization, dangerous-operation confirmation, and full audit logging. Includes a companion sidebar admin console and SQL console.

## Feature flow

The complete path of a database operation, from entry point to audit persistence. The chat tool and the sidebar share one set of semantics, and every operation must pass two gates: project-level authorization and statement-level risk classification:

[Open interactive version](https://github.com/mengqi1436/dsh-db-tool/blob/HEAD/assets/feature-flow.html) — supports zoom, drag, path highlighting, and clicking nodes to view source-code evidence.

> Questions or suggestions? [Open an Issue](https://github.com/mengqi1436/dsh-db-tool/issues/new/choose).

---

## Supported databases

| Category | Databases |
| --- | --- |
| Relational | MySQL, PostgreSQL, GaussDB, SQLite, Oracle, 达梦 DM, SQL Server |
| NoSQL | Redis, MongoDB |
