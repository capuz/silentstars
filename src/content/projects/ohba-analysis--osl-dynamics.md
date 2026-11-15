---
repo: "OHBA-analysis/osl-dynamics"
name: "osl-dynamics"
description: "Methods for studying brain dynamics using neuroimaging data."
readmeQualityOk: true
url: "https://github.com/OHBA-analysis/osl-dynamics"
homepage: "https://osl-dynamics.readthedocs.io/"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 95
forks: 28
openIssues: 0
closedIssues: 140
watchers: 8
contributors: 21
recentReleases: 0
createdAt: "2022-04-26T16:22:41Z"
lastCommitAt: "2026-11-15T11:24:52Z"
lastReleaseAt: "2023-03-20T14:37:50Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 97
undervaluedScore: 52
maintainers: ["cgohil8", "HQian96", "juliadabrowska-29"]
openGraphImageUrl: "https://opengraph.githubassets.com/b0f71a059516b5e5adbe754f64b5bfd229452adaf89cc0723a65cd2ba11f1fea/OHBA-analysis/osl-dynamics"
---

# OHBA Software Library: Dynamics Toolbox

osl-dynamics is a Python toolbox for studying brain dynamics using neuroimaging data: MEG, EEG and fMRI. It provides generative models that decompose data into brain networks (often called brain states or modes), including the Hidden Markov Model (HMM) and Dynamic Network Modes (DyNeMo), along with everything needed for a complete analysis: data loading and preparation, spectral estimation, network visualization and statistical significance testing.

You can use osl-dynamics to:

- **Infer dynamic functional networks** from resting-state or task M/EEG and fMRI data using the HMM, DyNeMo and related models (M-DyNeMo, HIVE, DIVE, DyNeSTE and more).
- **Characterize brain states/modes** with summary statistics (fractional occupancy, lifetimes, intervals, switching rates), state-specific power maps, and functional connectivity.
- **Estimate spectra** using multitaper and regression-based methods, or wavelet transforms.
- **Detect oscillatory bursts**.
- **Test for statistical significance** with GLM permutation tests: maximum statistic, cluster-based and TFCE corrections, with covariates.
- **Preprocess and source reconstruct M/EEG data**:…
