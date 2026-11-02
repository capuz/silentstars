---
repo: "scipopt/soplex"
name: "soplex"
description: "Sequential object-oriented simPlex"
readmeQualityOk: true
url: "https://github.com/scipopt/soplex"
language: "C++"
languages: ["C++", "Mathematical Programming System"]
languagePcts: [56, 38]
stars: 88
forks: 28
openIssues: 8
closedIssues: 27
watchers: 3
contributors: 35
recentReleases: 0
createdAt: "2021-04-09T09:46:32Z"
lastCommitAt: "2026-11-02T11:36:44Z"
lastReleaseAt: "2025-01-30T16:05:37Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero"]
healthScore: 83
undervaluedScore: 48
maintainers: ["DominikKamp", "svigerske", "discopt"]
openGraphImageUrl: "https://opengraph.githubassets.com/2f51a8d104368370716f638f32734566eb3b6259ccb04b78db45a707db34534b/scipopt/soplex"
---

# SoPlex: Sequential object-oriented simPlex

SoPlex is an optimization package for solving linear programming problems (LPs)
based on an advanced implementation of the primal and dual revised simplex
algorithm. It provides special support for the exact solution of LPs with
rational input data. It can be used as a standalone solver reading MPS or LP
format files via a command line interface as well as embedded into other
programs via a C++ class library. The main features of SoPlex are:

- presolving, scaling, exploitation of sparsity, hot-starting from any regular basis,
- column- and row-oriented form of the simplex algorithm,
- an object-oriented software design written in C++,
- a compile-time option to use 80bit extended ("long double") precision for numerically difficult LPs,
- an LP iterative refinement as well as a precision boosting procedure, to compute high-precision solutions, and
- routines for an exact rational LU factorization and continued fraction approximations in order to compute exact solutions.

SoPlex has been used in numerous research and industry projects and is the standard LP solver linked to the mixed-integer
nonlinear programming and constraint integer…
