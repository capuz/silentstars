---
repo: "MGYamada/SUNDMRG.jl"
name: "SUNDMRG.jl"
description: "Traditional DMRG code with full SU(N) symmetry implementation"
readmeQualityOk: true
url: "https://github.com/MGYamada/SUNDMRG.jl"
language: "Julia"
languages: ["Julia"]
languagePcts: [100]
stars: 7
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2023-10-20T00:14:38Z"
lastCommitAt: "2026-09-18T08:27:50Z"
lastReleaseAt: "2026-05-11T04:57:32Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 82
undervaluedScore: 37
maintainers: ["MGYamada"]
openGraphImageUrl: "https://opengraph.githubassets.com/88fceaf0d6f0cf66fa4d13fccceecac925ca44372d4ea6fca953bec8d59ec920/MGYamada/SUNDMRG.jl"
---

# SUNDMRG.jl

SUNDMRG.jl: traditional DMRG code with full SU(N) symmetry implementation.
A part of the code is influenced by Simple DMRG. https://github.com/simple-dmrg/simple-dmrg

## Features

* Fully supporting 2D systems
* Fully supporting MPI parallelization
* Fully supporting CUDA and MAGMA
* CUDA-aware MPI
* File-IO

## Installation

Before `]add`, you must install `MAGMA.jl@0.1.2-`. https://github.com/MGYamada/MAGMA.jl
After that, you can do:
```
]add https://github.com/MGYamada/SUNDMRG.jl.git
```

## Usage

Run a small SU(2) Heisenberg calculation on a 4x4 square lattice with:

```julia
using SUNDMRG

rank, dmrg = run_DMRG(
    SU(2)HeisenbergModel(),
    SquareLattice(4, 4),
    100,
    [100, 200, 400, 800],
    1600,
    CPUEngine,
)
```

`dmrg` is returned only on MPI rank 0. SU(2) coefficients are evaluated on the fly;
SU(N) runs with `N > 2` usually use precomputed coefficient tables.

See the documentation for [usage](https://github.com/MGYamada/SUNDMRG.jl/blob/HEAD/docs/src/usage.md), [examples](https://github.com/MGYamada/SUNDMRG.jl/blob/HEAD/docs/src/examples.md),
and the [algorithm…
