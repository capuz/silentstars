---
repo: "r-dbi/odbc"
name: "odbc"
description: "Connect to ODBC databases (using the DBI interface)"
readmeQualityOk: true
url: "https://github.com/r-dbi/odbc"
homepage: "https://odbc.r-dbi.org/"
language: "C++"
languages: ["C++", "R"]
languagePcts: [71, 26]
topics: ["r", "database", "odbc"]
stars: 418
forks: 119
openIssues: 70
closedIssues: 610
watchers: 26
contributors: 48
recentReleases: 0
createdAt: "2016-07-13T19:32:07Z"
lastCommitAt: "2026-11-07T13:54:20Z"
lastReleaseAt: "2021-04-05T13:21:25Z"
status: "thriving"
tags: ["legacy_hero"]
healthScore: 91
undervaluedScore: 36
maintainers: ["detule", "simonpcouch", "jeroen"]
openGraphImageUrl: "https://opengraph.githubassets.com/b03de984b9317bcd096eff332bc7d46ec2484ab9530edf9abdd5076e250dd20f/r-dbi/odbc"
---

# odbc <a href="https://odbc.r-dbi.org"><img src="man/figures/logo.png" align="right" height="138" alt="odbc website" /></a>

state and is being actively
developed.](http://www.repostatus.org/badges/latest/active.svg)](https://www.repostatus.org/)
coverage](https://codecov.io/gh/r-dbi/odbc/graph/badge.svg)](https://app.codecov.io/gh/r-dbi/odbc)

The goal of the odbc package is to provide a
[DBI](https://dbi.r-dbi.org/)-compliant interface to
[ODBC](https://learn.microsoft.com/en-us/sql/odbc/microsoft-open-database-connectivity-odbc)
drivers. This makes it easy to connect databases such as [SQL
Server](https://www.microsoft.com/en-us/sql-server/), Oracle,
[Databricks](https://www.databricks.com/), and Snowflake.

The odbc package is an alternative to
[RODBC](https://cran.r-project.org/package=RODBC) and
[RODBCDBI](https://cran.r-project.org/package=RODBCDBI) packages, and is
typically much faster. See `vignette("benchmarks")` to learn more.

## Overview

The odbc package is one piece of the R interface to databases with
support for ODBC:

\<img src=“man/figures/whole-game.png” alt=“A diagram containing four
boxes with arrows linking each pointing left to right. The boxes read,
in…
