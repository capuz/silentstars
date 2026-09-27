---
repo: "jcorporation/webradiodb"
name: "webradiodb"
description: "Webradio database for myMPD"
readmeQualityOk: true
url: "https://github.com/jcorporation/webradiodb"
homepage: "https://jcorporation.github.io/webradiodb/"
language: "Shell"
languages: ["Shell"]
languagePcts: [100]
topics: ["webradio", "mympd"]
stars: 42
forks: 6
openIssues: 0
closedIssues: 1448
watchers: 2
contributors: 2
recentReleases: 0
createdAt: "2021-12-30T22:42:51Z"
lastCommitAt: "2026-09-27T09:29:13Z"
lastReleaseAt: "2024-12-19T19:46:12Z"
status: "thriving"
tags: ["solo_builder", "funded"]
healthScore: 100
undervaluedScore: 59
maintainers: ["jcorporation", "JuergenMang"]
openGraphImageUrl: "https://opengraph.githubassets.com/553af74ddf5a56553b9ac0c21b4925a52169796fd88f81e69fa386783e1986fd/jcorporation/webradiodb"
fundingLinks: ["CUSTOM:https://juergenmang.de/donate"]
discussionCount: 9
---

# myMPD Webradio Database

This is my attempt to create a curated webradio database for [myMPD](https://github.com/jcorporation/myMPD).

- [Station search](https://jcorporation.github.io/webradiodb/)

Contributions to the webradio database are very welcome. It should be a community driven database. You must only open an issue to add or modify a webradio. Your proposal will be reviewed and then merged, therefore it could take some time before the webradio is added.

Please do not add geo-fenced streams.

## Add a new webradio

Open an [issue](https://github.com/jcorporation/webradiodb/issues/new?template=add-webradio.yml).

## Modify a webradio

[Search](https://jcorporation.github.io/webradiodb/) for the webradio and click on the modify link to open a prefilled GitHub issue.

## Usage

This project is designed as an easily integratable webradio database for music players. At the moment there is no api endpoint to query the database. An application should fetch the metadata json file and use it locally.

- [Apps](https://github.com/jcorporation/webradiodb/blob/HEAD/Apps.md)

## Some internals

At the moment there are two sources for webradio files:

- Webradios from moode audio…
