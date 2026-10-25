---
repo: "robin994/NeoVitaDB-Catalog-Test"
name: "NeoVitaDB-Catalog-Test"
description: "Staging catalog for NeoVitaDB Downloader - community PRs land here first, vetted entries get promoted to NeoVitaDB-Catalog"
readmeQualityOk: true
url: "https://github.com/robin994/NeoVitaDB-Catalog-Test"
language: "JavaScript"
languages: ["JavaScript", "Python", "CSS"]
languagePcts: [33, 29, 24]
stars: 5
forks: 16
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 18
recentReleases: 0
createdAt: "2026-08-04T23:33:13Z"
lastCommitAt: "2026-10-25T09:01:29Z"
status: "thriving"
tags: ["fork_magnet"]
healthScore: 88
undervaluedScore: 62
maintainers: ["robin994", "github-actions[bot]", "git-effl"]
openGraphImageUrl: "https://opengraph.githubassets.com/69d7964318ece1f800de35793108bb50a64d23adfb96ef435e192b9fe5ca23df/robin994/NeoVitaDB-Catalog-Test"
---

# NeoVitaDB Catalog — Test

This is the **staging catalog** for [NeoVitaDB Downloader](https://github.com/robin994/NeoVitaDB-Downloader),
a copy of [NeoVitaDB-Catalog](https://github.com/robin994/NeoVitaDB-Catalog) (the
official, default catalog) that exists to take pull requests with a lower bar
than the official one. It is **not** the catalog NeoVitaDB Downloader uses by
default — nobody is exposed to an entry here just because it got merged.

Entries land here first. Once one has been used for a while without any report
of trouble, it gets promoted with a PR copying its `apps/<platform>/*.json`
file (and icon) over to the official catalog, where it then reaches every
user. Promotion is manual and at the official catalog's maintainer's
discretion — merged here is not the same as trusted there.

For the maintainer, `tools/promote.py` automates that copy: it finds every
entry that exists here but not yet in a sibling checkout of the official
catalog, copies each one's JSON and icon over, validates the result against
the official catalog's own schema (rolling back if that fails), and creates
one commit listing every promoted entry by name. It never touches an entry
that already…
