---
repo: "wrench-project/wrench"
name: "wrench"
description: "WRENCH: Cyberinfrastructure Simulation Workbench"
readmeQualityOk: true
url: "https://github.com/wrench-project/wrench"
homepage: "https://wrench-project.org"
language: "C++"
languages: ["C++"]
languagePcts: [86]
topics: ["simulation-framework", "scientific-workflows", "reproducible-research", "workflow-management-system", "workflow", "simulation-modeling", "distributed-systems", "hpc", "batch-job", "scheduling-simulator"]
stars: 47
forks: 21
openIssues: 0
closedIssues: 244
watchers: 14
contributors: 22
recentReleases: 0
createdAt: "2017-02-03T23:23:24Z"
lastCommitAt: "2026-11-09T00:53:51Z"
lastReleaseAt: "2020-05-08T04:12:36Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 100
undervaluedScore: 59
maintainers: ["henricasanova"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/80877933/de27a600-7ea7-11ea-93e9-3cb8e57990f7"
---

WRENCH is an _open-source library_ that provides high-level simulation 
abstractions that serve as **building blocks** for developing custom simulators of
distributed computing systems, platforms, and applications.

More information and Documentation: [WRENCH Project Website](http://wrench-project.org)

**WRENCH Research Paper:**
- H. Casanova, R. Ferreira da Silva, R. Tanaka, S. Pandey, G. Jethwani, W. Koch, S.
  Albrecht, J. Oeth, and F. Suter, [Developing Accurate and Scalable Simulators of
  Production Workflow Management Systems with 
  WRENCH](https://rafaelsilva.com/files/publications/casanova2020fgcs.pdf), 
  Future Generation Computer Systems, vol. 112, p. 162-175, 2020. 

## Prerequisites

WRENCH is fully developed in C++. The code follows the **C++17** standard, and thus 
older compilers tend to fail the compilation process. Therefore, we strongly 
recommend users to satisfy the following requirements:

- **CMake** - version 3.10 or higher
  
And, one of the following:
- **g++** - version 7.5 or higher
- **clang** - version 9.0 or higher

WRENCH also comes with a [REST API](https://wrench-project.org/wrench/latest/restapi/index.html).  A
Python API, built
on top of the…
