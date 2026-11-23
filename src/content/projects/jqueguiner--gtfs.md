---
repo: "jqueguiner/gtfs"
name: "gtfs"
description: "Open public-transport catalog — every operator's GTFS, organised country/city/operator. 2879 feeds, 75 countries. Priority FR+US."
readmeQualityOk: true
url: "https://github.com/jqueguiner/gtfs"
language: "Shell"
languages: ["Shell"]
languagePcts: [97]
topics: ["gtfs", "mobility", "open-data", "public-transport", "transit"]
stars: 5
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-08-22T16:14:32Z"
lastCommitAt: "2026-11-23T10:25:37Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 80
undervaluedScore: 50
maintainers: []
openGraphImageUrl: "https://opengraph.githubassets.com/57cb15a59b1e7828c8b565d9f1c706e9f5cc0bd5f0960d02dfedb0c475734058/jqueguiner/gtfs"
---

# gtfs — open public-transport catalog

Every public-transport operator we can find, organised **country → city → operator**, each with a `feed.json` (GTFS URL + license + bbox). Scraped from open catalogs + agency/gov sites, LLM-normalized when the source isn't already GTFS. Priority: 🇫🇷 France, 🇺🇸 USA.

**30715 feeds · 20255 cities · 117 countries** · updated automatically.

## Layout
```
<COUNTRY>/<city>/<operator>/feed.json
```

`feed.json` = agency + GTFS url + license + bbox (the exchange format). Each operator folder also ships a `fetch.sh` that downloads *that* operator's GTFS to `gtfs.zip` (validates `stops.txt`). `./fetch_all.sh [COUNTRY]` runs them all. Flat index: `catalog.csv`.
