---
repo: "AforAmpere/EnumPattEvo"
name: "EnumPattEvo"
description: "Enumerates (given time) all stable patterns with set parameters whose evolutions contain a given starting pattern in various Cellular Automata rulespaces"
readmeQualityOk: true
url: "https://github.com/AforAmpere/EnumPattEvo"
language: "C++"
languages: ["C++"]
languagePcts: [97]
stars: 7
forks: 1
openIssues: 0
closedIssues: 0
watchers: 3
contributors: 1
recentReleases: 0
createdAt: "2020-10-02T06:03:50Z"
lastCommitAt: "2026-08-29T17:27:58Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 66
undervaluedScore: 38
maintainers: ["AforAmpere"]
openGraphImageUrl: "https://opengraph.githubassets.com/da31fd52f593d4cca7447713767d1cf495ee25d08a992fa29920090fced3d02d/AforAmpere/EnumPattEvo"
---

# EnumPattEvo

A program for finding rules in cellular automata where starting patterns evolve in specified ways

## What EPE Does

EPE is designed for taking an initial pattern and finding all examples (given enough time) of whatever constraints are set. For instance, finding all rules in some rulespace where a pattern is an oscillator or a spaceship. EPE aims to complete those searches with the minimal amount of searching to guarantee complete coverage.

## How it Works

EPE does a depth-first search across the rulespace it is given in an attempt to find the rules that meet the search criteria. Each node of the tree corresponds to an increase in one generation from the parent node. The branches from a given node correspond to all of the ways to set the new transitions that have previously been undetermined during the evolution that now must be determined to move forward. In INT, this leads to a branching ratio at a node of 2^t, where t is the number of currently relevant transitions that were previously undetermined. Searching in this manner is vastly more effective in many cases than simply trying to run each rule in a given rulespace. The exceptions to this are…
