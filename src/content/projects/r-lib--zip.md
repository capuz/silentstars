---
repo: "r-lib/zip"
name: "zip"
description: "Platform independent zip compression via miniz"
readmeQualityOk: true
url: "https://github.com/r-lib/zip"
homepage: "https://r-lib.github.io/zip/"
language: "C"
languages: ["C"]
languagePcts: [91]
stars: 99
forks: 24
openIssues: 0
closedIssues: 109
watchers: 2
contributors: 34
recentReleases: 0
createdAt: "2017-04-09T01:06:13Z"
lastCommitAt: "2026-08-05T06:08:00Z"
lastReleaseAt: "2022-10-26T11:13:16Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 97
undervaluedScore: 51
maintainers: ["gaborcsardi"]
openGraphImageUrl: "https://opengraph.githubassets.com/9e08f40fe14bc63296dac292e23553a697ab2a2a3a7e564d5df6cb96df947514/r-lib/zip"
---

# zip

> Cross-Platform ‘zip’ Compression

downloads](https://cranlogs.r-pkg.org/badges/zip)](https://www.r-pkg.org/pkg/zip)
coverage](https://codecov.io/gh/r-lib/zip/graph/badge.svg)](https://app.codecov.io/gh/r-lib/zip)

## Installation

Stable version:

``` r
install.packages("zip")
```

Development version:

``` r
pak::pak("r-lib/zip")
```

## Optional dependencies

- For progress bars (see below), the [cli](https://cli.r-lib.org)
  package is needed.
- The [curl](https://jeroen.r-universe.dev/curl) package is needed for
  using `unzip()` on URLs.
- Background processes, i.e. `zip_process()` and `unzip_process()`, need
  the [processx](https://processx.r-lib.org) package.

## Usage

``` r
library(zip)
```

### Creating ZIP files

`zip()` creates a new ZIP archive. (It overwrites the output file if it
exists.) Simply supply all directories and files that you want to
include in the archive.

It makes sense to change to the top-level directory of the files before
archiving them, so that the files are stored using a relative path name.

``` r
zip("sources.zip", c("R", "src"))
file.info("sources.zip")
#>               size isdir mode               mtime               ctime
#>…
