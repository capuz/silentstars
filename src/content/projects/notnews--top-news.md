---
repo: "notnews/top_news"
name: "top_news"
description: "Collecting URLs Daily From News Feeds of Major National News Sites Since 2022"
readmeQualityOk: true
url: "https://github.com/notnews/top_news"
language: "Jupyter Notebook"
languages: ["Jupyter Notebook"]
languagePcts: [88]
topics: ["news", "abc", "cbs", "newspaper3k", "rss-feed", "la-times", "nbc", "nyt", "usa-today", "propublica"]
stars: 18
forks: 4
openIssues: 0
closedIssues: 2
watchers: 2
contributors: 7
recentReleases: 0
createdAt: "2022-05-28T19:19:05Z"
lastCommitAt: "2026-07-04T23:15:50Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 100
undervaluedScore: 67
maintainers: []
openGraphImageUrl: "https://opengraph.githubassets.com/359aec113732f50a5c7f331adc678ad0f4e96a401064ec6bef3800168442cac2/notnews/top_news"
---

## Top News! URLs from News Feeds of Major National News Sites (2022-)

We automatically pull daily news data from major national news sites: ABC,  CBS, CNN, LA Times, NBC, NPR, NYT, Politico, ProPublica, USA Today, and WaPo using [Github Workflows](https://github.com/notnews/top_news/tree/main/.github/workflows). For the latest version, please take a look at the respective JSON files.

As of March 2025, we have about 700k unique URLs.

### Other Scripts + Data

1. The script for [aggregating the URLs](https://github.com/notnews/top_news/blob/main/agg/concat_json.py) and [March-2025 dump of URLs (.zip)](https://github.com/notnews/top_news/blob/main/agg/agg_urls.json.zip)
   
2. The script for downloading the article text and parsing some features using [newspaper3k](https://newspaper.readthedocs.io/en/latest/), e.g., publication date, authors, etc. and putting it in a DB is [here](https://github.com/notnews/top_news/blob/main/agg/create_db.py). The script checks the local DB before incrementally processing new data.
  * The June 2023 full-text dump is here: https://dataverse.harvard.edu/dataset.xhtml?persistentId=doi:10.7910/DVN/ZNAKK6
  * The March 2025 dump (minus the exceptions…
