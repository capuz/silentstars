---
repo: "odvcencio/gosx"
name: "gosx"
description: "A Go-native web and desktop platform with server components, typed actions, WASM islands, realtime hubs, and no JavaScript toolchain."
readmeQualityOk: true
url: "https://github.com/odvcencio/gosx"
homepage: "https://m31labs.dev/gosx"
language: "Go"
languages: ["Go", "TypeScript"]
languagePcts: [66, 20]
topics: ["desktop", "go", "realtime", "server-side-rendering", "wasm", "web-framework", "webgpu"]
stars: 13
forks: 3
openIssues: 1
closedIssues: 47
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-03-24T23:06:45Z"
lastCommitAt: "2026-08-22T04:06:02Z"
lastReleaseAt: "2026-04-15T03:41:36Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 99
undervaluedScore: 54
maintainers: ["odvcencio"]
openGraphImageUrl: "https://opengraph.githubassets.com/384fb5ef0093b48ac7b33719d0ce3ace7be0d373867e8d90e9858ac9f44f7839/odvcencio/gosx"
---

# GoSX

A Go-native web platform. Declare `.gsx` components with the strict, typed `component Name(props: Type)` form. GoSX compiles through a real compiler pipeline. It renders on the server by default and hydrates interactive islands with WebAssembly. It needs no app-side JavaScript toolchain and no CGo, and it keeps a small dependency budget.

Current release: **v0.51.1**. Pre-1.0; breaking changes are documented in [CHANGELOG.md](https://github.com/odvcencio/gosx/blob/HEAD/CHANGELOG.md).

## Agent Skills

Agents helping someone use GoSX should start with the canonical M31 Labs skill: [using-gosx](https://github.com/odvcencio/m31labs-skills/blob/main/skills/using-gosx/SKILL.md).

For native mobile, editor, admin, and CMS periphery, read: [using-gosx-ecosystem](https://github.com/odvcencio/m31labs-skills/blob/main/skills/using-gosx-ecosystem/SKILL.md).

## What if you never had to leave Go?

GoSX starts from a simple premise: the browser is a render target, not a runtime. Server components are Go functions that return HTML. Interactive components compile to bytecode and run in a shared WASM VM. Everything between those two points — the parser, the compiler, the reconciler, the…
