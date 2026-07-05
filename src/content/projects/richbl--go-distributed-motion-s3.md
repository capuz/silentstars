---
repo: "richbl/go-distributed-motion-s3"
name: "go-distributed-motion-s3"
description: "Distributed Motion Surveillance Security System (DMS3): a Go-based distributed video security system for SBCs (e.g., Raspberry PIs or similar)"
readmeQualityOk: true
url: "https://github.com/richbl/go-distributed-motion-s3"
language: "Go"
languages: ["Go"]
languagePcts: [84]
topics: ["motion", "video-security-surveillance", "golang", "go", "security", "surveillance", "iot", "sbc", "raspberry-pi", "raspberrypi"]
stars: 59
forks: 19
openIssues: 9
closedIssues: 11
watchers: 3
contributors: 1
recentReleases: 0
createdAt: "2017-06-29T15:28:25Z"
lastCommitAt: "2026-07-05T20:17:37Z"
lastReleaseAt: "2023-02-27T20:26:00Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 78
undervaluedScore: 35
maintainers: ["richbl"]
openGraphImageUrl: "https://opengraph.githubassets.com/834c813e655eef14b4ee3099564bac4bf80626b1fd96879db3ffa60c1c19b92c/richbl/go-distributed-motion-s3"
---

# Distributed Motion Surveillance Security System (DMS<sup>3</sup>)

## What Is **DMS<sup>3</sup>**?

</p>

**Distributed Motion Surveillance Security System (DMS<sup>3</sup>)** is a [Go-based](https://golang.org/ "Go") application that integrates third-party open-source motion detection applications (*e.g.*, the [Motion](https://motion-project.github.io/ "Motion") motion detection software package, or [OpenCV](http://opencv.org/ "OpenCV"), the Open Source Computer Vision Library) into an automated distributed motion surveillance system that:

- Using a local network, wirelessly senses when someone is "at home" and when someone is "not at home" and automatically enables or disables the surveillance system
- Through the **DMS<sup>3</sup>Server**, the system coordinates video stream processing, reporting, and user notification to participating device clients (*e.g.*, a Raspberry Pi or similar) running the **DMS<sup>3</sup>Client** component which:
    - Greatly minimizes network congestion, particularly during high-bandwidth surveillance events of interest
    - Better utilizes device client CPU/GPU processing power: keeping stream processing on-board and distributed around the…
