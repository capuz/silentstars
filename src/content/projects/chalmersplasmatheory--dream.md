---
repo: "chalmersplasmatheory/DREAM"
name: "DREAM"
description: "The Disruption Runaway Electron Analysis Model"
readmeQualityOk: true
url: "https://github.com/chalmersplasmatheory/DREAM"
language: "C++"
languages: ["C++", "Python"]
languagePcts: [67, 31]
stars: 48
forks: 15
openIssues: 31
closedIssues: 211
watchers: 8
contributors: 37
recentReleases: 0
createdAt: "2020-04-23T06:40:01Z"
lastCommitAt: "2026-10-01T10:23:43Z"
lastReleaseAt: "2026-05-26T09:26:58Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero"]
healthScore: 93
undervaluedScore: 52
maintainers: ["IdaEkmark", "hoppe93", "jorekart"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/258117131/3ca952af-22be-46c6-a69e-9eefb8de1158"
discussionCount: 1
---

# DREAM

This directory contains the Disruption Runaway Electron Analysis Model (DREAM)
code. The **online documentation** is available at https://ft.nephy.chalmers.se/dream.

DREAM is a physics simulation framework developed for studying relativistic
runaway electrons in [tokamak](https://en.wikipedia.org/wiki/Tokamak) fusion
devices. Specifically, DREAM solves a system of non-linear partial differential
equations which describe the time evolution of a tokamak plasma. What sets DREAM
apart from other tokamak transport codes is its wide range of models for
studying runaway electron generation and dynamics. In particular, the fluid
equations solved by DREAM can be coupled to a set of kinetic equations for
electrons in order to more accurately describe the runaway electrons.

The official DREAM paper is
[doi:10.1016/j.cpc.2021.108098](https://doi.org/10.1016/j.cpc.2021.108098)
(it is also on arXiv: [2103.16457](https://arxiv.org/abs/2103.16457)).

## Requirements
To compile DREAM, you need to have the following software installed:

- [CMake](https://cmake.org/) >= 3.12
- A C++17 compatible compiler (such as gcc >= 7.0)
- [GNU Scientific Library](https://www.gnu.org/software/gsl/) >=…
