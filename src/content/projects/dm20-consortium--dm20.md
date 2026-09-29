---
repo: "dm20-consortium/dm20"
name: "dm20"
description: "An open-source information and communication platform for information linkage connecting vehicles, roadside units, and clouds"
originalDescription: "車両、路側機、クラウドをつないだ情報連携のためのオープンソースの情報通信プラットフォーム"
descriptionLang: "ja"
readmeQualityOk: true
url: "https://github.com/dm20-consortium/dm20"
homepage: "https://www.nces.i.nagoya-u.ac.jp/cav-dm2/index.html"
language: "C++"
languages: ["C++"]
languagePcts: [90]
topics: ["cplusplus", "docker", "etsi", "ros2", "ubuntu", "v2x", "autonomous-driving", "cooperative-driving", "edge-computing"]
stars: 5
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 1
createdAt: "2026-04-24T06:48:49Z"
lastCommitAt: "2026-09-29T10:04:39Z"
lastReleaseAt: "2026-09-22T04:50:35Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 87
undervaluedScore: 57
maintainers: ["dm2dev", "dm20-consortium"]
openGraphImageUrl: "https://opengraph.githubassets.com/21d9e19f307868f04122d89dd87a910df212801d7d780c272b6f97e9725dfb26/dm20-consortium/dm20"
---

# DM2.0 Platform

---

## Overview

The Dynamic Map 2.0 Platform (DM2.0 Platform) is an open-source information and communication platform for information linkage connecting vehicles, roadside units, and clouds.

It was developed as foundational software for realizing advanced mobility services including infrastructure-cooperative autonomous driving.
It provides integrated search and retrieval functions across dynamic information (target information, signal information, free space information, etc.) and static information (3D high-precision road maps, etc.), handles different communication methods such as ITS radio and cellular networks, and allows them to be used individually or simultaneously.

## Features

* Architecture/Design
  * Designed with reference to [ETSI EN 302 665 V1.1.1 (2010-09)](https://www.etsi.org/deliver/etsi_en/302600_302699/302665/01.01.01_60/en_302665v010101p.pdf), which is the corresponding standard to ISO21217:2010 of the International Organization for Standardization
  * Equipped with a stream-type database for sensor data processing, supports SQL-based [query…
