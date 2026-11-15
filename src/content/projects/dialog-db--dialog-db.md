---
repo: "dialog-db/dialog-db"
name: "dialog-db"
description: "Dialog is an embeddable database designed for local-first software."
readmeQualityOk: true
url: "https://github.com/dialog-db/dialog-db"
homepage: "https://dialog.foundation/"
language: "Rust"
languages: ["Rust"]
languagePcts: [99]
topics: ["database", "local-first", "ontologies", "sync", "version-control"]
stars: 190
forks: 13
openIssues: 68
closedIssues: 55
watchers: 1
contributors: 9
recentReleases: 10
createdAt: "2025-03-01T04:36:23Z"
lastCommitAt: "2026-11-15T10:24:38Z"
lastReleaseAt: "2026-11-05T10:52:41Z"
status: "thriving"
tags: ["solo_builder", "funded", "release_machine"]
healthScore: 86
undervaluedScore: 44
maintainers: ["Gozala", "relves", "jackddouglas"]
openGraphImageUrl: "https://opengraph.githubassets.com/60224777941823a063e508eb10b08bfe94febc7d5e6b43c56425cea200ab1acc/dialog-db/dialog-db"
fundingLinks: ["OPEN_COLLECTIVE:https://opencollective.com/dialog-db"]
---

# Dialog DB

> The world is divided into word-processing, spreadsheet, database and other applications. Computers are hierarchical. We have a desktop and hierarchical files which have to mean everything. 
>
> Right now you are a prisoner of each application you use. You have only the options that were given you by the developer of that application.
>
> All of this is phoney. It is a system of conventions that have been established and we can have better conventions.
>
> \- Ted Nelson, _[Visionary lays into the web]_

**Dialog** is an embeddable database designed for local-first software.

It has (or aims to have) the following properties:

- Schema-on-read via an expressive [Datalog]-esque query API
- Efficient synchronization across replicas
- Support for both [Web Assembly] and native runtime environments
- Emphasis on data privacy and user-centered authority

## Status: Experimental

**Dialog** is in active development and should be considered experimental in nature.

Expect fundamental details to break over time (binary encoding, index construction etc.). At this stage, we cannot offer any promise of a path to migrate old versions of the database forward as breaking changes…
