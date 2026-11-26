---
repo: "VAIL-UCLA/NavSafe-infty"
name: "NavSafe-infty"
description: "NavSafe-∞: Benchmarking Closed-Loop Driving Safety in Photorealistic Environments"
readmeQualityOk: true
url: "https://github.com/VAIL-UCLA/NavSafe-infty"
language: "Python"
languages: ["Python"]
languagePcts: [98]
stars: 59
forks: 3
openIssues: 0
closedIssues: 2
watchers: 2
contributors: 6
recentReleases: 1
createdAt: "2026-08-10T00:16:20Z"
lastCommitAt: "2026-11-26T12:43:57Z"
lastReleaseAt: "2026-10-21T10:31:16Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 84
undervaluedScore: 20
maintainers: ["HongweiRuan", "sethzhao506"]
openGraphImageUrl: "https://opengraph.githubassets.com/f29ae7416dcce64ccbb791b8e254f635850be3b0bc6d510559aa06091dc248a4/VAIL-UCLA/NavSafe-infty"
---

Yuxin Bao<sup>1,*</sup>, Hongwei Ruan<sup>2,*</sup>, Luobin Wang<sup>2,†</sup>, Seth Z. Zhao<sup>1,†</sup>, Ziyang Leng<sup>1</sup>,<br>
    Zihan Zhang<sup>2</sup>, Yu Zeng<sup>3</sup>, Rowan McAllister<sup>3</sup>, Henrik Christensen<sup>2</sup>, Bolei Zhou<sup>1</sup>

## News

- **`2026/11`**: NavSafe-∞ would be presented in [CoRL 2026 G4DWM-AD Workshop](https://arlo0o.github.io/Grounded-Driving-World-Models_Workshop/).
- **`2026/10`**: NavSafe-∞ paper and codebase release. 

## Overview

**NavSafe-∞** benchmarks closed-loop driving safety in photorealistic reconstructed environments. The benchmark contains **280 scenarios across 28 safety event types**, with event-specific success and failure criteria. Camera observations reflect the evolving ego and actor states, allowing evaluation of how a policy interacts, recovers, and handles compounding errors.

This repository provides the toolbox for scenario mining, reconstruction preparation, asset harvesting, recipe authoring and replay, policy evaluation, visualization, scoring, and result aggregation.
