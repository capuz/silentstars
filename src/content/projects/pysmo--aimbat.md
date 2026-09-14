---
repo: "pysmo/aimbat"
name: "aimbat"
description: "AIMBAT: Automated and Interactive Measurement of Body wave Arrival Times"
readmeQualityOk: true
url: "https://github.com/pysmo/aimbat"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["python", "seismology"]
stars: 49
forks: 19
openIssues: 4
closedIssues: 24
watchers: 8
contributors: 7
recentReleases: 0
createdAt: "2012-09-27T16:55:04Z"
lastCommitAt: "2026-09-14T09:12:04Z"
lastReleaseAt: "2021-09-05T22:10:07Z"
status: "thriving"
tags: ["legacy_hero", "funded"]
healthScore: 97
undervaluedScore: 55
maintainers: ["smlloyd", "github-actions[bot]", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/7b9ff056c022517babe64c767147d01c0cbc6c8a1a518b1e57eb13f616a6b041/pysmo/aimbat"
fundingLinks: ["GITHUB:https://github.com/smlloyd"]
---

<h1 align="center">AIMBAT</h1>

<em>Automated and Interactive Measurement of Body wave Arrival Times</em>
</p>

</img></a>
</img></a>
</img></a>
</img></a>
</img></a></div>

<em>Documentation:</em> <a href="https://aimbat.pysmo.org" target="_blank">https://aimbat.pysmo.org</a>
</p>
<em>Source Code:</em> <a href="https://github.com/pysmo/aimbat" target="_blank">https://github.com/pysmo/aimbat</a>
</p>

AIMBAT (Automated and Interactive Measurement of Body wave Arrival Times) is an
open-source tool for measuring teleseismic body wave arrival times. Seismograms
are automatically aligned using the ICCS (Iterative Cross-Correlation and
Stack) algorithm[^1]. Picks are then reviewed and refined interactively before a
final MCCC (Multi-Channel Cross-Correlation) pass[^2] computes the definitive
arrival times.

## Version 2

AIMBAT v2 is a complete rewrite, sharing no code with v1. Changes for users
include:

- **Flexible workflow.** Snapshots record the processing state at any point,
  so earlier states can be restored and parameter sets compared without
  losing prior work. ICCS and MCCC can be run in any order and repeated as
  needed; results can be exported from any snapshot, not only…
