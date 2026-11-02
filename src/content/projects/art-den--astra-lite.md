---
repo: "art-den/astra_lite"
name: "astra_lite"
description: "AstraLite is software for deepsky astrophotography and live stacking on low power PCs (like rapsberry Pi or Orange Pi)"
readmeQualityOk: true
url: "https://github.com/art-den/astra_lite"
language: "Rust"
languages: ["Rust"]
languagePcts: [100]
topics: ["astrophotography", "deep-sky", "rust", "arm64", "astronomy", "telescope"]
stars: 54
forks: 5
openIssues: 8
closedIssues: 11
watchers: 2
contributors: 2
recentReleases: 0
createdAt: "2023-02-03T17:10:14Z"
lastCommitAt: "2026-11-02T13:38:14Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 91
undervaluedScore: 49
maintainers: ["art-den", "kuishou68"]
openGraphImageUrl: "https://opengraph.githubassets.com/469d3c22f7ad8486327c3d52c440ea496d21aa2178dd826de54a6c6c26b8de5a/art-den/astra_lite"
---

# AstraLite
AstraLite is software for deepsky astrophotography and live stacking
on low power PCs (like raspberry Pi or Orange Pi)

```diff
! The program is under active development !
```

AstraLite uses INDI server to work with astrophotography hardware.
On MS Windows ASCOM (+ ASCOM Alpaca) devices are also supported.
See https://www.indilib.org/download.html to install INDI

Compiled binaries and discussion here:
https://www.indilib.org/forum/clients/13006-astralite-simple-indi-client-for-astrophotography.html

## Features
* Supported INDI and ASCOM (Windows) devices: cameras, focusers, filter wheels and mounts
* Saving RAW frames
* Live stacking with **automatic satellites and meteor tracks removal**
* Background gradient automatic removal
* Darks, biases and defective pixels library
* Flat frames capture and calibration with automatic flat exposure calculation
* Light frames quality filter
* Mount polar alignment
* Guiding and dithering by PHD2 or **main camera**
* Autofocus
* Goto from sky map
* Plate solving with local Astrometry.net
* Sky map
* Manual mount control
* UI for INDI and ASCOM devices control

## Requirements
| Condition                        | Requirements for…
