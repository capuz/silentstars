---
repo: "grafana/tsqtsq"
name: "tsqtsq"
description: "tsqtsq - A PromQL Query Library"
url: "https://github.com/grafana/tsqtsq"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [98]
stars: 12
forks: 0
openIssues: 2
closedIssues: 4
watchers: 97
contributors: 1297
recentReleases: 2
createdAt: "2024-08-02T13:49:13Z"
lastCommitAt: "2026-06-23T23:18:47Z"
lastReleaseAt: "2026-05-14T23:00:17Z"
status: "watched"
tags: ["hidden_gem", "community_watch"]
healthScore: 89
undervaluedScore: 46
maintainers: ["renovate-sh-app[bot]", "jewbetcha", "skl"]
openGraphImageUrl: "https://opengraph.githubassets.com/95c3a594f57fdb138106ca669ae2fc779433236aae029f0640f24a4e5973ad42/grafana/tsqtsq"
---

# tsqtsq - A PromQL Query Library

[**API Docs**](https://grafana.github.io/tsqtsq/)

`tsqtsq` aims to make hard-coded PromQL queries easier to read and maintain. Wide-ranging changes and common "query snippets" have varying approaches and often impact query readability. By introducing typed, templated queries, changing common expressions and debugging becomes much easier.

Consider the following use cases:

- Implement de-duplication of all existing queries
- Establish patterns for writing new queries
- Create reusable snippets that accept arguments for metric labels

The library in this directory is an effort to reduce the potential toil involved in refactoring tasks like those mentioned above.

## Principles

- Maintain "backwards compatibilty" by returning PromQL queries as a simple `string` - just like the string literals and template strings we used before.
- Re-usability of "query snippets" is a priority.
- Avoid verbose library usage and syntax wherever possible, prefer ease of use over type purity.
- Aim to make metrics and labels "discoverable" through IntelliSense, to aid query writing in the editor.
- Embed "sensible defaults" and tribal knowledge using query…
