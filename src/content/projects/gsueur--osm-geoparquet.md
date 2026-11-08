---
repo: "gsueur/osm-geoparquet"
name: "osm-geoparquet"
description: "OSM → GeoParquet 2.0 pipeline: state-partitioned, theme-filtered extracts from Geofabrik PBFs."
readmeQualityOk: true
url: "https://github.com/gsueur/osm-geoparquet"
language: "Python"
languages: ["Python"]
languagePcts: [84]
stars: 12
forks: 1
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 2
recentReleases: 1
createdAt: "2026-04-19T15:43:40Z"
lastCommitAt: "2026-11-08T14:13:49Z"
lastReleaseAt: "2026-09-24T00:13:41Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 100
undervaluedScore: 55
maintainers: ["gsueur"]
openGraphImageUrl: "https://opengraph.githubassets.com/8336577f19ccfb70480f6123c2ecfa7083848a108ff2cc6bd8c7d28775510af5/gsueur/osm-geoparquet"
---

# OSM → GeoParquet

Pipeline that turns OpenStreetMap PBF extracts into cloud-native GeoParquet 2.0 files, partitioned by country, admin region (state / province), and theme.

Status: exploratory MVP.

## Query the hosted data

The data is published at `https://parquetry.geomermaids.com/osm/latest/country=<CC>/state=<ISO>/<theme>.parquet`. No download required — query straight from DuckDB:

```sql
INSTALL httpfs; LOAD httpfs;
INSTALL spatial; LOAD spatial;

SELECT building, COUNT(*)
FROM read_parquet('https://parquetry.geomermaids.com/osm/latest/country=US/state=US-RI/buildings.parquet')
GROUP BY 1 ORDER BY 2 DESC LIMIT 5;
```

Column projection, bbox filtering, and row-group pruning all work via HTTP range requests against Cloudflare's edge. See `https://parquetry.geomermaids.com/osm/snapshots.json` for what is available. `latest/` follows the nightly build, and the first build of each month is also kept for 12 months under `osm/<YYYY-MM-DD>/`, immutable.

Data © OpenStreetMap contributors, available under the [ODbL 1.0](https://opendatacommons.org/licenses/odbl/1-0/). See `https://parquetry.geomermaids.com/osm/ATTRIBUTION.txt` for redistribution terms.

The bucket holds several…
