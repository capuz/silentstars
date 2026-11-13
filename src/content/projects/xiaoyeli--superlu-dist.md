---
repo: "xiaoyeli/superlu_dist"
name: "superlu_dist"
description: "Distributed memory, MPI based SuperLU"
readmeQualityOk: true
url: "https://github.com/xiaoyeli/superlu_dist"
homepage: "https://portal.nersc.gov/project/sparse/superlu/"
language: "C"
languages: ["C"]
languagePcts: [78]
stars: 225
forks: 88
openIssues: 68
closedIssues: 89
watchers: 16
contributors: 36
recentReleases: 0
createdAt: "2016-02-23T20:10:16Z"
lastCommitAt: "2026-11-13T05:38:00Z"
lastReleaseAt: "2021-10-18T20:43:17Z"
status: "thriving"
tags: ["legacy_hero"]
healthScore: 85
undervaluedScore: 41
maintainers: ["xiaoyeli", "liuyangzhuan", "SidShi"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/52388195/caa52500-5131-11eb-9348-1456e717c70a"
---

# SuperLU_DIST (version 9.3.0)   <img align=center width="55" alt="superlu" src="https://user-images.githubusercontent.com/11741943/103982988-5a9a9d00-5139-11eb-9ac4-a55e80a79f8d.png">

[Nightly tests](http://my.cdash.org/index.php?project=superlu_dist)

SuperLU_DIST contains a set of subroutines to solve a sparse linear system
A*X=B. It uses Gaussian elimination with static pivoting (GESP).
Static pivoting is a technique that combines the numerical stability of
partial pivoting with the scalability of Cholesky (no pivoting),
to run accurately and efficiently on large numbers of processors.
SuperLU_DIST is a parallel extension to the serial SuperLU library.
It is targeted for the distributed memory parallel machines.
SuperLU_DIST is implemented in ANSI C, with OpenMP for on-node parallelism
and MPI for off-node communications. Numerical LU factorization and triangular solvers can be performed on multiple GPU nodes
for NVIDIA (CUDA) and AMD (HIP) GPUs, including a batched interface for
factorizing/solving many independent systems at once, and optional NVSHMEM/ROCSHMEM
support for one-sided GPU communication.

The full documentation and publications can be found at this web site:…
