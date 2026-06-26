---
repo: "alxmrs/xarray-sql"
name: "xarray-sql"
description: "An experiment to query Xarray datasets with SQL"
url: "https://github.com/alxmrs/xarray-sql"
homepage: "https://alxmrs.github.io/xarray-sql/"
language: "Python"
languages: ["Python"]
languagePcts: [84]
stars: 81
forks: 13
openIssues: 48
closedIssues: 41
watchers: 6
contributors: 18
recentReleases: 2
createdAt: "2023-11-26T06:20:56Z"
lastCommitAt: "2026-06-26T06:46:45Z"
lastReleaseAt: "2026-05-18T00:18:52Z"
status: "thriving"
tags: ["needs_contributors", "hidden_gem"]
healthScore: 80
undervaluedScore: 39
maintainers: ["alxmrs", "ahuang11", "ghostiee-11"]
openGraphImageUrl: "https://opengraph.githubassets.com/079965fccf0fee7bac81b4dacd9974344ca38d194a2683d8258a43182fe8fdd2/alxmrs/xarray-sql"
---

# xarray-sql

_Query [Xarray](https://xarray.dev/) with SQL_

```shell
pip install xarray-sql
```

## What is this?

This is an experiment to provide a SQL interface for array datasets.

```python
import xarray as xr
import xarray_sql as xql

# Open ARCO-ERA5 — a weather dataset with 273 variables since 1940. 
# Turning off dask means we don't have to wait to construct a task graph.
ds = xr.open_zarr(
  'gs://gcp-public-data-arco-era5/ar/full_37-1h-0p25deg-chunk-1.zarr-v3',
  chunks=None,  # Turn dask off
  storage_options={'token': 'anon'}  # Anonymous read from the public GCS bucket — no auth required.
)

ctx = xql.XarrayContext()
# Make sure to pass `chunks`!
ctx.from_dataset('era5', ds, chunks=dict(time=6), table_names={
    ('time', 'latitude', 'longitude'): 'surface',
    ('time', 'level', 'latitude', 'longitude'): 'atmosphere',
})
# Registration takes ~10s on my machine.

# Heads up: ARCO-ERA5 has 262 surface + 11 atmospheric variables. The library
# pushes column projection down to Zarr, so SELECT only fetches what you ask
# for — but `SELECT * FROM era5.surface` would try to pull every variable
# across the year (terabytes from GCS). 
#  ---> Always SELECT specific…
