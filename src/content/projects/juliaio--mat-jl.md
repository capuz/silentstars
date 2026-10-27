---
repo: "JuliaIO/MAT.jl"
name: "MAT.jl"
description: "Julia module for reading MATLAB files"
readmeQualityOk: true
url: "https://github.com/JuliaIO/MAT.jl"
language: "Julia"
languages: ["Julia"]
languagePcts: [99]
topics: ["mat", "julia"]
stars: 293
forks: 80
openIssues: 17
closedIssues: 103
watchers: 16
contributors: 74
recentReleases: 0
createdAt: "2012-12-02T07:54:47Z"
lastCommitAt: "2026-10-27T12:39:21Z"
lastReleaseAt: "2020-11-24T20:00:25Z"
status: "thriving"
tags: ["legacy_hero"]
healthScore: 77
undervaluedScore: 36
maintainers: ["Thenewmanator15", "foreverallama", "quinnj"]
openGraphImageUrl: "https://opengraph.githubassets.com/037edc732b7549865a1feec0b9ed494c20b3f4931d8863ae882fe64eeddd9608/JuliaIO/MAT.jl"
---

# MAT.jl

### Read and write MATLAB files in Julia

This library can read MATLAB `.mat` files, both in the older v4/v5/v6/v7 format, as well as the newer v7.3 format.

## Installation

This is installed using the standard tools of the [package manager](https://julialang.github.io/Pkg.jl/v1/getting-started/):

```julia
pkg> add MAT
```
where you get the `pkg>` prompt by hitting `]` as the first character of the line. (Exit `pkg` mode by hitting backspace or Ctrl-C as the first character of the line.)

See also the requirements for the [HDF5](https://github.com/timholy/HDF5.jl/) module, used for "v7.3" files and for writing \*.mat files.

## Usage

To load the module:

```julia
using MAT
```

To read a single variable from a MAT file (compressed files are detected and handled automatically):

```julia
file = matopen("matfile.mat")
read(file, "varname") # note that this does NOT introduce a variable ``varname`` into scope
close(file)
```

To write a variable to a MAT file:

```julia
file = matopen("matfile.mat", "w")
write(file, "varname", variable)
close(file)
```

To read all variables from a MAT file as a Dict:

```julia
vars = matread("matfile.mat")
```

To write a Dict to a MAT…
