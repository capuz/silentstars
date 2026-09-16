---
repo: "ydb-platform/sqlc-ydb"
name: "sqlc-ydb"
description: "Generate type-safe code from YQL (YDB SQL)"
readmeQualityOk: true
url: "https://github.com/ydb-platform/sqlc-ydb"
homepage: "https://ydb.tech"
language: "Go"
languages: ["Go"]
languagePcts: [91]
stars: 5
forks: 1
openIssues: 2
closedIssues: 0
watchers: 0
contributors: 29
recentReleases: 7
createdAt: "2026-01-10T12:28:44Z"
lastCommitAt: "2026-09-16T08:47:47Z"
lastReleaseAt: "2026-09-15T15:49:08Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 80
undervaluedScore: 63
maintainers: ["asmyasnikov", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/91d3726330e4dcef216330b3fc5e6e3cd6eca09e704aff8e469c33155329a24e/ydb-platform/sqlc-ydb"
---

# sqlc-ydb

Inspired by [sqlc](https://github.com/sqlc-dev/sqlc), sqlc-ydb brings its SQL-first, typed query workflow to YDB as an independent implementation. Read [the project history](https://github.com/ydb-platform/sqlc-ydb/blob/HEAD/docs/history.md) for the upstream YDB proposals, engine-plugin discussions, and the decision to build a standalone tool.

Generate typed query code from YQL for YDB in Go, Python, C++, C#, Java, Kotlin, TypeScript, Rust and PHP. One executable contains the parser, semantic analyzer and generators. Generation works offline and does not require a running YDB, Python, or any separately installed codegen plugin.

Supported YQL and configuration options are listed in the [compatibility contract](https://github.com/ydb-platform/sqlc-ydb/blob/HEAD/docs/compatibility.md). See the [changelog](https://github.com/ydb-platform/sqlc-ydb/blob/HEAD/CHANGELOG.md) and [GitHub Releases](https://github.com/ydb-platform/sqlc-ydb/releases) for release status. Installation and artifact verification are described in [installation](https://github.com/ydb-platform/sqlc-ydb/blob/HEAD/docs/installation.md).

## Install

Linux and macOS:

```sh
curl -fsSL…
