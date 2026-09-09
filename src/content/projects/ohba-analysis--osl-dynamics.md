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
stars: 92
forks: 27
openIssues: 0
closedIssues: 137
watchers: 8
contributors: 20
recentReleases: 0
createdAt: "2022-04-26T16:22:41Z"
lastCommitAt: "2026-09-09T08:18:12Z"
lastReleaseAt: "2023-03-20T14:37:50Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 95
undervaluedScore: 52
maintainers: ["cgohil8", "HQian96", "matsvanes"]
openGraphImageUrl: "https://opengraph.githubassets.com/81086d1b092695b29a15c570a7fc81d9c8f8bd30c608ecb5574cd6f90bbf1622/OHBA-analysis/osl-dynamics"
---

# OHBA Software Library: Dynamics Toolbox

osl-dynamics is a Python toolbox for studying brain dynamics using neuroimaging data: MEG, EEG and fMRI. It provides generative models that decompose data into brain networks (often called brain states or modes), including the Hidden Markov Model (HMM) and Dynamic Network Modes (DyNeMo), along with everything needed for a complete analysis: data loading and preparation, spectral estimation, network visualisation and statistical significance testing.

You can use osl-dynamics to:

- **Infer dynamic functional networks** from resting-state or task M/EEG and fMRI data using the HMM, DyNeMo and related models (M-DyNeMo, HIVE, DIVE, DyNeSTE and more).
- **Characterise brain states/modes** with summary statistics (fractional occupancy, lifetimes, intervals, switching rates), state-specific power maps, and functional connectivity.
- **Estimate spectra** using multitaper and regression-based methods, or wavelet transforms.
- **Detect oscillatory bursts**.
- **Test for statistical significance** using GLM permutation testing.
- **Preprocess and source reconstruct M/EEG data**: preprocessing, coregistration, beamforming and parcellation.
-…
