---
repo: "stosumarte/FreenectTD"
name: "FreenectTD"
description: "Kinect support for TouchDesigner on Mac."
readmeQualityOk: true
url: "https://github.com/stosumarte/FreenectTD"
language: "C++"
languages: ["C++"]
languagePcts: [100]
stars: 102
forks: 13
openIssues: 2
closedIssues: 14
watchers: 10
contributors: 5
recentReleases: 0
createdAt: "2025-05-01T15:57:05Z"
lastCommitAt: "2026-10-10T10:04:14Z"
lastReleaseAt: "2025-12-11T09:13:23Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 93
undervaluedScore: 46
maintainers: ["stosumarte", "dcheesman", "claude"]
openGraphImageUrl: "https://opengraph.githubassets.com/8b32d92178e3e7b31c6d08bf53329cc66750bad98b85f27f3f0163e7ba23c242/stosumarte/FreenectTD"
---

# FreenectTD
FreenectTD is an open-source TouchDesigner plugin aimed at macOS users who don't have a way to use the official Kinect OPs in TouchDesigner.

It leverages [libfreenect](https://github.com/OpenKinect/libfreenect) and [libfreenect2](https://github.com/OpenKinect/libfreenect2) to implement support for Kinect cameras.

**⚠️ Warning:** 
FreenectTD is an experimental project. While being thoroughly tested and confirmed to work on multiple platforms, it may still have some bugs or stability issues. Please be careful if using in a production environment. I don't take any responsibility.

### Requirements
* Apple Silicon Mac
* macOS 12.4+ (Monterey)
* TouchDesigner 2025+ (any license)
* Kinect V1 / Kinect V2

### Supported features
| Feature                                       | Kinect V1 | Kinect V2 |
| --------------------------------------------- | --------- | --------- |
| RGB streaming                                 | ✅         | ✅         |
| Depth map streaming                           | ✅         | ✅         |
| Point cloud map streaming                     | ❌         | ✅         |
| IR streaming                                  | TBA       | ✅         |
| Tilt…
