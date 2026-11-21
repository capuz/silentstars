---
repo: "ramonburf/Tims-Cooked"
name: "Tims-Cooked"
description: "iOS 27.0.1 jailbreak research — IOSurface kernel surface exploitation on iPhone 13 Pro / 17 Pro"
readmeQualityOk: true
url: "https://github.com/ramonburf/Tims-Cooked"
language: "Go"
languages: ["Go", "Swift", "Python"]
languagePcts: [37, 31, 23]
stars: 59
forks: 8
openIssues: 1
closedIssues: 0
watchers: 4
contributors: 6
recentReleases: 10
createdAt: "2026-11-09T12:52:07Z"
lastCommitAt: "2026-11-21T11:34:21Z"
lastReleaseAt: "2026-11-20T11:43:26Z"
status: "thriving"
tags: ["release_machine"]
healthScore: 70
undervaluedScore: 31
maintainers: ["410962-ui", "ramonburf", "researcher"]
openGraphImageUrl: "https://opengraph.githubassets.com/6b19145fbb4f0df71339febbd15db5cf25c649144ca4231da529528f6e62d230/ramonburf/Tims-Cooked"
discussionCount: 0
---

# Tims Cooked

Tims Cooked is an exploratory iOS security-research harness and analysis repository for iOS 27.0 and 27.0.1 on arm64e. The research goal is a semi-untethered jailbreak; this repository does **not** contain one.

## Current status

No kernel read/write primitive, kernel code execution, PAC/SPTM bypass, or working jailbreak has been demonstrated. The repository tracks candidate socket, VM, IOSurface, and other kernel paths. Treat each result according to its evidence: a reachable interface or race observation is not, by itself, a memory-corruption primitive or exploit. A 2026-11-20 source review reclassified the earlier socket peer-delivery events as inconclusive because the trigger does not exclude ordinary file-descriptor reuse; no socket UAF is established. See the [socket fd-reuse correction](https://github.com/ramonburf/Tims-Cooked/blob/HEAD/research-updates/2026-11-20-socket-fd-reuse-erratum.md).

Start with the relevant notes under [`analysis/`](https://github.com/ramonburf/Tims-Cooked/blob/HEAD/analysis/) and distinguish confirmed observations from hypotheses before running a probe.
