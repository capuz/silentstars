---
repo: "Smaug123/WoofWare.PawPrint"
name: "WoofWare.PawPrint"
description: "An *extremely WIP* implementation of a .NET runtime."
readmeQualityOk: true
url: "https://github.com/Smaug123/WoofWare.PawPrint"
language: "F#"
languages: ["F#"]
languagePcts: [83]
stars: 9
forks: 0
openIssues: 26
closedIssues: 65
watchers: 1
contributors: 2
recentReleases: 10
createdAt: "2025-02-18T19:35:06Z"
lastCommitAt: "2026-08-16T04:09:13Z"
lastReleaseAt: "2026-08-03T20:09:34Z"
status: "thriving"
tags: ["solo_builder", "release_machine", "under_pressure"]
healthScore: 94
undervaluedScore: 76
maintainers: ["Smaug123"]
openGraphImageUrl: "https://opengraph.githubassets.com/15e59c355d53f4402ca650de9d09a31d395303f6540197337d5eba2dc9a70d17/Smaug123/WoofWare.PawPrint"
---

# WoofWare.PawPrint

## Slop status

Original architecture is by me, with only reference assistance from LLMs.
Then in early 2026 I drove GPT-5.5 and Claude Opus 4.6/4.7 hard to get this to a usable state, resulting in release 0.1.1; I did review all the code during that time.

Since then, as I wanted to use this to debug some real life flaky tests, I drove GPT-5.6 Sol and Claude Opus 4.8/5 and Fable 5 much harder, and gradually stopped reading the code.
As of August 2026, it would probably qualify as fully vibe-coded, although it *is* (astonishingly) a powerful and working tool which has actually debugged three real flaky tests in extremely nontrivial projects.

## Description

This is an *unfinished* deterministic implementation of a .NET runtime (specifically .NET 10).
You give it a DLL, and it executes the entry point therein on an emulated runtime which controls all sources of nondeterminism.

## Current project status

Even incomplete as it is, PawPrint is currently capable of automatically detecting and reproducing a number of textbook [race conditions](https://github.com/Smaug123/WoofWare.PawPrint/blob/HEAD/WoofWare.PawPrint.Test/sourcesConcurrencyBugs/), by running the…
