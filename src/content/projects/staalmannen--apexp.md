---
repo: "staalmannen/APExp"
name: "APExp"
description: "Plan9 (9front) APE with experimental patches"
readmeQualityOk: true
url: "https://github.com/staalmannen/APExp"
language: "Perl"
languages: ["Perl", "C"]
languagePcts: [41, 40]
stars: 18
forks: 2
openIssues: 3
closedIssues: 9
watchers: 3
contributors: 3
recentReleases: 1
createdAt: "2024-04-24T09:38:24Z"
lastCommitAt: "2026-09-04T06:10:07Z"
lastReleaseAt: "2026-08-25T17:50:57Z"
status: "thriving"
tags: ["needs_contributors"]
healthScore: 95
undervaluedScore: 64
maintainers: ["claude", "staalmannen"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/791207711/070f1b11-5e25-4a01-ab4b-46c4cd1b5f81"
---

IMPORTANT NOTE
There is no guarantee that APExp builds from scratch in between releases.
Many (temporarily) breaking changes can occur between releases. 
The best option is probably to download the latest release.

# APExp
Plan9 (9front) APE with experimental patches (a.k.a APExp)

**Abstract**

With the advent of NPE as a superior compatibility layer using system libraries
and a thin shim, the need for the traditional APE will become less critical
for building the base system in the future. Instead of this becoming the 
death of APE, I would argue that it frees up alternative use cases for it 
when APE stops being an integral part of the base 9front system: NPE
aims to be as small, neat and native as possible, only aiming to build some
alien software. In contrast, I aim to make this free APE something bigger, 
messier (and some would say uglier) with the purpose of an as complete GNU / POSIX
compatibility as possible. Ideally will any (C and possibly transpiled-to-C) 
program built for UNIX be a simple configure/make away from being built on 
Plan9 with APExp.

**Fighting the Knights that say NIH**

The Not-invented-here (NIH) attitude is common in fringe hobbyist/research…
