---
repo: "KrishnamurthyLab/CougarStats"
name: "CougarStats"
description: "CougarStats: An R Shiny App for Statistical Data Analysis"
readmeQualityOk: true
url: "https://github.com/KrishnamurthyLab/CougarStats"
homepage: "https://www.cougarstats.ca/"
language: "R"
languages: ["R"]
languagePcts: [99]
stars: 6
forks: 5
openIssues: 12
closedIssues: 65
watchers: 2
contributors: 13
recentReleases: 0
createdAt: "2022-09-24T07:18:19Z"
lastCommitAt: "2026-11-08T10:41:10Z"
status: "thriving"
tags: ["fork_magnet"]
healthScore: 96
undervaluedScore: 90
maintainers: ["jacie-b", "magoto12", "ashokkrish"]
openGraphImageUrl: "https://opengraph.githubassets.com/9222a9e63c40243bb32947e6447461254fed6182e27b5a1cce8864cc382aa03b/KrishnamurthyLab/CougarStats"
---

# _CougarStats_: An R Shiny App for Statistical Data Analysis

## Overview

**CougarStats** is an open-source platform-independent browser-based interface for statistical data analysis. 

You can use the app on our website: <https://www.cougarstats.ca/>

or using our backup on Shinyapps.io server by clicking <https://cougarstats.shinyapps.io/CougarStats/>

The name _CougarStats_ is inspired by Mount Royal University's athletics mascot, the cougar, symbolizing strength and agility, and by the app's focus on statistics.

### Deployment notes

- The app runs as one single-threaded R process (`shiny::runApp`). All sessions share it, so a long computation in one session delays everyone else, and a crash ends every session.
- Production runs on DigitalOcean App Platform with 1 shared vCPU and 2 GB RAM. To test a build under the same limits, run `docker run -d --restart unless-stopped --cpus 1 --memory 2g -p 3838:3838 <image>`. The image has a `HEALTHCHECK` on `/`.
- The app idles at about 370 MB, and the largest Random Forest allowed (`RF_MAX_TRAIN_TREES` in `R/randomForest.R`) peaked at 0.9 GB in a 1 vCPU / 2 GB test container, so it fits. A container that runs out of memory is killed,…
