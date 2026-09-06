---
repo: "AuroraDysis/KerrP2P"
name: "KerrP2P"
description: "KerrP2P is a software designed for forward ray tracing in Kerr spacetime. It is specifically tailored to efficiently calculate multiple null geodesics between designated \"source\" and \"observer\" points, locate apparent positions of the corresponding images, and quantify their shapes."
readmeQualityOk: true
url: "https://github.com/AuroraDysis/KerrP2P"
homepage: "https://arxiv.org/abs/2408.16049"
language: "C++"
languages: ["C++"]
languagePcts: [86]
topics: ["kerr", "ray-tracing", "raytracing"]
stars: 10
forks: 5
openIssues: 0
closedIssues: 1
watchers: 2
contributors: 2
recentReleases: 0
createdAt: "2023-08-30T21:30:19Z"
lastCommitAt: "2026-09-06T08:04:33Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 90
undervaluedScore: 51
maintainers: ["WandererZlh"]
openGraphImageUrl: "https://opengraph.githubassets.com/6e063e09a355780e49fa6e1eb7ebe1f44e7b83b05fc7a9f37c27dd2e58018f66/AuroraDysis/KerrP2P"
---

# KerrP2P (Kerr Point-to-Point)

`KerrP2P` is a software designed for forward ray tracing in Kerr spacetime. It is specifically tailored to efficiently calculate **multiple** null geodesics between designated "source" and "observer" points, locate apparent positions of the corresponding images, and quantify their shapes. Detailed information can be found in the paper [_Forward Ray Tracing and Hot Spots in Kerr Spacetime_](https://journals.aps.org/prd/abstract/10.1103/PhysRevD.111.064075) by Lihang Zhou, Zhen Zhong, Yifan Chen, and Vitor Cardoso.

Using Jacobi elliptic functions to express the solutions to the geodesic equations based on [Gralla and Lupsasca 2019](https://journals.aps.org/prd/abstract/10.1103/PhysRevD.101.044032), this software consists of two tools:

1. A Python/C++ package that computes null geodesics and thoroughly explores the parameter space to identify multiple images. Tutorials for it are presented in the folder `examples`:  
    - `tutorial_float64_sweep.ipynb`: geodesic calculation and parameter space sweep in double precision  
    - `tutorial_float128or256.ipynb`: geodesic calculation in quad/oct precision  
    - `cpp_tutorial_basic.cpp`: geodesic…
