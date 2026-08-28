---
repo: "Smaug123/WoofWare.PawPrint"
name: "WoofWare.PawPrint"
description: "An implementation of a deterministic .NET runtime, which can fuzz over all sources of nondeterminism; also some nascent tools for the symbolic analysis of IL."
readmeQualityOk: true
url: "https://github.com/Smaug123/WoofWare.PawPrint"
language: "F#"
languages: ["F#"]
languagePcts: [80]
stars: 9
forks: 0
openIssues: 25
closedIssues: 68
watchers: 1
contributors: 2
recentReleases: 10
createdAt: "2025-02-18T19:35:06Z"
lastCommitAt: "2026-08-28T12:23:05Z"
lastReleaseAt: "2026-08-03T20:09:34Z"
status: "thriving"
tags: ["solo_builder", "release_machine", "under_pressure"]
healthScore: 94
undervaluedScore: 77
maintainers: ["Smaug123"]
openGraphImageUrl: "https://opengraph.githubassets.com/f838382525b2bdc087ab87c3acba6460a6206d4b81cc40acbdb880c2013d37bb/Smaug123/WoofWare.PawPrint"
---

# WoofWare.PawPrint

<picture>
  <source media="(prefers-color-scheme: dark)" srcset="logos/dark.svg">
  <source media="(prefers-color-scheme: light)" srcset="logos/light.svg">
</picture>

## Slop status

Original architecture is by me, with only reference assistance from LLMs.
Then in early 2026 I drove GPT-5.5 and Claude Opus 4.6/4.7 hard to get this to a usable state, resulting in release 0.1.1; I did review all the code during that time.

Since then, as I wanted to use this to debug some real life flaky tests, I drove GPT-5.6 Sol and Claude Opus 4.8/5 and Fable 5 much harder, and gradually stopped reading the code.
As of August 2026, it would probably qualify as fully vibe-coded, although it *is* (astonishingly) a powerful and working tool which has actually debugged three real flaky tests in extremely nontrivial projects.

## Description

This is an *unfinished* deterministic implementation of a .NET runtime (specifically .NET 10).
You give it a DLL, and it executes the entry point therein on an emulated runtime which controls all sources of nondeterminism.

## Current project status

Even incomplete as it is, PawPrint is currently capable of automatically detecting and…
