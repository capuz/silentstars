---
repo: "viventriglia/PyTECGg"
name: "PyTECGg"
description: "Total Electron Content (TEC) reconstruction with GNSS data – a Python package with a Rust core"
readmeQualityOk: true
url: "https://github.com/viventriglia/PyTECGg"
homepage: "https://viventriglia.github.io/PyTECGg/"
language: "Python"
languages: ["Python"]
languagePcts: [96]
topics: ["gnss", "ionosphere", "python", "rinex", "rust", "total-electron-content"]
stars: 34
forks: 14
openIssues: 3
closedIssues: 2
watchers: 4
contributors: 3
recentReleases: 0
createdAt: "2025-06-19T12:37:36Z"
lastCommitAt: "2026-11-10T14:49:23Z"
lastReleaseAt: "2026-03-11T09:24:31Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 72
undervaluedScore: 53
maintainers: ["mguerra96", "viventriglia"]
openGraphImageUrl: "https://opengraph.githubassets.com/2bccca8387cf311c3ec7bf23174662e1d68aaa0d8d1efc59da0f26390ad9f178/viventriglia/PyTECGg"
---

# PyTECGg

Total Electron Content (**TEC**) reconstruction with **GNSS** data – a Python 🐍 package with a Rust 🦀 core

## What is it?

PyTECGg is a fast, lightweight Python package that helps **reconstruct and calibrate** the [Total Electron Content](https://en.wikipedia.org/wiki/Total_electron_content) (TEC) from **GNSS data**.

Why calibration matters? Because without it, you don’t actually know the true value of TEC — only how it changes. Uncalibrated TEC is affected by unknown biases from satellites and receivers, as well as other sources of error.

This package:
- is open source: read and access all the code!
- supports all modern GNSS constellations, codes and signals:
    - GPS, Galileo, BeiDou, GLONASS
- supports RINEX V2-3-4
- provides seamless decompression for RINEX files

## Installation

You can install the package directly from [PyPI](https://pypi.org/project/pytecgg/):

```shell
pip install pytecgg
```

This will also install all required Python dependencies automatically.

## Documentation

Read the **documentation** [**here**](https://viventriglia.github.io/PyTECGg/).

> [!TIP]
> **In a hurry?** You can [**ask the PyTECGg AI…
