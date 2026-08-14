---
repo: "ISDCF/registries"
name: "registries"
description: "Metadata registries of the ISDCF"
readmeQualityOk: true
url: "https://github.com/ISDCF/registries"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [100]
stars: 13
forks: 13
openIssues: 45
closedIssues: 157
watchers: 19
contributors: 8
recentReleases: 0
createdAt: "2020-06-10T16:59:13Z"
lastCommitAt: "2026-08-14T05:15:10Z"
status: "thriving"
tags: ["legacy_hero", "community_watch", "fork_magnet"]
healthScore: 88
undervaluedScore: 65
maintainers: ["SteveLLamb", "japierce1028", "palemieux"]
openGraphImageUrl: "https://opengraph.githubassets.com/8cf56ebc6a1d83ad61360f96fd99245ac36b9fa3826861b85e0fcef10776de82/ISDCF/registries"
---

# ISDCF Metadata Registries

## Overview

Metadata registries maintained by the InterSociety Digital Cinema Forum (ISDCF).

The registry data is:

* stored as JSON at [`src/main/data`](https://github.com/ISDCF/registries/blob/HEAD/src/main/data/)

* available through an API at https://registry.isdcf.com

* published as HTML at https://www.isdcf.com/

## Notes

The _ratings_ registry is generated from the information at <https://movielabs.com/md/ratings/>, which is maintained by [MovieLabs](https://movielabs.com/).

The environment variable `G_SAFE_BROWSING_API_KEY` must contain an Google API
Key with permissions to the Safe Browsing API, or the environment variable
`ISDCF_SKIP_URL_CHECK` must be set.
