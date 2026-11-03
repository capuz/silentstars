---
repo: "riyukuro/MS2Recomp"
name: "MS2Recomp"
description: "Work-in-progress recompilation of the MapleStory2 client (x64) into a full replacement executable, built with MSVC 14.16"
readmeQualityOk: true
url: "https://github.com/riyukuro/MS2Recomp"
language: "C++"
languages: ["C++"]
languagePcts: [98]
stars: 5
forks: 2
openIssues: 0
closedIssues: 12
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-10-18T01:32:57Z"
lastCommitAt: "2026-11-03T10:51:41Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 90
undervaluedScore: 62
maintainers: ["riyukuro"]
openGraphImageUrl: "https://opengraph.githubassets.com/733744f39a5221654564eada264c74c42e9b5f520491399dec8b65fe8c2804af/riyukuro/MS2Recomp"
---

# MS2Recomp

A work-in-progress recompilation of the MapleStory2 client (KMS2 dev build, x64, April 2022).

Functions recovered from the original executable are rewritten as C++ in `src/ms2/`, one file per original
compilation unit, and compiled with the same compiler (MSVC 14.16). Most of them are a byte-for-byte match of the
original. Together with the patched Gamebryo engine and the statically linked libraries, they link into a complete
replacement `MapleStory2.exe` (the "full executable", see [`BUILDING.md`](https://github.com/riyukuro/MS2Recomp/blob/HEAD/BUILDING.md)) that boots, logs in and plays
on a server.

The full executable is not finished. Its build still reads the original exe, a small amount of generated glue and a
runtime shim cover what is not recovered yet, and the Nexon Messenger code is stubbed out.

The same sources also build a proxy `dinput8.dll` that uses Microsoft Detours to redirect functions of the original
`MapleStory2.exe` to the recompiled ones. It is the development build: the per-unit gates link it, and it runs the
differential tests.

This repository contains only the recompiled code and what is needed to build it. It does not include the game, the…
