---
repo: "ipea/gtfs2gps"
name: "gtfs2gps"
description: " Convert GTFS data into a data.table with GPS-like records in R"
readmeQualityOk: true
url: "https://github.com/ipea/gtfs2gps"
homepage: "https://ipea.github.io/gtfs2gps/"
language: "R"
languages: ["R"]
languagePcts: [93]
topics: ["gtfs", "transport", "public-transport", "rspatial", "gtfs-format", "gps-format", "r"]
stars: 83
forks: 10
openIssues: 10
closedIssues: 132
watchers: 6
contributors: 15
recentReleases: 0
createdAt: "2019-08-22T02:13:17Z"
lastCommitAt: "2026-11-04T13:05:13Z"
lastReleaseAt: "2022-02-23T17:28:14Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 87
undervaluedScore: 46
maintainers: ["rafapereirabr", "mattwigway"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/203697230/aad03c80-9135-11eb-912c-df17d70bfc41"
---

# gtfs2gps: Converting public transport data from GTFS format to GPS-like records <img align="right" src="man/figures/logo.png" alt="logo" width="180"> 

**gtfs2gps** is an R package that converts public transportation data in GTFS format to GPS-like records in a `data.frame`/`data.table`, which can then be used in various applications such as running transport simulations or scenario analyses. 

The core function of the package takes a `GTFS.zip` file and interpolates the space-time position of each vehicle in each trip considering the network distance and average speed between stops. The output is a `data.table` where each row represents the timestamp of each vehicle at a given spatial resolution. The package also has some functions to subset GTFS data in time and space and to convert both representations to [simple feature](https://CRAN.R-project.org/package=sf) format. More information about the methods used in the package can be found in this [preprint](https://osf.io/preprints/socarxiv/qydr6/).

### Installation

Please install **gtfs2gps** package from CRAN to get the stable version.

``` r
install.packages("gtfs2gps")
library(gtfs2gps)
```

### Vignette

Please see our…
