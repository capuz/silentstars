---
repo: "mmollayi/shide"
name: "shide"
description: "R package that provides date/time classes based on Jalali calendar"
readmeQualityOk: true
url: "https://github.com/mmollayi/shide"
language: "R"
languages: ["R", "C++"]
languagePcts: [64, 36]
stars: 6
forks: 0
openIssues: 1
closedIssues: 11
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2023-08-27T21:46:30Z"
lastCommitAt: "2026-10-28T09:48:52Z"
lastReleaseAt: "2025-08-24T06:13:34Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 91
undervaluedScore: 52
maintainers: ["mmollayi"]
openGraphImageUrl: "https://opengraph.githubassets.com/2f7f8829868ce3e222227112f27df73d124d7a1904123c525b5e122b820b3c56/mmollayi/shide"
---

# shide

coverage](https://codecov.io/gh/mmollayi/shide/graph/badge.svg)](https://app.codecov.io/gh/mmollayi/shide)

## Overview

`shide` is an R package that provides date and date-time support based
on Jalali calendar. `jdate` and `jdatetime` are two simple classes for
storing Jalali dates and date-times respectively. These classes are
implemented based on the infrastructure provided by the `vctrs` package.

## Installation

You can install shide from CRAN with:

``` r
install.packages("shide")
```

Or you can install the development version from GitHub:

``` r
# install.packages("devtools")
devtools::install_github("mmollayi/shide")
```

## Features

- Conversion between Jalali and Gregorian calendars.
- Parsing and formatting of Jalali dates and date-times.
- Time zones and daylight saving times support via IANA time zone
  database. Access to IANA time zone database files is provided by
  `tzdb` package.
- `jdate` and `jdatetime` are built upon numeric vectors, just like
  `Date` and `POSIXct`. So conversion between date classes (`jdate` and
  `Date`) and date-time classes (`jdatetime` and `POSIXct`) comes at
  zero cost.
- Both `jdate` and `jdatetime` can be used as column…
