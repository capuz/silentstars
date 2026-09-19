---
repo: "michaeldavie/env_canada"
name: "env_canada"
description: "Environment Canada Weather Data"
readmeQualityOk: true
url: "https://github.com/michaeldavie/env_canada"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 113
forks: 29
openIssues: 0
closedIssues: 72
watchers: 10
contributors: 20
recentReleases: 0
createdAt: "2018-07-30T03:14:30Z"
lastCommitAt: "2026-09-19T01:36:21Z"
lastReleaseAt: "2020-11-14T23:04:36Z"
status: "thriving"
tags: ["legacy_hero"]
healthScore: 95
undervaluedScore: 47
maintainers: ["michaeldavie", "dependabot[bot]", "fitzb"]
openGraphImageUrl: "https://opengraph.githubassets.com/e5f896c115e3d1ad7a402263902259beb6662513a32ce569f29222a5fe5980e4/michaeldavie/env_canada"
---

# Environment Canada (env_canada)

This package provides access to various data sources published by [Environment and Climate Change Canada](https://www.canada.ca/en/environment-climate-change.html).

> [!IMPORTANT]
> If you're using the library in a Jupyter notebook, replace `asyncio.run(...)` with `await ...` in the examples below. For example:
>
> ```python
> asyncio.run(ec_en.update())
> ```
>
> becomes
>
> ```python
> await ec_en.update()
> ```

## Weather Observations and Forecasts

`ECWeather` provides current conditions and forecasts. It automatically determines which weather station to use based on latitude/longitude provided. It is also possible to specify a station code in multiple flexible formats:

- **Full format**: `"AB/s0000123"` (province code and full station ID)
- **Station ID only**: `"s0000123"` (station ID without province - province is resolved automatically)
- **Numeric only**: `"123"` (just the station number - province is resolved automatically)

Station codes are based on those listed in [this CSV file](https://dd.weather.gc.ca/today/citypage_weather/docs/site_list_towns_en.csv). For example:

```python
import asyncio

from env_canada import ECWeather

#…
