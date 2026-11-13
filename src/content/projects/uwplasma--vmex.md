---
repo: "uwplasma/vmex"
name: "vmex"
description: "JAX Version of VMEC2000"
readmeQualityOk: true
url: "https://github.com/uwplasma/vmex"
homepage: "https://vmex.readthedocs.io"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 16
forks: 5
openIssues: 2
closedIssues: 7
watchers: 0
contributors: 12
recentReleases: 0
createdAt: "2026-01-31T23:33:01Z"
lastCommitAt: "2026-11-13T11:21:44Z"
lastReleaseAt: "2026-05-19T16:00:46Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 94
undervaluedScore: 61
maintainers: ["rogeriojorge"]
openGraphImageUrl: "https://opengraph.githubassets.com/cf76ec10a0a22096241abc409afbbdbb9e12a9e7f8bfbef918fcf23ef62adf72/uwplasma/vmex"
---

# VMEX

VMEX is a JAX reimplementation of VMEC2000, the standard code for three-dimensional ideal-MHD equilibria of stellarators and tokamaks. It reads VMEC input decks, solves fixed- and free-boundary equilibria (NESTOR vacuum field driven by an MGRID table or coils), reproduces VMEC2000's iteration and writes standard `wout_*.nc` files. Because the solver is written in JAX, VMEX also differentiates the converged equilibrium through the implicit function theorem, so boundary, profile and coil parameters can be optimized with derivatives of the discrete equilibrium equations.

The goal is fast, differentiable and VMEC2000-compatible equilibria for stellarator optimization, including single-stage design, in which the plasma boundary and the coils are optimized together. VMEX also computes Boozer transforms, fields and their derivatives, quasisymmetry, quasi-isodynamicity and stability diagnostics, and has a separate lane for open mirrors.

- **Use existing workflows:** VMEC2000 `&INDATA` decks, VMEC++-style JSON inputs and `wout_*.nc` output, `NS_ARRAY` multigrid
  continuation, hot restart from a saved WOUT, and DESC inputs and outputs read without DESC.
- **Design with…
