---
repo: "dfe-analytical-services/shinyGovstyle"
name: "shinyGovstyle"
description: "Apply GOV.UK styled components and formats in R Shiny"
readmeQualityOk: true
url: "https://github.com/dfe-analytical-services/shinyGovstyle"
homepage: "https://dfe-analytical-services.github.io/shinyGovstyle/"
language: "R"
languages: ["R"]
languagePcts: [92]
stars: 52
forks: 12
openIssues: 8
closedIssues: 103
watchers: 27
contributors: 15
recentReleases: 0
createdAt: "2019-06-20T06:41:58Z"
lastCommitAt: "2026-09-25T09:03:14Z"
lastReleaseAt: "2026-04-13T11:00:03Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "legacy_hero"]
healthScore: 91
undervaluedScore: 48
maintainers: ["cjrace", "dependabot[bot]", "sarahmwong"]
openGraphImageUrl: "https://opengraph.githubassets.com/f23482e25a59dcc48b78d7e787467cbdc7838e872520209b580d8e6fb0fa1841/dfe-analytical-services/shinyGovstyle"
---

# shinyGovstyle <img src="man/figures/logo.png" align="right" height="139" style="padding-left: 1rem;" />

> Apply GOV.UK styled components and formats in shiny

## Overview

This package provides custom widgets to style R Shiny apps using the GOV.UK design system. The components can be previewed in our [example showcase app](https://department-for-education.shinyapps.io/shinygovstyle-example-app/).
<br> 

To view details and advice on how to use the GOV.UK components please visit https://design-system.service.gov.uk/components/, most components should be available to use through this package.

### Installation

You can install the latest stable version from CRAN
```r
install.packages("shinyGovstyle")
```

If you want to make use of the development version then install directly from GitHub.
```r
pak::pak("dfe-analytical-services/shinyGovstyle")
```

To use error and word count elements you will need to load `useShinyjs()` from shinyjs in your ui.R file
```r
shinyjs::useShinyjs()
```

### Contributing

Ideas, bug reports, and requests for new components should be [raised as GitHub issue](https://github.com/dfe-analytical-services/shinyGovstyle/issues/new). It's often worth checking…
