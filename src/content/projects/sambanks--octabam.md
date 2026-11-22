---
repo: "sambanks/octabam"
name: "octabam"
description: "A remixer for the Elektron Octatrack's OS: modules (custom DSP56300 effects, ColdFire mods, ports of community mods) composed into one firmware image built from your own 1.40C. No firmware distributed."
readmeQualityOk: true
url: "https://github.com/sambanks/octabam"
homepage: "https://sambanks.github.io/octabam/"
language: "Python"
languages: ["Python", "Assembly"]
languagePcts: [50, 34]
topics: ["audio-dsp", "dsp", "dsp56300", "elektron", "firmware", "octatrack", "reverb", "reverse-engineering", "coldfire", "delay"]
stars: 315
forks: 58
openIssues: 3
closedIssues: 47
watchers: 6
contributors: 28
recentReleases: 4
createdAt: "2026-08-07T22:17:45Z"
lastCommitAt: "2026-11-22T11:50:49Z"
lastReleaseAt: "2026-11-08T21:17:28Z"
status: "thriving"
tags: []
healthScore: 99
undervaluedScore: 33
maintainers: ["sambanks", "ilia-murzinov", "claude"]
openGraphImageUrl: "https://opengraph.githubassets.com/4e0f04e7fe1093a68889690a2d4e4f1922fba79343bcb2cb9d495545aaca359f/sambanks/octabam"
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
