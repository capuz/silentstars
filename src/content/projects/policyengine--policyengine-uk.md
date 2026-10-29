---
repo: "PolicyEngine/policyengine-uk"
name: "policyengine-uk"
description: "An open-source static tax-benefit microsimulation model for the UK."
readmeQualityOk: true
url: "https://github.com/PolicyEngine/policyengine-uk"
homepage: "https://policyengine.github.io/policyengine-uk/"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["psl-cataloged", "economic-policy", "economics", "inequality", "policy", "poverty", "public-policy", "python", "tax", "united-kingdom"]
stars: 53
forks: 34
openIssues: 228
closedIssues: 1066
watchers: 4
contributors: 24
recentReleases: 0
createdAt: "2020-08-05T11:05:57Z"
lastCommitAt: "2026-10-29T05:50:52Z"
lastReleaseAt: "2022-04-13T18:22:13Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero", "fork_magnet"]
healthScore: 96
undervaluedScore: 60
maintainers: ["MaxGhenis", "juaristi22", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/31695ba405f186de1b4770422f31732016d812894f1f3f26474c3a961d58b7c3/PolicyEngine/policyengine-uk"
discussionCount: 7
---

# PolicyEngine UK

> **For microsimulation, use [policyengine.py](https://github.com/PolicyEngine/policyengine.py).** Society-wide microsimulation — population aggregates and distributional or budgetary impacts — is moving to the managed `policyengine.py` bundle, which pins certified, calibration-gated datasets. **Direct microsimulation via `policyengine-uk` (`Microsimulation()`) is deprecated** and being migrated to `policyengine.py`. This package remains the home of the UK tax-benefit rules and household-level calculations. Microsimulation results are estimates.

PolicyEngine UK is [PolicyEngine](https://policyengine.org)'s microsimulation model of the UK tax-benefit system.
It uses the PolicyEngine Core microsimulation framework, which is based on [OpenFisca](https://openfisca.org). 

The elements are described in different folders. All the modelling happens within the `policyengine_uk` folder.

- The rates and other system parameters are in the `parameters` folder.
- The formulas and inputs are in the `variables` folder.
- This country package comes also with reforms in the `reforms` folder.

The files that are outside from the `policyengine_uk` folder are used to set up the…
