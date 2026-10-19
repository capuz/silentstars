---
repo: "MattMills/stellarstellaris-win"
name: "stellarstellaris-win"
description: "StellarStellaris: Windows Edition - C++ to improve the Stellaris player experience"
readmeQualityOk: true
url: "https://github.com/MattMills/stellarstellaris-win"
language: "Lua"
languages: ["Lua"]
languagePcts: [79]
stars: 27
forks: 4
openIssues: 7
closedIssues: 5
watchers: 4
contributors: 3
recentReleases: 1
createdAt: "2022-05-09T13:27:52Z"
lastCommitAt: "2026-10-19T09:14:54Z"
lastReleaseAt: "2026-10-16T18:53:41Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 88
undervaluedScore: 56
maintainers: ["MattMills"]
openGraphImageUrl: "https://opengraph.githubassets.com/6e23f62c59b83bac082f51bc35212c755348d0c36b8078d829d78f012a4c56e1/MattMills/stellarstellaris-win"
---

# StellarStellars - Windows (+Linux?) edition

The goal of this project is to start building an enhanced version of StellarStellaris that can hook into Stellaris on multiple platforms, with the initial focus being Steam Windows, since that is the most heavily used version.

This is in a very early alpha stage, it currently doesn't do much of anything.

Currently supported in version v0.1.1-alpha:
 * Windows Steam (should support any current version)
 * Windows GOG (should support any current version)

# NEED BETA TESTERS, JOIN DISCORD!

## Current State

Currently works on WINDOWS, Steam or GOG. I will eventually add Linux support, I don't have any macs.

Everything is being rebuilt in Lua. The C++ patches of the 3.x versions (the hull/shield/armor
regen overflow, the disappearing army outliner group, the species-is-modifiable alert lag, and the
debug logging of events and effects) are gone from this branch; `docs/bug_notes` and
`docs/performance_notes` keep what was learned about those problems.

## Lua scripting (in progress)

stellar-injected.dll embeds LuaJIT with [lua_fnmatch](https://github.com/MattMills/lua_fnmatch)
(stellar-fnmatch function signatures, instruction…
