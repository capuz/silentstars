---
repo: "ivanarama/onebase"
name: "onebase"
description: "Open business platform with a familiar accounting DSL, written in Go — open business platform with a familiar DSL, in Go"
originalDescription: "Открытая бизнес-платформа со знакомым DSL для учётных задач, написанная на Go — open business platform with a familiar DSL, in Go"
descriptionLang: "ru"
readmeQualityOk: true
url: "https://github.com/ivanarama/onebase"
homepage: "https://onebase.ivantitov.tech"
language: "Go"
languages: ["Go"]
languagePcts: [94]
topics: ["1c", "business-platform", "dsl", "erp", "go", "low-code", "postgresql", "sqlite"]
stars: 115
forks: 41
openIssues: 153
closedIssues: 594
watchers: 2
contributors: 6
recentReleases: 0
createdAt: "2026-04-23T15:35:10Z"
lastCommitAt: "2026-10-09T10:51:07Z"
lastReleaseAt: "2026-04-24T16:20:45Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 95
undervaluedScore: 35
maintainers: ["ivanarama"]
openGraphImageUrl: "https://opengraph.githubassets.com/de5700bd30e66525490410f447310548bedd59d11eec3dfaeb1ec56a2f4be0f7/ivanarama/onebase"
discussionCount: 16
---

# OneBase

**Open business platform with a familiar accounting DSL, written in Go.**

A single binary runs application configurations on top of SQLite or PostgreSQL.

[Russian](https://github.com/ivanarama/onebase/blob/HEAD/README.md) · [English](https://github.com/ivanarama/onebase/blob/HEAD/README.en.md)

[Project website](https://onebase.ivantitov.tech) · [Live demo](https://demo.ivantitov.tech) · [Telegram](https://t.me/IvanTitovTech) · [Documentation](https://github.com/ivanarama/onebase/blob/HEAD/QUICKSTART.md)

[Report a bug or contribute](https://github.com/ivanarama/onebase/blob/HEAD/CONTRIBUTING.md) — a few words or a screenshot is enough for feedback; independent development starts with a Draft PR.

---

One "infobase" = configuration (catalogs, documents, registers, reports) + data in SQLite or PostgreSQL + users. Metadata is described in YAML, and business logic is written in the built-in DSL. It is managed through the launcher, a window for starting infobases.

The model will be familiar to those who have worked with accounting platforms: a document is **posted** and generates register movements, registers provide balances and turnovers, and reports access them…
