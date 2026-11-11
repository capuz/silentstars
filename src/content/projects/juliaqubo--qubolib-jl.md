---
repo: "JuliaQUBO/QUBOLib.jl"
name: "QUBOLib.jl"
description: "QUBO Instances for benchmarking"
readmeQualityOk: true
url: "https://github.com/JuliaQUBO/QUBOLib.jl"
homepage: "http://juliaqubo.github.io/QUBOLib.jl/"
language: "Julia"
languages: ["Julia"]
languagePcts: [86]
topics: ["benchmark", "database", "instances", "quantum-optimization", "qubo"]
stars: 9
forks: 1
openIssues: 3
closedIssues: 33
watchers: 1
contributors: 5
recentReleases: 0
createdAt: "2023-06-02T01:53:33Z"
lastCommitAt: "2026-11-11T19:47:31Z"
lastReleaseAt: "2026-06-22T23:57:00Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 96
undervaluedScore: 77
maintainers: ["bernalde", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/7111ff6510cc239acae55fc91262f6bdcb676b2ed44ddaf58b362830cd7f71f1/JuliaQUBO/QUBOLib.jl"
---

# QUBOLib.jl

## Getting Started

### Installation

```julia
julia> import Pkg; Pkg.add("QUBOLib")

julia> using QUBOLib
```

### Example

```julia
julia> using QUBOLib

julia> QUBOLib.access() do index
           println(index)
       end
```

## Retrieving instances

QUBOLib instances are distributed as a Julia artifact recorded in
[`Artifacts.toml`](https://github.com/JuliaQUBO/QUBOLib.jl/blob/HEAD/Artifacts.toml), not as checked-in data files. The artifact is
downloaded from the package releases the first time `QUBOLib.access` needs it,
then copied into a local `qubolib` directory for use.

The database-query examples below use SQLite.jl and DataFrames.jl directly, so
add them to the active Julia project before running those examples:

```julia
julia> import Pkg; Pkg.add(["SQLite", "DataFrames"])
```

Use `QUBOLib.access` to open the local index, query the SQLite database for
instance identifiers, and load the selected models from the HDF5 archive:

```julia
julia> using QUBOLib

julia> using SQLite, DataFrames

julia> model = QUBOLib.access() do index
           df = DBInterface.execute(
               QUBOLib.database(index),
               "SELECT instance FROM Instances…
