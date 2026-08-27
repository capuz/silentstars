---
repo: "portolan-sdi/portolan-spec"
name: "portolan-spec"
description: "Spec and best practices for Portolan SDI"
readmeQualityOk: true
url: "https://github.com/portolan-sdi/portolan-spec"
language: "Python"
languages: ["Python"]
languagePcts: [82]
stars: 6
forks: 6
openIssues: 26
closedIssues: 62
watchers: 2
contributors: 5
recentReleases: 3
createdAt: "2026-01-26T08:45:07Z"
lastCommitAt: "2026-08-27T14:25:14Z"
lastReleaseAt: "2026-08-20T08:55:16Z"
status: "thriving"
tags: ["hidden_gem", "fork_magnet"]
healthScore: 93
undervaluedScore: 75
maintainers: ["nlebovits", "cholmes", "yharby"]
openGraphImageUrl: "https://opengraph.githubassets.com/9c63371a062f6a2dd1d971e82d5cdf5076edf1800b219d87e755ab1fedcfd4c7/portolan-sdi/portolan-spec"
---

# Portolan

Portolan makes geospatial data easy to publish and easy to use. A catalog is
plain files in your own storage, described so that a person or an agent can
understand the data and query it directly. Publishing works the same way whether
you are a satellite company releasing a planetary archive or a city publishing
local cadastral data. There are no servers, no databases, and no accounts.

Under the hood, Portolan is an opinionated standard for cloud-native geospatial
catalogs, plus the tooling around it. A catalog is a directory of open-format
data on any S3-compatible bucket, described by structured
[STAC](https://stacspec.org/) metadata and built on
[COG](https://cogeo.org/), [GeoParquet](https://geoparquet.org/),
[PMTiles](https://github.com/protomaps/pmtiles), [COPC](https://copc.io/), and
[GeoZarr](https://geozarr.org/). Each part of the tooling raises the value of the
others:

- **The standard** defines what a great catalog looks like. It lives here.
- **[rashid](https://github.com/portolan-sdi/rashid)**, the validator, proves a
  catalog meets the standard.
- **[portolan-cli](https://github.com/portolan-sdi/portolan-cli)** makes catalogs
  easy to build.
- **[The…
