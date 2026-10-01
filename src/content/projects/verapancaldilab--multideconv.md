---
repo: "VeraPancaldiLab/multideconv"
name: "multideconv"
description: "Integrative pipeline for cell type deconvolution from bulk RNAseq using first and second generation methods"
readmeQualityOk: true
url: "https://github.com/VeraPancaldiLab/multideconv"
homepage: "https://verapancaldilab.github.io/multideconv/"
language: "R"
languages: ["R"]
languagePcts: [97]
stars: 7
forks: 0
openIssues: 2
closedIssues: 20
watchers: 1
contributors: 9
recentReleases: 1
createdAt: "2025-01-17T13:52:12Z"
lastCommitAt: "2026-10-01T10:24:11Z"
lastReleaseAt: "2026-10-01T02:41:46Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 91
undervaluedScore: 56
maintainers: ["mhurtado13"]
openGraphImageUrl: "https://opengraph.githubassets.com/4881f63b107cec3312dd24d623c66dee13aeecbe553e2e261ad89c94e657f875/VeraPancaldiLab/multideconv"
---

# multideconv <img src="man/figures/logo.png" align="right" height="139" alt="multideconv logo" />

An integrative pipeline for combining first and second generation cell
type deconvolution results

</p>

<em>Figure 1. A schematic overview of the `multideconv` pipeline</em>
</p>

## Installation

To avoid GitHub API rate limit issues during installation, we recommend
setting up GitHub authentication by creating and storing a Personal
Access Token (PAT). You can do this with the following steps:

``` r
# install.packages(c("usethis", "gitcreds"))
usethis::create_github_token() #Create a Personal Access Token (if you don't have)
gitcreds::gitcreds_set() #Add the token
```

You can install the development version of `multideconv` from
[GitHub](https://github.com/) with:

``` r
# install.packages("pak")
pak::pkg_install("VeraPancaldiLab/multideconv")
```

## General usage

These are basic examples which shows you how to use `multideconv` for
different tasks. For a detailed tutorial, see [Get
started](https://VeraPancaldiLab.github.io/multideconv/articles/multideconv.html)

Before running `multideconv`, make sure to set your working directory.
The `Results/` folder, where outputs will…
