---
repo: "samara1531/awg2"
name: "awg2"
description: "AmneziaWG 2.0-3.1  OpenWRT"
originalDescription: "AmneziaWG 2.0-3.1  OpenWRT"
descriptionLang: "ru"
readmeQualityOk: true
url: "https://github.com/samara1531/awg2"
language: "JavaScript"
languages: ["JavaScript", "Shell"]
languagePcts: [67, 28]
stars: 33
forks: 8
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 4
recentReleases: 0
createdAt: "2025-09-23T11:07:19Z"
lastCommitAt: "2026-10-28T09:59:03Z"
lastReleaseAt: "2026-01-22T04:27:07Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 77
undervaluedScore: 55
maintainers: ["samara1531", "actions-user"]
openGraphImageUrl: "https://opengraph.githubassets.com/45f8cdec319ca250583395e6c3db94eca7f8c1d01b4b5c0747c2ba3190e7dcb4/samara1531/awg2"
---

# AmneziaWG 2.0-3.1 OpenWRT 
- **awg 3.1 from version 25.12.5** and above.
- Also in release 24.10.8_**v3** but **without the Go module**
+ 
+ awg-go does not build on unsupported architectures (archives smaller than 1 MB).
+ 
+ Two installation/operation options, via kmod-amneziawg and amneziawg-go
  - if kmod-amneziawg is installed, it becomes the priority and launch goes through it, even when awg-go is present. (this is specified in amneziawg-tools)
+ 
+ Via amneziawg-go, it consumes much more RAM and requires a high-performance CPU for good network speed.
  - On a standard router it shows low speed figures.
  - (RAM consumption is 10-60 MB per running interface. The better the CPU and the traffic volume, the more it uses)
+
+ **kmod-amneziawg will not install on "custom" firmware. Only on the official vanilla wrt**
  - The other ipk packages are tied only to the CPU architecture.
  - If you use it via awg-go, it can **in theory** be installed on any build.
  - (use MTU= **1280**)
+
+ You must remove old Amnezia packages before installing new ones. This is critical.
+ Also be sure to clear the browser cache so the new awg. interface displays correctly
+
+ for…
