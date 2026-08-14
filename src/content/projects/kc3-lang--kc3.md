---
repo: "kc3-lang/kc3"
name: "kc3"
description: "kmx.io KC3 programming language / graph database"
readmeQualityOk: true
url: "https://github.com/kc3-lang/kc3"
homepage: "https://kc3-lang.org/"
language: "C"
languages: ["C", "JavaScript"]
languagePcts: [52, 30]
topics: ["elixir", "graph-database", "programming-language", "triple-store", "c", "c11"]
stars: 24
forks: 6
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 8
recentReleases: 1
createdAt: "2023-02-03T19:11:18Z"
lastCommitAt: "2026-08-14T05:15:32Z"
lastReleaseAt: "2026-08-02T14:10:01Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 80
undervaluedScore: 64
maintainers: ["thodg", "KyotoVania"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/597163325/1c64ba45-f8ee-4803-9def-e60a3f135d56"
---

# KC3 v0.1.18-git

A programming language providing and relying on facts-db.

KC3 is a programming language with meta-programmation and a graph
database embedded into the language. The graph database allows for
all definitions in the language and can define special operators
in KC3 or in C. With a graph database at its core it aims to be the
language for semantic programming, and programming the semantic web.
It's really easy to devise a data scheme that will persist and
iterate in any order and call KC3 or C functions on it.

For now there is no object abstraction nor reasoning on facts.
Every operation on the database is controlled by C code in the end.

You can easily convert each KC3 function to a C function. KC3 is both
a language and a runtime with powerful, scaling data structures.

This is a development branch, for the latest release see
[KC3 v0.1.17](https://git.kmx.io/kc3-lang/kc3/_tree/v0.1.17).

KC3 is currently a programming language project, inspired by C, Elixir
and Common Lisp. It could be described as C with Elixir modules,
pattern matching, and a semantic object system. The idea is to plug
modules, closures, pattern matching, a graph database and
metaprogramming…
