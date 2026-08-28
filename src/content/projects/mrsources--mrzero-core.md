---
repo: "MRsources/MRzero-Core"
name: "MRzero-Core"
description: "Python package and documentation for MR-zero"
readmeQualityOk: true
url: "https://github.com/MRsources/MRzero-Core"
homepage: "https://mrsources.github.io/MRzero-Core/"
language: "Python"
languages: ["Python"]
languagePcts: [89]
topics: ["bloch", "mri", "pdg", "self-learning", "simulation"]
stars: 80
forks: 29
openIssues: 13
closedIssues: 93
watchers: 5
contributors: 21
recentReleases: 1
createdAt: "2023-08-08T11:35:44Z"
lastCommitAt: "2026-08-28T12:22:37Z"
lastReleaseAt: "2026-07-09T10:32:13Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 89
undervaluedScore: 55
maintainers: ["mzaiss", "J-Endres", "SWeinmueller"]
openGraphImageUrl: "https://opengraph.githubassets.com/f8eeda03e156f3468e6b7c4fffae7c7f35a893b1527450c9aab65a38d4e61ee8/MRsources/MRzero-Core"
discussionCount: 9
---

# MRzero Core

The MRzero Core contains the core functionality of [MRzero](https://arxiv.org/abs/2002.04265) like MRI sequence building, simulation and reconstruction. MRzero Core does not force you to take any particular approach to e.g., reconstruction, as it targets easy integration in existing projects. Nevertheless, more tools can be added in the future if they helpful for the general application space.

> ### 🎉 1.0 release
> Version 1.0 adds Pulseq 1.5 support and flips the sign convention of the simulated signal, so that it is now the complex conjugate of what previous versions returned. Reconstruction accordingly switches from `fft` to `ifft`.
> 
> See the [FFT sign conventions](https://mrsources.github.io/MRzero-Core/fft_sign_conventions.html) page for details, and the [CHANGELOG](https://github.com/MRsources/MRzero-Core/blob/HEAD/CHANGELOG.md) for the full list of changes. If anything else broke, please [open an issue](https://github.com/MRsources/MRzero-Core/issues).

## Usage

MRzero Core is written in [Python](https://www.python.org/), heavily relying on [PyTorch](https://pytorch.org/) for fast (GPU-) Tensor calculations.
To improve performance, parts of the…
