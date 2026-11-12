---
repo: "mushroomfire/mdapy"
name: "mdapy"
description: "Fast building, analysis, simulation and visualization of atomistic systems, in Python."
readmeQualityOk: true
url: "https://github.com/mushroomfire/mdapy"
homepage: "https://mushroomfire.github.io/mdapy/"
language: "Python"
languages: ["Python", "C++"]
languagePcts: [71, 27]
topics: ["molecular-dynamics", "material-science", "structure-analysis", "elastic-constants", "high-performance-computing", "machine-learning-potentials", "neighbor-search", "phonon-dispersions", "polycrystalline", "ray-tracing-engine"]
stars: 128
forks: 19
openIssues: 0
closedIssues: 12
watchers: 5
contributors: 2
recentReleases: 0
createdAt: "2022-08-30T05:48:05Z"
lastCommitAt: "2026-11-12T11:38:40Z"
lastReleaseAt: "2022-11-30T13:10:00Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 99
undervaluedScore: 48
maintainers: ["mushroomfire"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/530515603/0db4608a-c7dc-47e7-bd6e-0dd912e3ac65"
---

> **MDAPY 2.0 is a complete rewrite and is not compatible with MDAPY 1.x.** It brings many
> more features, and we recommend upgrading:
> [From MDAPY 1.x](https://mushroomfire.github.io/mdapy/getting-started/from-1x/) gives the
> 2.0 way of each common call. The code of 1.x stays on the branch
> [`1.x`](https://github.com/mushroomfire/mdapy/tree/1.x).

If you like MDAPY, please give it a ⭐ [star](https://github.com/mushroomfire/mdapy).

## 💡 Why MDAPY

- **Light.** [NumPy](https://numpy.org) and [polars](https://pola.rs) are its only
  requirements. Packages such as [matplotlib](https://matplotlib.org) or
  [ASE](https://wiki.fysik.dtu.dk/ase/) are optional, and it carries no other
  third-party code.
- **Robust.** Tests cover more than 99 % of the code and compare each feature with analytic
  results and with mature software. All of them run automatically on Linux, macOS and
  Windows. Results are the same for any number of threads, and damaged files or impossible
  inputs give a clear error, not a crash.
- **Fast.** The heavy parts run in C++, on a parallel engine of MDAPY's own. See the
  [benchmarks](https://mushroomfire.github.io/mdapy/performance/comparison/).
-…
