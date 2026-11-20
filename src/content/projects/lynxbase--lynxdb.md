---
repo: "lynxbase/lynxdb"
name: "lynxdb"
description: "A lightweight schema-on-read analytics in a single binary"
readmeQualityOk: true
url: "https://github.com/lynxbase/lynxdb"
homepage: "https://docs.lynxdb.org/"
language: "Go"
languages: ["Go"]
languagePcts: [99]
topics: ["analytics", "database", "logging", "splunk", "devops", "golang"]
stars: 285
forks: 14
openIssues: 10
closedIssues: 14
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2026-03-03T12:48:10Z"
lastCommitAt: "2026-11-20T11:58:35Z"
lastReleaseAt: "2026-05-07T21:25:30Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors"]
healthScore: 91
undervaluedScore: 30
maintainers: ["OrlovEvgeny"]
openGraphImageUrl: "https://opengraph.githubassets.com/8586c2ccfe614f1acecad4b6441ef6382f2a3243396edf5b5aaf28ebae48cbb1/lynxbase/lynxdb"
---

# LynxDB

LynxDB is a log analytics database in one binary. Query local files or stdin,
or run a server that stores logs on disk. Both modes use
[OpenSearch Piped Processing Language (PPL)](https://docs.lynxdb.org/docs/ppl/overview).

[Documentation](https://docs.lynxdb.org/) ·
[Releases](https://github.com/lynxbase/lynxdb/releases) ·
[Benchmarks](https://github.com/lynxbase/lynxdb/blob/HEAD/BENCHMARKS.md) ·
[Discord](https://discord.gg/RgggCFdgWK)

> LynxDB is in active development. APIs, the storage format, and query behavior
> may change between releases.

## Install

Build the CLI from this checkout with Go 1.26 or later.

```bash
go build -o lynxdb ./cmd/lynxdb
```

For downloadable binaries, Homebrew, and Docker, see the
[installation guide](https://docs.lynxdb.org/docs/getting-started/install).

## Query logs locally

Count HTTP 5xx responses by service. Piped input and files passed with
`--file` are available as the temporary index `main`.
