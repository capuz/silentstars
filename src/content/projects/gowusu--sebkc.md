---
repo: "gowusu/sebkc"
name: "sebkc"
description: "sebkc: Surface Energy Balance and Crop Coefficient Estimation with R"
readmeQualityOk: true
url: "https://github.com/gowusu/sebkc"
language: "R"
languages: ["R"]
languagePcts: [100]
stars: 18
forks: 5
openIssues: 1
closedIssues: 2
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2016-12-14T14:31:05Z"
lastCommitAt: "2026-07-05T20:54:10Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 92
undervaluedScore: 45
maintainers: ["gowusu"]
openGraphImageUrl: "https://opengraph.githubassets.com/0d6acada0ccf78aef7690ab727e92c86a79db4dabcf7171cc3aa5cba295d90fb/gowusu/sebkc"
---

# Surface Energy Balance and Crop Coefficient Estimation with R

This R package computes and integrates surface energy balance into FAO56 crop water balance model

Specifically, the package can perform the following functions:

+   Single crop cofficient modelling
+   Dual crop cofficient modelling 
+   the integration of thermal-based Evaporative Fractions in a water balance model
+   The computation of Two Source Surface Energy Balance (TSEB) model such as such as TSEB-PT, 
    TSEB-PM and TSEB-Parallel 
+   The computation of One Source Surface Energy Balance (OSEB) models such as SEBAL, METRIC, SEBI, SSEB and SEBS 

## Installation
You can install the latest development version from github with,
 <pre><code>
 
  if (!require(devtools)) {
  install.packages("devtools")
  }

if (packageVersion("devtools") < 1.6) {
  install.packages("devtools")
  }
  if(!require(sp)){
  install.packages("sp")
}
if(!require(rgdal)){
  install.packages("rgdal")
}
if(!require(raster)){
  install.packages("raster")
}
if(!require(gstat)){
  install.packages("gstat")
}
if(!require(httr)){
  install.packages("httr")
  }
if(!require(sebkc)){
devtools::install_github("gowusu/sebkc")
  }
</code></pre>…
