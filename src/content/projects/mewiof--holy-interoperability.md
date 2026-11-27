---
repo: "mewiof/Holy-Interoperability"
name: "Holy-Interoperability"
description: "Compatibility layer that runs x64 Xbox title packages as native Windows processes, with no emulation: clean-room reimplementations of the console's system libraries. Early bring-up. For interoperability, research and preservation."
readmeQualityOk: true
url: "https://github.com/mewiof/Holy-Interoperability"
language: "C++"
languages: ["C++"]
languagePcts: [99]
topics: ["compatibility-layer", "cpp", "interoperability", "preservation", "windows", "xbox", "xbox-series-x", "cmake"]
stars: 10
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-11-23T16:30:37Z"
lastCommitAt: "2026-11-27T12:58:53Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 37
maintainers: ["mewiof"]
openGraphImageUrl: "https://opengraph.githubassets.com/9925a29aeb36a42e6549cc11a2f0e6d2f6624ccabf905e8086fdf3aa3604e926/mewiof/Holy-Interoperability"
---

# Holy Interoperability

A compatibility layer that runs x64 console title packages as native Windows processes.

Current-generation Xbox titles are ordinary x64 Windows executables that link against a set of console-only
system libraries. Holy Interoperability starts such an executable directly on a PC and supplies those
libraries itself, as clean-room reimplementations on top of the host's own APIs. There is no CPU emulation, no
virtual machine and no separate runtime process.

> **Status: bring-up.** A retail title boots, creates its graphics device and tens of thousands of pipelines
> translated from native GPU code, and presents frames at its own pace within seconds of starting, but what it
> draws is not visible yet and no title is playable. See [Progress](#progress).

## Progress

_Last updated: 2026-11-27._ The goal is a reference title running as smoothly as on the console: a correct
picture, sound and input at a stable 30 frames a second or better. The percentages are rough estimates of how
much of the work toward that goal each area has, not test coverage.

**Overall: about 22%** `████░░░░░░░░░░░░░░░░`
