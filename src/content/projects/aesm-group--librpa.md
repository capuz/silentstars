---
repo: "AESM-Group/LibRPA"
name: "LibRPA"
description: "LibRPA is a library offering access to physical properties computed using many-body perturbation theory."
readmeQualityOk: true
url: "https://github.com/AESM-Group/LibRPA"
homepage: "https://aesm-group.github.io/LibRPA/"
language: "C++"
languages: ["C++"]
languagePcts: [86]
stars: 23
forks: 10
openIssues: 10
closedIssues: 2
watchers: 0
contributors: 12
recentReleases: 2
createdAt: "2020-12-15T13:32:25Z"
lastCommitAt: "2026-11-04T02:56:20Z"
lastReleaseAt: "2026-10-31T11:53:16Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero"]
healthScore: 82
undervaluedScore: 65
maintainers: ["AroundPeking", "minyez", "bhjia-phys"]
openGraphImageUrl: "https://opengraph.githubassets.com/62257ec2907b057e659e5460cac49c0cb54c9e25eeba9144f30e2303cb0d69de/AESM-Group/LibRPA"
---

# LibRPA

**LibRPA** is a library for efficient and accurate first-principles calculations
based on many-body perturbation theory with numerical atomic orbitals (NAOs).
It currently supports random-phase approximation (RPA) correlation-energy
calculations and one-shot GW quasiparticle calculations for periodic systems.

By leveraging the localized resolution-of-identity (LRI) technique, LibRPA
achieves low-scaling algorithms suitable for large-scale systems. It is
implemented in C++ with MPI/OpenMP parallelism, provides C and Fortran
interfaces, and can be integrated with density functional theory (DFT) codes
through both file-based and API-based workflows.

> [!NOTE]
> LibRPA is under active development, and its input/output interfaces
> are prone to change.

## Features

- RPA correlation-energy calculations and one-shot GW quasiparticle calculations
- Low-scaling algorithms based on the localized resolution-of-identity (LRI) technique
- Hybrid MPI/OpenMP parallelism
- Driver-based and API-based interfaces for integration with external DFT codes

## Requirements

LibRPA requires:

- a C++ compiler with MPI support
- a Fortran compiler
- BLAS and LAPACK libraries
- a ScaLAPACK…
