---
repo: "PolicyEngine/policyengine-us"
name: "policyengine-us"
description: "The PolicyEngine US Python package contains a rules engine of the US tax-benefit system, and microdata generation for microsimulation analysis."
readmeQualityOk: true
url: "https://github.com/PolicyEngine/policyengine-us"
homepage: "https://policyengine.org/us"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["economics", "policy", "python", "tax", "united-states", "economic-policy", "poverty", "public-policy", "inequality"]
stars: 166
forks: 214
openIssues: 852
closedIssues: 4593
watchers: 5
contributors: 160
recentReleases: 0
createdAt: "2021-06-23T16:35:58Z"
lastCommitAt: "2026-10-12T11:15:15Z"
lastReleaseAt: "2024-03-22T15:27:08Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "legacy_hero", "community_hub", "fork_magnet"]
healthScore: 96
undervaluedScore: 52
maintainers: ["MaxGhenis", "hua7450", "PavelMakarchuk"]
openGraphImageUrl: "https://opengraph.githubassets.com/15af8d9187570e5c103b0d37ec3fddf5bf8c891b15efb95cbcaa525e13e0f4a9/PolicyEngine/policyengine-us"
discussionCount: 136
---

# PolicyEngine US

> **For microsimulation, use [policyengine.py](https://github.com/PolicyEngine/policyengine.py).** Society-wide microsimulation — population aggregates and distributional or budgetary impacts — is moving to the managed `policyengine.py` bundle, which pins certified, calibration-gated datasets. **Direct microsimulation via `policyengine-us` (`Microsimulation()`) is deprecated** and being migrated to `policyengine.py`. This package remains the home of the US tax-benefit rules and household-level calculations. Microsimulation results are estimates — inspect dataset calibration at https://calibration-diagnostics.vercel.app/populace.

PolicyEngine US is a microsimulation model of the US state and federal tax and benefit system.

PolicyEngine US supports Python 3.11 through 3.14 and requires pandas 3 or
later. To install, run `pip install policyengine-us`.

This release requires `spm-calculator>=1.0.0,<=1.0.0.post1` (the canonical SPM threshold API).
Previously published country versions retain their original dependency metadata;
when reproducing one of those versions, include the compatible calculator
explicitly, for example:

```bash
uv pip install…
