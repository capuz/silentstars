---
repo: "mpyw/declscope"
name: "declscope"
description: "Keep Go packages flat without losing their internal boundaries: file-level private and package scopes for declarations, methods and struct fields"
readmeQualityOk: true
url: "https://github.com/mpyw/declscope"
homepage: "https://mpyw.me/declscope"
language: "Go"
languages: ["Go"]
languagePcts: [98]
topics: ["code-quality", "encapsulation", "go", "go-analysis", "golang", "linter", "static-analysis"]
stars: 53
forks: 1
openIssues: 0
closedIssues: 155
watchers: 1
contributors: 3
recentReleases: 10
createdAt: "2026-09-12T04:03:56Z"
lastCommitAt: "2026-11-10T11:38:59Z"
lastReleaseAt: "2026-09-17T02:41:57Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 99
undervaluedScore: 45
maintainers: ["mpyw"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1366927400/c81f5fe5-1ca1-4b9f-88dd-dbab79bb2dd8"
---

Keep your Go packages **flat** without letting them turn into a free-for-all.

declscope holds each declaration to the file that declares it. Another file may not use it. This is the `private` that Go has no word for, checked at build time.

## Why

Go has two levels of visibility, and the lower one covers the whole package.

| Level | Reach |
| --- | --- |
| Exported | Every importer |
| Unexported | **Every file in the package** |

There is no third level. In a flat package, every helper is a package-wide name, and every field is a package-wide reach.

Splitting the package to get a boundary has a price.

- Import cycles, and interfaces written only to break them.
- **Every name the two halves share has to be exported.** You wanted a boundary between two files, and you published an API.
- **A wrong boundary costs more.** Moving a declaration between files is free. Moving it between packages breaks every importer.

`internal/` does not help here. It limits who may import a package, but it adds no level below unexported. So most Go code is better off flat, and the cost appears inside the package.

Teams handle this with a convention: *this helper belongs to this file.* The…
