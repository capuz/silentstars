---
repo: "BigShoots/PGenerator-Plus"
name: "PGenerator-Plus"
description: "PGenerator+ is a free, open-source Raspberry Pi–based display calibration suite built around a precision HDMI test pattern generator."
readmeQualityOk: true
url: "https://github.com/BigShoots/PGenerator-Plus"
language: "Perl"
languages: ["Perl", "C"]
languagePcts: [61, 28]
topics: ["3dlut", "calibration", "colorimetry", "colourspace", "dolby", "dv", "grayscale", "hdr", "sdr", "television"]
stars: 34
forks: 7
openIssues: 0
closedIssues: 27
watchers: 3
contributors: 3
recentReleases: 0
createdAt: "2026-02-27T18:16:40Z"
lastCommitAt: "2026-08-12T05:06:04Z"
lastReleaseAt: "2026-05-06T16:44:17Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 90
undervaluedScore: 41
maintainers: []
openGraphImageUrl: "https://opengraph.githubassets.com/997fbdd9b185780119b9d4b6a81e0c2a48ecc07f2cdd77b2c387920bded5a942/BigShoots/PGenerator-Plus"
---

# PGenerator+

</p>

## Use Case

PGenerator+ is a free, open-source Raspberry Pi–based display calibration suite built around a precision HDMI test pattern generator. It is aimed at home users and display enthusiasts who want to produce accurate SDR, HDR10, HLG, and Dolby Vision test patterns on demand, and who want to run closed-loop SDR and HDR autocal workflows on the Pi itself using a USB colorimeter or spectrophotometer.

The Pi outputs calibrated color patches and full-screen test patterns over HDMI and exposes them to calibration software running on a laptop or workstation over TCP/IP. Current releases also turn the Pi into a self-contained calibration tool: a local web dashboard, over-the-air updates, on-device meter-driven validation against the displayed patches using ArgyllCMS `spotread`, and closed-loop SDR and LG SDR/HDR autocal workflows that drive the display's picture-mode adjustments directly from the Pi.

## Features

- **Precision HDMI pattern generation** — full-screen patches, grayscale ramps, windows, color bars, custom RGB triplets, and user-defined patch sizes, driven directly through DRM/KMS on the Pi.
- **HDR and Dolby Vision output** — HDR10 (ST.2084 PQ…
