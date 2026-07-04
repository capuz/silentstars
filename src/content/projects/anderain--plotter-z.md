---
repo: "anderain/Plotter-Z"
name: "Plotter-Z"
description: "A 3D function graph plotting tool designed for early handheld devices such as Windows CE 1.0 - 2.1, Palm OS 3, and CASIO fx-9860 series calculators."
url: "https://github.com/anderain/Plotter-Z"
language: "C"
languages: ["C"]
languagePcts: [83]
stars: 6
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 4
createdAt: "2026-05-21T11:09:18Z"
lastCommitAt: "2026-07-04T06:12:55Z"
lastReleaseAt: "2026-06-05T13:01:36Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 79
undervaluedScore: 54
maintainers: ["anderain"]
openGraphImageUrl: "https://opengraph.githubassets.com/36f37e91392e9b37499a11b0b1d55f15da338058053b4706d04d8b8ead269c9c/anderain/Plotter-Z"
---

# Plotter-Z
A 3D function graph plotting tool designed for early handheld devices such as Windows CE 1.0 - 2.1, Palm OS 3, and CASIO fx-9860 series calculators.

This project is still in progress. Feedback and issues are welcome.

## Installation
### On Windows CE
Copy the `.exe` matching your CPU architecture to the device via Active Sync or external storage (CF, SD card) and run it.

> **Note:** For newer ARM-based devices (Windows CE 5.0, Windows Mobile), use `PlotterZ_hpc211_armdbg.exe`.

### On Palm OS
Install the `.prc` file via HotSync and run it.

> **Note:** MathLib is required. Download and install it from [palmdb.net/app/mathlib](https://palmdb.net/app/mathlib) before running Plotter-Z.

### On CASIO fx-9860G Series
Connect the calculator to your PC via USB and use **FA-124** to transfer the `.g1a` file, or copy it directly through Windows Explorer, or via an SD card to the calculator's storage.

## Supported Functions
The following mathematical functions can be used in expressions:

| Function | Description | Parameters |
|----------|-------------|------------|
| `sin(x)` | Sine | 1 |
| `cos(x)` | Cosine | 1 |
| `tan(x)` | Tangent | 1 |
| `asin(x)` | Arcsine | 1 |
|…
