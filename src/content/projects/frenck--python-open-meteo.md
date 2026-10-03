---
repo: "frenck/python-open-meteo"
name: "python-open-meteo"
description: "Asynchronous client for the Open-Meteo API."
readmeQualityOk: true
url: "https://github.com/frenck/python-open-meteo"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 29
forks: 10
openIssues: 1
closedIssues: 6
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2021-11-17T12:56:42Z"
lastCommitAt: "2026-10-03T09:23:16Z"
lastReleaseAt: "2025-09-17T08:15:02Z"
status: "thriving"
tags: ["solo_builder", "funded"]
healthScore: 72
undervaluedScore: 34
maintainers: ["renovate[bot]", "frenck"]
openGraphImageUrl: "https://opengraph.githubassets.com/2b32a36b0536039565ab38f63cf7b60cacc7ddcf8a4388d0f0b1df58c1eaa31b/frenck/python-open-meteo"
fundingLinks: ["GITHUB:https://github.com/frenck", "PATREON:https://patreon.com/frenck", "CUSTOM:https://frenck.dev/donate/"]
---

# Python: Asynchronous client for the Open-Meteo API.

Asynchronous client for the Open-Meteo API.

## About

Open-Meteo offers free weather forecast APIs for open-source developers and
non-commercial use. No API key is required. You can start using it immediately!

## Installation

```bash
pip install open-meteo
```

## Usage

```python
import asyncio

from open_meteo import OpenMeteo
from open_meteo.models import DailyParameters, HourlyParameters

async def main():
    """Show example on using the Open-Meteo API client."""
    async with OpenMeteo() as open_meteo:
        forecast = await open_meteo.forecast(
            latitude=52.27,
            longitude=6.87417,
            current_weather=True,
            daily=[
                DailyParameters.SUNRISE,
                DailyParameters.SUNSET,
            ],
            hourly=[
                HourlyParameters.TEMPERATURE_2M,
                HourlyParameters.RELATIVE_HUMIDITY_2M,
            ],
        )
        print(forecast)

if __name__ == "__main__":
    asyncio.run(main())
```

## Changelog & Releases

This repository keeps a change log using [GitHub's releases][releases]
functionality. The format of the log is…
