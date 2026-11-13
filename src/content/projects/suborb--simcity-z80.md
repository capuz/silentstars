---
repo: "suborb/simcity_z80"
name: "simcity_z80"
description: "Disassembly and rebuild of Sim City for the ZX Spectrum and other Z80 machines"
readmeQualityOk: true
url: "https://github.com/suborb/simcity_z80"
language: "Assembly"
languages: ["Assembly", "Python"]
languagePcts: [53, 25]
stars: 7
forks: 0
openIssues: 0
closedIssues: 11
watchers: 4
contributors: 1
recentReleases: 5
createdAt: "2021-07-04T20:13:36Z"
lastCommitAt: "2026-11-13T18:34:15Z"
lastReleaseAt: "2026-11-09T19:45:06Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero", "release_machine"]
healthScore: 90
undervaluedScore: 79
maintainers: ["suborb"]
openGraphImageUrl: "https://opengraph.githubassets.com/0f3ca19c21f42e940ddc386c103fae29b83c52233153d423819149ff4f22c5c0/suborb/simcity_z80"
---

# Sim City Z80

This is a work-in-progress disassembly of the ZX Spectrum version of Sim City.

## Background

This disassembly was started back in 2000 with the aim of porting the whole
game to the z88. Sufficient information has been determined to allow porting
of the engine to other z80 machines.

## Analysis

As can be seen with the NES version (and presumably others as well), the
game consists of two processes:

* A UI process, responsible for handling user input and rendering the display
* A simulation process

On the Spectrum this is achieved by im2 based task swapping.

This clear separation has made it possible to retarget the engine to run on multiple z80 based computers.

## Comparison with CPC z80 engine

The CPC also had a port of SimCity. Small changes were made to the simulation engine as a result
of more memory being available:

* ZX had 4/4/4 evolution points for RIC zones, CPC had 8/8/10
* As a result ZX had 345 8x8 glyps, and CPC had 471
* Warning thresholds are different: 
    * Pollution 40 on the CPC against 60 on the ZX
    * Crime 30 against 20
    * Traffic 42 against 60. 
    * The "need" (more zones) message is sent 25 zone imbalance against 19.
*…
