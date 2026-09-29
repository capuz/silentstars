---
repo: "r-lib/ps"
name: "ps"
description: "R package to query, list, manipulate system processes"
readmeQualityOk: true
url: "https://github.com/r-lib/ps"
homepage: "https://ps.r-lib.org/"
language: "C"
languages: ["C", "R"]
languagePcts: [58, 41]
stars: 83
forks: 23
openIssues: 6
closedIssues: 127
watchers: 0
contributors: 33
recentReleases: 0
createdAt: "2018-06-15T12:19:35Z"
lastCommitAt: "2026-09-29T08:10:40Z"
lastReleaseAt: "2020-12-07T16:13:18Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 74
undervaluedScore: 34
maintainers: ["gaborcsardi"]
openGraphImageUrl: "https://opengraph.githubassets.com/2c34be57c690f3857afe3f4ae4c44f16cb5d42cbd98aead67e1a13fa813cc5b6/r-lib/ps"
---

# ps

> List, Query, Manipulate System Processes

ps implements an API to query and manipulate system processes. Most of its
code is based on the [psutil](https://github.com/giampaolo/psutil) Python
package.

-   [Installation](#installation)
-   [Supported platforms](#supported-platforms)
-   [Listing all processes](#listing-all-processes)
-   [Process API](#process-api)
    -   [Query functions](#query-functions)
    -   [Process manipulation](#process-manipulation)
-   [Finished and zombie processes](#finished-and-zombie-processes)
-   [Pid reuse](#pid-reuse)
-   [Recipes](#recipes)
    -   [Find process by name](#find-process-by-name)
    -   [Wait for a process to finish](#wait-for-a-process-to-finish)
    -   [Wait for several processes to
        finish](#wait-for-several-processes-to-finish)
    -   [Kill process tree](#kill-process-tree)
    -   [Filtering and sorting
        processes](#filtering-and-sorting-processes)
-   [Code of Conduct](#code-of-conduct)
-   [License](#license)

## Installation

You can install the released version of ps from
[CRAN](https://CRAN.R-project.org) with:

``` r
install.packages("ps")
```

If you need the development version, install it…
