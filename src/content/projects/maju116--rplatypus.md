---
repo: "maju116/rplatypus"
name: "rplatypus"
description: "Deep learning for medical images in R: semantic and instance segmentation, object detection, 2D and 3D, DICOM and NIfTI, one specification."
readmeQualityOk: true
url: "https://github.com/maju116/rplatypus"
homepage: "https://maju116.github.io/rplatypus/"
language: "R"
languages: ["R"]
languagePcts: [95]
topics: ["deep-learning", "dicom", "image-segmentation", "medical-imaging", "nifti", "object-detection", "r", "r-package", "reticulate", "rstats"]
stars: 136
forks: 9
openIssues: 7
closedIssues: 147
watchers: 5
contributors: 2
recentReleases: 0
createdAt: "2019-10-03T17:17:06Z"
lastCommitAt: "2026-11-09T11:59:38Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 99
undervaluedScore: 46
maintainers: ["maju116"]
openGraphImageUrl: "https://opengraph.githubassets.com/bad25689d5fc4d511c7d59cec05946e6e4fa9c4d7d66ffad49bf8f848779f15c/maju116/rplatypus"
---

# rplatypus

**Segmentation and object detection for medical images, from a folder of pictures to a
figure.**

> **This is a rewrite, and an alpha.** The package released in 2020 was built on
> TensorFlow through the R keras package. This one runs on PyTorch through
> [pyplatypus](https://pypi.org/project/pyplatypus/), which it installs and isolates for
> you. The API is different and will still move. The old version is on the `master`
> branch.

R has excellent tools for reading medical images and a healthy deep learning stack, and
almost nothing joining them: re-counted on 2026-11-05, the CRAN Task View for *Medical
Image Analysis* lists 49 packages and not one of them is a neural network. This is an attempt at the missing
piece — not a wrapper around a Python library you then have to learn, but an R package
that happens to compute in Python.

## Installing

```r
install.packages("rplatypus")
```

```r
# or the development version, which is ahead of CRAN
# install.packages("remotes")
remotes::install_github("maju116/rplatypus")
```

**The two are not the same thing.** CRAN carries the version that was submitted and
accepted; `install_github` serves the default branch, which is…
