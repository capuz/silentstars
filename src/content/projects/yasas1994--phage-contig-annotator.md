---
repo: "Yasas1994/phage_contig_annotator"
name: "phage_contig_annotator"
description: "Annotates genes on putative phage contigs with protein orthologous groups using PHROGs"
url: "https://github.com/Yasas1994/phage_contig_annotator"
language: "Python"
languages: ["Python"]
languagePcts: [98]
stars: 7
forks: 2
openIssues: 1
closedIssues: 2
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2022-11-03T10:22:55Z"
lastCommitAt: "2026-06-28T08:43:08Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 93
undervaluedScore: 55
maintainers: ["Yasas1994"]
openGraphImageUrl: "https://opengraph.githubassets.com/8bfb77ba035ed5f43b36f0dddb267edcb37df2322a8feac1306ef90d1f9ba957/Yasas1994/phage_contig_annotator"
---

```
█▀▀█ █░░█ █▀▀█ █▀▀▀ █▀▀ 　 █▀▀ █▀▀█ █▀▀▄ ▀▀█▀▀ ░▀░ █▀▀▀ 　 █▀▀█ █▀▀▄ █▀▀▄ █▀▀█ ▀▀█▀▀ █▀▀█ ▀▀█▀▀ █▀▀█ █▀▀█ 
█░░█ █▀▀█ █▄▄█ █░▀█ █▀▀ 　 █░░ █░░█ █░░█ ░░█░░ ▀█▀ █░▀█ 　 █▄▄█ █░░█ █░░█ █░░█ ░░█░░ █▄▄█ ░░█░░ █░░█ █▄▄▀ 
█▀▀▀ ▀░░▀ ▀░░▀ ▀▀▀▀ ▀▀▀ 　 ▀▀▀ ▀▀▀▀ ▀░░▀ ░░▀░░ ▀▀▀ ▀▀▀▀ 　 ▀░░▀ ▀░░▀ ▀░░▀ ▀▀▀▀ ░░▀░░ ▀░░▀ ░░▀░░ ▀▀▀▀ ▀░▀▀
```

Annotates genes on putative phage contigs with a database of hidden Markov models (HMMs) based on [PHROGs](https://phrogs.lmge.uca.fr/). This tool was built to support visual confirmation of predictions made by [Jaeger](https://github.com/Yasas1994/Jaeger).

The pipeline is managed by [Snakemake](https://snakemake.github.io/), uses [pyrodigal-gv](https://github.com/althonos/pyrodigal-gv) for gene calling, [pyhmmer](https://github.com/althonos/pyhmmer) for HMM search, and [tRNAscan-SE](http://lowelab.ucsc.edu/tRNAscan-SE/) for tRNA prediction.

## Requirements

- Python >= 3.11
- Conda (recommended for installing tRNAscan-SE)

## Quick install (macOS/Linux)

If you already have [Conda](https://docs.conda.io/) installed, run:

```bash
bash <(curl -fsSL https://raw.githubusercontent.com/Yasas1994/phage_contig_annotator/main/install.sh)
```

Or, after cloning the…
