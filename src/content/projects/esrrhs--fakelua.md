---
repo: "esrrhs/fakelua"
name: "fakelua"
description: "Embeddable Lua-subset runtime with bytecode VM + GCC/TCC JIT, rich C++ native libs, and arena frame-reset (no GC pauses)."
readmeQualityOk: true
url: "https://github.com/esrrhs/fakelua"
homepage: "https://esrrhs.github.io/fakelua/"
language: "C++"
languages: ["C++"]
languagePcts: [78]
topics: ["jit", "lua", "bytecode-vm", "cpp", "embedded-scripting", "scripting-language", "virtual-machine"]
stars: 216
forks: 56
openIssues: 0
closedIssues: 7
watchers: 27
contributors: 5
recentReleases: 0
createdAt: "2014-11-24T15:19:11Z"
lastCommitAt: "2026-11-16T11:57:04Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 98
undervaluedScore: 44
maintainers: ["esrrhs", "Copilot"]
openGraphImageUrl: "https://opengraph.githubassets.com/8c7be98aa3d491b8c1a6a7d6a9c4cb2b05dd3815c48f28c4e359a8cfeb592c98/esrrhs/fakelua"
---

# FakeLua
[<img src="https://img.shields.io/github/license/esrrhs/fakelua">](https://github.com/esrrhs/fakelua)
[<img src="https://img.shields.io/github/languages/top/esrrhs/fakelua">](https://github.com/esrrhs/fakelua)
[<img src="https://img.shields.io/github/actions/workflow/status/esrrhs/fakelua/build.yml?branch=master&label=Linux">](https://github.com/esrrhs/fakelua/actions/workflows/build.yml)
[<img src="https://img.shields.io/github/actions/workflow/status/esrrhs/fakelua/build_with_macos.yml?branch=master&label=macOS">](https://github.com/esrrhs/fakelua/actions/workflows/build_with_macos.yml)
[<img src="https://img.shields.io/github/actions/workflow/status/esrrhs/fakelua/build_with_windows.yml?branch=master&label=Windows">](https://github.com/esrrhs/fakelua/actions/workflows/build_with_windows.yml)

[中文](https://github.com/esrrhs/fakelua/blob/HEAD/README.zh.md) | English

FakeLua is an embeddable Lua-subset runtime for high-performance hosts: it compiles scripts to a bytecode VM and optionally to native code via GCC/TCC JIT, ships a large C++ native standard library (net/http/db/crypto/…), and uses an arena allocator with frame reset so there is no GC pause.

## Design…
