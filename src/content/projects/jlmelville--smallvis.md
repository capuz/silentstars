---
repo: "jlmelville/smallvis"
name: "smallvis"
description: "R package for dimensionality reduction of small datasets"
readmeQualityOk: true
url: "https://github.com/jlmelville/smallvis"
language: "R"
languages: ["R"]
languagePcts: [87]
topics: ["dimensionality-reduction", "r", "t-sne", "largevis", "umap"]
stars: 73
forks: 10
openIssues: 0
closedIssues: 4
watchers: 6
contributors: 1
recentReleases: 0
createdAt: "2017-11-29T01:40:01Z"
lastCommitAt: "2026-11-06T02:44:08Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 86
undervaluedScore: 34
maintainers: ["jlmelville"]
openGraphImageUrl: "https://opengraph.githubassets.com/d8ff287b4c13df46f49055b8ac9ec448ef9ecffaa6c83cd0f3726bd13b4d1a41/jlmelville/smallvis"
---

# smallvis

An R package for experimenting with dimensionality reduction using neighborhood embedding methods,
including t-SNE, LargeVis, and UMAP cost functions. It gives you control over input scaling, nearest
neighbors, initialization, and optimization so you can compare methods and try out ideas.

Most methods use quadratic time and memory and suit small datasets. Barnes-Hut t-SNE supports larger
datasets through approximate nearest neighbors and multithreaded C++ code.

## Install

The R package lives in the `smallvis` subdirectory. Install it and its dependencies, including the
GitHub package `vizier`, with

```r
install.packages("pak")
pak::pak("jlmelville/smallvis/smallvis")
```

Installation from source requires an R-compatible C++ toolchain, such as Rtools on Windows.

## Quick start

`smallvis()` uses the numeric columns of a data frame. This example initializes t-SNE with scaled
PCA coordinates and plots the final embedding.

```r
library(smallvis)

embedding <- smallvis(
  iris,
  Y_init = "spca",
  perplexity = 30,
  epoch_callback = FALSE,
  n_threads = 1,
  verbose = FALSE
)
plot(embedding, col = as.integer(iris$Species), pch = 19)
```

Set `ret_extra = TRUE` to…
