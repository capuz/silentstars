---
repo: "CDSETool/CDSETool"
name: "CDSETool"
description: "Download data from the Copernicus Data Space Ecosystem (CDSE)"
url: "https://github.com/CDSETool/CDSETool"
homepage: "https://dataspace.copernicus.eu/"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["copernicus", "earth-observation", "esa", "geodata", "open-data", "remote-sensing", "sentinel", "cdse"]
stars: 103
forks: 23
openIssues: 22
closedIssues: 32
watchers: 10
contributors: 10
recentReleases: 0
createdAt: "2023-10-31T15:28:18Z"
lastCommitAt: "2026-06-25T06:41:14Z"
lastReleaseAt: "2024-03-05T16:50:13Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors"]
healthScore: 89
undervaluedScore: 43
maintainers: ["dependabot[bot]", "nfi"]
openGraphImageUrl: "https://opengraph.githubassets.com/2460d42c07232563541c5ad7b72dfe6a5b0f0bd0f95361cf8c791e41b63618a8/CDSETool/CDSETool"
discussionCount: 2
---

# CDSETool

## About CDSETool
This script downloads copernicus data from the Copernicus Data Space Ecosystem

## Quick start

```python
from cdsetool.query import query_features, shape_to_wkt
from cdsetool.credentials import Credentials
from cdsetool.download import download_features
from cdsetool.monitor import StatusMonitor
from datetime import date

features = query_features(
    "SENTINEL-1",
    {
        "contentDateStartGe": "2020-12-20",
        "contentDateStartLe": date(2020, 12, 25),
        "processingLevel": "LEVEL1",
        "productType": "IW_GRDH_1S",
        "geometry": shape_to_wkt("path/to/shapefile.shp"),
    },
)

list(
    download_features(
        features,
        "path/to/output/folder/",
        {
            "concurrency": 4,
            "monitor": StatusMonitor(),
            "credentials": Credentials("username", "password"),
        },
    )
)
```

Or use the CLI:

```bash
cdsetool query search SENTINEL-2 --search-term contentDateStartGe=2020-01-01 --search-term contentDateStartLe=2020-01-10 --search-term productType=S2MSI2A

cdsetool download SENTINEL-2 PATH/TO/DIR --concurrency 4 --search-term contentDateStartGe=2020-01-01 --search-term…
