---
repo: "aether-lang-dev/aether"
name: "aether"
description: "An actor-based systems language that compiles to readable C. Native, no VM, no garbage collector."
readmeQualityOk: true
url: "https://github.com/aether-lang-dev/aether"
homepage: "https://aether-lang.dev"
language: "C"
languages: ["C", "Shell"]
languagePcts: [67, 26]
topics: ["compiler", "programming-language", "actor-model", "concurrency", "systems-programming", "actors", "capability-security", "compiles-to-c", "language", "no-gc"]
stars: 105
forks: 6
openIssues: 47
closedIssues: 555
watchers: 2
contributors: 6
recentReleases: 0
createdAt: "2025-03-07T02:23:27Z"
lastCommitAt: "2026-10-03T09:22:20Z"
lastReleaseAt: "2026-03-04T17:41:13Z"
status: "thriving"
tags: ["funded"]
healthScore: 98
undervaluedScore: 48
maintainers: ["nicolas-maman", "paul-hammant", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/384fb53150ec07a4c97832c496bc51a873d70360be392bb14628d8def20a25f1/aether-lang-dev/aether"
fundingLinks: ["GITHUB:https://github.com/nicolas-maman"]
discussionCount: 7
---

# Aether Programming Language

A compiled actor language whose permissions are part of the source, enforced from compile time down to libc (the libc layer on Linux/FreeBSD; Windows gets the compile-time and scope layers). No VM and no garbage collector: the compiler emits readable C.

**Website: [aether-lang.dev](https://aether-lang.dev/)**

## Overview

Most languages treat "what may this program touch?" as a deployment problem. Aether makes it a language problem: code runs against an explicit grant list, enforced three times over. At compile time, `--emit=lib` starts capability-empty and the host opts modules in with `--with=fs,net,os`. At scope level, `hide` and `seal except` stop ambient names from leaking into any lexical block, a closure, a trailing-block DSL, an actor handler. At runtime, an `LD_PRELOAD` shim checks libc itself (`open*`, `connect`/`bind`, `execve`, `mmap`, `dlopen`, `getenv`) against the same grants, inherited across `execve` — this third layer is Linux/FreeBSD only (there is no `LD_PRELOAD` on Windows). See [Containment Sandbox](https://github.com/aether-lang-dev/aether/blob/HEAD/docs/containment-sandbox.md) for the threat model, the prior art it draws on,…
