---
repo: "javimarlop/eHabpy"
name: "eHabpy"
description: "eHabitat+ enhanced HFT segmentation and similarity maps"
readmeQualityOk: true
url: "https://github.com/javimarlop/eHabpy"
homepage: "https://www.sciencedirect.com/science/article/pii/S157495412300119X"
language: "Python"
languages: ["Python", "R"]
languagePcts: [74, 20]
stars: 5
forks: 2
openIssues: 1
closedIssues: 1
watchers: 2
contributors: 5
recentReleases: 0
createdAt: "2014-04-10T14:49:37Z"
lastCommitAt: "2026-10-23T08:45:37Z"
lastReleaseAt: "2021-11-03T14:19:03Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 80
undervaluedScore: 71
maintainers: ["monitoreo-obsnev", "javimarlop"]
openGraphImageUrl: "https://opengraph.githubassets.com/e9a2a16945490fe3feea387374c6e63681a782a8b7c4e45eb15ad0bf59301b90/javimarlop/eHabpy"
---

eHabitat+
============

[**eHabitat+**](https://www.sciencedirect.com/science/article/pii/S157495412300119X) GRASS GIS scripts and Python library for automatic delineation of habitats within protected areas (PA) and calculation of maps of probabilities to find areas presenting similar ecological characteristics to those found in PA within the corresponding ecoregion. A habitat similarity index (HSI) is computed based on the ratio between the extent of similar areas around the PA and the PA extent, as well as some  landscape metrics and indices to characterize similar areas to PA.

## Contents

- [OS setup](#os-setup)
- [Running](#running) (quick start)
- [Extended tutorial: Habitat Functional Types (HFTs)](#extended-tutorial-habitat-functional-types-hfts)
- [Interpreting the outputs](#interpreting-the-outputs)
- [Annex: how the HFT model works](#annex-how-the-hft-model-works)

## OS setup

The recommended way to get the full geospatial stack (GDAL, GRASS, R and all
Python packages) is **conda / mamba**.

> **Windows users:** GRASS GIS is not available from conda-forge for Windows,
> so the scripts cannot find the `grass` Python package in a native Windows
> conda environment…
