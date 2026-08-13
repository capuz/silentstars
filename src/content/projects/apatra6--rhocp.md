---
repo: "apatra6/rhocp"
name: "rhocp"
description: "Dislocation Density-based Crystal Plasticity Solver"
readmeQualityOk: true
url: "https://github.com/apatra6/rhocp"
language: "C++"
languages: ["C++", "Assembly"]
languagePcts: [77, 22]
topics: ["crystal-plasticity", "dislocation", "ebsd", "finite-element", "texture"]
stars: 54
forks: 13
openIssues: 0
closedIssues: 3
watchers: 2
contributors: 1
recentReleases: 0
createdAt: "2022-10-31T04:12:35Z"
lastCommitAt: "2026-08-13T05:18:56Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 65
undervaluedScore: 31
maintainers: ["apatra6"]
openGraphImageUrl: "https://opengraph.githubassets.com/353d053245e053a47964e067c304fceb335bdca0de2acd4e7a97679f4ff69fba/apatra6/rhocp"
---

# &rho;-CP: Open Source Dislocation Density Based Crystal Plasticity Framework for Simulating Temperature- and Strain Rate-Dependent Deformation

&rho;-CP is a crystal plasticity solver that interfaces with the open source finite element solver, MOOSE (https://github.com/idaholab/moose), for crystal plasticity finite element modeling of anisotropic, heterogeneous deformation in polycrystalline ensembles. Source codes for the dislocation density-based crystal plasticity solver are provided in this repository. 

There are several constitutive models implemented for the different examples provided: 

(a) mobile and immobile dislocation density based crystal plasticity model, with threshold lattice resistance (DDCPStressUpdate, DDCPHCPStressUpdate) (Ref. [1])

(b) mobile and immobile dislocation density based crystal plasticity model, without threshold lattice resistance (DDCPTSTStressUpdate) (Ref. [2,9])

(c) statistically stored dislocation (SSD) density based Kocks-Mecking crystal plasticity model (DDCP_SSD_StressUpdate) (Ref. [3]) (code developed by Namit Pai)

(d) crystal plasticity model for hardening and creep under thermal and irradiation environments…
