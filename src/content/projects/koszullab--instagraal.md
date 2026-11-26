---
repo: "koszullab/instaGRAAL"
name: "instaGRAAL"
description: "Large genome reassembly based on Hi-C data, continuation of GRAAL"
readmeQualityOk: true
url: "https://github.com/koszullab/instaGRAAL"
homepage: "https://research.pasteur.fr/fr/software/graal-software-for-genome-assembly-from-chromosome-contact-frequencies/"
language: "Python"
languages: ["Python", "Cuda"]
languagePcts: [56, 42]
topics: ["genome-assembly", "genomics", "3c", "hi-c", "scaffolding"]
stars: 44
forks: 10
openIssues: 9
closedIssues: 36
watchers: 7
contributors: 8
recentReleases: 0
createdAt: "2018-05-03T08:43:19Z"
lastCommitAt: "2026-11-26T15:23:41Z"
lastReleaseAt: "2026-04-27T18:01:56Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 93
undervaluedScore: 34
maintainers: ["js2264"]
openGraphImageUrl: "https://opengraph.githubassets.com/ec19b6083495ddc0bdb56bdfb566e1f47aaee9dec84fa64ad051b3c04f9c479c/koszullab/instaGRAAL"
---

# instaGRAAL

Large genome reassembly based on Hi-C data (continuation and partial rewrite of [GRAAL](https://github.com/koszullab/GRAAL)).
It relies on `pycuda` for GPU-accelerated MCMC scaffolding and `cooler` for multi-resolution contact map generation.
Requires **Python 3.10-3.12**. The default pipeline runs its MCMC on an **NVIDIA GPU** and needs the `gpu` extra (see [Installation](#installation)); `instagraal-endtoend --mode cpu` needs neither.

## Installation

`instaGRAAL` is available on PyPI. On any machine:

```sh
pip install instagraal
```

This installs every step but the MCMC scaffolder: `instagraal-endtoend --mode cpu`, `instagraal-pre`, `instagraal-refine`, `instagraal-polish`, `instagraal-post` and `instagraal-stats`.

On a machine with an NVIDIA GPU and the **CUDA toolkit**, the `gpu` extra adds `pycuda`, which the MCMC scaffolder (`instagraal`, `instagraal-test` and the default `instagraal-endtoend` mode) needs. `pip` builds `pycuda` against the toolkit (see [Troubleshooting](#cuda-not-found-during-installation)):

```sh
pip install "instagraal[gpu]"
```

Pre-built Docker images are also available with `python3.12` and various `CUDA` versions:
