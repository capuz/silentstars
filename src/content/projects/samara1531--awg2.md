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
languagePcts: [70, 25]
stars: 33
forks: 8
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 4
recentReleases: 0
createdAt: "2025-09-23T11:07:19Z"
lastCommitAt: "2026-10-25T09:01:17Z"
lastReleaseAt: "2026-01-22T04:27:07Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 77
undervaluedScore: 55
maintainers: ["samara1531", "actions-user"]
openGraphImageUrl: "https://opengraph.githubassets.com/096fd73a273ea16055da406b743f43e7be3ebb274e98acd8a35adaeda21b2220/samara1531/awg2"
---

# AmneziaWG 2.0-3.1 OpenWRT 
- **awg 3.1 from version 25.12.5** and above.
- and also in release 24.10.8_**v3** but **without the Go module**
+ 
+ awg-go does not build for unsupported architectures (archives smaller than 1 MB).
+ 
+ Two installation/operation options, via kmod-amneziawg and amneziawg-go
  - if kmod-amneziawg is installed, it takes priority and runs through it, even when awg-go is present. (this is specified in amneziawg-tools)
+ 
+ Via amneziawg-go, it consumes much more RAM and requires a powerful CPU for good network speed.
  - on a standard router it shows low speed figures.
  - (RAM consumption 10-60 MB for each running interface. The better the CPU and the traffic volume, the more it uses)
+
+ **kmod-amneziawg will not install on "custom" firmware. Only on the official vanilla WRT**
  - the other ipk packages are tied only to the CPU architecture.
  - if used via awg-go, it can **in theory** be installed on any build.
  - (use MTU= **1280**)
+
+ You must remove old amnezia packages before installing the new ones. Critical.
+ Also be sure to clear the browser cache so the new awg interface displays correctly
+
+ for…
