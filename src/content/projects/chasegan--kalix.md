---
repo: "chasegan/Kalix"
name: "Kalix"
description: "Kalix - a hydrological modelling platform for the people"
readmeQualityOk: true
url: "https://github.com/chasegan/Kalix"
homepage: "https://kalixproject.org"
language: "Java"
languages: ["Java", "Rust"]
languagePcts: [52, 25]
stars: 7
forks: 1
openIssues: 87
closedIssues: 269
watchers: 3
contributors: 7
recentReleases: 10
createdAt: "2025-01-08T00:28:19Z"
lastCommitAt: "2026-07-29T06:13:42Z"
lastReleaseAt: "2026-06-03T15:37:26Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 95
undervaluedScore: 83
maintainers: ["Eldred777", "chasegan"]
openGraphImageUrl: "https://opengraph.githubassets.com/a68acde9b708db02c13db62601fbe70bdf7f8952210ed88f624d50a41acee60d/chasegan/Kalix"
---

# Kalix

## Description

To be completed.

## Licence

This project is licensed under the Mozilla Public License Version 2.0, 
which can be found online at https://www.mozilla.org/en-US/MPL/2.0/ and in the file 
"LICENSE.txt" in this repository.

## Current work (and backlog)

https://www.notion.so/chasegan/Development-tasks-14c3cd7417a280a79bfcc0405e9d75a1 

https://github.com/users/chasegan/projects/1

- TOML for the model format. Maybe call these files *.kx for "kalix"
- Optional fast compressed extendable multi-timeseries format (Pixie, based on Facebook's Gorilla algorithm).
  - Use a single codec
  - Index file = *.pxt = pixie text-based index file
  - Binary file = *.pxb = pixie binary file 
- CSV reader and writer. Reader should be flexible with date stamps, writer should be strict, using a choice of these depending on granularity required:
  - "yyyy-MM-dd"
  - "yyyy-MM-dd'T'HH:mm:ss.SSS" 
- How can we think about global optimisation and parameter uncertainty estimators together?
- Implement global optimisation:
   - DE 
     - https://en.wikipedia.org/wiki/Differential_evolution
     - https://machinelearningmastery.com/differential-evolution-from-scratch-in-python/
   -…
