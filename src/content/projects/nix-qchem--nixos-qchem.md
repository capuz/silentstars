---
repo: "Nix-QChem/NixOS-QChem"
name: "NixOS-QChem"
description: "Nix expressions for HPC/Quantum chemistry software packages"
readmeQualityOk: true
url: "https://github.com/Nix-QChem/NixOS-QChem"
language: "Nix"
languages: ["Nix"]
languagePcts: [96]
topics: ["hpc", "quantum-chemistry", "nix", "computational-chemistry"]
stars: 106
forks: 17
openIssues: 3
closedIssues: 68
watchers: 5
contributors: 7
recentReleases: 0
createdAt: "2017-07-24T18:49:58Z"
lastCommitAt: "2026-09-14T09:12:18Z"
status: "thriving"
tags: ["legacy_hero"]
healthScore: 94
undervaluedScore: 47
maintainers: ["markuskowa", "sheepforce"]
openGraphImageUrl: "https://opengraph.githubassets.com/58764eff29901c00db0b52d651ab9b016120ff9582292c1d5f3107bbbc9d2f09/Nix-QChem/NixOS-QChem"
---

# NixOS-QChem
Nix expressions for HPC/Quantum chemistry software packages.

The goal of this project is to integrate software packages
into nixos to make it suitable for running it on a HPC cluster.
It provides popular quantum chemistry packages and performance optimization to upstream nixpkgs.

### Available Packages
A list packages can be found here: [Package list](https://github.com/Nix-QChem/NixOS-QChem/blob/HEAD/package_list.md)

### Citation
The design and packaging approach of the overlay are published here:
[M.Kowalewski, P. Seeber, Int. J. Quantum. Chem., e26872 (2022)](https://doi.org/10.1002/qua.26872)

If you have used NixOS-QChem to perform calculation please cite the above mentioned paper
with the following sentence. This enable others to reproduce your calculations
by using the same computational environment.
```
All calculation have been performed using a reproducible environment using the
Nix package manager together with NixOS-QChem (commit <10 digits of SHA-1>) [1].

[1] M.Kowalewski, P. Seeber, Int. J. Quantum. Chem., e26872 (2022).
```

## Usage

### Overlay
The repository comes as a nixpkgs overlay (see [Nixpkgs…
