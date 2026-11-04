---
repo: "sambanks/octabam"
name: "octabam"
description: "A remixer for the Elektron Octatrack's OS: modules (custom DSP56300 effects, ColdFire mods, ports of community mods) composed into one firmware image built from your own 1.40C. No firmware distributed."
readmeQualityOk: true
url: "https://github.com/sambanks/octabam"
homepage: "https://sambanks.github.io/octabam/"
language: "Python"
languages: ["Python", "Assembly"]
languagePcts: [51, 31]
topics: ["audio-dsp", "dsp", "dsp56300", "elektron", "firmware", "octatrack", "reverb", "reverse-engineering", "coldfire", "delay"]
stars: 295
forks: 52
openIssues: 14
closedIssues: 22
watchers: 10
contributors: 25
recentReleases: 2
createdAt: "2026-08-07T22:17:45Z"
lastCommitAt: "2026-11-04T08:04:03Z"
lastReleaseAt: "2026-11-01T23:36:40Z"
status: "thriving"
tags: []
healthScore: 92
undervaluedScore: 29
maintainers: ["sambanks", "claude", "radiohagen"]
openGraphImageUrl: "https://opengraph.githubassets.com/f365f2b01e76296a6d0c13228123b0e624ae30cbb27eee1b4275c3cbf94772ce/sambanks/octabam"
---

# octabam

An unofficial community remixer for the Elektron Octatrack's operating
system, not affiliated with Elektron: pick the modifications you want and
build them into one firmware image from your own copy of OS 1.40C.

A modification is a **module** (`modules/<name>/`). A named selection of
modules is a **remix** (`remixes/<name>/`). `make image REMIX=<name>`
composes a remix into a card-flashable image: it places the code, wires
the hooks by symbol, refuses collisions by name, and proves every ported
module against its author's own build byte for byte. No firmware is
distributed here; every image is derived from the user's own 1.40C on the
user's machine, and a built image must never be shared.

Every module is contributed by its author and credited in the table below.
Pull requests are accepted: a module, a port of an existing mod, a fix, a
doc correction. [GitHub Issues](https://github.com/sambanks/octabam/issues)
take bug reports, module proposals and hardware test reports; each has a
form (`.github/ISSUE_TEMPLATE/`) asking for the remix, image build,
hardware model and steps to reproduce.
The licence is MIT.

## Unofficial firmware

This is unofficial firmware, not made,…
