---
repo: "briar-systems/mach"
name: "mach"
description: "A systems programming language with no hidden behavior."
readmeQualityOk: true
url: "https://github.com/briar-systems/mach"
homepage: "https://machlang.org"
language: "C"
languages: ["C", "Shell"]
languagePcts: [53, 36]
topics: ["compiler", "programming-language", "self-hosted", "systems-programming", "compiled-language", "statically-typed", "language", "native"]
stars: 128
forks: 5
openIssues: 30
closedIssues: 1515
watchers: 2
contributors: 4
recentReleases: 10
createdAt: "2022-11-23T20:04:16Z"
lastCommitAt: "2026-08-21T04:10:34Z"
lastReleaseAt: "2026-06-13T05:35:13Z"
status: "thriving"
tags: ["solo_builder", "release_machine"]
healthScore: 99
undervaluedScore: 51
maintainers: ["octalide"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/569870864/045cb782-45e7-47e1-bcff-6d0fc27c4805"
discussionCount: 0
---

MACH
===

We have an official [Discord](https://discord.com/invite/dfWG9NhGj7)!

# Overview

Mach is a self hosted, statically-typed, compiled systems language designed to be simple, fast, verbose, and intuitive. Mach was created for projects like compilers, runtimes, operating systems, tooling, and embedded systems -- anywhere performance is a requirement and hidden behavior is a liability. The language is deliberately small and explicit: what you read is what executes, every cost is visible in the code that incurs it.

Mach does not rely on any external dependencies for the compiler or during runtime -- no LLVM, no linking to libc, no system linker or other tools. The entire compiler and all base language features are written in native Mach. 

Memory is managed manually. There is no garbage collector and no hidden allocation. Memory flows through allocators that you create and pass explicitly, and the standard library is built around that style end to end: anything that allocates takes an allocator, and anything that doesn't never will. 

Batteries are not included. Many ways to do the same thing are not provided, and the language will not stop you from doing dangerous things.…
