---
repo: "Cloudflare-Mining/Cloudflare-Datamining"
name: "Cloudflare-Datamining"
description: "Public datamining for all things Cloudflare"
readmeQualityOk: true
url: "https://github.com/Cloudflare-Mining/Cloudflare-Datamining"
homepage: "https://cfdata.lol"
language: "HTML"
languages: ["HTML"]
languagePcts: [99]
topics: ["cloudflare", "hacktoberfest"]
stars: 199
forks: 26
openIssues: 6
closedIssues: 10
watchers: 8
contributors: 21
recentReleases: 0
createdAt: "2022-06-18T22:21:02Z"
lastCommitAt: "2026-07-31T06:29:00Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 90
undervaluedScore: 41
maintainers: []
openGraphImageUrl: "https://opengraph.githubassets.com/00056c642c779026726da50824ee7c592982da5972499f92a9da212ce75114d7/Cloudflare-Mining/Cloudflare-Datamining"
---

# Cloudflare Datamining

## Intro

This repository mines a lot of publicly available data from [Cloudflare](https://www.cloudflare.com/), including their customer dashboard, NPM/GitHub repos, marketing site, and more. Automated commits will be made frequently and will show how the data changes over time.

Some of the data can be visualised on the [website](https://cfdata.lol).

You can join the [Discord](https://discord.gg/Z94Hn6qVDm) for notifications of changes.

## Structure
- Scripts are in `scripts`
- Data is in `data`

## Data

- `account`: Tracks a free account's entitlements and flags
- `api-schemas`: This extracts the API schemas from `api.cloudflare.com`, and tracks their changes over time.
- `blog`: This tracks blog post content over time.
- `cdn-cgi`: This tracks various changes to `cdn-cgi` endpoints on Cloudflare's CDN, as well as `request.cf` keys for any additions or changes. This also tracks component changes throughout Cloudflare's network and their different datacenters.
- `coveo`: This tracks updates to the Coveo Cloudflare indexes, which are used for searching the blog, learning center, etc.
- `dashboard-subroutes`: This extracts subroutes from the dashboard…
