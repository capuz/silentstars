---
repo: "ocbe-uio/contingencytables"
name: "contingencytables"
description: "Statistical Analysis of Contingency Tables"
readmeQualityOk: true
url: "https://github.com/ocbe-uio/contingencytables"
homepage: "https://ocbe-uio.github.io/contingencytables/"
language: "R"
languages: ["R"]
languagePcts: [100]
topics: ["r-package", "contingency-table"]
stars: 6
forks: 3
openIssues: 1
closedIssues: 71
watchers: 2
contributors: 9
recentReleases: 0
createdAt: "2020-09-07T09:28:35Z"
lastCommitAt: "2026-10-29T10:36:31Z"
lastReleaseAt: "2024-01-11T12:58:17Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 99
undervaluedScore: 87
maintainers: ["wleoncio", "Copilot"]
openGraphImageUrl: "https://opengraph.githubassets.com/da60af96674539a551b4504a15fcd3b8736bd798f4d130be1020bc29ee5385cb/ocbe-uio/contingencytables"
---

# contingencytables

An R package for the _Statistical Analysis of Contingency Tables_ (SACT) book by Fagerland et. al.. More info on the book on [its home page](https://contingencytables.com/) and in the [Citation](#citation) section of this document.

# Installation

## Stable version

The latest stable version of this package is available on [CRAN](https://cran.r-project.org/package=contingencytables) and can be installed by running

```r
install.packages("contingencytables")
```

from an R interactive session.

## Development version

The development version of this package can be installed by running the following command in R:

```r
remotes::install_github("ocbe-uio/contingencytables", ref="develop")
```

If the command above does not work, make sure you have the remotes package installed (e.g. by running `install.packages("remotes")` in R).

# Usage

After installing, you must load the package by running `library("contingencytables")` in R. You can read more about the package and its functions by running `library(help="contingencytables")` or by consulting the SACT book.

# Citation

To cite this package, install it and run `citation("contingencytables")`. The output should…
