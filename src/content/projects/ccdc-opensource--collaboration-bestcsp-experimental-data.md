---
repo: "ccdc-opensource/collaboration-bestcsp-experimental-data"
name: "collaboration-bestcsp-experimental-data"
description: "Sharing of experimental data for validating computational methods as part of the BEST-CSP project, see https://www.cost.eu/actions/CA22107"
readmeQualityOk: true
url: "https://github.com/ccdc-opensource/collaboration-bestcsp-experimental-data"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 6
forks: 15
openIssues: 0
closedIssues: 0
watchers: 2
contributors: 9
recentReleases: 0
createdAt: "2024-03-27T07:55:59Z"
lastCommitAt: "2026-09-28T10:05:36Z"
lastReleaseAt: "2024-06-18T16:00:22Z"
status: "thriving"
tags: ["fork_magnet"]
healthScore: 78
undervaluedScore: 84
maintainers: ["IsaacSugden", "jonasnyman1982", "ccdc-github-admin"]
openGraphImageUrl: "https://opengraph.githubassets.com/71173ff666a198e651746c05b63780debf8a356dd5355b3ddd5a9ce95a3adf8e/ccdc-opensource/collaboration-bestcsp-experimental-data"
discussionCount: 4
---

# collaboration-bestcsp-experimental-data

Sharing of experimental data for validating computational methods as part of the BEST-CSP project,
see <https://www.cost.eu/actions/CA22107> and <https://best-csp.eu/>

This repository contains individual folders for each of the compounds considered in this Action,
and an example "System_template" to illustrate the format.

Within each folder are .csv files for each polymorph, for standardised recording of data.
Keeping the experimental data to a standard format will aid in the statistical treatment of results,
and csv files are machine readable, facilitating plotting and tabulating the data.

There is also a Python script in the top directory for calculating consensus means from data generated in different labs called stats.py.
The script requires the modules statsmodels and matplotlib; it may be simpler to make a conda environment and install those modules,
but I have included environment.yaml as a snapshot for the pictures used in the Paris meeting (20/06/2024).

## Filling in CSV files

In writing the csv files, please consider the following guidance.
Each line can contain either a single data point, or the mean value and standard…
