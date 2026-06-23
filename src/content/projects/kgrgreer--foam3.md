---
repo: "kgrgreer/foam3"
name: "foam3"
description: "FOAM: Feature-Oriented Active Modeller, Version 3 (unstable)"
url: "https://github.com/kgrgreer/foam3"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [89]
stars: 49
forks: 31
openIssues: 10
closedIssues: 21
watchers: 5
contributors: 46
recentReleases: 0
createdAt: "2021-03-22T20:19:42Z"
lastCommitAt: "2026-06-23T23:27:46Z"
status: "thriving"
tags: ["legacy_hero", "fork_magnet"]
healthScore: 93
undervaluedScore: 56
maintainers: ["kgrgreer", "jlhughes", "abdelaziz-mahdy"]
openGraphImageUrl: "https://opengraph.githubassets.com/b4ceae9f187fa04895ea29c41b99f4c7bd90a0e6963f9c3da811fd36abd4c77b/kgrgreer/foam3"
---

# FOAM3

Build fully featured high performance apps in less time using FOAM.

  * Application Speed
  * Application Size
  * Developer Efficiency

"Fast apps Fast"

FOAM3 is the active version of FOAM.

The FOAM1 [website](https://foam-framework.github.io/foam/) still contains many useful demos and videos (but some links may be broken).

Ask questions and get help on the [FOAM Discussion Group](https://groups.google.com/g/foam-framework-discuss). Or DeepWiki. 

## Remote deployment

To build and deploy to a remote linux instance

1. build: `./build.sh -ck[Jpom...]`
1. deploy: `./build.sh -TStandard,RemoteInstall,Java --user:foam user-id:3636 --remote-hostname:hostname`
1. visit: http://hostname:8080

## Style Guide

All code should follow the [style guide.](doc/guides/StyleGuide.md)

## Testing
To run all, Java and Javacript, tests from the command-line, run:
`./build.sh --run-tests`

To run individual tests from the command-line, run:
`./build.sh --run-tests:testName1,testName2,...testNameN`

# Documentation

## Videos
- [Short Intro](https://www.youtube.com/watch?v=S4LbUv5FsGQ)
- [Medium Intro](https://www.youtube.com/watch?v=n699DWb2TUs)
- [Long…
