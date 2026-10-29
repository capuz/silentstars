---
repo: "notnews/top_news"
name: "top_news"
description: "Collecting news URLs hourly from major national news sites since 2022"
readmeQualityOk: true
url: "https://github.com/notnews/top_news"
language: "Python"
languages: ["Python"]
languagePcts: [96]
topics: ["news", "computational-journalism", "news-aggregation", "news-corpus", "rss", "web-scraping"]
stars: 19
forks: 4
openIssues: 0
closedIssues: 2
watchers: 2
contributors: 9
recentReleases: 0
createdAt: "2022-05-28T19:19:05Z"
lastCommitAt: "2026-10-29T10:36:11Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 100
undervaluedScore: 67
maintainers: ["github-actions[bot]", "dependabot[bot]", "soodoku"]
openGraphImageUrl: "https://opengraph.githubassets.com/8651ce6ce2cabdfa2ffcb154ed981406d33f3eff0ed5218481f97c856bc6d2a1/notnews/top_news"
---

# Top News URLs

An hourly collector of news URLs from fifteen sources. URL arrays stay in Git, with one URL per line so later collection diffs show additions. Full-text Dataverse releases are historical artifacts.

## Data

| File | URLs on 2026-09-10 |
|---|---:|
| `aljazeera_urls.json` | 25 |
| `abc_urls.json` | 239,290 |
| `bbc_urls.json` | 22 |
| `cbs_urls.json` | 158,285 |
| `cnn_urls.json` | 39,185 |
| `dw_urls.json` | 137 |
| `guardian_urls.json` | 132 |
| `lat_urls.json` | 75,121 |
| `nbc_urls.json` | 98,135 |
| `npr_urls.json` | 67,363 |
| `nyt_urls.json` | 130,507 |
| `politico_urls.json` | 13,544 |
| `propub_urls.json` | 2,342 |
| `usat_urls.json` | 51,239 |
| `wapo_urls.json` | 93,794 |

Historical June 2023 and March 2025 full-text database releases: [doi:10.7910/DVN/ZNAKK6](https://doi.org/10.7910/DVN/ZNAKK6). These have different coverage from the current URL arrays.

Counts describe the releases or local files identified above. Dataverse metadata requests returned HTTP 403 on 2026-09-10, so historical release counts could not all be reverified.

## Column dictionary

| Format | Columns | Meaning |
|---|---|---|
| JSON arrays | One string per element | Original…
