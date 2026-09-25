---
repo: "yzerlaut/physion"
name: "physion"
description: "An integrated software for the cellular and circuit physiology of visual processing during behavior --- :movie_camera: :wrench: :minidisc: "
readmeQualityOk: true
url: "https://github.com/yzerlaut/physion"
language: "Python"
languages: ["Python", "Jupyter Notebook"]
languagePcts: [62, 38]
topics: ["electrophysiology", "imaging", "neuroscience", "vision"]
stars: 6
forks: 9
openIssues: 1
closedIssues: 2
watchers: 3
contributors: 7
recentReleases: 0
createdAt: "2022-10-18T08:41:57Z"
lastCommitAt: "2026-09-25T09:02:00Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "fork_magnet"]
healthScore: 92
undervaluedScore: 85
maintainers: ["yzerlaut", "AstridNicolini15"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/553456112/31a0f3db-e676-4770-af95-098239c21eea"
---

# Vision Physiology Software

> *An integrated software for the cellular and circuit physiology of visual processing during behavior*

--------------------

The software is organized into several modules to perform the acquisition, the preprocessing, the standardization, the visualization, the analysis and the sharing of multimodal neurophysiological recordings.

The different modules are detailed in the [documentation below](https://github.com/yzerlaut/physion/blob/HEAD/README.md#modules-and-documentation) and their integration is summarized on the drawing below:
</p>


--------------------

## Install

Create a `"physion"` environment running `python 3.11`, with:

```
conda create -n "physion" python=3.11
```

Then either install:
- the [Pypi build](https://pypi.org/project/physion/) with:
```
pip install physion
```
  with optional dependencies for electrophysiology (spike sorting, LFP, ephys notebooks) and/or for acquisition setups:
```
pip install "physion[ephys]"
pip install "physion[ephys,acquisition]"
```
- from source with:
```
git clone https://github.com/yzerlaut/physion --recurse-submodules
```

- For an installation on an…
