---
repo: "open4good/open4goods"
name: "open4goods"
description: "The open4goods project"
readmeQualityOk: true
url: "https://github.com/open4good/open4goods"
language: "Java"
languages: ["Java"]
languagePcts: [48]
stars: 31
forks: 15
openIssues: 160
closedIssues: 131
watchers: 1
contributors: 15
recentReleases: 0
createdAt: "2021-11-25T16:56:35Z"
lastCommitAt: "2026-10-03T22:04:47Z"
lastReleaseAt: "2024-11-14T09:53:59Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "hidden_gem"]
healthScore: 89
undervaluedScore: 58
maintainers: ["GoulvenF", "Paperclip-Paperclip"]
openGraphImageUrl: "https://opengraph.githubassets.com/52bbdaa3e8ee47ea18dfefa52b8d72b839f3b6778573c802ab92e38b71dec77b/open4good/open4goods"
---

# The project

An open source online comparator that operates ecological scoring, following a common good mindset.

- provide products datasets in [open data](https://www.data.gouv.fr/fr/datasets/base-de-codes-barres-noms-et-categories-produits/)
- This project is for now deployed on the frenchy [nudger.fr](https://nudger.fr)

Technical metrics and maven site is deployed on Github Pages:

- [https://open4good.github.io/open4goods/](https://open4good.github.io/open4goods/)

Open4goods (o4g) is an open-source and open-data product aggregator, search engine and comparator. More over, it is a stack aiming at handling large product datasets identified by GTIN's. It is build upon Maven, Java, SpringBoot, Elasticsearch, Redis, and some other cool libraries. It is mainly designed to :

- **ingest product based data** from merchant CSV feeds and URL-oriented review/enrichment sources.

- **aggregate data fragments into well structured product data**. The [api](https://github.com/open4good/open4goods/blob/HEAD/api/) module orchestrates this through the `AggregationFacadeService`, handling scoring, attribute merging, conflict detection and NLP processing.

- **Serve data to the Nuxt&nbsp;3…
