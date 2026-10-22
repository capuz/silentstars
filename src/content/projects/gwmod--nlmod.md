---
repo: "gwmod/nlmod"
name: "nlmod"
description: "Python package to build, run and visualize MODFLOW 6 groundwater models in the Netherlands."
readmeQualityOk: true
url: "https://github.com/gwmod/nlmod"
homepage: "https://nlmod.readthedocs.io"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["flopy", "geopandas", "hydrogeology", "hydrology", "modflow", "python", "xarray", "groundwater", "groundwater-modelling"]
stars: 44
forks: 10
openIssues: 65
closedIssues: 223
watchers: 9
contributors: 15
recentReleases: 0
createdAt: "2020-12-03T14:53:30Z"
lastCommitAt: "2026-10-22T08:52:07Z"
lastReleaseAt: "2023-02-21T14:28:02Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "hidden_gem", "legacy_hero"]
healthScore: 88
undervaluedScore: 54
maintainers: ["dbrakenhoff", "rubencalje", "OnnoEbbens"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/318226922/0ccfdc1d-4c38-43d1-881f-672f32edb2ae"
discussionCount: 8
---

# nlmod

Python package to build, run and visualize MODFLOW 6 groundwater models in the Netherlands.

`nlmod` was built to allow users to write scripts to quickly download relevant data
from publicly available sources, and build and post-process groundwater flow and
transport models at different spatial and temporal scales to answer specific
geohydrological questions. Scripting these steps, from downloading data to building
groundwater models, makes models more reproducible and transparent.

The functions in `nlmod` have four main objectives:

1. Create and adapt the temporal and spatial discretization of a MODFLOW model using an 
   xarray Dataset (`nlmod.dims`).
2. Download and read data from external sources, project this data on the modelgrid and 
   add this data to an xarray Dataset (`nlmod.read`).
3. Use data in an xarray Dataset to build modflow packages for both groundwater flow 
   and transport models using FloPy (`nlmod.sim`, `nlmod.gwf` and `nlmod.gwt` for 
   Modflow 6 and `nlmod.modpath` for Modpath).
4. Visualise modeldata in Python (`nlmod.plot`) or GIS software (`nlmod.gis`).

More information can be found on the documentation-website:…
