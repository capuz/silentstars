---
repo: "ZeppSav/SailFFish"
name: "SailFFish"
description: "A lightweight & optimised fast Poisson solver for execution on both CPU & GPU."
readmeQualityOk: true
url: "https://github.com/ZeppSav/SailFFish"
language: "C++"
languages: ["C++"]
languagePcts: [89]
stars: 15
forks: 3
openIssues: 0
closedIssues: 0
watchers: 3
contributors: 1
recentReleases: 0
createdAt: "2022-12-30T18:31:26Z"
lastCommitAt: "2026-10-09T18:56:40Z"
status: "thriving"
tags: []
healthScore: 80
undervaluedScore: 32
maintainers: ["ZeppSav"]
openGraphImageUrl: "https://opengraph.githubassets.com/1a36838e49b69ec37bb86a84924a40f6f8aecf42b2dbea29b634016867bfbb00/ZeppSav/SailFFish"
---

# SailFFish - A lightweight fast Poisson solver for execution on both CPU & GPU.

The purpose of SailFFish is to provide an open source, easily linked fast Poisson solver with minimal 
dependencies. The software is configured for shared memory machines. 
At the heart of the solver is the fast fourier transform (FFT), which allows us to integrate the Poisson equation in frequency space.
Transforms to and from the frequency space via FFTs are not carried out by SailFFish, 
but rather call existing (and very optimised) libraries through the inherited `DataType` class. 
Currently two compilation options exists: The first is the (deservedly) popular library [FFTW](https://www.fftw.org/) for calculation on a CPU. 
The second is the high-performance NVIDIA FFT implementation [cuFFT](https://docs.nvidia.com/cuda/cufft/index.html) for calculation on a GPU. 
Solvers exist for 1D, 2D and 3D scalar and 3D vector input fields. A range of differential operators may be applied to modify the form of the Poisson equation being solved.

A 3D_Vector style solver with a curl differential operator has been used to solve for the velocity distribution (right half: x-velocity field) of a vortex ring…
