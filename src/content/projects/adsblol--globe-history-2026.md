---
repo: "adsblol/globe_history_2026"
name: "globe_history_2026"
description: " ✈️🗄 2026 Historical data for all aircrafts traces known to adsb.lol. Openly licensed. "
readmeQualityOk: true
url: "https://github.com/adsblol/globe_history_2026"
homepage: "https://adsb.lol"
language: "Shell"
languages: ["Shell", "Python"]
languagePcts: [70, 30]
stars: 69
forks: 3
openIssues: 1
closedIssues: 6
watchers: 4
contributors: 2
recentReleases: 0
createdAt: "2026-01-02T15:45:57Z"
lastCommitAt: "2026-11-04T13:05:32Z"
lastReleaseAt: "2026-01-12T15:20:05Z"
status: "thriving"
tags: ["solo_builder", "funded"]
healthScore: 87
undervaluedScore: 44
maintainers: []
openGraphImageUrl: "https://opengraph.githubassets.com/70cdda77223a38d536e54055b9e0a0fce18c9bbca000a6afab6f7bb060eb218e/adsblol/globe_history_2026"
fundingLinks: ["GITHUB:https://github.com/iakat"]
---

# adsblol/globe_history_2026 (1990 GiB)

This database is made available under the Open Database License: http://opendatacommons.org/licenses/odbl/1.0/.

## What is it?

This database is a collection of all the data known to ADSB.lol, uploaded daily.

This includes data from ADSB.lol feeders [and friends](https://www.adsb.lol/docs/acknowledgements/partners/), [FlyItalyADSB](https://flyitalyadsb.com/) and [TheAirTraffic.com](https://theairtraffic.com)

## Releases

All files are downloadable from the [releases tab](https://github.com/adsblol/globe_history_2024/releases) of this repository.

See [RELEASES.md](https://github.com/adsblol/globe_history_2026/blob/HEAD/RELEASES.md) for a formatted list of links.

Each release is 1 day of flight data.
Download both files from the prod or staging release for a day you're interested in.
(if prod or staging for that day is significantly smaller, ignore it)

The data is added to a tar archive and then the file is split.
To extract the data, adapt the following commands for the files you downloaded:
```
mkdir 2025.05.18
cat v2025.05.18-planes-readsb-prod-0.tar.aa v2025.05.18-planes-readsb-prod-0.tar.ab | tar -xf - -C 2025.05.18
```

##…
