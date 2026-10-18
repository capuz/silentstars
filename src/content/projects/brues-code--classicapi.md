---
repo: "brues-code/ClassicAPI"
name: "ClassicAPI"
description: "DLL for 1.12.1 to backport the modern Blizzard API"
readmeQualityOk: true
url: "https://github.com/brues-code/ClassicAPI"
language: "C++"
languages: ["C++"]
languagePcts: [80]
stars: 51
forks: 20
openIssues: 5
closedIssues: 41
watchers: 1
contributors: 7
recentReleases: 0
createdAt: "2026-05-08T00:23:21Z"
lastCommitAt: "2026-10-18T08:16:06Z"
lastReleaseAt: "2026-05-31T02:48:53Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 96
undervaluedScore: 39
maintainers: ["brues-code", "skeewirt", "GratisNinja86"]
openGraphImageUrl: "https://opengraph.githubassets.com/af36cc12adf806f40746f999900ddd82d6fd77edff4e0f5a1ea05bdab35795b8/brues-code/ClassicAPI"
discussionCount: 1
---

# ClassicAPI

ClassicAPI is a DLL for World of Warcraft 1.12.1 (Vanilla / Turtle WoW). It
backports a large part of the modern WoW API — 550+ functions and 50+ events,
plus much of Lua 5.1 — into the 1.12 client, so addons written for later
versions (3.3.5+ or Classic Era) run with little or no change.

It hooks the engine after WoW boots and registers everything the same way WoW
registers its own Lua functions. Nothing else to install — the DLL is
self-contained.

## Highlights

The headline features. Each one takes effect as soon as the DLL loads, so your
existing addons benefit without any code changes. The complete per-function
reference is in **[docs/API.md](https://github.com/brues-code/ClassicAPI/blob/HEAD/docs/API.md)**.

### Lua 5.1 compatibility

The flagship feature: run modern Lua 5.1 addon code on 1.12's Lua 5.0 VM.

| Feature | Effect |
|---------|--------|
| [Syntax](https://github.com/brues-code/ClassicAPI/blob/HEAD/docs/API.md#lua-51-syntax) | Compiles the Lua 5.1 length (`#`), modulo (`%`), `...`-expression, `0x` hex-literal, and leveled long bracket (`[=[ ]=]`) syntax that vanilla's Lua 5.0 rejects, by rewriting addon source before it compiles. Each addon file…
