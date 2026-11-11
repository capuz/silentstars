---
repo: "jmineau/arl-met"
name: "arl-met"
description: "Read, write, subset, and sample NOAA ARL meteorological files."
readmeQualityOk: true
url: "https://github.com/jmineau/arl-met"
homepage: "https://jmineau.github.io/arl-met/"
language: "Python"
languages: ["Python"]
languagePcts: [96]
topics: ["arl", "meteorology", "noaa", "xarray", "hysplit"]
stars: 5
forks: 1
openIssues: 1
closedIssues: 87
watchers: 0
contributors: 4
recentReleases: 5
createdAt: "2025-10-02T03:44:44Z"
lastCommitAt: "2026-11-11T19:44:34Z"
lastReleaseAt: "2026-09-30T07:41:20Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "hidden_gem", "release_machine"]
healthScore: 99
undervaluedScore: 97
maintainers: ["jmineau", "dependabot[bot]", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/c286df65f970688c8fd7daa0f986cfd81cf0d0241f3b226b24cf7f6dcc235856/jmineau/arl-met"
---

# arl-met

Read, write, subset, and sample NOAA ARL meteorological files.

`arl-met` provides a Python-first interface to the ARL packed meteorology
format used by HYSPLIT and related workflows. It supports:

- low-level record-preserving reads and writes through `File`, `RecordSet`, and `DataRecord`
- xarray Dataset reads and common-case writes through `open_dataset()` and `write_dataset()`, plus an xarray backend (`xr.open_dataset(path, engine="arl")`)
- downloading from NOAA's ARL archives (HRRR, NAM, GDAS, GFS, ...) with optional crop-on-download, and keeping a local mirror complete and checked against NOAA's MD5 list with `Archive.sync()`
- converting other models' output, opened with xarray, to ARL files (Python versions of HYSPLIT's `data2arl` programs): ERA5 on pressure or model levels with `converters.from_era5()`, GFS and GDAS GRIB2 with `converters.from_gfs()`, DWD's ICON-EU and ICON-D2 on their lat/lon grids with `converters.from_icon()`, WRF output with `converters.from_wrf()`
- crop-before-unpack subset extraction with `extract_subset()`
- vertical helper functions such as `pressure()`, `z_agl()`, and `z_msl()`
- point sampling with `sample_points()`
- joining files…
