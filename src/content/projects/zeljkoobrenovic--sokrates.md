---
repo: "zeljkoobrenovic/sokrates"
name: "sokrates"
description: "A polyglot source code examination tool"
readmeQualityOk: true
url: "https://github.com/zeljkoobrenovic/sokrates"
homepage: "https://sokrates.dev"
language: "Java"
languages: ["Java"]
languagePcts: [91]
stars: 100
forks: 24
openIssues: 0
closedIssues: 25
watchers: 4
contributors: 8
recentReleases: 0
createdAt: "2019-11-09T20:04:03Z"
lastCommitAt: "2026-10-06T10:42:27Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 100
undervaluedScore: 51
maintainers: ["zeljkoobrenovic"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/220697170/f6ca6700-1db4-11ea-85b5-b1f497fd566b"
---

# Sokrates

**Know your code! The unexamined code is not worth maintaining!**

Sokrates is a source-code analysis tool — code spelunking inspired by grep, adding structure on top of regex source-code searches. It scans a code base, builds a JSON analysis configuration, and generates a suite of HTML reports that help you understand size, duplication, structure, dependencies, contributors, and trends.

It implements Željko Obrenović's "examined code" vision: a pragmatic, efficient way to understand complex source-code bases. It ships with both a command line interface and an interactive GUI code explorer.

For details and examples, visit [sokrates.dev](https://sokrates.dev).

Sokrates is free open-source project, with a commercial friendly [MIT license](https://github.com/zeljkoobrenovic/sokrates/blob/HEAD/LICENSE). You can **[sponsor the work on Sokrates](https://github.com/sponsors/zeljkoobrenovic)** via GitHub [sponsors program](https://github.com/sponsors/zeljkoobrenovic). 

## Quick start (no install: Docker)

The easiest way to try Sokrates is the prebuilt image — no Java or Maven needed. Run it from the root of the code base you want to analyze:

```bash
docker run --rm -v…
