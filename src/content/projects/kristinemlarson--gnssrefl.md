---
repo: "kristinemlarson/gnssrefl"
name: "gnssrefl"
description: "GNSS Interferometric Reflectometry Software (GNSS-IR) in python"
readmeQualityOk: true
url: "https://github.com/kristinemlarson/gnssrefl"
language: "Python"
languages: ["Python", "Jupyter Notebook"]
languagePcts: [51, 48]
topics: ["gps", "gnssir", "gnss-ir", "tides", "snow", "soilmoisture", "water-levels"]
stars: 227
forks: 94
openIssues: 4
closedIssues: 240
watchers: 25
contributors: 18
recentReleases: 0
createdAt: "2020-08-27T00:02:00Z"
lastCommitAt: "2026-11-14T19:50:19Z"
lastReleaseAt: "2026-04-19T22:34:57Z"
status: "thriving"
tags: ["needs_contributors", "legacy_hero"]
healthScore: 94
undervaluedScore: 43
maintainers: ["kristinemlarson", "GeorgeTownsendd", "dnowacki-usgs"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/290630876/28a818be-b278-4d77-a850-dc17c3617224"
discussionCount: 3
---

# gnssrefl v4.3.0

gnssrefl is an open source software package for GNSS Interferometric Reflectometry (GNSS-IR). 

**News**

* fixed bugs in download_tides

* added threedays option to invsnr and invsnr_merge to help people automate usage of invsnr.

* added new orbit source (repro3, which is multi-GNSS GFZ, useful for older data?)

* improved behavior on the new python reader with illegally formatted Rinex 2.11 files

* Our sister [web app for reflection zones](https://gnss-reflections.org/rzones) now uses 
open mapping sources. Google maps have been removed.

**Older News**

* fixed a bug while using Wuhan ultra rapid orbits. Please update your code or you will 
only get solutions once a week.

* rinex3_snr is no longer supported. George Townsend added this capability to rinex2snr.

* fixed a bug in the docker release.

gnssrefl releases from v4.0.0+ are focused on modernizing the package code to improve maintainability, 
consistency, and performance (up to 5x faster).  Specifically, changes since v3.19.2 (17th Feb 2026) 

* The default Lomb-Scargle Periodogram backend has changed from SciPy to AstroPy, which is more efficient 
but introduces absolute difference in RH on the…
