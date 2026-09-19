---
repo: "urnetwork/build"
name: "build"
description: "Reproducible builds"
readmeQualityOk: true
url: "https://github.com/urnetwork/build"
language: "Go"
languages: ["Go", "Shell"]
languagePcts: [43, 37]
stars: 49
forks: 6
openIssues: 2
closedIssues: 6
watchers: 1
contributors: 4
recentReleases: 0
createdAt: "2025-02-20T19:02:34Z"
lastCommitAt: "2026-09-19T01:35:42Z"
lastReleaseAt: "2025-03-31T23:42:55Z"
status: "thriving"
tags: []
healthScore: 95
undervaluedScore: 52
maintainers: ["bitprecipice"]
openGraphImageUrl: "https://opengraph.githubassets.com/b7d0759a9ca450c1042bc48cdea7a701cd7bdf214628dbbc177a77a843508db5/urnetwork/build"
---

# build

This repo contains the build code used for production releases. The goal is to publish reproducible builds so that anyone can build and verify the code in production.

The `main` branch of all repos is the latest production-ready code.

The project uses warp versions, `yyyy.mm.dd-version_code`, so that versions are tied to dates and not release schedules. The project does not plan to have specific release schedules in the near future, so that we can iterate more fluidly on major features. We will maintain backwards compatibility as much as possible. Anytime there is a breaking change we will document it in the corresponding repo.

`metadata/en-US/changelogs` will be populated for each version code that is published in a store.

## Changelogs

Changelogs are generated from the commits, not written by hand. `all/changelog.py`
reads the submodule pins of two releases -- a release tag in this repo pins every
submodule at an exact commit -- walks the commit range that fell between them in
each component, and renders two different artifacts, because there are two
audiences with very different limits:

- **the store note**, `metadata/en-US/changelogs/<version code>.txt`. Capped…
