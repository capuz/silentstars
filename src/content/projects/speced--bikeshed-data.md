---
repo: "speced/bikeshed-data"
name: "bikeshed-data"
description: "Bikeshed datafiles and scripts to update them."
readmeQualityOk: true
url: "https://github.com/speced/bikeshed-data"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 11
forks: 7
openIssues: 0
closedIssues: 9
watchers: 1
contributors: 6
recentReleases: 0
createdAt: "2017-08-24T21:26:04Z"
lastCommitAt: "2026-11-09T11:26:45Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero", "fork_magnet"]
healthScore: 95
undervaluedScore: 80
maintainers: ["tabatkins", "dvk2mvtjmw-code"]
openGraphImageUrl: "https://opengraph.githubassets.com/e5abadeb23e5705ace6711f6670f590f00bb2d7304d2e8c8a33ecb68796b3729/speced/bikeshed-data"
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
(it typically receives a new commit at least twice an hour),
feel free to file an issue,
as the updater process may have fallen over
and be in need of manual restarting.

## My Spec Is Missing From Bikeshed?

Bikeshed draws most of its data from [Browser Specs](https://github.com/w3c/browser-specs),
which should capture all the specs (W3C and otherwise)
that are relevant for web browsers.
If your spec isn't on [the list](https://github.com/speced/bikeshed-data/blob/main/data/specs.json) but you think it…
