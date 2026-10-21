---
repo: "danp/nspoweroutages"
name: "nspoweroutages"
description: "Git scraping of the Nova Scotia Power Outage Map"
readmeQualityOk: true
url: "https://github.com/danp/nspoweroutages"
language: "Go"
languages: ["Go"]
languagePcts: [95]
topics: ["git-scraping"]
stars: 12
forks: 1
openIssues: 0
closedIssues: 0
watchers: 3
contributors: 1
recentReleases: 0
createdAt: "2020-12-26T23:09:45Z"
lastCommitAt: "2026-10-21T21:14:45Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 80
undervaluedScore: 62
maintainers: []
openGraphImageUrl: "https://opengraph.githubassets.com/b6871d25ac501ff1badd261c93d452c2753b75e8b6366c7525a5abe74fe5979e/danp/nspoweroutages"
---

# nspoweroutages

[Git scraping](https://simonwillison.net/2020/Oct/9/git-scraping/) of the data behind the [Nova Scotia Power Outage Map](http://outagemap.nspower.ca/).

Mainly viewable at https://nsp.datasette.danp.net/ by way of https://github.com/danp/outages-to-sqlite.

## Why?

The outage map shows what's happening _right now_ but gives no way to see information about past outages, what has changed, etc. Regularly fetching the data that powers it and saving it in this way will let us see changes over time. That could let us answer questions like:

* What are the most commonly labeled causes of outages?
* What areas have frequent outages?
* How long do outages typically last?

And more!

## How it works

Every 10 minutes, a system of mine runs [bin/scrape.sh](https://github.com/danp/nspoweroutages/blob/HEAD/bin/scrape.sh).

bin/scrape.sh:

1. fetches and combines outage data using [cmd/scrape-outages](https://github.com/danp/nspoweroutages/blob/HEAD/cmd/scrape-outages), saving it to [data/outages.json](https://github.com/danp/nspoweroutages/blob/HEAD/data/outages.json)
2. fetches the service area summary data, saving it to…
