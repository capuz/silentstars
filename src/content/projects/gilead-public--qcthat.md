---
repo: "Gilead-Public/qcthat"
name: "qcthat"
description: "A quality control framework for R packages used in Clinical Trials"
readmeQualityOk: true
url: "https://github.com/Gilead-Public/qcthat"
homepage: "https://gilead-public.github.io/qcthat/"
language: "R"
languages: ["R"]
languagePcts: [98]
stars: 11
forks: 2
openIssues: 28
closedIssues: 215
watchers: 5
contributors: 8
recentReleases: 0
createdAt: "2024-01-11T18:31:05Z"
lastCommitAt: "2026-10-26T18:06:34Z"
lastReleaseAt: "2026-06-17T14:23:29Z"
status: "thriving"
tags: []
healthScore: 85
undervaluedScore: 43
maintainers: ["jharmon-gilead", "nandriychuk", "jonthegeek"]
openGraphImageUrl: "https://opengraph.githubassets.com/e85e4081275f0e8235adc6abefb68a97a108e2b077ac233da17194fede8da6a0/Gilead-Public/qcthat"
discussionCount: 4
---

# qcthat <a href="https://gilead-public.github.io/qcthat/"><img src="man/figures/logo.svg" align="right" height="318" alt="qcthat website" /></a>

`{qcthat}` is a quality control framework for R packages. It has been
developed for use in the `gsm` family of packages, such as
[`gsm.core`](https://github.com/Gilead-BioStats/gsm.core).

The goal of `{qcthat}` is to produce qualification reports linking
GitHub issues to evidence that those issues have been implemented. These
reports can be used as part of a quality control and acceptance process
for R packages, particularly those used in regulated environments such
as clinical trials.

## ⚙️ Installation

You can install the latest release of qcthat from
[GitHub](https://github.com/) with:

``` r
# install.packages("pak")
pak::pak("Gilead-Public/qcthat@*release")
```

You can install the development version of qcthat from
[GitHub](https://github.com/) with:

``` r
# install.packages("pak")
pak::pak("Gilead-Public/qcthat")
```

Learn more in `vignette("qcthat")`.

## 📋 Example Report Process

`Action_qcthat()` installs a GitHub action to generate QC reports. At
its core, it uses the functions `QCPackage()`, `QCPR()`,…
