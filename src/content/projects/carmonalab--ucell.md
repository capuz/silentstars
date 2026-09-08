---
repo: "carmonalab/UCell"
name: "UCell"
description: "Gene set scoring for single-cell data"
readmeQualityOk: true
url: "https://github.com/carmonalab/UCell"
language: "R"
languages: ["R"]
languagePcts: [100]
stars: 207
forks: 22
openIssues: 1
closedIssues: 52
watchers: 4
contributors: 8
recentReleases: 0
createdAt: "2021-04-06T09:24:43Z"
lastCommitAt: "2026-09-08T08:12:39Z"
lastReleaseAt: "2025-04-22T13:49:32Z"
status: "thriving"
tags: ["legacy_hero"]
healthScore: 75
undervaluedScore: 23
maintainers: ["jwokaty", "mass-a", "BenjaminDEMAILLE"]
openGraphImageUrl: "https://opengraph.githubassets.com/9608d2c215a563fe7dd3ee948600ff955daf47361f02a2e5a8e323187b308d19/carmonalab/UCell"
---

# UCell: Robust and scalable single-cell gene signature scoring

</p>

`UCell` is an R package for scoring gene signatures in single-cell datasets. UCell scores, based on the Mann-Whitney U statistic, are robust to dataset size and heterogeneity, and their calculation demands relatively less computing time and memory than other robust methods, enabling the processing of large datasets (>10^5 cells). UCell can be applied to any cell vs. gene data matrix, and includes functions to directly interact with Seurat and Bioconductor's SingleCellExperiment objects. 

Find the installation instructions for the package and usage vignettes below.

See also [pyUCell](https://github.com/carmonalab/pyucell) for a Python implementation of UCell.

### Package Installation

**[UCell is on Bioconductor](https://bioconductor.org/packages/release/bioc/html/UCell.html)** To install the package from Bioc run:
```r
if (!requireNamespace("BiocManager", quietly=TRUE))
    install.packages("BiocManager")
BiocManager::install("UCell")
```

For previous releases of `UCell`, you may download a tagged version from GitHub:
```r
library(remotes)
remotes::install_github("carmonalab/UCell", ref="v2.2")
```

###…
