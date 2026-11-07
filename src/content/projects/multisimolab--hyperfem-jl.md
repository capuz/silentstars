---
repo: "MultiSimOLab/HyperFEM.jl"
name: "HyperFEM.jl"
description: "A computational toolbox for the simulation & design of Tunable Smart Materials  in Julia"
readmeQualityOk: true
url: "https://github.com/MultiSimOLab/HyperFEM.jl"
language: "Julia"
languages: ["Julia"]
languagePcts: [100]
topics: ["electromechanics", "fem", "magnetomechanics", "soft-actuators", "anisotropy", "thermomechanics"]
stars: 15
forks: 1
openIssues: 5
closedIssues: 13
watchers: 1
contributors: 4
recentReleases: 5
createdAt: "2025-03-04T07:51:33Z"
lastCommitAt: "2026-11-07T09:30:55Z"
lastReleaseAt: "2026-11-05T15:05:06Z"
status: "thriving"
tags: ["solo_builder", "release_machine"]
healthScore: 94
undervaluedScore: 71
maintainers: ["jmartfrut", "miguelmaso"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/942502350/bdd35c1a-66f8-4de2-8cac-0f206ef16d29"
---

# Multiphysics Simulation of Multifunctional Soft Materials

**HyperFEM** is a library within the [Gridap](https://github.com/gridap/Gridap.jl) ecosystem designed for the simulation of multiphysics problems involving multifunctional hyperelastic materials. The ultimate goal of HyperFEM is to provide a **high-level, expressive, and rapid prototyping tool** that accelerates the modeling stages of **Thermo–Electro–Magneto–Mechanical** multiphysics problems. To this end, it includes a comprehensive library of **analytically derived constitutive models** formulated through tensor algebra. In addition, HyperFEM provides abstractions for **monolithic and staggered solution schemes**, extending Gridap’s capabilities in the context of **nonlinear solid mechanics**.

## Installation
Open the Julia REPL, type `]` to enter package mode, and install as follows
```julia
pkg> add HyperFEM
```

## Usage
First, include the main HyperFEM module:
```julia
using HyperFEM
```

Example of a Monolithic implementation for the simulation of Nonlinear ElectroMechanical deformation of dielectric elastomers

```julia
using HyperFEM
using Gridap, GridapGmsh, DrWatson
using Gridap.FESpaces
using WriteVTK…
