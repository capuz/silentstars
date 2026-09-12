---
repo: "briar-systems/mach"
name: "mach"
description: "A systems programming language with no hidden behavior."
readmeQualityOk: true
url: "https://github.com/briar-systems/mach"
homepage: "https://machlang.org"
language: "Assembly"
languages: ["Assembly", "C", "Shell"]
languagePcts: [36, 31, 21]
topics: ["compiler", "programming-language", "self-hosted", "systems-programming", "compiled-language", "statically-typed", "language", "native"]
stars: 135
forks: 5
openIssues: 19
closedIssues: 1635
watchers: 2
contributors: 4
recentReleases: 0
createdAt: "2022-11-23T20:04:16Z"
lastCommitAt: "2026-09-12T08:04:29Z"
lastReleaseAt: "2026-06-13T05:35:13Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 100
undervaluedScore: 46
maintainers: ["octalide"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/569870864/045cb782-45e7-47e1-bcff-6d0fc27c4805"
discussionCount: 0
---

MACH
===

We have an official [Discord](https://discord.com/invite/dfWG9NhGj7)!

# Overview

Mach is a self hosted, statically-typed, compiled systems language designed to be simple, fast, verbose, and intuitive. Mach was created for projects like compilers, runtimes, operating systems, tooling, and embedded systems -- anywhere performance is a requirement and hidden behavior is a liability. The language is deliberately small and explicit: what you read is what executes, every cost is visible in the code that incurs it.

The compiler, code generators, and linker are written in native Mach, with no
LLVM or external assembler or linker. Ordinary Linux programs using the
standard library need no libc. The standard library uses platform libraries
where required, including libSystem on Darwin and Windows system DLLs.

Memory is managed manually. There is no garbage collector and no hidden allocation. Memory flows through allocators that you create and pass explicitly, and the standard library is built around that style end to end: anything that allocates takes an allocator, and anything that doesn't never will. 

Batteries are not included. Many ways to do the same thing are not…
