---
repo: "ponylang/postgres"
name: "postgres"
description: "Pure Pony Postgres client"
readmeQualityOk: true
url: "https://github.com/ponylang/postgres"
homepage: "https://ponylang.github.io/postgres/"
language: "Pony"
languages: ["Pony"]
languagePcts: [100]
topics: ["ponylang", "ponylang-langauge", "pony-core-team-library", "postgresql"]
stars: 18
forks: 2
openIssues: 2
closedIssues: 43
watchers: 3
contributors: 5
recentReleases: 0
createdAt: "2022-09-30T19:15:11Z"
lastCommitAt: "2026-11-06T02:44:46Z"
lastReleaseAt: "2026-05-28T12:56:33Z"
status: "thriving"
tags: ["hidden_gem", "funded", "community_hub"]
healthScore: 97
undervaluedScore: 68
maintainers: ["ponylang-main", "SeanTAllen"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/543754442/6d0bdaf3-2672-49b8-8c4b-a6f451cb1c9d"
fundingLinks: ["OPEN_COLLECTIVE:https://opencollective.com/ponyc"]
discussionCount: 22
---

# Postgres

Pure Pony Postgres driver

## Status

postgres is beta quality software that will change frequently. Expect breaking changes. That said, you should feel comfortable using it in your projects.

## Installation

* Requires ponyc 0.78.0 or later.
* Install [corral](https://github.com/ponylang/corral)
* `corral add github.com/ponylang/postgres.git --version 0.16.0`
* `corral fetch` to fetch your dependencies
* `use "postgres"` to include this package
* `corral run -- ponyc` to compile your application

## API Documentation

[https://ponylang.github.io/postgres](https://ponylang.github.io/postgres)

## Examples

The [examples](https://github.com/ponylang/postgres/blob/HEAD/examples/) directory contains self-contained programs demonstrating different parts of the library. See [examples/README.md](https://github.com/ponylang/postgres/blob/HEAD/examples/README.md) for descriptions.

## Postgres API Support

This library aims to support the Postgres API to the level required to use Postgres from Pony in ways that the Pony community needs. We do not aim to support the entire API surface. If there is functionality missing, we will happily accept high-quality pull requests to add…
