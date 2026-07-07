---
repo: "spaceml-org/georeader"
name: "georeader"
description: "🛰️ Process raster data in python"
readmeQualityOk: true
url: "https://github.com/spaceml-org/georeader"
homepage: "https://spaceml-org.github.io/georeader"
language: "Jupyter Notebook"
languages: ["Jupyter Notebook", "Python"]
languagePcts: [73, 27]
topics: ["geopandas", "rasterio", "satellite-data"]
stars: 23
forks: 11
openIssues: 7
closedIssues: 4
watchers: 3
contributors: 18
recentReleases: 0
createdAt: "2022-03-04T10:52:17Z"
lastCommitAt: "2026-07-07T06:37:27Z"
lastReleaseAt: "2023-12-21T12:11:04Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 78
undervaluedScore: 61
maintainers: ["gonzmg88", "github-actions[bot]", "jejjohnson"]
openGraphImageUrl: "https://opengraph.githubassets.com/064ae017a5a2251657b94a12819145cc8dd347f3fd5785cf1f6bfe979f0e98ff/spaceml-org/georeader"
---

# <img src="https://raw.githubusercontent.com/spaceml-org/georeader/main/docs/images/logo_georeader.png" alt="Logo" width='7%'>  georeader

**georeader** is a Python package for processing raster data from different satellite missions. It provides a unified interface for reading, manipulating, and saving geospatial raster data with a focus on machine learning workflows.

**georeader** is mainly used to process satellite data for scientific usage, to create ML-ready datasets and to implement *end-to-end* operational inference pipelines ([e.g. the Kherson Dam Break floodmap](https://spaceml-org.github.io/ml4floods/content/ml4ops/HOWTO_postprocess_inference.html)). See [**georeader** concepts and protocols for basic concepts and API](https://spaceml-org.github.io/georeader/modules/read_module/).

## Install

**Requirements:** Python ≥3.11

```bash
pip install georeader-spaceml
```

**Optional dependencies** for specific readers:

```bash
# For cloud storage access (GCS, S3, Azure)
pip install georeader-spaceml fsspec gcsfs s3fs adlfs

# For hyperspectral sensors (EMIT, PRISMA, EnMAP)
pip install georeader-spaceml h5py xarray h5netcdf

# For Google Earth Engine integration
pip install…
