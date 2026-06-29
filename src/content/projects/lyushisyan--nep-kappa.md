---
repo: "lyushisyan/NEP-kappa"
name: "NEP-kappa"
description: "NEP + HiPhive/Finite-Displacement + Phono3py workflow for lattice thermal conductivity"
url: "https://github.com/lyushisyan/NEP-kappa"
homepage: "https://nep-kappa.readthedocs.io"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 9
forks: 2
openIssues: 0
closedIssues: 1
watchers: 1
contributors: 1
recentReleases: 2
createdAt: "2025-11-18T12:05:18Z"
lastCommitAt: "2026-06-29T07:23:27Z"
lastReleaseAt: "2026-06-11T15:57:33Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 89
undervaluedScore: 57
maintainers: ["lyushisyan"]
openGraphImageUrl: "https://opengraph.githubassets.com/ac054f831545804d34433a7807753903429f0f5fe12a6e7b458c9fd2562d04f2/lyushisyan/NEP-kappa"
---

# NEP-kappa

[English](#english-version) | [中文](#中文版)

## English Version

NEP-kappa is an installable workflow package for lattice thermal conductivity
calculations. It can:

1. Relax an input structure.
2. Generate `fc2.hdf5`, `fc3.hdf5`, and `phono3py_disp.yaml`.
3. Compute thermal conductivity with `phono3py`.
4. Plot phonon and thermal-transport results from existing HDF5 outputs.

Available commands:

```bash
nepkappa relax input.yaml
nepkappa fc input.yaml
nepkappa kappa input.yaml
nepkappa plot input.yaml
nepkappa run input.yaml
nepkappa info input.yaml
```

- `nepkappa relax`: relax the input structure
- `nepkappa fc`: generate `fc2.hdf5`, `fc3.hdf5`, and `phono3py_disp.yaml`
- `nepkappa kappa`: compute thermal conductivity from existing force constants
- `nepkappa plot`: plot dispersion, DOS, volume heat capacity, group velocity, relaxation time, and thermal conductivity
- `nepkappa run`: run `relax`, `fc`, and `kappa` in sequence
- `nepkappa info`: print the parsed configuration without running

### Publication

If you use **NEP-kappa** in your research, please cite:

[1] F. Yin, et al.,
*Accelerated phonon transport calculations for nanostructures: Combining…
