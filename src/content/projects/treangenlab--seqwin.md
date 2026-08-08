---
repo: "treangenlab/Seqwin"
name: "Seqwin"
description: "Ultrafast identification of signature sequences in microbial genomes"
readmeQualityOk: true
url: "https://github.com/treangenlab/Seqwin"
homepage: "https://doi.org/10.1093/bioinformatics/btag261"
language: "Python"
languages: ["Python", "C++"]
languagePcts: [72, 27]
topics: ["assay-design", "signature-sequence", "pathogen-detection", "microbial-species", "wastewater-surveillance"]
stars: 20
forks: 1
openIssues: 1
closedIssues: 3
watchers: 1
contributors: 7
recentReleases: 2
createdAt: "2025-07-29T06:30:12Z"
lastCommitAt: "2026-08-08T04:34:45Z"
lastReleaseAt: "2026-05-27T22:40:28Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 91
undervaluedScore: 58
maintainers: ["mxwang66"]
openGraphImageUrl: "https://opengraph.githubassets.com/dd57c05f4867405ef9aa546430148d1bfbb130ecefc64a580da57376dfc9a7c0/treangenlab/Seqwin"
---

# Seqwin

**Seqwin** is a lightning‑fast, memory‑efficient toolkit for discovering **signature sequences** (genomic markers) that balance **high sensitivity** with **high specificity**. It builds a minimizer‑based pan‑genome graph across target and neighboring non‑target genomes and extracts signature sequences using a novel graph algorithm. Signatures can be used for downstream assay design such as qPCR, ddPCR, amplicon sequencing, and hybrid capture probes.

Seqwin computes minimizers with [ntHash](https://doi.org/10.1093/bioinformatics/btw397), using code adapted from [btllib](https://github.com/bcgsc/btllib) (licensed under the GNU General Public License v3.0). Seqwin uses hash maps from [ankerl::unordered_dense](https://github.com/martinus/unordered_dense) (licensed under the MIT License).

---

## Table of contents

1. [Installation](#installation)
2. [Quick start](#quick-start)
3. [Citation](#citation)

See the [Seqwin Wiki](https://github.com/treangenlab/Seqwin/wiki) for full documentation.

## Installation
Seqwin can be installed from **Bioconda** or **PyPI**. For a local checkout or developer build, see [Build and install from…
