---
repo: "matthiaskoenig/pkpdutils"
name: "pkpdutils"
description: "PK/PD pharmacometric analysis utilities in python"
readmeQualityOk: true
url: "https://github.com/matthiaskoenig/pkpdutils"
homepage: "https://matthiaskoenig.github.io/pkpdutils"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 6
forks: 0
openIssues: 2
closedIssues: 59
watchers: 2
contributors: 9
recentReleases: 0
createdAt: "2020-03-02T09:43:18Z"
lastCommitAt: "2026-11-01T22:58:36Z"
lastReleaseAt: "2025-10-20T20:51:42Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 97
undervaluedScore: 79
maintainers: ["matthiaskoenig", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/b6d640bbd5b7962d60e0394270d86a2f31c1175523d657de51730dcf5f183f86/matthiaskoenig/pkpdutils"
---

# pkpdutils: pharmacokinetic and pharmacodynamic analysis

`pkpdutils` is a python library for the pharmacokinetic (PK) and pharmacodynamic (PD) analysis of timecourses and parameters. It was formerly published as `pkdb-analysis`, the analysis toolbox of [PK-DB](https://pk-db.com); version 1.0.0 is a rewrite without any PK-DB dependency.

Features include

- **non-compartmental analysis** - exposure, peak, terminal phase, clearance and volume parameters of concentration and effect timecourses, single dose and multiple dosing (every dosing interval, steady state, accumulation), with units
- **data formats** - read event records (NONMEM, Monolix), the two PKNCA tables and the CDISC ADaM ADNCA dataset, write event records back
- **uncertainty** - bootstrap and delta method propagation for group timecourses (mean ± SD), summary statistics over individuals
- **curve fitting** - exponential, Bateman, Emax, dose proportionality and covariate models with standard errors, confidence intervals and model comparison
- **statistics on parameters** - significance tests, geometric mean ratios, bioequivalence, classification of drug–drug interactions, meta-analysis
- **figures** - timecourses,…
