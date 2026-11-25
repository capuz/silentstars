---
repo: "conr2d/eo"
name: "eo"
description: "C++ compatibility layer for porting existing Go code"
readmeQualityOk: true
url: "https://github.com/conr2d/eo"
language: "C++"
languages: ["C++"]
languagePcts: [84]
topics: ["asio", "coroutines", "cpp20"]
stars: 10
forks: 2
openIssues: 17
closedIssues: 39
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2022-06-21T14:38:28Z"
lastCommitAt: "2026-11-25T03:19:13Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "under_pressure"]
healthScore: 89
undervaluedScore: 70
maintainers: ["4lmighty", "conr2d"]
openGraphImageUrl: "https://opengraph.githubassets.com/79de373f388820a277c44e36606d093f28e8a82176d37a8d8a65295548438d88/conr2d/eo"
---

# Eo

Eo is a C++ compatibility layer for porting existing Go code with minimal semantic and structural changes.

It is intentionally not an idiomatic C++ framework. The primary goal is to make mechanical Go-to-C++ translation practical when preserving the original control flow and concurrency structure matters more than redesigning the code around C++ conventions.

If there is enough time to rewrite a Go codebase properly in C++, that is usually the better choice. Eo exists for cases where a close, fast port is more useful than a clean rewrite.

Eo is under active development and its APIs are not stable. The [translation-ready baseline](https://github.com/conr2d/eo/blob/HEAD/docs/BASELINE.md) says which translation forms a port can rely on and where the known boundaries are.

[Eo](https://en.wiktionary.org/wiki/eo#Latin) means "I **go**" in Latin and its pronunciation is ["Ay-Oh"](https://youtu.be/lkbP5OPQhdQ), like what Freddie Mercury shouted at Live Aid.
