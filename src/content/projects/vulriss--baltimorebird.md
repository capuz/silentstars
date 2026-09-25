---
repo: "Vulriss/baltimorebird"
name: "baltimorebird"
description: "Web-based automotive data analysis platform for MF4/CAN bus data visualization and reporting."
readmeQualityOk: true
url: "https://github.com/Vulriss/baltimorebird"
homepage: "https://baltimorebird.readthedocs.io"
language: "JavaScript"
languages: ["JavaScript", "Python"]
languagePcts: [45, 30]
stars: 5
forks: 1
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 4
recentReleases: 2
createdAt: "2026-01-06T08:43:36Z"
lastCommitAt: "2026-09-25T09:02:06Z"
lastReleaseAt: "2026-09-20T15:41:53Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 89
undervaluedScore: 68
maintainers: ["Vulriss", "celinesakr"]
openGraphImageUrl: "https://opengraph.githubassets.com/3f2cf9d7bfb41fc8f36c669bf30fa0898a62dd50838ff5d43e00daf8ed6342b9/Vulriss/baltimorebird"
---

# Baltimore Bird

Web-based platform for exploring and reporting on automotive time series data (MF4 / CAN bus).

**Live version:** [baltimorebird.cloud](https://baltimorebird.cloud)

## Why this exists

Exploring CAN logs usually means expensive proprietary tooling, or a pile of one-off
Python scripts that nobody maintains. Baltimore Bird sits in between: drop an MF4 file
(with an optional DBC for decoding) in the browser, get every channel listed in
milliseconds, and plot millions of points interactively. Signals are loaded lazily and
downsampled server-side with LTTB (Numba-accelerated), so even multi-gigabyte
recordings with thousands of channels stay responsive.

## Features

- **Interactive EDA** - drag-and-drop signal exploration, synchronized cursors,
  boolean zone highlighting, categorical signal rendering
- **Dashboard** - block-based editor to build reusable report templates
- **Reports** - browse and export completed analyses
- **Scripts** - Python editor with sandboxed execution
- **Conversion** - MF4 to CSV, MF4 concatenation
- **Multi-user** - accounts, roles, per-user storage with quotas

## Getting started

You need Python 3.10+ and a JavaScript runtime. I use…
