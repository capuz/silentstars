---
repo: "astro-informatics/s2fft"
name: "s2fft"
description: "S2FFT: Differentiable and accelerated spherical transforms"
readmeQualityOk: true
url: "https://github.com/astro-informatics/s2fft"
homepage: "https://astro-informatics.github.io/s2fft"
language: "Python"
languages: ["Python"]
languagePcts: [84]
topics: ["differentiable-programming", "jax", "spherical-harmonics", "wigner-d-matrix", "wigner-transform", "fourier-transform", "recursion-algorithm", "pytorch", "spherical"]
stars: 234
forks: 19
openIssues: 57
closedIssues: 141
watchers: 8
contributors: 15
recentReleases: 0
createdAt: "2022-03-01T12:29:18Z"
lastCommitAt: "2026-10-21T08:48:41Z"
lastReleaseAt: "2026-02-12T11:08:29Z"
status: "thriving"
tags: ["needs_contributors"]
healthScore: 70
undervaluedScore: 25
maintainers: ["dependabot[bot]", "matt-graham", "allcontributors[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/464884164/fb39a5a6-7c7a-425f-b48d-9bf17f875fb0"
---

# S2FFT: differentiable and accelerated spherical transforms

`S2FFT` is a Python package for computing Fourier transforms on the sphere
and rotation group [(Price & McEwen 2024)](https://arxiv.org/abs/2311.14670) using
JAX or PyTorch. It leverages autodiff to provide differentiable transforms, which are
also deployable on hardware accelerators (e.g. GPUs and TPUs).

More specifically, `S2FFT` provides support for spin spherical harmonic
and Wigner transforms (for both real and complex signals), with support
for adjoint transformations where needed, and comes with different
optimisations (precompute or not) that one may select depending on
available resources and desired angular resolution $L$.

## Algorithms ⚡

`S2FFT` leverages new algorithmic structures that can he highly
parallelised and distributed, and so map very well onto the architecture
of hardware accelerators (i.e. GPUs and TPUs). In particular, these
algorithms are based on new Wigner-d recursions that are stable to high
angular resolution $L$. The diagram below illustrates the recursions
(for further details see [Price & McEwen…
