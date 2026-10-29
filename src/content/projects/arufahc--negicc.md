---
repo: "arufahc/negicc"
name: "negicc"
description: "ICC Profile for Color Negative Film"
readmeQualityOk: true
url: "https://github.com/arufahc/negicc"
language: "C++"
languages: ["C++"]
languagePcts: [95]
stars: 30
forks: 4
openIssues: 3
closedIssues: 0
watchers: 3
contributors: 2
recentReleases: 0
createdAt: "2021-04-11T06:57:16Z"
lastCommitAt: "2026-10-29T21:23:54Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 80
undervaluedScore: 48
maintainers: ["arufahc"]
openGraphImageUrl: "https://opengraph.githubassets.com/228cba010916b051844b8fab891c4ba47f2ea6e7ef619151fc77ca81789fa33d/arufahc/negicc"
---

# Objective

> [!WARNING]
> **This repository is no longer maintained.**
> This project was created for research purposes. The active, fully integrated capture and conversion station software—including automated USB tethering, GTK3 desktop UIs, CUDA hardware acceleration, and optimized multi-exposure profiling—is now maintained in the **[negicc-station](https://github.com/arufahc/negicc-station)** repository. Please check the new [negicc-station README](https://github.com/arufahc/negicc-station/blob/main/README.md) for setup and instructions.

> **TODO:** update this notice: this repository is now negicc-station's conversion engine (`neg_process` with the automatic conversion and the built-in profiles).

NegICC is a project for creating ICC profiles for color negatives. The main
objective of the tool is to have consistent colors for images of negative
film taken with a digital camera.

The ICC profiles created should have the following properties:
* Allow color balance adjustments
* Produces netural color which allows further asdjustments
* Can be used with commonly available photo editting tools

> **TODO:** the profiles are now built in negicc-station and exported here as…
