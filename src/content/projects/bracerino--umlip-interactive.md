---
repo: "bracerino/uMLIP-Interactive"
name: "uMLIP-Interactive"
description: "GUI for running simulations with universal MLIPs (MACE, CHGNet, SevenNet, Nequix, ORB, Allegro, MatterSim, UPET, GRACE) "
readmeQualityOk: true
url: "https://github.com/bracerino/uMLIP-Interactive"
homepage: "https://umlip-interactive.streamlit.app"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["elastic-properties", "geometry-optimization", "interatomic-potential", "mace", "machine-learning-potential", "ml", "molecular-dynamics", "phonons", "streamlit", "bulk-modulus"]
stars: 44
forks: 6
openIssues: 0
closedIssues: 0
watchers: 2
contributors: 2
recentReleases: 0
createdAt: "2025-06-19T16:32:45Z"
lastCommitAt: "2026-08-28T14:35:57Z"
lastReleaseAt: "2025-10-25T14:06:22Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 78
undervaluedScore: 52
maintainers: ["bracerino"]
openGraphImageUrl: "https://opengraph.githubassets.com/d12b5c6a0ef09fa802f96a5a5d786fdd71f4a69ccc0a0722606396d6fda18ff7/bracerino/uMLIP-Interactive"
---

# uMLIP-Interactive: GUI for running simulations with universal machine learning interatomic potentials (uMLIPs)

Run or generate input script for basic molecular dynamics/static simulations:
- **Single-point energy**
- **Geometry optimization**
- **Elastic properties**  
- **Finite-temperature elastic properties** — C_ij(T) from explicit stress–strain MD with optional NPT pre-equilibration (with generated Python script)  
- **Birch-Murnaghan EOS**  
- **Phonons**
- **Genetic algorithm for finding energetically favorible atomic site configurations of substitutes/vacancies**
- **Basic MD simulations (NVE, NVT, NPT)** (with generated Python script)  
- **Nudge elastic band (NEB) calculations** (with generated Python script)  
- **Energy grid scan** (with generated Python script)
- **Additional post-processing scripts** (average powder diffraction pattern, average structure from .xyz trajectory)  

**Interactive interface for multiple input structure files** (POSCAR, CIF, LMP, XYZ with lattice) with a **machine learning MACE / CHGNet / Nequix / Allegro / NequIP / SevenNet / Orb-v3 / MatterSim / UPET / GRACE / UMA interatomic potentials**. It is also possible to generate standalone…
