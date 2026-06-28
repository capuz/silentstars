---
repo: "pathology-data-mining/Mussel"
name: "Mussel"
description: "Computational pathology toolkit: tiling, feature extraction, and annotation for whole-slide images using foundation models"
url: "https://github.com/pathology-data-mining/Mussel"
homepage: "https://pypi.org/project/mussel-pathology/"
language: "Python"
languages: ["Python"]
languagePcts: [97]
topics: ["computational-pathology", "feature-extraction", "foundation-models", "nextflow", "pathology", "python", "pytorch", "whole-slide-imaging", "wsi"]
stars: 7
forks: 0
openIssues: 0
closedIssues: 7
watchers: 3
contributors: 7
recentReleases: 6
createdAt: "2024-02-08T14:53:11Z"
lastCommitAt: "2026-06-22T17:48:53Z"
lastReleaseAt: "2026-05-04T21:26:21Z"
status: "thriving"
tags: ["solo_builder", "release_machine"]
healthScore: 96
undervaluedScore: 85
maintainers: ["raylim"]
openGraphImageUrl: "https://opengraph.githubassets.com/1d096890654d0e95cd516f0bdef6fcd37c135aa0b116dbcb58e853a877890b9c/pathology-data-mining/Mussel"
postedAt: "2026-06-21T02:28:52.953Z"
---

# Mussel

This is a fork of Faisal Mahmood's [CLAM repository](https://github.com/mahmoodlab/CLAM)
 (GPL v3 license), with a handful of modifications:
- Added additional foundation models for generating embeddings
- Added zero-shot tissue-type annotation of tiles
- Added caching of images for inference right on the tiles (rather than on embeddings)
- Added microns per pixel (mpp) as parameter for tiling, supported regardless of native slide resolution
- Made usable for job submission (one script run, one slide)
- Removed modeling
- Updated the tiling algorithm

## Installation

### System requirements

Supported systems:
* Mac OS (x86 and ARM) (cpu only)
* Linux (x86) (cpu and gpu)

### Supported slide formats

Mussel reads whole-slide images via [tiffslide](https://github.com/Bayer-Group/tiffslide)
(backed by [tifffile](https://github.com/cgohlke/tifffile)).
The following formats are supported:

| Extension | Format | Scanner / Vendor | Tiffslide support |
|-----------|--------|-----------------|-------------------|
| `.svs` | Aperio SVS | Leica (Aperio) | ✅ Full |
| `.scn` | Leica SCN | Leica | ✅ Full |
| `.tif` / `.tiff` | TIFF, BigTIFF, OME-TIFF | Generic / various | ✅ Full |…
