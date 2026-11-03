---
repo: "feellgood/FeeLLGood"
name: "FeeLLGood"
description: "FEM micromagnetic simulator"
readmeQualityOk: true
url: "https://github.com/feellgood/FeeLLGood"
homepage: "https://feellgood.neel.cnrs.fr/"
language: "C++"
languages: ["C++"]
languagePcts: [75]
topics: ["micromagnetism", "simulation"]
stars: 11
forks: 5
openIssues: 0
closedIssues: 3
watchers: 3
contributors: 6
recentReleases: 0
createdAt: "2019-07-17T14:16:21Z"
lastCommitAt: "2026-11-03T10:55:05Z"
status: "thriving"
tags: ["legacy_hero"]
healthScore: 94
undervaluedScore: 79
maintainers: ["edgar-bonet", "christophe-thirion", "JC-Toussaint"]
openGraphImageUrl: "https://opengraph.githubassets.com/65f19826ef16501304b900547bc9f6aa573f66c95deea3a9ac0ff5a36fa05d90/feellgood/FeeLLGood"
---

# FeeLLGood – A micromagnetic solver 

FEELLGOOD is a micromagnetic solver using finite element technique to integrate Landau Lifshitz Gilbert equation. It computes the demagnetizing field using the so-called fast multipole algorithm.

It is developped by JC Toussaint & al.
The code is being modified without any warranty it works. A dedicated website can be found [here][]  
We recommand to use branch master, other branches are experimental or work in progress.

### Dependencies

* C++17 and the STL
* [TBB][]
* [yaml-cpp][]
* [ANN][] 1.1.2
* [Duktape][] 2.7.0
* [ScalFMM][] revision [22b9e4f6cf][ScalFMM-rev] (it should also work with V1.5.1)
* [Eigen][] ≥ 3.3
* [GMSH][] ≥ 4.8

### License

Copyright (C) 2012-2023  Jean-Christophe Toussaint, with contributions by F. Alouges, D. Gusakova, S. Jamet, M. Struma, C. Thirion and E. Bonet.

FeeLLGood is free software: you can redistribute it and/or modify it under the terms of the GNU General Public License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version.

This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied…
