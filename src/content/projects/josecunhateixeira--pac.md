---
repo: "JoseCunhaTeixeira/PAC"
name: "PAC"
description: "Application for passive and active multichannel analysis of surface waves and inversion."
readmeQualityOk: true
url: "https://github.com/JoseCunhaTeixeira/PAC"
language: "TypeScript"
languages: ["TypeScript", "Python"]
languagePcts: [54, 38]
stars: 15
forks: 5
openIssues: 0
closedIssues: 0
watchers: 2
contributors: 2
recentReleases: 0
createdAt: "2025-02-03T12:25:42Z"
lastCommitAt: "2026-10-18T08:16:54Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 77
undervaluedScore: 61
maintainers: ["JoseCunhaTeixeira"]
openGraphImageUrl: "https://opengraph.githubassets.com/90881bcf9bada7f00af66fb9634a9603bdfda70eae121fa325214356f19a5162/JoseCunhaTeixeira/PAC"
---

# PAC — Passive and Active Computation of MASW

PAC is an app for processing **Multichannel Analysis of Surface Waves (MASW)** on linear arrays. It can handle both **passive** and **active** seismic data to automatically optimize and extract dispersion images, and it can apply cross-correlation to active data to sometimes improve dispersion retrieval quality. Dispersion curves can be semi-automatically picked on an interactive interface and then inverted into shear-wave velocity profiles.

PAC runs entirely **on your own computer**. You start it once, then use it through your web browser at a local address (`http://localhost:5173`). Nothing is uploaded anywhere — your data never leaves your machine.

## Features
- **Hybrid processing:** supports both passive and active MASW methods without needing source position information. Uses the package [sigpipe](https://github.com/JoseCunhaTeixeira/sigpipe), a signal processing Python pipeline.
- **Signal processing tools:** uses an automatic source detection algorithm combined with seismic interferometry.
- **Automated dispersion analysis:** extracts and visualizes dispersion images and curves.
- **Seismic inversion:** turns dispersion…
