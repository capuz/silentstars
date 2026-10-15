---
repo: "SaschaAndresGrimm/ALBIS"
name: "ALBIS"
description: "ALBULA-style viewer for DECTRIS detector data: HDF5, TIFF, CBF, EDF, MYTHEN and live streams. Free and open source, for Windows, macOS and Linux."
readmeQualityOk: true
url: "https://github.com/SaschaAndresGrimm/ALBIS"
homepage: "https://github.com/SaschaAndresGrimm/ALBIS/releases"
language: "JavaScript"
languages: ["JavaScript", "Python"]
languagePcts: [53, 36]
topics: ["albula", "beamline", "cbf", "crystallography", "dectris", "detector", "diffraction", "eiger", "hdf5", "image-viewer"]
stars: 7
forks: 0
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-02-06T11:57:33Z"
lastCommitAt: "2026-10-15T08:32:08Z"
lastReleaseAt: "2026-03-03T19:23:01Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 100
undervaluedScore: 65
maintainers: ["SaschaAndresGrimm", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/12dafe4a26dd7126a9c59f1656bae7a23ba430efd3c8533910dc9f0707eee2c6/SaschaAndresGrimm/ALBIS"
---

# ALBIS (**AL**BULA-style **B**rowser-based **I**mage viewer for **S**cientific detectors)

ALBIS is a free, open-source viewer for **DECTRIS detector data**, in the style of ALBULA. It opens HDF5 stacks, TIFF, CBF, EDF and MYTHEN acquisitions, follows a running experiment live, and runs on your own computer or on the machine that holds the data, viewed from a browser elsewhere.

It targets modern and not so modern **DECTRIS** detectors (SELUN, EIGER(2), PILATUS(4), MYTHEN(2), POLLUX, and JUNGFRAU — including rectangular "strixel" pixels — and the electron-microscopy detectors ARINA, SINGLA, QUADRO and ELA) and supports **filewriter1** and **filewriter2** layouts, including multi‑threshold (multi‑channel) data.

Image sources can be:

- Files on disk (`.h5/.hdf5` stacks and common detector image formats `.tif/.tiff`, `.cbf/.cbf.gz`, `.edf`).
- **MYTHEN(2)** strip-detector acquisitions - open the acquisition's `.cfg` and the whole run is assembled into one image (channel across, frame down, counts as intensity).
- The detector **SIMPLON monitor** stream for live viewing.
- **JUNGFRAUJOCH Preview** ZeroMQ PUB stream (CBOR image messages + reflection spots).
- The **Remote Stream…
