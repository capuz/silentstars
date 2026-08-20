---
repo: "scuptio/mududb"
name: "mududb"
description: "MuduDB database management system"
readmeQualityOk: true
url: "https://github.com/scuptio/mududb"
language: "Rust"
languages: ["Rust"]
languagePcts: [92]
stars: 15
forks: 7
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 1
createdAt: "2025-07-13T09:39:22Z"
lastCommitAt: "2026-08-20T04:07:48Z"
lastReleaseAt: "2026-06-30T07:00:05Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 82
undervaluedScore: 42
maintainers: ["ybbh"]
openGraphImageUrl: "https://opengraph.githubassets.com/5f186765e33718aa423884b097500564fd7435b0f90857b2493ebe51e926ab8e/scuptio/mududb"
---

# MuduDB

[<img src="doc/pic/mudu_logo.svg" width="10%">](https://github.com/scuptio/mududb/blob/HEAD/doc/en/name.md)

[汉语](https://github.com/scuptio/mududb/blob/HEAD/README.cn.md)

---

MuduDB is a database system that makes it easier to build data-oriented applications and run their logic directly inside the database environment.

**It is currently in an early-stage, fast-moving demonstration phase.**

MuduDB explores a set of [innovative features](https://github.com/scuptio/mududb/blob/HEAD/doc/en/innovative.md): in-database WebAssembly procedures written in general-purpose languages, a unified interactive-and-procedural execution model, AI-assisted database engineering, a modern hardware-oriented runtime built on `io_uring` and per-core workers, and one-click `.mpk` packaging for deployment.

---

## What is MuduDB

MuduDB brings application logic and data management into a unified execution environment. Instead of pulling data out to an application server, you write ordinary procedures in general-purpose languages, compile them to WebAssembly, and run them inside the database kernel—close to the data, under the same transactional and scheduling authority.

The same procedure…
