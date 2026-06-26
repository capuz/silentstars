---
repo: "ilarsf/gwasTools"
name: "gwasTools"
description: "Basic and fast GWAS functions for QQ and Manhattan plots (incl. gene names)"
url: "https://github.com/ilarsf/gwasTools"
language: "R"
languages: ["R"]
languagePcts: [89]
topics: ["gwas", "rscript", "qq", "manhattan-plot", "genome-analysis", "snps", "power", "plotting", "optparse"]
stars: 34
forks: 7
openIssues: 0
closedIssues: 6
watchers: 2
contributors: 1
recentReleases: 0
createdAt: "2017-11-13T08:52:39Z"
lastCommitAt: "2026-06-26T21:32:25Z"
status: "thriving"
tags: ["legacy_hero"]
healthScore: 75
undervaluedScore: 34
maintainers: ["ilarsf", "Copilot"]
openGraphImageUrl: "https://opengraph.githubassets.com/d76b3c6c2885a10043fe14806bec5caf1709bedfd0e5d7964ad279203489ccbd/ilarsf/gwasTools"
---

# gwasTools

Standalone R scripts for common GWAS plotting tasks:

| Script | Purpose | Main output |
| --- | --- | --- |
| `QQplot.r` | Frequency-binned QQ plot from allele frequency and p-value columns. | `<prefix>_QQ.png` |
| `ManhattanPlot.r` | Manhattan plot with adaptive thinning, candidate-region detection, and optional nearest-gene peak labels. | `<prefix>_Manhattan.png` |
| `PowerPlot.r` | 80% power curves for binary case-control or quantitative traits. | `<prefix>_PowerAnalysis.png` |

Run each script with `--help` for the full option reference:

```sh
Rscript QQplot.r --help
Rscript ManhattanPlot.r --help
Rscript PowerPlot.r --help
```

## Installation

Install R and the runtime packages:

```r
install.packages(c(
  "optparse",
  "data.table",
  "RColorBrewer",
  "plotrix",
  "pwr"
))
```

For cluster or conda-based installs, the repository also includes a mamba environment:

```sh
mamba env create -f environment.yml
mamba activate gwastools
```

The environment installs the core plotting dependencies and the compiled XML/rentrez stack that optional nearest-gene labeling may need. If the environment already exists, update it with:

```sh
mamba env update -f…
