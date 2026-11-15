---
repo: "andreasvarga/MatrixPencils.jl"
name: "MatrixPencils.jl"
description: "Matrix pencil manipulations using Julia"
readmeQualityOk: true
url: "https://github.com/andreasvarga/MatrixPencils.jl"
language: "Julia"
languages: ["Julia"]
languagePcts: [100]
topics: ["matrix-pencils", "linear-algebra", "polynomial-matrices", "rational-matrices", "kronecker-structure", "eigenvalues", "rank", "zeros", "poles"]
stars: 21
forks: 5
openIssues: 0
closedIssues: 11
watchers: 2
contributors: 4
recentReleases: 0
createdAt: "2019-12-05T10:28:40Z"
lastCommitAt: "2026-11-15T11:19:22Z"
lastReleaseAt: "2020-08-27T15:03:20Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 98
undervaluedScore: 42
maintainers: ["andreasvarga"]
openGraphImageUrl: "https://opengraph.githubassets.com/45faf185d58d2eaaa84764cedac6339314fa8851968ebd8b8dab57581f4fed01/andreasvarga/MatrixPencils.jl"
---

# MatrixPencils.jl


**Matrix pencil manipulation using [Julia](http://julialang.org)**

## Compatibility

Julia 1.10 and higher.

## How to Install

````JULIA
pkg> add MatrixPencils
pkg> test MatrixPencils
````

## About

The Kronecker-canonical form of a linear matrix pencil `M − λN` basically characterizes the right and left singular structure and the eigenvalue structure of the pencil. The computation of the Kronecker-canonical form may involve the use of ill-conditioned similarity transformations and, therefore, is potentially numerically unstable. Fortunately, alternative staircase forms, called *Kronecker-like forms* (KLFs), can be determined by employing exclusively orthogonal or unitary similarity transformations and allow to obtain basically the same (or only a part of) structural information on the pencil `M − λN`. Various KLFs can serve to address, in a numerically reliable way, the main applications of the Kronecker form,
such as the computation of minimal left or right nullspace bases, the computation of eigenvalues and zeros, the determination of the normal rank of polynomial and rational matrices, the computation of various factorizations of…
