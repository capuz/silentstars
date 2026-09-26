---
repo: "YuLab-SMU/DOSE"
name: "DOSE"
description: ":mask: Disease Ontology Semantic and Enrichment analysis"
readmeQualityOk: true
url: "https://github.com/YuLab-SMU/DOSE"
homepage: "https://yulab-smu.top/biomedical-knowledge-mining-book/"
language: "R"
languages: ["R"]
languagePcts: [99]
topics: ["disease-ontology", "enrichment-analysis", "semantic-similarity"]
stars: 125
forks: 34
openIssues: 16
closedIssues: 39
watchers: 9
contributors: 17
recentReleases: 0
createdAt: "2014-05-31T16:43:01Z"
lastCommitAt: "2026-09-26T08:21:08Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 83
undervaluedScore: 38
maintainers: ["GuangchuangYu", "jwokaty"]
openGraphImageUrl: "https://opengraph.githubassets.com/e280dbb4a482dd43f9491ba4aade2e7ef0608c4c5c8e6bc3d931b54f48899b2c/YuLab-SMU/DOSE"
---

# DOSE: Disease Ontology Semantic and Enrichment analysis

state and is being actively
developed.](http://www.repostatus.org/badges/latest/active.svg)](http://www.repostatus.org/#active)
Status](http://www.bioconductor.org/shields/build/devel/bioc/DOSE.svg)](https://bioconductor.org/checkResults/devel/bioc-LATEST/DOSE/)

Provides ontology-aware methods for disease and phenotype knowledge
mining. DOSE supports semantic similarity analysis of disease and
phenotype ontology terms, genes, and gene clusters using methods
including Resnik, Schlicker, Jiang, Lin, and Wang. It also provides
over-representation analysis and gene set enrichment analysis for
interpreting gene vectors and ranked gene lists in disease, phenotype,
and cancer contexts.

## :writing_hand: Authors

Guangchuang YU <https://yulab-smu.top>

School of Basic Medical Sciences, Southern Medical University

Learn more at <https://yulab-smu.top/contribution-knowledge-mining/>.

## :arrow_double_down: Installation

Get the released version from Bioconductor:

``` r
if (!requireNamespace("BiocManager", quietly = TRUE))
    install.packages("BiocManager")
BiocManager::install("DOSE")
```

Or install the development version…
