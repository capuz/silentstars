---
repo: "JuliaGeodynamics/GeoParams.jl"
name: "GeoParams.jl"
description: "Define material parameters, perform non-dimensionalization and provide computational routines for material parameters in geodynamic simulations "
readmeQualityOk: true
url: "https://github.com/JuliaGeodynamics/GeoParams.jl"
language: "Julia"
languages: ["Julia"]
languagePcts: [100]
stars: 44
forks: 11
openIssues: 6
closedIssues: 25
watchers: 6
contributors: 21
recentReleases: 0
createdAt: "2021-05-21T06:16:48Z"
lastCommitAt: "2026-10-29T12:25:22Z"
lastReleaseAt: "2022-04-06T17:18:46Z"
status: "thriving"
tags: ["needs_contributors", "hidden_gem", "legacy_hero"]
healthScore: 93
undervaluedScore: 54
maintainers: ["aelligp", "albert-de-montserrat", "boriskaus"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/369433137/6e893210-4ac7-4a02-ba31-a4e526cd8dc0"
---

Typical geodynamic simulations involve a large number of material parameters and nonlinear constitutive relationships. A large part of the work in writing a new code is benchmarking and debugging the implementation of such material parameters, which involve *point-wise* calculations that are independent of the discretisation method (finite difference, finite element, finite volume).

This package has three main objectives:
- Create a nondimensionalization object, which can be used to transfer dimensional to non-dimensional parameters (helps numerical solvers)
- Create an object in which you can specify material parameters employed in the geodynamic simulations
- Provide allocation-free computational routines for GPU and CPUs, that can be integrated in solvers, which replaces all point-wise calculations (to compute material parameters or equations of state, for example).

The material parameter object is designed to be extensible and can be passed on to the solvers, such that new creep laws or features can be readily added. If you use the computational routines we provide, these new features are immediately available in all your codes (finite element, finite difference, AMR codes,…
