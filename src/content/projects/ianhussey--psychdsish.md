---
repo: "ianhussey/psychdsish"
name: "psychdsish"
description: "R package to create and validate psych-DS inspired R project structures"
readmeQualityOk: true
url: "https://github.com/ianhussey/psychdsish"
language: "R"
languages: ["R"]
languagePcts: [100]
stars: 11
forks: 4
openIssues: 1
closedIssues: 1
watchers: 1
contributors: 2
recentReleases: 1
createdAt: "2025-08-15T12:17:57Z"
lastCommitAt: "2026-09-22T08:45:55Z"
lastReleaseAt: "2026-07-19T13:30:28Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 58
undervaluedScore: 50
maintainers: ["ianhussey"]
openGraphImageUrl: "https://opengraph.githubassets.com/ee7e848911e1c3256e212d42c0710305743d40b8c0a4b9db4aba3106611431be/ianhussey/psychdsish"
---

# psych-DS-ish

Standardization of project structures is both very useful and, let's face it, not very exciting or at the top of anyone's To Do list. I wanted to make it easier, both in my own research and to teach students good practices. 

{psychdsish} creates a standardized project skeleton that is compliant-ish with [psych-DS](https://psych-ds.github.io/) and also adds several features to improve reproducibility, such Quarto templates, a readme template, CC BY licence, and a .gitignore with reasonable defaults. 

It also has a validator function that lets users check that their project is still compliant with the standard and, if not, tells them how to rectify it.

## Installation

You can install the development version of `psychdsish` from GitHub with:

``` r
# install.packages("remotes")
remotes::install_github("ianhussey/psychdsish")
```

## Data Standards

I am a big fan of the concept of standards, and the [psych-DS](https://psych-ds.github.io/) data standard specifically. Huge credit to Melissa Klein Struhl for leading it. 

*But*:

1. I am not *yet* convinced of the utility of psych-DS's .json requirement. a) .json files are a pain to create, and b) they are currently…
