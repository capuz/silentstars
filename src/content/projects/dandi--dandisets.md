---
repo: "dandi/dandisets"
name: "dandisets"
description: "1232 Dandisets (1.2 PB of the archive's 3.0 PB; 3 mirrors outdated, 1.7 PB behind: 001412, 000571, ...).  DataLad super-dataset of all Dandisets from https://github.com/dandisets"
readmeQualityOk: true
url: "https://github.com/dandi/dandisets"
language: "Python"
languages: ["Python", "Shell"]
languagePcts: [74, 26]
topics: ["datalad", "data", "git-annex"]
stars: 15
forks: 2
openIssues: 16
closedIssues: 184
watchers: 3
contributors: 13
recentReleases: 0
createdAt: "2019-08-16T20:30:44Z"
lastCommitAt: "2026-11-14T10:48:52Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 98
undervaluedScore: 66
maintainers: []
openGraphImageUrl: "https://opengraph.githubassets.com/413f87ceea606e10d8b0b56fd8b6734ab5eb1262252832aa669e6cbb263cdb2b/dandi/dandisets"
---

This repository is a [Datalad](https://www.datalad.org) super-dataset
containing Datalad datasets mirroring each of the Dandisets on
<https://dandiarchive.org>.  The mirrors are updated by a cronjob on an hourly
basis.

The repository and all of the Dandisets within can be cloned by running:

    datalad install -r https://github.com/dandi/dandisets

See <https://handbook.datalad.org> and <https://docs.dandiarchive.org>
for more information.
