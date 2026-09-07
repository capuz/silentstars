---
repo: "proximafusion/vmecpp"
name: "vmecpp"
description: " From-scratch C++ and Python reimplementation of the Variational Moments Equilibrium Code (VMEC)."
readmeQualityOk: true
url: "https://github.com/proximafusion/vmecpp"
homepage: "https://proximafusion.github.io/vmecpp/"
language: "C++"
languages: ["C++"]
languagePcts: [81]
topics: ["fusion", "mhd-simulation", "plasma", "stellarator", "stellarators"]
stars: 248
forks: 42
openIssues: 5
closedIssues: 74
watchers: 4
contributors: 18
recentReleases: 0
createdAt: "2024-11-12T22:51:16Z"
lastCommitAt: "2026-09-07T08:35:00Z"
lastReleaseAt: "2025-04-29T23:23:23Z"
status: "thriving"
tags: []
healthScore: 95
undervaluedScore: 42
maintainers: ["CharlesCNorton", "jurasic-pf", "krystophny"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/887571250/711d6c62-5730-4638-8959-440b19744600"
discussionCount: 9
---

<picture>
  <source media="(prefers-color-scheme: dark)" srcset="https://github.com/user-attachments/assets/978b76bc-cd9b-4af8-b1f3-18efde7c079f">
  <source media="(prefers-color-scheme: light)" srcset="https://github.com/user-attachments/assets/ec4e391a-9044-44ae-93f0-9dd8bed70001">
</picture>

# VMEC++

VMEC++ is a Python-friendly, from-scratch reimplementation in C++ of the Variational Moments Equilibrium Code (VMEC),
a free-boundary ideal-MHD equilibrium solver for stellarators and tokamaks.

The original version was written by Steven P. Hirshman and colleagues in the 1980s and 1990s.
The latest version of the original code is called `PARVMEC` and is available [here](https://github.com/ORNL-Fusion/PARVMEC).

Compared to its Fortran predecessors, VMEC++:
- has a zero-crash policy and reports issues via standard Python exceptions
- allows hot-restarting a run from a previous converged state (see [Hot restart](#hot-restart))
- supports inputs in the classic INDATA format as well as simpler-to-parse JSON files; it is also simple to construct input objects programmatically in Python
- typically runs faster
- comes with [substantial documentation of its internal…
