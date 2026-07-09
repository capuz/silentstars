---
repo: "vivaldi/snapcraft"
name: "snapcraft"
description: "Snap packaging for vivaldi"
readmeQualityOk: true
url: "https://github.com/vivaldi/snapcraft"
language: "Shell"
languages: ["Shell"]
languagePcts: [100]
stars: 6
forks: 1
openIssues: 1
closedIssues: 2
watchers: 3
contributors: 2
recentReleases: 0
createdAt: "2024-08-12T11:29:53Z"
lastCommitAt: "2026-07-09T20:44:24Z"
status: "thriving"
tags: []
healthScore: 91
undervaluedScore: 56
maintainers: ["ruario", "volca02"]
openGraphImageUrl: "https://opengraph.githubassets.com/e72292893bd6ab055c88eab0b6cfd3337e582ffa69e4a0192fa2aff394bcbfee/vivaldi/snapcraft"
---

# vivaldi-snapcraft

This repository contains packaging files for snap packaging for vivaldi

## Building

To package this, simply run snapcraft while being in the directory containing these files.

## Running

Currently, when packaging locally, there are two connections needed to be done by hand to make the browser work as intended:

### Sandboxing

```
snap connect vivaldi:browser-sandbox
```

### FFMPEG (Proprietary codecs)

```
snap connect vivaldi:chromium-ffmpeg-115541 chromium-ffmpeg:chromium-ffmpeg-115541
```
