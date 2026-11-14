---
repo: "studiohaze/topaz"
name: "topaz"
description: "A general-purpose programming language with typesetting built in"
readmeQualityOk: true
url: "https://github.com/studiohaze/topaz"
homepage: "https://topaz.ooo"
language: "Rust"
languages: ["Rust"]
languagePcts: [96]
topics: ["compiler", "programming-language", "rust", "typesetting", "webassembly"]
stars: 5
forks: 2
openIssues: 0
closedIssues: 0
watchers: 2
contributors: 1
recentReleases: 7
createdAt: "2026-10-28T22:42:25Z"
lastCommitAt: "2026-11-14T21:57:51Z"
lastReleaseAt: "2026-11-02T22:20:24Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 89
undervaluedScore: 63
maintainers: ["clavef"]
openGraphImageUrl: "https://opengraph.githubassets.com/cf72e0ad576e75f7cf214fe49287117821672490787f5258230803c7f98a5a38/studiohaze/topaz"
---

# Topaz

Topaz is a general-purpose programming language with typesetting built in. Code that does the same job looks the same no matter who writes it.

[Website](https://topaz.ooo) · [Roadmap](https://topaz.ooo/en/roadmap) · [Download 5.21.3](https://topaz.ooo/en/download) · [Built with Topaz](https://topaz.ooo/en/built-with-topaz)

## Two lines of Topaz

| Version | Status | What it is |
| --- | --- | --- |
| 5.21.3 | **Stable** | The release you can install and use today. This repository holds its Core Kit source. |
| 6.0 | **Spec-first redesign** | A new compiler engine and a language that its specification defines first. It is validated in ATLAS before its public release. |

## Where 6.0 is going

Topaz 6.0 starts from the specification. Every rule in the new language reference says why it exists and links to examples that run on the release before it ships. Behavior the compiler does not follow yet is marked as a known limitation until it does.

The new engine works on typed data, gives known types their own Rust layouts and calls known functions directly. With it, the self-compiler written in Topaz is designed to compile as fast as the reference compiler written in Rust…
