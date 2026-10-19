---
repo: "egagli/easysnowdata"
name: "easysnowdata"
description: "package for snow science data, providing streamlined access to satellite imagery (Sentinel-1/2, HLS, MODIS, etc), weather station data, climate reanalysis, land cover data, DEMs, and derived snow products as xarray objects. "
readmeQualityOk: true
url: "https://github.com/egagli/easysnowdata"
homepage: "https://egagli.github.io/easysnowdata/"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["climate", "modis", "remote", "remote-sensing", "sensing", "sentinel-1", "sentinel-2", "snotel", "snow", "weather"]
stars: 16
forks: 4
openIssues: 19
closedIssues: 24
watchers: 3
contributors: 3
recentReleases: 0
createdAt: "2024-03-05T20:31:49Z"
lastCommitAt: "2026-10-19T09:15:00Z"
lastReleaseAt: "2024-11-04T20:23:03Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 91
undervaluedScore: 66
maintainers: ["egagli", "claude", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/c60406eef1cd1f9ec982a312f45ab2369d4124d6e40e418e890b38c52141d8ba/egagli/easysnowdata"
---

# easysnowdata

**A Python package to easily retrieve data relevant to snow science.**

`easysnowdata` unifies access to a wide range of snow-relevant geospatial
datasets — weather stations, satellite imagery, snow products, climate
reanalysis, DEMs and a hillshade, basins, and boundaries from countries and
counties to mountain ranges and glacier outlines — under a consistent API that
returns xarray objects (and GeoDataFrames for vector products). The emphasis is
on minimising downloads and local computation by leveraging cloud-optimised
data formats wherever possible.

## Gallery

One executed script per product — [browse them](https://egagli.github.io/easysnowdata/auto_examples/index.html),
each with the code, the figure, and a downloadable notebook.

## Data Source Status

Every route of every product is probed weekly. A failure opens an issue
labelled [`data-source`](https://github.com/egagli/easysnowdata/issues?q=label%3Adata-source)
and a recovery closes it; latency and DMR++ readiness are on the
[status page](https://egagli.github.io/easysnowdata/status.html).

What a probe cannot see — a reprocessed collection, a republished file, a new
release (the next Census year, a new…
