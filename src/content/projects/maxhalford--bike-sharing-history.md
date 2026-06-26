---
repo: "MaxHalford/bike-sharing-history"
name: "bike-sharing-history"
description: "🚲 Git scraping for bike sharing APIs"
url: "https://github.com/MaxHalford/bike-sharing-history"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["bike-sharing", "git-scraping"]
stars: 35
forks: 4
openIssues: 1
closedIssues: 2
watchers: 2
contributors: 2
recentReleases: 0
createdAt: "2023-07-02T08:04:51Z"
lastCommitAt: "2026-06-26T23:41:24Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 93
undervaluedScore: 54
maintainers: ["MaxHalford"]
openGraphImageUrl: "https://opengraph.githubassets.com/e471aaeace39763dc2313c0ab2e1a3888945db3bbfa31186f4b6327aac448e4a/MaxHalford/bike-sharing-history"
---

# bike-sharing-history

***📝 [See blog post](https://maxhalford.github.io/blog/bike-sharing-forecasting-training-set/)***

This repo tracks the status of bike stations from various bike-sharing providers. The data is fetched every 15 minutes. The results are stored and versioned as [GeoJSON](https://www.wikiwand.com/en/GeoJSON) files. This is done using the [git scraping](https://simonwillison.net/2020/Oct/9/git-scraping/) technique.

The weather forecast for the next 24 hours is also collected every 15 minutes, for each city.

Everyone is welcome to add new cities. You simply have to contribute the necessary details to [`scripts/systems.py`](scripts/systems.py), and then send out a pull request.

## Live data

| # | Country | City | Provider | Stations | Weather |
|---|---------|------|----------|----------|---------|
| 001 | 🇦🇪 | Dubai | Careem BIKE | [`dubai/careem-bike.geojson`](data/stations/dubai/careem-bike.geojson) | [`dubai.json`](data/weather/dubai.json) |
| 002 | 🇦🇷 | Buenos Aires | Ecobici | [`buenos-aires/ecobici.geojson`](data/stations/buenos-aires/ecobici.geojson) | [`buenos-aires.json`](data/weather/buenos-aires.json) |
| 003 | 🇦🇹 | Vienna | Nextbike |…
