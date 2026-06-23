---
repo: "kayhendriksen/foehn"
name: "foehn"
description: "Download MeteoSwiss Open Government Data — weather stations, radar, hail, forecasts and climate series — via Python API, CLI, or MCP server, as DataFrames, Parquet, xarray Datasets or Zarr stores"
url: "https://github.com/kayhendriksen/foehn"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["climate", "databricks", "meteoswiss", "open-data", "polars", "python", "weather", "parquet", "xarray", "zarr"]
stars: 41
forks: 1
openIssues: 0
closedIssues: 2
watchers: 0
contributors: 1
recentReleases: 2
createdAt: "2026-03-18T21:37:28Z"
lastCommitAt: "2026-06-23T06:41:54Z"
lastReleaseAt: "2026-03-28T13:32:50Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 98
undervaluedScore: 42
maintainers: ["kayhendriksen", "dependabot[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1185707786/cb3a7c17-5e01-4aa3-b977-9477d8541b9a"
---

<h1 align="center">
</h1>

  <strong>MeteoSwiss Open Data — Python API, CLI & MCP server · tabular as DataFrames/Parquet, gridded as xarray/Zarr</strong>
</p>

  </a>
  </a>
  </a>
  </a>
  </a>
</p>

---

foehn downloads every [MeteoSwiss OGD](https://github.com/MeteoSwiss/opendata) collection via the STAC API, converts CSV/TXT station data to Parquet with [Polars](https://pola.rs), and opens gridded collections — NetCDF climate grids, GRIB2 forecasts, and ODIM radar composites — as [xarray](https://xarray.dev) Datasets or [Zarr](https://zarr.dev) stores. It can optionally ingest everything into [Databricks](https://www.databricks.com) Unity Catalog Delta tables on a daily schedule, and ships an [MCP server](https://modelcontextprotocol.io) so LLMs can query Swiss weather data directly.

</p>
  <em>Daily weather in Bern, powered by foehn's MCP server and MeteoSwiss open data.</em>
</p>

## Why foehn?

- **20+ collections in one command** — weather stations, radar, hail maps, forecasts, climate scenarios, and more
- **Tabular and gridded** — CSV station data as Polars DataFrames or Parquet; NetCDF, GRIB2 and ODIM radar grids as xarray Datasets or Zarr stores
- **MCP server for…
