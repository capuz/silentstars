---
repo: "timfennis/andy-cpp"
name: "andy-cpp"
description: "Andy C++ programming language"
readmeQualityOk: true
url: "https://github.com/timfennis/andy-cpp"
language: "Rust"
languages: ["Rust"]
languagePcts: [96]
stars: 10
forks: 2
openIssues: 47
closedIssues: 93
watchers: 2
contributors: 4
recentReleases: 2
createdAt: "2023-12-16T05:49:37Z"
lastCommitAt: "2026-11-19T10:58:31Z"
lastReleaseAt: "2026-11-19T10:58:44Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "hidden_gem"]
healthScore: 87
undervaluedScore: 69
maintainers: ["timfennis"]
openGraphImageUrl: "https://opengraph.githubassets.com/3fff057f04463995a8d8ef92f3a7089d2acf9b2f50649ba16d4559e497dbba96/timfennis/andy-cpp"
---

# Andy C++

Andy C++ is a programming language built primarily for solving [Advent of Code](https://adventofcode.com/) puzzles and quick one-off scripts. It's syntax and semantics are designed to feel familiar to those who know Rust, while offering some of the high-level flexibility from Python (without all of its pitfalls).     

Since version 0.3.0 the language uses a custom byte-code VM based on the Crafting Interpreters book. Code is: lexed, parsed, analysed, compiled and executed in separate steps. The project ships as a single binary that contains everything including a REPL, LSP and basic profiler.
