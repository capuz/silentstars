---
repo: "PredictiveEcology/SpaDES.core"
name: "SpaDES.core"
description: "Core functionality for Spatial Discrete Event Simulation (SpaDES)"
readmeQualityOk: true
url: "https://github.com/PredictiveEcology/SpaDES.core"
homepage: "https://spades-core.predictiveecology.org/"
language: "R"
languages: ["R"]
languagePcts: [99]
topics: ["r-package", "simulation-framework", "simulation-modeling", "discrete-events-simulations"]
stars: 11
forks: 19
openIssues: 25
closedIssues: 194
watchers: 4
contributors: 9
recentReleases: 0
createdAt: "2017-06-28T17:59:02Z"
lastCommitAt: "2026-09-19T02:46:41Z"
lastReleaseAt: "2019-11-25T16:57:30Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero", "fork_magnet"]
healthScore: 93
undervaluedScore: 84
maintainers: ["eliotmcintire", "achubaty"]
openGraphImageUrl: "https://opengraph.githubassets.com/46a7bd3cdccb5989141fbb6420668f60aa321ffccacbbcef626caa5776c0bf89/PredictiveEcology/SpaDES.core"
discussionCount: 2
---

# SpaDES.core

Core functionality for Spatial Discrete Event System (SpaDES).

This package provides the core framework for a discrete event system to 
implement a complete data-to-decisions, reproducible workflow
(e.g., McIntire et al. (2022) <https://doi.org/10.1111/ele.13994>,
Barros et al. (2022) <https://doi.org/10.1111/2041-210X.14034>).
The core components facilitate the development of modular pieces, 
and enable the user to include additional functionality by running user-built modules.
Includes conditional scheduling, restart after interruption, packaging of
reusable modules, tools for developing arbitrary automated workflows,
automated interweaving of modules of different temporal resolution,
and tools for visualizing and understanding the within-project dependencies.

**Website:** [https://SpaDES-core.PredictiveEcology.org](https://SpaDES-core.PredictiveEcology.org)

**Wiki:** [https://github.com/PredictiveEcology/SpaDES/wiki](https://github.com/PredictiveEcology/SpaDES/wiki)

## Installation

### Current stable release

**Install from CRAN:**

```r
install.packages("SpaDES.core")
```

**Install from GitHub:**

```r
#install.packages("devtools")
library("devtools")…
