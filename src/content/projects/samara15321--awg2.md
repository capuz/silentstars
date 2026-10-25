---
repo: "samara15321/awg2"
name: "awg2"
description: "AmneziaWG 2.0-3.0 ImmortalWRT"
originalDescription: "AmneziaWG 2.0-3.0 ImmortalWRT"
descriptionLang: "ru"
readmeQualityOk: true
url: "https://github.com/samara15321/awg2"
language: "JavaScript"
languages: ["JavaScript", "Shell"]
languagePcts: [71, 24]
stars: 8
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2025-09-21T20:03:23Z"
lastCommitAt: "2026-10-25T09:01:04Z"
lastReleaseAt: "2026-05-26T08:15:39Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 75
undervaluedScore: 68
maintainers: ["samara1531", "samara15321", "actions-user"]
openGraphImageUrl: "https://opengraph.githubassets.com/ba8698b9cd2bfc5e0a88ac2f5bc7d8df46001563f51e344db28acf550dcc9b8b/samara15321/awg2"
---

# AmneziaWG 2.0-3.0 [ImmortalWRT](https://downloads.immortalwrt.org/)
-  **awg 3.1 from wrt 25.12.1 and above** 
-  and also in the 24.10.6_**v3.0** release but **without the Go module**

+ awg-go does not build for unsupported architectures (archives are smaller than 1 MB).

+ Two installation/operation options, via kmod-amneziawg and amneziawg-go
  - if kmod-amneziawg is installed, it takes priority and launches through it, even when awg-go is present. (this is specified in amneziawg-tools)
+ 
+ Via amneziawg-go, it consumes much more RAM and requires a fast CPU for good network speed.
  - on a standard router it shows low speed figures.
  - (RAM consumption 30-60 MB per running interface; the better the CPU, the more)
+
+ **kmod-amneziawg will not install on "custom" firmware, only on official iwrt**
  - the other ipk packages are tied only to the processor architecture.
  - if used via awg-go, it can **in theory** be installed on any build.
  - it is preferable that the wrt kernel build be roughly similar, to avoid fundamental incompatibility.
+
+ Old amnezia packages must be removed before installing the new ones.
+
+ for official…
