---
repo: "dandi/dandisets"
name: "dandisets"
description: "1225 Dandisets (1.2 PB of the archive's 2.9 PB; 3 mirrors outdated, 1.6 PB behind: 001412, 000571, ...).  DataLad super-dataset of all Dandisets from https://github.com/dandisets"
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
lastCommitAt: "2026-11-09T04:34:02Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 98
undervaluedScore: 66
maintainers: []
openGraphImageUrl: "https://opengraph.githubassets.com/67e2da7bcb2d3e7916ecc8b5aeaf99a0e0ae97aa241a11d7a5277233f2ab7c21/dandi/dandisets"
---

This repository is a [Datalad](https://www.datalad.org) super-dataset
containing Datalad datasets mirroring each of the Dandisets on
<https://dandiarchive.org>.  The mirrors are updated by a cronjob on an hourly
basis.

The repository and all of the Dandisets within can be cloned by running:

    datalad install -r https://github.com/dandi/dandisets

See <https://handbook.datalad.org> and <https://docs.dandiarchive.org>
for more information.
