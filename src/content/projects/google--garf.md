---
repo: "google/garf"
name: "garf"
description: "Call APIs with SQL"
readmeQualityOk: true
url: "https://github.com/google/garf"
homepage: "https://google.github.io/garf/"
language: "Python"
languages: ["Python"]
languagePcts: [96]
stars: 28
forks: 13
openIssues: 7
closedIssues: 27
watchers: 1
contributors: 9
recentReleases: 0
createdAt: "2024-11-08T13:28:56Z"
lastCommitAt: "2026-09-16T08:47:52Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 94
undervaluedScore: 66
maintainers: ["AndreyMarkinPPC", "Vasist10"]
openGraphImageUrl: "https://opengraph.githubassets.com/e71189f758ff0b72407581c6ebef5362b31829f150f53b4ca4915c7ceef599f4/google/garf"
---

# garf - Python library for interacting with reporting APIs

`garf` is a Python library for building various connectors to reporting API that provides
users with a SQL-like interface to specify what needs to be extracted from the API.

Write a query and  `garf` will do the rest- build the correct request to an API, parse response
and writes it virtually anywhere.

## Key features

* Rich [SQL-like syntax](https://google.github.io/garf/usage/queries/) to interact with reporting APIs.
* Built-in support for [writing data](https://google.github.io/garf/usage/writers/) into various local / remote storage.
* Built-in support for post-processing saved data in [BigQuery](https://google.github.io/garf/usage/bq-executor/) & [SQL](https://google.github.io/garf/usage/sql-executor/) databases.
* Easily [extendable](https://google.github.io/garf/development/overview/) to support various APIs.
* Available as library, CLI, FastAPI endpoint.

## Supported APIs

* [YouTube Data API](https://google.github.io/garf/fetchers/youtube-data-api/)
* [YouTube Reporting API](https://google.github.io/garf/fetchers/youtube-reporting-api/)
* [Google…
