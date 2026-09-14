---
repo: "BenoitMorel/AleRax"
name: "AleRax"
description: "Gene tree - species tree reconciliation from gene tree distributions"
readmeQualityOk: true
url: "https://github.com/BenoitMorel/AleRax"
language: "C++"
languages: ["C++"]
languagePcts: [92]
stars: 43
forks: 8
openIssues: 10
closedIssues: 13
watchers: 4
contributors: 4
recentReleases: 0
createdAt: "2023-04-18T10:57:58Z"
lastCommitAt: "2026-09-14T09:13:21Z"
lastReleaseAt: "2025-11-19T09:11:51Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 64
undervaluedScore: 29
maintainers: ["noahares", "StefanFlaumberg"]
openGraphImageUrl: "https://opengraph.githubassets.com/4249fd8b25e605930a9ea9a24f896820a735b5d2f29996e4ebd0a7cf553d4209/BenoitMorel/AleRax"
---

# AleRax  

AleRax is a parallel tool for species tree - gene tree inference and reconciliation under gene duplication, loss, and HGT. For each gene family, it takes as input a gene tree distribution (typically inferred with Bayesian inference tools such as MrBayes, PhyloBayes, etc.). AleRax can perform the following operations:
* Species tree inference
* Species tree rooting 
* Reconciled gene tree sampling 
* Model parameter estimation (e.g. DTL event probabilities) 
* Statistical test of different species tree hypotheses (you'll need to instal consel)
  
We are also working on the following features:
* Relative order of speciation event (relative dating) from HGT constraints
* Inference of highways of transfers (pairs of species that exchanged many genes via HGT)

When using AleRax, please cite: [https://academic.oup.com/bioinformatics/article/40/4/btae162/7633408](https://academic.oup.com/bioinformatics/article/40/4/btae162/7633408)

## Requirement

* A Linux or MacOS environnement
* gcc 5.0 or > 
* CMake 3.6 or >
* MPI (required if you want to use parallelization)

## Installation 

To download AleRax, please use git,  and clone with --recursive!!!

```
git clone --recursive…
