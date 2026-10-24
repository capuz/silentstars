---
repo: "dgketchum/EEMapper"
name: "EEMapper"
description: "IrrMapper: Google Earth Engine Automated Annual Mapping of Irrigated Lands"
readmeQualityOk: true
url: "https://github.com/dgketchum/EEMapper"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 13
forks: 5
openIssues: 1
closedIssues: 0
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2018-10-19T21:03:59Z"
lastCommitAt: "2026-10-24T00:16:11Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 56
undervaluedScore: 32
maintainers: ["dgketchum"]
openGraphImageUrl: "https://opengraph.githubassets.com/1bc355f372c6915d1ab7a0f096a877ea9410bdcd8418097e061d40a8136e6b18/dgketchum/EEMapper"
---

# IrrMapper

Annual, 30 m maps of irrigated agriculture across the western United States,
1985–present, produced with Random Forest classification of Landsat imagery in
Google Earth Engine.

Coverage: Arizona, California, Colorado, Idaho, Montana, Nevada, New Mexico,
Oregon, Utah, Washington, Wyoming.

## Data access

The current product version is **1.2**, published in the
[Earth Engine public data catalog](https://developers.google.com/earth-engine/datasets/catalog/UMT_Climate_IrrMapper_RF_v1_2):

```python
import ee
ee.Initialize()

# public catalog collection: irrigated pixels = 1, others masked
irr = ee.ImageCollection('UMT/Climate/IrrMapper_RF/v1_2')
```

The working collections carry one image per state-year (e.g. `MT_2024`):

| Collection | Classes |
|---|---|
| `UMT/Climate/IrrMapper_RF/v1_2` (public catalog) | irrigated = 1, others masked |
| `projects/ee-dgketchum/assets/IrrMapper/IrrMapperComp` | 0 irrigated, 1 rainfed, 2 uncultivated, 3 wetland |
| `projects/ee-dgketchum/assets/IrrMapper/version1_2` | irrigated only (class 0, masked) |

Version 1.1 (deprecated, still served as `UMT/Climate/IrrMapper_RF/v1_1`;
1986–2018) is the original 2020 *Remote Sensing* training…
