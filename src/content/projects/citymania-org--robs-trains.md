---
repo: "citymania-org/robs-trains"
name: "robs-trains"
description: "Rob’s Trains"
readmeQualityOk: true
url: "https://github.com/citymania-org/robs-trains"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 5
forks: 2
openIssues: 3
closedIssues: 4
watchers: 3
contributors: 6
recentReleases: 0
createdAt: "2022-03-25T15:41:09Z"
lastCommitAt: "2026-11-06T02:44:43Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 86
undervaluedScore: 74
maintainers: ["BL97", "Gurk-meja", "Brickblock1"]
openGraphImageUrl: "https://opengraph.githubassets.com/c92d25c7d62933525f7c05647da7756c375f91b039ac1846c7d1efd6b1330ff0/citymania-org/robs-trains"
---

# robs_trains
Rob’s Trains

# Notes 

Њ means there’s bad graphics or i need to review them <br>
Љ means bad code

# Dependencies

[grf-py](https://github.com/citymania-org/grf-py) <br>
[psd-tools](https://github.com/psd-tools/psd-tools)

# Compiling

run 'pip install -r requirements.txt' or manually download dependencies <br>
run generate.py

# PSDLivery

## Definition
PSDLivery has 3 compositing arguments: shading, paint and overlay.
Each can specify either one, many or no layers in PSD file (by layer name).
If more than one layer is specified for the group they're merged between any further processing is done.
Syntax:
0. None: Just omit the argument or use `shading=None`.
1. One: `shading='layer'` or `shading=('layer',)`
2. Many: `shading=('layer1', 'layer2', 'layer3')`

## Paint processing

Palette for paint is read from `compal.png`. 5th column is the main colour. For every pixel of one of the main colours in the paint layer code looks at pixel in the shading layer. If shading pixel is of blue CC range it takes the CC index of that colour and uses it to get corresponding colour from the paint palette (within the same row of main colour).
- First two rows of paint palette must…
