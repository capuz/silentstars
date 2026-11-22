---
repo: "ultimaweapon/tsuki"
name: "tsuki"
description: "Lua 5.4 ported to Rust"
readmeQualityOk: true
url: "https://github.com/ultimaweapon/tsuki"
homepage: "https://ultimaweapon.github.io/tsuki/"
language: "Rust"
languages: ["Rust"]
languagePcts: [91]
topics: ["lua", "rust", "jit"]
stars: 212
forks: 6
openIssues: 0
closedIssues: 21
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2025-05-12T14:35:44Z"
lastCommitAt: "2026-11-22T02:11:12Z"
lastReleaseAt: "2025-12-20T01:26:47Z"
status: "thriving"
tags: ["solo_builder", "funded"]
healthScore: 97
undervaluedScore: 37
maintainers: ["ultimaweapon"]
openGraphImageUrl: "https://opengraph.githubassets.com/8464078fd29bfd1b150f3a3e5796b07789e49c0690e4f465e6b845c860c1a4c3/ultimaweapon/tsuki"
fundingLinks: ["GITHUB:https://github.com/ultimaweapon"]
discussionCount: 19
---

# Tsuki

Tsuki is a port of Lua 5.4 to Rust. This is porting, not binding; which mean all code are Rust and can be using without C compiler. The initial works was done by [C2Rust](https://github.com/immunant/c2rust). Note that this port was done **without** compatibility with previous Lua version. You can see a list of the differences [here](https://www.lua.org/manual/5.4/manual.html#8).

> **Important**
>
> One of the project non-goal has been dropped and it is very likely Tsuki will add some extensions to Lua to boost performance on JIT.

## Status

The VM to run Lua code is fully working almost exactly as vanilla Lua (see some of differences below). Some functions on Lua standard library are still missing.

> **Important**
>
> All types in Tsuki does not implement `Send` and `Sync` and no plan to support this at the moment.

## Safety

In theory, all public APIs of Tsuki should provide 100% safety unless there is a soundness bug.
