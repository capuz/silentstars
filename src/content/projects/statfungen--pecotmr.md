---
repo: "StatFunGen/pecotmr"
name: "pecotmr"
description: "Post-GWAS enrichment, colocalization, TWAS and Mendelian Randomization to integrate molecular QTL and GWAS."
readmeQualityOk: true
url: "https://github.com/StatFunGen/pecotmr"
homepage: "https://StatFunGen.github.io/pecotmr"
language: "R"
languages: ["R"]
languagePcts: [84]
stars: 38
forks: 21
openIssues: 8
closedIssues: 11
watchers: 4
contributors: 18
recentReleases: 0
createdAt: "2023-09-24T14:44:05Z"
lastCommitAt: "2026-08-27T14:27:01Z"
lastReleaseAt: "2024-01-18T22:18:04Z"
status: "thriving"
tags: ["hidden_gem", "fork_magnet"]
healthScore: 90
undervaluedScore: 60
maintainers: ["danielnachun", "Yining97", "gaow"]
openGraphImageUrl: "https://opengraph.githubassets.com/7cc608fd11616edf8c6619b6a88f10ffd4aa80b487370964a3476ae14dea0c9a/StatFunGen/pecotmr"
discussionCount: 2
---

# pecotmr

This R package, `pecotmr` implements **p**ost-GWAS **e**nrichment, **co**localization, **T**WAS and **M**endelian **R**andomization to integrate QTL and GWAS analysis, mostly based on fine-mapped single effects model although a number of other approaches are included for handy availiability in daily research.
`pecotmr` also stands for a **p**robabilistic **eco**system consolidating a range of established and new models into a streamlined, user-friendly interface complete with well-documented examples that will help getting your analysis done by **t**o**m**o**r**row if you start working on it today!

This project was developed by NIH/NIA FunGen-xQTL Project Working Group members with applications to FunGen-xQTL data analysis.

## Quick Start

To install the latest version of the pecotmr package
from GitHub, use [BiocManager][BiocManager]:

```R
install.packages(c("BiocManager", "remotes"))
BiocManager::install("StatFunGen/pecotmr")
```

If you have cloned the repository locally, you can install the package
with the `install_local` function from devtools. Assuming your working
directory contains the `pecotmr` repository, run this code to
install the package:

```R…
