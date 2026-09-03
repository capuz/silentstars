---
repo: "speced/bikeshed-data"
name: "bikeshed-data"
description: "Bikeshed datafiles and scripts to update them."
readmeQualityOk: true
url: "https://github.com/speced/bikeshed-data"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 10
forks: 6
openIssues: 0
closedIssues: 9
watchers: 1
contributors: 5
recentReleases: 0
createdAt: "2017-08-24T21:26:04Z"
lastCommitAt: "2026-09-03T06:32:04Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero", "fork_magnet"]
healthScore: 100
undervaluedScore: 81
maintainers: ["tabatkins"]
openGraphImageUrl: "https://opengraph.githubassets.com/c8f426201e4986de98b7af74b94823cd28adbf5c3b5ad0be319af4e345f1d5a7/speced/bikeshed-data"
postedAt: "2026-08-18T04:13:16.671Z"
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
