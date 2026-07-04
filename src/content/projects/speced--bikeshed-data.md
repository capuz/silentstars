---
repo: "speced/bikeshed-data"
name: "bikeshed-data"
description: "Bikeshed datafiles and scripts to update them."
readmeQualityOk: true
url: "https://github.com/speced/bikeshed-data"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 9
forks: 6
openIssues: 0
closedIssues: 9
watchers: 1
contributors: 5
recentReleases: 0
createdAt: "2017-08-24T21:26:04Z"
lastCommitAt: "2026-07-04T22:20:18Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero", "fork_magnet"]
healthScore: 100
undervaluedScore: 83
maintainers: []
openGraphImageUrl: "https://opengraph.githubassets.com/2959ff60c64f072f8b7e42c462fad286b8fe8ec4f58d7f4b99ad484b6426f1a0/speced/bikeshed-data"
---

# bikeshed-data

The [Bikeshed](https://github.com/tabatkins/bikeshed) document processor
relies on information from several external services
for several of its features —
autolinking, bibliographies, etc.

This project fetches all the information Bikeshed needs
and digests it directly into the format Bikeshed wants to work with,
so that Bikeshed's update process can run as quickly and smoothly as possible,
while also limiting the stress on the databases that source the data.

You probably don't want to file a bug on this project;
most likely, you want to file it on [Bikeshed](https://github.com/tabatkins/bikeshed/issues/).
However, if this project stops updating for some reason
(it typically recieves a new commit at least twice an hour),
feel free to file an issue,
as the updater process may have fallen over
and be in need of manual restarting.

## My Spec Is Missing From Bikeshed?

Bikeshed draws most of its data from [Browser Specs](https://github.com/w3c/browser-specs),
which should capture all the specs (W3C and otherwise)
that are relevant for web browsers.
If your spec isn't on [the list](https://github.com/speced/bikeshed-data/blob/main/data/specs.json) but you think it…
