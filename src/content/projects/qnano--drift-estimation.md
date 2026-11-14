---
repo: "qnano/drift-estimation"
name: "drift-estimation"
description: "Sub nanometer drift estimation for SMLM datasets using entropy minimization approach "
readmeQualityOk: true
url: "https://github.com/qnano/drift-estimation"
language: "Python"
languages: ["Python"]
languagePcts: [81]
stars: 16
forks: 3
openIssues: 3
closedIssues: 0
watchers: 3
contributors: 2
recentReleases: 0
createdAt: "2021-03-30T08:40:18Z"
lastCommitAt: "2026-11-14T10:41:43Z"
lastReleaseAt: "2021-11-07T21:28:11Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 70
undervaluedScore: 36
maintainers: ["jcnossen"]
openGraphImageUrl: "https://opengraph.githubassets.com/860daa518e32a452eee8af2d7adad186629df36c23cf3c8deaa72486cf7c8144/qnano/drift-estimation"
---

DME: drift correction for localization microscopy by entropy minimization
==========================================================================

Fiducial-free drift estimation for single-molecule localization microscopy (2D and 3D), from the localizations alone.

J. Cnossen, T. J. Cui, C. Joo, C. Smith, "Drift correction in localization microscopy using entropy minimization",
[Opt. Express 29, 27961 (2021)](https://opg.optica.org/oe/fulltext.cfm?uri=oe-29-18-27961&id=457245).

**DME v2 (2026)** is a rewrite in PyTorch: no compilation, runs on any CUDA GPU (Linux, Windows) or on the CPU. It
maximizes the same entropy objective as the paper, and adds a small learned temporal prior: instead of a spline with a
user-chosen number of frames per knot, it measures the drift of short time segments with the DME objective and turns
these measurements into a drift trace with a trained 1D network.

**No frames per bin to choose.** Every other method, including the 2021 DME code, needs the temporal resolution
(frames per bin or window) set by hand. Too short and the drift estimate is noisy; too long and fast drift is smoothed
away, and the best value depends on the dataset (see the…
