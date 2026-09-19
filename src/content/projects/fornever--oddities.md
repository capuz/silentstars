---
repo: "ForNeVeR/Oddities"
name: "Oddities"
description: ".NET libraries supporting several old and obscure data formats: DIB, MRB, NE, SHG, WinHelp."
readmeQualityOk: true
url: "https://github.com/ForNeVeR/Oddities"
language: "C#"
languages: ["C#"]
languagePcts: [90]
topics: ["dib", "mrb", "ne", "shg", "winhelp"]
stars: 25
forks: 2
openIssues: 5
closedIssues: 4
watchers: 1
contributors: 4
recentReleases: 0
createdAt: "2023-05-29T20:06:14Z"
lastCommitAt: "2026-09-18T20:57:03Z"
lastReleaseAt: "2023-05-31T22:55:24Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors"]
healthScore: 71
undervaluedScore: 29
maintainers: ["renovate[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/d5704a1468c504981033e7bbc8e5a0f0b5281be3cc847b2779a1e63e5995df1e/ForNeVeR/Oddities"
---

Oddities [][andivionian-status-classifier]
========
This repository groups several .NET libraries supporting old and obscure data formats.

Currently, the following data formats are supported:
- [DIB (Device-Independent Bitmap)][microsoft.dib], encountered as part of the BMP format and in the NE resource table.
- [NE (New Executable)][wikipedia.ne], 16-bit `.exe` Windows binary.
- [Windows Help File format][docs.winhelp] (aka WinHelp aka `.hlp`) and accompanying formats (often stored in a `.hlp` file):
  - [MRB (Multi-Resolution Bitmap)][file-info.mrb],
  - [SHG (Segmented Hyper-Graphics)][file-info.shg].

If you encounter a case not handled by the library, don't hesitate to [open an issue][issues]!

Read the corresponding sections below for each part of the library suite.

All the examples are collected in the `Oddities.Samples` project, feel free to take a look.

Documentation
-------------
- [Contributor Guide][docs.contributing]
- [License (MIT)][docs.license]
- [Code of Conduct (adapted from the Contributor Covenant)][docs.code-of-conduct]

Oddities.DIB [][nuget.dib]
------------
This library provides some helpful functions to work with the [DIB (Device-Independent…
