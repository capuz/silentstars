---
repo: "ResurrectedTrader/d2bsng"
name: "d2bsng"
description: "D2 Botting System: Next Generation - modern, from-scratch rewrite of the long-running d2bs scripting and automation framework for Diablo II: Lord of Destruction."
readmeQualityOk: true
url: "https://github.com/ResurrectedTrader/d2bsng"
language: "C++"
languages: ["C++"]
languagePcts: [92]
stars: 12
forks: 5
openIssues: 0
closedIssues: 6
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2026-06-16T20:33:00Z"
lastCommitAt: "2026-11-02T11:36:59Z"
lastReleaseAt: "2026-07-22T21:39:41Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 98
undervaluedScore: 54
maintainers: ["ResurrectedTrader"]
openGraphImageUrl: "https://opengraph.githubassets.com/e4157ef762b453ad6f8380b885601ae3d1157c4658e3f5aab959649854fa133e/ResurrectedTrader/d2bsng"
---

# d2bsng

> This project has been vibe coded with [Claude](https://claude.com/claude-code).

**d2bsng** (D2 Botting System: Next Generation) is a modern, from-scratch rewrite of the
long-running d2bs scripting and automation framework for Diablo II: Lord of Destruction.
Where the legacy project embedded Mozilla's SpiderMonkey JavaScript engine, d2bsng is built
on Google's V8 - the same engine that powers Chrome and Node.js - and ships as a 32-bit
Windows DLL injected into the game client (patch 1.14d).

A central design goal is **JavaScript API compatibility with the legacy d2bs project**, so
that the large existing body of community scripts written against the older SpiderMonkey-era
API can run with minimal or no changes. Scripts read live game state and drive the client
through a typed game-abstraction layer built on [D2MOO](https://github.com/ThePhrozenKeep/D2MOO),
and the runtime ships with conveniences the original never had - notably full Chrome DevTools
debugging of each running script.

> The JavaScript API and the 1.14d implementation are complete - d2bsng aims to be a drop-in
> replacement for the original d2bs. A few behaviors carry over deliberately from the original;…
