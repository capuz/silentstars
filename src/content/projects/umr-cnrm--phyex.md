---
repo: "UMR-CNRM/PHYEX"
name: "PHYEX"
description: "PHYsique EXternalisée"
url: "https://github.com/UMR-CNRM/PHYEX"
language: "Fortran"
languages: ["Fortran"]
languagePcts: [90]
stars: 9
forks: 27
openIssues: 48
closedIssues: 40
watchers: 3
contributors: 16
recentReleases: 0
createdAt: "2022-10-13T14:32:21Z"
lastCommitAt: "2026-07-03T12:37:37Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "hidden_gem", "fork_magnet"]
healthScore: 86
undervaluedScore: 78
maintainers: ["SebastienRietteMTO", "pmarguinaud", "rooyde"]
openGraphImageUrl: "https://opengraph.githubassets.com/667934c3b87c65a3b547f06d6a8b048fea0c7fda916f27ed1aa92b8feab8dcdc/UMR-CNRM/PHYEX"
discussionCount: 0
---

# PHYEX
PHYsique EXternalisée

Documentation can be found in the [docs directory](./docs/PHYEX.md).

Several presentations were done, the materials can be found on the [wiki](https://github.com/UMR-CNRM/PHYEX/wiki).

Prerequisites:
  - an internet connexion (with access to the github servers) is needed only for the installation
    and, for offline tests (testprogs), when the fiat version to use change
  - python > 3.10
  - some python packages (available on PyPI). All these modules can be installed by ```pip install -r requirements.txt```:
    - pyfortool to transform the source code
    - numpy and pandas for the testprogs
    - epygram and matplotlib for AROME
    - xarray for Meso-NH
    - ctypesForFortran to use the python binding
  - a C compiler (tested with cc 11.4.0)
  - a FORTRAN compiler (tested with ifort and gfortran, but automatic installation only works with gfortran >= 10)
  - some classical unix tools: wget, tar, make and git

Quick Start Guide:
  - open a terminal on a system satisfying the prerequisites and enter the following commands
  - if you don't have a github ssh key or don't know what it is:
    > git clone https://github.com/UMR-CNRM/PHYEX.git  
    >…
