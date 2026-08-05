---
repo: "Smaug123/WoofWare.PawPrint"
name: "WoofWare.PawPrint"
description: "An *extremely WIP* implementation of a .NET runtime."
readmeQualityOk: true
url: "https://github.com/Smaug123/WoofWare.PawPrint"
language: "F#"
languages: ["F#"]
languagePcts: [85]
stars: 9
forks: 0
openIssues: 27
closedIssues: 29
watchers: 1
contributors: 2
recentReleases: 10
createdAt: "2025-02-18T19:35:06Z"
lastCommitAt: "2026-08-05T06:06:45Z"
lastReleaseAt: "2026-08-03T20:09:34Z"
status: "thriving"
tags: ["solo_builder", "release_machine", "under_pressure"]
healthScore: 85
undervaluedScore: 73
maintainers: ["Smaug123"]
openGraphImageUrl: "https://opengraph.githubassets.com/0f47c6a786374ff38bf8a62621639ce40dab34372f01b08e201b71dc2857c44b/Smaug123/WoofWare.PawPrint"
---

# WoofWare.PawPrint

*Slop status: original architecture is by me, with only reference assistance from LLMs. Then in 2026 I drove GPT-5.5 and Claude Opus 4.6/4.7 hard to get this to a usable state. Architecture is still mine, and I've read all the incoming non-test code, but have perhaps been a bit sloppy about some of it.*

This is an *unfinished* deterministic implementation of a .NET runtime (specifically .NET 10).
You give it a DLL, and it executes the entry point therein on an emulated runtime which controls all sources of nondeterminism.

## Current status

Even incomplete as it is, PawPrint is currently capable of automatically detecting and reproducing a number of textbook [race conditions](https://github.com/Smaug123/WoofWare.PawPrint/blob/HEAD/WoofWare.PawPrint.Test/sourcesConcurrencyBugs/), by running the input program with many different seeds for its source of randomness.

Nontrivial programs will probably fail loudly, unless you're lucky enough to be using only what I've already implemented.

The following work, at least in some minimal form:

* `Console.WriteLine`
* `async void Main(string[] args) { ... }`
* `Task.Run`
* Quite a lot of reflection
* Many low-level…
