---
repo: "continuous-dems/fetchez"
name: "fetchez"
description: "Fetchez is a lightweight, modular, and highly extendable Python framework designed to orchestrate geospatial data engineering workflows."
readmeQualityOk: true
url: "https://github.com/continuous-dems/fetchez"
homepage: "https://fetchez.readthedocs.io/"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["data-science", "elevation-data", "geospatial", "gis", "cli", "earth-science", "earth-science-data", "python", "etl", "pipeline"]
stars: 6
forks: 3
openIssues: 4
closedIssues: 17
watchers: 0
contributors: 5
recentReleases: 0
createdAt: "2026-01-25T01:21:57Z"
lastCommitAt: "2026-07-30T06:08:14Z"
lastReleaseAt: "2026-04-28T21:47:57Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "hidden_gem"]
healthScore: 95
undervaluedScore: 64
maintainers: ["matth-love", "mmacferrin", "pre-commit-ci[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/82fcd882df8153d562be68598bfa9162e58d9c4912b6fa368abc8850b9337fa9/continuous-dems/fetchez"
---

<h1 align="center">Fetchez</h1>

</p>

**Fetchez** is a lightweight, modular, and highly extendable Python framework designed to orchestrate geospatial data engineering workflows.

Originally developed as the core fetching engine for the [CUDEM](https://github.com/ciresdem/cudem) project, Fetchez has evolved into a standalone ETL platform. It seamlessly retrieves Bathymetry, Topography, Imagery, and Oceanographic data from dozens of global repositories (NOAA, USGS, Copernicus, ESA) and processes it on the fly.

---

## 📦 Installation

```bash
pip install fetchez
```

**Optional Extensions:**
To enable module specific library dependencies, install with the desired extras:

```bash
pip install fetchez[full]
```

## 🐄 Quickstart
Fetch Copernicus topography and NOAA multibeam bathymetry for a specific bounding box in one command:

### CLI

```bash
fetchez run -R loc:"Miami, FL" --global-hook audit copernicus multibeam
```

Or run a full processing pipeline from a YAML recipe:

```bash
fetchez recipes run recipes/my_dem_project.yaml
```

### Python

```python
import fetchez

# Fetch Electronic Nautical Chart data from NOAA
files = fetchez.get("charts", region=[-120, -118, 33, 34],…
