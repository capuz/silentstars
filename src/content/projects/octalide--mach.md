---
repo: "octalide/mach"
name: "mach"
description: "A systems programming language with no hidden behavior."
url: "https://github.com/octalide/mach"
homepage: "https://machlang.org"
language: "PowerShell"
languages: ["PowerShell", "Shell"]
languagePcts: [61, 39]
topics: ["compiler", "programming-language", "self-hosted", "systems-programming", "compiled-language", "statically-typed", "language", "native"]
stars: 118
forks: 1
openIssues: 18
closedIssues: 847
watchers: 2
contributors: 3
recentReleases: 10
createdAt: "2022-11-23T20:04:16Z"
lastCommitAt: "2026-06-23T23:27:25Z"
lastReleaseAt: "2026-06-13T05:35:13Z"
status: "thriving"
tags: ["solo_builder", "funded", "release_machine"]
healthScore: 99
undervaluedScore: 52
maintainers: ["octalide"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/569870864/045cb782-45e7-47e1-bcff-6d0fc27c4805"
fundingLinks: ["GITHUB:https://github.com/octalide"]
discussionCount: 0
---

MACH
===

![CI](https://github.com/octalide/mach/actions/workflows/ci.yml/badge.svg?branch=dev)
![License](https://img.shields.io/github/license/octalide/mach)
![Code Size](https://img.shields.io/github/languages/code-size/octalide/mach)
![Last Commit](https://img.shields.io/github/last-commit/octalide/mach)
![Issues](https://img.shields.io/github/issues/octalide/mach)

We have an official [Discord](https://discord.com/invite/dfWG9NhGj7)!

# Overview

Mach is a statically-typed, compiled systems language designed to be simple, fast, verbose, and intuitive. Mach is built for projects like compilers, runtimes, operating systems, tooling -- anywhere performance is a requirement and hidden behavior is a liability. The language is deliberately small and explicit: what you read is what executes, every cost is visible in the code that incurs it. Nothing happens by convention or inference.

Mach does not rely on any external dependencies for the compiler or during runtime -- no LLVM, no linking to libc, no system linker or other tools. The entire compiler and all base language features are written in native Mach. 

Memory is managed manually. There is no garbage collector and no hidden…
