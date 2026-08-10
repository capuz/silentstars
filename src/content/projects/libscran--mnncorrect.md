---
repo: "libscran/mnncorrect"
name: "mnncorrect"
description: "C++ implementation of the MNN correction algorithm"
readmeQualityOk: true
url: "https://github.com/libscran/mnncorrect"
homepage: "https://libscran.github.io/mnncorrect/"
language: "C++"
languages: ["C++"]
languagePcts: [87]
stars: 5
forks: 0
openIssues: 1
closedIssues: 5
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2021-10-25T04:33:28Z"
lastCommitAt: "2026-08-10T05:00:19Z"
lastReleaseAt: "2026-02-27T20:53:52Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 72
undervaluedScore: 46
maintainers: ["LTLA"]
openGraphImageUrl: "https://opengraph.githubassets.com/d7f4e806c96dcc391ea82126394cec1e7fda416a742b6fd2d1e4f417f637f8fb/libscran/mnncorrect"
---

# C++ library for MNN correction

## Overview

This library performs unsupervised batch correction of high-dimensional data via the use of mutual nearest neighbors (MNNs).
MNN correction was initially described in the context of single-cell RNA sequencing data analysis (see [Haghverdi et al., 2018](https://doi.org/10.1038/nbt.4091))
but the same methodology can be applied for any high-dimensional data containing shared populations across multiple batches.
This implementation is loosely based on the `fastMNN()` function in the [**batchelor** package](https://bioconductor.org/packages/batchelor),
which provides a number of improvements and speed-ups over the original method in the Haghverdi paper.

## Quick start

Consider a dense matrix in column-major format where rows are dimensions (e.g., principal components) and cells are columns,
and a vector of integers specifying the batch of origin for each cell.
These are passed to `mnncorrect::compute()` to compute corrected values:

```cpp
#include "mnncorrect/mnncorrect.hpp"

std::vector<double> matrix(ndim * nobs); // fill with values...
std::vector<int> batch(nobs) // fill with batch IDs from [0, num_batches)…
