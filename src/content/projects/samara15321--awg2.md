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
languagePcts: [70, 24]
stars: 8
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2025-09-21T20:03:23Z"
lastCommitAt: "2026-10-19T09:13:59Z"
lastReleaseAt: "2026-05-26T08:15:39Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 75
undervaluedScore: 67
maintainers: ["samara1531", "samara15321", "actions-user"]
openGraphImageUrl: "https://opengraph.githubassets.com/8abe22cc6aa88fabf8b77934e44fe650181fbb0c019952a6645fd98dd9ccd707/samara15321/awg2"
---

# AmneziaWG 2.0-3.0 [ImmortalWRT](https://downloads.immortalwrt.org/)
-  **awg 3.1 from wrt 25.12.1 and above** 
-  Also in the 24.10.6_**v3.0** release, but **without the Go module**

+ awg-go does not build on unsupported architectures (archives are smaller than 1 MB).

+ Two installation/operation options, via kmod-amneziawg and amneziawg-go
  - if kmod-amneziawg is installed, it takes priority and runs through it, even when awg-go is present. (this is specified in amneziawg-tools)
+ 
+ Through amneziawg-go, it consumes much more RAM and requires a fast CPU for good network speed.
  - on a standard router it shows not high speed parameters.
  - (RAM consumption 30-60 MB per running interface. the better the CPU, the more)
+
+ **kmod-amneziawg will not install on "custom" firmware. only on official iwrt**
  - the other ipk packages are tied only to the CPU architecture.
  - if used through awg-go, it can **in theory** be installed on any build.
  - it is of course desirable that the wrt kernel build be roughly similar, to avoid core incompatibility.
+
+ You need to remove old Amnezia packages before installing the new ones.
+
+ for official…
