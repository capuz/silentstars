---
repo: "pik-piam/mrremind"
name: "mrremind"
description: "The mrremind packages contains data preprocessing for the REMIND model."
url: "https://github.com/pik-piam/mrremind"
language: "R"
languages: ["R"]
languagePcts: [100]
stars: 5
forks: 54
openIssues: 19
closedIssues: 40
watchers: 0
contributors: 60
recentReleases: 0
createdAt: "2020-04-30T14:12:55Z"
lastCommitAt: "2026-07-03T12:41:00Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero", "fork_magnet"]
healthScore: 93
undervaluedScore: 92
maintainers: ["fbenke-pik", "dklein-pik", "lea-hayez"]
openGraphImageUrl: "https://opengraph.githubassets.com/491c6d8342178a5e466b9fd16870a343a825efba35cb6826e550c7fa0d8aebcb/pik-piam/mrremind"
discussionCount: 6
---

# MadRat REMIND Input Data Package

R package **mrremind**, version **0.272.6**

## Purpose and Functionality

The mrremind packages contains data preprocessing for the
    REMIND model.

## Installation

For installation of the most recent package version an additional repository has to be added in R:

```r
options(repos = c(CRAN = "@CRAN@", pik = "https://rse.pik-potsdam.de/r/packages"))
```
The additional repository can be made available permanently by adding the line above to a file called `.Rprofile` stored in the home folder of your system (`Sys.glob("~")` in R returns the home directory).

After that the most recent version of the package can be installed using `install.packages`:

```r
install.packages("mrremind")
```

Package updates can be installed using `update.packages` (make sure that the additional repository has been added before running that command):

```r
update.packages()
```

## Questions / Problems

In case of questions / problems please contact Lavinia Baumstark <lavinia@pik-potsdam.de>.

## Citation

To cite package **mrremind** in publications use:

Baumstark L, Rodrigues R, Levesque A, Oeser J, Bertram C, Mouratiadou I, Malik A, Schreyer F, Soergel B,…
