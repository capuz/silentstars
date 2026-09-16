---
repo: "COMODO-research/Geogram.jl"
name: "Geogram.jl"
description: "A Julia wrapper for the geogram C++ project"
readmeQualityOk: true
url: "https://github.com/COMODO-research/Geogram.jl"
language: "Julia"
languages: ["Julia"]
languagePcts: [100]
stars: 10
forks: 1
openIssues: 2
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 1
createdAt: "2024-05-30T14:26:51Z"
lastCommitAt: "2026-09-16T08:46:44Z"
lastReleaseAt: "2026-06-26T12:55:59Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 62
undervaluedScore: 28
maintainers: ["Kevin-Mattheus-Moerman"]
openGraphImageUrl: "https://opengraph.githubassets.com/f3c64933eadf4a4669a4fcfd00084598d475fded372d97824704358a6231e87f/COMODO-research/Geogram.jl"
---

# Geogram.jl

## Description 
This project is a Julia wrapper for the [geogram C++ project](https://github.com/BrunoLevy/geogram). 

For the moment the only functionality exposed by this wrapper is the remeshing (`vorpalite`) functionality in Geogram, which enables smooth remeshing of surfaces. Secondly the wrapper currently works by exporting a .obj file, calling Geogram as an external executable using `run` with desired parameters set, and importing of the output .obj file. In the future the wrapper should feature a more complete and efficient interface by directly interfacing with the C++ code through Julia (e.g. using `ccall`). 

  

# Installation
```julia
julia> ]
(@v1.xx) pkg> add https://github.com/COMODO-research/Geogram.jl
```

or 

```julia
julia> using Pkg
julia> Pkg.add(url = "https://github.com/COMODO-research/Geogram.jl")
```

# Getting started
To get started install the package, study the documentation, and test some of the demos provided in the [`examples`](https://github.com/COMODO-research/Geogram.jl/tree/main/examples) folder. 

# Documentation 
Under construction, see the demos provided for assistance at the moment. 

# External dependancies
This project is a…
