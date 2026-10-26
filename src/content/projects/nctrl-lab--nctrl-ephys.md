---
repo: "nctrl-lab/nctrl-ephys"
name: "nctrl-ephys"
description: "Electrophysiology Data Analysis Tools for SpikeGLX and Kilosort"
readmeQualityOk: true
url: "https://github.com/nctrl-lab/nctrl-ephys"
language: "Jupyter Notebook"
languages: ["Jupyter Notebook"]
languagePcts: [83]
topics: ["brain-computer-interface", "kilosort", "neurophysiology", "neuroscience"]
stars: 8
forks: 3
openIssues: 0
closedIssues: 0
watchers: 2
contributors: 2
recentReleases: 0
createdAt: "2024-08-20T06:04:16Z"
lastCommitAt: "2026-10-26T03:02:58Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 78
undervaluedScore: 50
maintainers: ["lapis42"]
openGraphImageUrl: "https://opengraph.githubassets.com/1c04f005398efbeb2769f70b8839dbebbbedb250bb84f688a24416766703709e/nctrl-lab/nctrl-ephys"
---

# nctrl-ephys

## Overview
`nctrl-ephys` is a collection of tools for electrophysiology data analysis. It includes functionalities for processing and analyzing data from various sources, including SpikeGLX and Kilosort.

## Installation
To install the package, use the following command:
```bash
pip install git+https://github.com/nctrl-lab/nctrl-ephys.git
```

## Requirements
- Python 3.9 or higher
- [SpikeGLX](https://billkarsh.github.io/SpikeGLX/)
- [CatGT](https://billkarsh.github.io/SpikeGLX/#catgt)
- [Kilosort4](https://github.com/Mouseland/Kilosort)
- [phy](https://github.com/cortex-lab/phy)

## Pipelines for SpikeGLX data
1. Run SpikeGLX to record Neuropixels data
2. Run CatGT (`ephys catgt`) to concatenate and denoise the data
3. Generate the probe map by reading meta file (`ephys probe`)
    - This will generate a `PROBE_TYPE.mat` file, which can be useful for the Kilosort GUI.
    - It also plots the probe map and channel numbers.
4. Run Kilosort (`ephys runks`)
    - Don't forget to switch the conda environment (`conda activate kilosort`) if the Kilosort is installed in a different environment.
    - If you would like to save metrics (L-ratio, isolation distance,…
