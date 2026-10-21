---
repo: "zoubohao/CompleteBin"
name: "CompleteBin"
description: "The binning tool with dynamic contrastive learning and deep language model"
readmeQualityOk: true
url: "https://github.com/zoubohao/CompleteBin"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 26
forks: 2
openIssues: 9
closedIssues: 7
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2025-01-24T05:08:37Z"
lastCommitAt: "2026-10-21T09:14:28Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 53
undervaluedScore: 30
maintainers: ["zoubohao"]
openGraphImageUrl: "https://opengraph.githubassets.com/6c92e0ba06c40fc656629289e9c73787e7902d4d3b66254a1089d8693eae9429/zoubohao/CompleteBin"
---

# CompleteBin

CompleteBin recovers metagenome-assembled genomes (MAGs) from a contig FASTA
file and one or more coordinate-sorted BAM files. It combines coverage and
k-mer features with a pretrained sequence model, dynamic contrastive learning,
and Leiden clustering, then polishes, dereplicates, and exports the final bins.

The method is described in *Dynamic Contrastive Learning with Pretrained Deep
Language Model Enhances Metagenome Binning for Contigs*.

- **Version:** 1.2.3.6
- **Python:** 3.9 or newer
- **Platform:** Linux
- **License:** MIT

---

## Installation

CompleteBin is published on **anaconda.org as `csbhzou/completebin`**. There is no
need to install from source or from PyPI.

### 1. Create an environment and install the package

```bash
conda create -n completebin \
  -c csbhzou -c conda-forge -c bioconda \
  "completebin=1.2.3.6=py_3"

conda activate completebin      # required: the launcher resolves "python" from PATH
completebin --version           # CompleteBin v1.2.3.6
```

To add it to an environment you already use, replace the first command with:

```bash
conda install -c csbhzou -c conda-forge -c bioconda "completebin=1.2.3.6=py_3"
```…
