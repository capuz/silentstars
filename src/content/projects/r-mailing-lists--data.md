---
repo: "r-mailing-lists/data"
name: "data"
description: "R mailing list archives in Parquet format, ready for analysis"
readmeQualityOk: true
url: "https://github.com/r-mailing-lists/data"
homepage: "https://r-mailing-lists.thecoatlessprofessor.com/"
language: "R"
languages: ["R", "Shell"]
languagePcts: [58, 39]
topics: ["list-serv", "mail-archive", "rstats"]
stars: 7
forks: 0
openIssues: 0
closedIssues: 2
watchers: 0
contributors: 1
recentReleases: 2
createdAt: "2026-03-07T06:03:29Z"
lastCommitAt: "2026-11-03T12:47:51Z"
lastReleaseAt: "2026-11-03T12:47:54Z"
status: "thriving"
tags: ["hidden_gem", "funded"]
healthScore: 100
undervaluedScore: 69
maintainers: ["github-actions[bot]", "coatless"]
openGraphImageUrl: "https://opengraph.githubassets.com/fb5e2dc64433e089e917bef95f33c56d1d4a486cace63281e948e7d115b06aab/r-mailing-lists/data"
fundingLinks: ["GITHUB:https://github.com/coatless", "PATREON:https://patreon.com/coatless", "BUY_ME_A_COFFEE:https://buymeacoffee.com/coatless", "THANKS_DEV:https://thanks.dev/u/gh/coatless"]
---

# R Mailing List Data

A collection of [R mailing list](https://www.r-project.org/mail.html)
archives in [Parquet](https://parquet.apache.org/) format, ready for
analysis in R, Python, or any language with Parquet support.

Data is sourced from the [R Mailing Lists archive
project](https://github.com/r-mailing-lists) and updated automatically.
You can also browse the archives at
[archives.rstats.dev](https://archives.rstats.dev).

## Quick start

### R

Requires [`jsonlite`](https://cran.r-project.org/package=jsonlite) and
[`nanoparquet`](https://cran.r-project.org/package=nanoparquet). Source
the helper script directly from GitHub:

``` r
source("https://raw.githubusercontent.com/r-mailing-lists/data/main/scripts/rml.R")
```

``` r
# See available lists
rml_available()

# Read only metadata columns (skips body text — much faster)
r_devel <- rml_read("r-devel",
  col_select = c("from_name", "date", "subject", "thread_id", "month"))

# Top 10 posters in the last year
recent <- r_devel[r_devel$date >= as.POSIXct(Sys.Date() - 365), ]
head(sort(table(recent$from_name), decreasing = TRUE), 10)

# Message counts per list (thread summaries — single small download)
threads <-…
