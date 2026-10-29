---
repo: "geopandas/geodatasets"
name: "geodatasets"
description: "Spatial data examples"
readmeQualityOk: true
url: "https://github.com/geopandas/geodatasets"
homepage: "https://geodatasets.readthedocs.io/"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 76
forks: 11
openIssues: 2
closedIssues: 12
watchers: 6
contributors: 9
recentReleases: 0
createdAt: "2023-01-06T16:03:20Z"
lastCommitAt: "2026-10-29T10:36:19Z"
lastReleaseAt: "2026-01-01T08:22:41Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded"]
healthScore: 72
undervaluedScore: 29
maintainers: ["martinfleis"]
openGraphImageUrl: "https://opengraph.githubassets.com/508f89a43ae042ba3bb3625fa3fbae97ad7a99f8ea0c0668046f3b9b6c8797ec/geopandas/geodatasets"
fundingLinks: ["GITHUB:https://github.com/numfocus", "OPEN_COLLECTIVE:https://opencollective.com/geopandas", "CUSTOM:https://numfocus.org/donate-for-geopandas"]
---

# geodatasets

Fetch links or download and cache spatial data example files.

The `geodatasets` contains an API on top of a JSON with metadata of externally hosted
datasets containing geospatial information useful for illustrative and educational
purposes.

See the documentation at [geodatasets.readthedocs.io/](https://geodatasets.readthedocs.io/).

## Install

From PyPI:

```sh
pip install geodatasets
```

or using `conda` or `mamba` from conda-forge:

```sh
conda install geodatasets -c conda-forge
```

The development version can be installed using `pip` from GitHub.

```sh
pip install git+https://github.com/geopandas/geodatasets.git
```

## How to use

The package comes with a database of datasets. To see all:

```py
In [1]: import geodatasets

In [2]: geodatasets.data
Out[2]:
{'geoda': {'airbnb': {'url': 'https://geodacenter.github.io/data-and-lab//data/airbnb.zip',
   'license': 'NA',
   'attribution': 'Center for Spatial Data Science, University of Chicago',
   'name': 'geoda.airbnb',
   'description': 'Airbnb rentals, socioeconomics, and crime in Chicago',
   'geometry_type': 'Polygon',
   'nrows': 77,
   'ncols': 21,
   'details':…
