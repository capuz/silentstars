---
repo: "briar-systems/mach"
name: "mach"
description: "A systems programming language with no hidden behavior."
readmeQualityOk: true
url: "https://github.com/briar-systems/mach"
homepage: "https://machlang.org"
language: "C"
languages: ["C", "Assembly", "Shell"]
languagePcts: [43, 37, 20]
topics: ["compiler", "programming-language", "self-hosted", "systems-programming", "compiled-language", "statically-typed", "language", "native"]
stars: 137
forks: 5
openIssues: 72
closedIssues: 1744
watchers: 2
contributors: 4
recentReleases: 0
createdAt: "2022-11-23T20:04:16Z"
lastCommitAt: "2026-09-18T14:03:39Z"
lastReleaseAt: "2026-06-13T05:35:13Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 99
undervaluedScore: 46
maintainers: ["octalide"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/569870864/045cb782-45e7-47e1-bcff-6d0fc27c4805"
discussionCount: 0
---

MACH
===

We have an official [Discord](https://discord.com/invite/dfWG9NhGj7)!

# Overview

Mach is a self hosted, statically-typed, compiled systems language designed to be simple, fast, verbose, and intuitive. Mach was created for projects like compilers, runtimes, operating systems, tooling, games, and embedded systems -- anywhere performance is a requirement and hidden behavior is a liability. The language is deliberately small and explicit: what you read is what executes, every cost is visible in the code that incurs it.

The compiler, code generators, and linker are written in native Mach, with no external dependencies whatsoever.
The standard library uses platform libraries where required, including libSystem on Darwin and Windows system DLLs.

Memory is managed manually. There is no garbage collector and no hidden allocation.

Batteries are not included. Many ways to do the same thing are not provided, and the language will not stop you from doing dangerous things. Safety is a decision made by the programmer, not a restriction imposed upon them.

Use Mach when you want C's reach with one coherent toolchain: a single binary that builds, links, tests, formats, vendors…
