---
repo: "uwplasma/VMEX"
name: "VMEX"
description: "JAX Version of VMEC2000"
readmeQualityOk: true
url: "https://github.com/uwplasma/VMEX"
homepage: "https://vmex.readthedocs.io"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 6
forks: 3
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 9
recentReleases: 6
createdAt: "2026-01-31T23:33:01Z"
lastCommitAt: "2026-07-18T05:46:24Z"
lastReleaseAt: "2026-05-09T22:24:32Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 99
undervaluedScore: 75
maintainers: ["rogeriojorge", "eduardolneto"]
openGraphImageUrl: "https://opengraph.githubassets.com/0e8f108acba3371a52e1437ba4af92b31a7a07590d39684dc21a64be45fe7ffd/uwplasma/VMEX"
---

# VMEX

**VMEX** is a clean-room, JAX-native reimplementation of the
[VMEC2000](https://princetonuniversity.github.io/STELLOPT/VMEC) ideal-MHD
equilibrium code for stellarators and tokamaks. It reproduces VMEC2000
iteration-for-iteration on benchmark decks — and, unlike the Fortran
original, it is differentiable and runs on GPUs.

- **VMEC2000 parity.** The solver ports VMEC2000's algorithms
  constant-for-constant (steepest-descent moment method, radial
  preconditioner, spectral condensation, NESTOR vacuum solve). Benchmark
  decks converge in the *same* number of iterations and reproduce the
  plasma energy at machine precision. An optional **2D block
  preconditioner** cuts iterations 2.5–11x on stiff cases while leaving the
  default path byte-identical.
- **Differentiable.** Gradients of *fixed-boundary* equilibrium outputs with
  respect to boundary shape and profile parameters by implicit
  differentiation of the converged fixed point — no finite differences, no
  unrolling — validated against central finite differences to ~1e-6 relative
  (see the gradient table in the docs), with an O(1)-memory adjoint. **Free
  boundary** is differentiable end-to-end through the…
