---
repo: "srwhite59/GaussletBases.jl"
name: "GaussletBases.jl"
description: "Julia package for gausslet and radial gausslet bases for electronic-structure calculations"
url: "https://github.com/srwhite59/GaussletBases.jl"
language: "Julia"
languages: ["Julia"]
languagePcts: [100]
stars: 5
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-03-14T04:50:26Z"
lastCommitAt: "2026-06-30T06:51:48Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 50
maintainers: []
openGraphImageUrl: "https://opengraph.githubassets.com/a1313b09e8ae970895967b0db866886d2e3f17443997dd89db461f17ad86cb3f/srwhite59/GaussletBases.jl"
---

# GaussletBases.jl

Gausslets are localized, orthogonal basis functions constructed from short
linear combinations of Gaussians.

They were developed to combine several properties that are rarely available in
one basis at the same time: orthogonality, locality, smoothness, systematic
improvability by refining the spacing, and a moment structure that supports
diagonal or integral-diagonal approximations for the Coulomb interaction.

The practical attraction of gausslets is that they can produce compact
second-quantized Hamiltonians. Compared with standard Gaussian orbital bases,
they are much more local and naturally orthogonal; compared with ordinary grid
or DVR constructions, they retain an explicit Gaussian primitive structure and
fit naturally with variable-resolution mappings and hybrid Gaussian
augmentations near nuclei.

GaussletBases.jl is a Julia package for building those basis functions,
constructing the quadrature grids that go with them, and forming the current
one-body and integral-diagonal approximation (IDA)-style operators on top of
them.

Today the package has four real current surfaces:

- a mature **radial / atomic workflow**
- a real **ordinary Cartesian…
