---
repo: "ces0491/tidylearn"
name: "tidylearn"
description: "Machine learning for tidynauts"
readmeQualityOk: true
url: "https://github.com/ces0491/tidylearn"
homepage: "https://tidylearn.sheetsolved.com"
language: "R"
languages: ["R"]
languagePcts: [100]
stars: 5
forks: 1
openIssues: 0
closedIssues: 1
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2025-11-09T12:48:52Z"
lastCommitAt: "2026-09-02T08:05:17Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 93
undervaluedScore: 68
maintainers: ["ces0491", "marclevin"]
openGraphImageUrl: "https://opengraph.githubassets.com/e6232a89512ae56562938edce793461ad7dea9b11f19d62878bb9272967dac3c/ces0491/tidylearn"
---

# tidylearn <img src="man/figures/logo.png" align="right" height="139" alt="tidylearn logo" />

Machine Learning for Tidynauts

Full documentation, including every function reference page and all eleven
articles: **<https://tidylearn.sheetsolved.com>**

## Overview

`tidylearn` provides a **unified tidyverse-compatible interface** to R's machine
learning ecosystem. It wraps proven packages like glmnet, randomForest,
xgboost, e1071, cluster, and dbscan - you get the reliability of established
implementations with the convenience of a consistent, tidy API.

**What tidylearn does:**

- Reads data from diverse sources (`tl_read()`) — CSV, Excel, Parquet,
  JSON, databases, S3, Kaggle, and more
- Provides one consistent interface (`tl_model()`) to 20 ML algorithms
  (13 supervised, 7 unsupervised)
- Returns tidy tibbles instead of varied output formats
- Offers unified ggplot2-based visualization and formatted `gt` tables
- Enables pipe-friendly workflows with `%>%`
- Orchestrates complex workflows combining multiple techniques

**What tidylearn is NOT:**

- A reimplementation of ML algorithms (uses established packages under the hood)
- A replacement for the underlying packages (you…
