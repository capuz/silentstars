---
repo: "bopen/elevation"
name: "elevation"
description: "Download, cache and clip global terrain digital elevation models: Mapzen terrain tiles, Copernicus DEM, ALOS World 3D and SRTM 30m and 90m DEMs."
readmeQualityOk: true
url: "https://github.com/bopen/elevation"
homepage: "http://elevation.bopen.eu"
language: "Python"
languages: ["Python"]
languagePcts: [99]
topics: ["srtm", "digital-elevation-model", "dem", "mapzen", "copernicus-dem", "earth-observation", "geospatial", "gis", "machine-learning", "remote-sensing"]
stars: 356
forks: 77
openIssues: 15
closedIssues: 44
watchers: 14
contributors: 24
recentReleases: 4
createdAt: "2016-03-17T23:15:17Z"
lastCommitAt: "2026-11-09T11:58:56Z"
lastReleaseAt: "2026-11-09T11:30:00Z"
status: "thriving"
tags: ["legacy_hero"]
healthScore: 93
undervaluedScore: 42
maintainers: ["alexamici", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/9115419aa14accec8d1f037bcdd03150372b4c32482c915e893e7459a71647b6/bopen/elevation"
discussionCount: 2
---

# elevation

Global geographic elevation data made easy.

> **Upgrading from 1.x?** *elevation* 2.0 is not fully backward compatible,
> read the [migration guide](https://elevation.bopen.eu/en/stable/migration.html).

Elevation provides easy download, cache and access of the global datasets:

- `MAPZEN`: [Terrain Tiles global 30m v1](https://registry.opendata.aws/terrain-tiles/)
  assembled by Mapzen from several open data providers and hosted on [Amazon](https://aws.amazon.com/public-data-sets/terrain),
  with 30m heights on the EGM96 geoid,
  includes data from NASA/NGA SRTM, USGS 3DEP, EUDEM, ArcticDEM, GMTED2010 and ETOPO1.
- `GLO-30`: [Copernicus DEM global 30m (2021)](https://doi.org/10.5270/ESA-c5d3d65)
  produced by ESA and the European Union and hosted on [Earth Data Hub](https://earthdatahub.destine.eu/collections/copernicus-dem), with 30m heights on the EGM2008 geoid.
- `AW3D30`: [ALOS World 3D global 30m v3.2](https://doi.org/10.5069/G94M92HB)
  produced by JAXA and hosted on [OpenTopography](https://portal.opentopography.org/raster?opentopoID=OTALOS.112016.4326.2),
  with 30m heights on the EGM96 geoid.
- `SRTM1_GEOID`: [SRTM global 30m…
