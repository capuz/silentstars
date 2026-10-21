---
repo: "colyseus/native-sdk"
name: "native-sdk"
description: "Shared native cross-platform SDK aimed to be used on Godot, Unreal, Game Maker, etc."
readmeQualityOk: true
url: "https://github.com/colyseus/native-sdk"
language: "C"
languages: ["C"]
languagePcts: [51]
stars: 25
forks: 2
openIssues: 7
closedIssues: 8
watchers: 2
contributors: 2
recentReleases: 0
createdAt: "2025-10-14T12:47:33Z"
lastCommitAt: "2026-10-21T21:10:28Z"
lastReleaseAt: "2026-03-12T01:57:31Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 89
undervaluedScore: 54
maintainers: ["endel"]
openGraphImageUrl: "https://opengraph.githubassets.com/96351b04aceb4d2fe3686adbc9b58795ca18dde149938fd094150a6b793f17fb/colyseus/native-sdk"
---

# Colyseus Native SDK

> This project is under active development! We may introduce breaking changes at any time.

Cross-platform Native SDK for [Colyseus](https://colyseus.io/). Aimed to be used for all native targets, such as Godot, Unreal Engine, Game Maker, and more.

## Releases

| Release | Description | Platforms |
|---------|-------------|-----------|
| [Godot](https://github.com/colyseus/native-sdk/releases?q=%22Godot+SDK%22&expanded=true) | GDExtension plugin for Godot 4.x | Windows, macOS, Linux, iOS, Android, Web |
| [GameMaker](https://github.com/colyseus/native-sdk/releases?q=%22GameMaker+SDK%22&expanded=true) | Native extension for GameMaker | Windows, macOS, Linux, iOS, Android, HTML5 (WASM) |
| [Static Binaries](https://github.com/colyseus/native-sdk/releases?q=%22Colyseus+Native+SDK+-+Static+Library%22&expanded=true) | Pre-built static libraries (C API) | Windows, macOS, Linux, iOS, WebAssembly |
| [Swift](https://github.com/colyseus/colyseus-swift) | Swift package (SwiftPM) | macOS, iOS, tvOS |

## Building

Requires Zig 0.15.x (0.16 is not supported yet).

```bash
git submodule update --init --recursive
zig build

# Run example
zig build run-example
```

Tests:…
