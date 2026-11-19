---
repo: "SimVascular/svMorph"
name: "svMorph"
description: "svMorph is a research tool for in-silico morphological editing of patient-specific vascular geometries."
readmeQualityOk: true
url: "https://github.com/SimVascular/svMorph"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 10
forks: 2
openIssues: 2
closedIssues: 1
watchers: 5
contributors: 13
recentReleases: 0
createdAt: "2021-07-09T17:04:46Z"
lastCommitAt: "2026-11-19T05:01:48Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero"]
healthScore: 74
undervaluedScore: 41
maintainers: ["jeffbli", "lassoan"]
openGraphImageUrl: "https://opengraph.githubassets.com/7151b9fec5a793585a807c07bd6e5fb588c969ed0cb0e90d085d8d4afec64d56/SimVascular/svMorph"
---

# svMorph

**Real-time interactive vascular morphing with SDFStent virtual stenting and regularized Kelvinlets**

---

svMorph is a research tool for *in-silico* morphological editing of patient-specific
vascular geometries. It enables interactive and scriptable editing on triangulated
surface meshes with associated centerlines through three core workflows: **SDFStent**
for virtual stenting, **regularized Kelvinlet** virtual aneurysm creation, and
geometry-based synthetic stenosis creation.

The deformation engine includes **SDFStent**, a signed-distance-field (SDF)-based
virtual stenting method that mimics stent-wall interaction during deployment, and
**regularized Kelvinlet** displacement kernels (de Goes & James, 2017, Pham et al., 2024)
for virtual aneurysm and synthetic stenosis modeling.
All heavy numerics are JIT-compiled with [JAX](https://github.com/jax-ml/jax) for
real-time feedback on commodity hardware.
