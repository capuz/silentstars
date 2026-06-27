---
repo: "wjenh/pidp1-mods"
name: "pidp1-mods"
description: "Modifications to the main code to add dynamic IOTs, better audio, etc."
url: "https://github.com/wjenh/pidp1-mods"
language: "C"
languages: ["C"]
languagePcts: [81]
stars: 10
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2025-10-16T11:34:18Z"
lastCommitAt: "2026-06-27T00:45:43Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 79
undervaluedScore: 50
maintainers: ["wjenh"]
openGraphImageUrl: "https://opengraph.githubassets.com/796739b13ebe2935a979eba35a03fae9c758a71e08766a5b2bc9504a621965b6/wjenh/pidp1-mods"
discussionCount: 1
---

## Pidp-1 mods

This contains files modified from https://github.com/obsolescence/pidp1 to add new functionality and fix some issues.
Note that this no longer tracks the original repo since this branch has diverged too much for automatic tracking.
The link was removed on 3-Feb-26 to make this a fully-independent repository.
Selective updates from the original branch are made now.

Many unused files from the original have been cleaned out and some of the original **C** files updated to
have some comments and be more readable.

Almost 5,000 lines of documentation in over 20 documents have been added in *MD* format,
not counting comments in the source code. Commented code? Legibly formatted commented code? Gasp!

In addition to new emulator features such as lightpen support, high speed channels, and dynamically-loaded IOTs,
it also adds various tools such as the am1 assembler and include files for am1,
the ad1 symbolic debuger, drum utilities, documentation, etc.

Implementations of the Type23 drum, the DCS communications system, the Type 33 symbol generator, the Type 340
advanced graphics display with all options and multiterminal support,
both the Type 62 and Type 64 line printers…
