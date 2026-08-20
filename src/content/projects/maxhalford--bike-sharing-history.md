---
repo: "MaxHalford/bike-sharing-history"
name: "bike-sharing-history"
description: "🚲 Git scraping for bike sharing APIs"
readmeQualityOk: true
url: "https://github.com/MaxHalford/bike-sharing-history"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["bike-sharing", "git-scraping"]
stars: 37
forks: 6
openIssues: 1
closedIssues: 2
watchers: 2
contributors: 2
recentReleases: 0
createdAt: "2023-07-02T08:04:51Z"
lastCommitAt: "2026-08-20T04:07:46Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 83
undervaluedScore: 54
maintainers: []
openGraphImageUrl: "https://opengraph.githubassets.com/01d5a0471093ef50a26f091d0c0d82dd5f0507d24ffe6327ef1df5dedc948c5c/MaxHalford/bike-sharing-history"
---

# bike-sharing-history

***📝 [See blog post](https://maxhalford.github.io/blog/bike-sharing-forecasting-training-set/)***

This repo tracks the status of bike stations from various bike-sharing providers. The data is fetched every 15 minutes. The results are stored and versioned as [GeoJSON](https://www.wikiwand.com/en/GeoJSON) files. This is done using the [git scraping](https://simonwillison.net/2020/Oct/9/git-scraping/) technique.

The weather forecast for the next 24 hours is also collected every 15 minutes, for each city.

Everyone is welcome to add new cities. You simply have to contribute the necessary details to [`scripts/systems.py`](https://github.com/MaxHalford/bike-sharing-history/blob/HEAD/scripts/systems.py), and then send out a pull request.

## Live data

| # | Country | City | Provider | Stations | Weather |
|---|---------|------|----------|----------|---------|
| 001 | 🇦🇪 | Dubai | Careem BIKE | [`dubai/careem-bike.geojson`](https://github.com/MaxHalford/bike-sharing-history/blob/HEAD/data/stations/dubai/careem-bike.geojson) | [`dubai.json`](https://github.com/MaxHalford/bike-sharing-history/blob/HEAD/data/weather/dubai.json) |
| 002 | 🇦🇷 | Buenos Aires |…
