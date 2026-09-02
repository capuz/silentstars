---
repo: "ida-mdc/pixel-patrol"
name: "pixel-patrol"
description: "Scientific Dataset Quality Control and Data Exploration Tool"
readmeQualityOk: true
url: "https://github.com/ida-mdc/pixel-patrol"
homepage: "https://pixelpatrol.app"
language: "Jupyter Notebook"
languages: ["Jupyter Notebook", "Python"]
languagePcts: [61, 25]
topics: ["image-analysis", "quality-control", "statistics", "validation", "ai-readiness", "ai-readiness-assessment", "image-exploration", "scientific-imaging"]
stars: 26
forks: 1
openIssues: 60
closedIssues: 104
watchers: 1
contributors: 6
recentReleases: 4
createdAt: "2025-07-02T12:14:12Z"
lastCommitAt: "2026-09-02T08:04:15Z"
lastReleaseAt: "2026-09-02T08:05:58Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 90
undervaluedScore: 66
maintainers: ["bellonet", "oceanites", "frauzufall"]
openGraphImageUrl: "https://opengraph.githubassets.com/918dccf6bc14b3c49a7a6a1509272c7ac57878462e0f5d4d7714b0075d5f54b3/ida-mdc/pixel-patrol"
---

# <img src="packages/pixel-patrol-base/src/pixel_patrol_base/launch_assets/prevalidation.png" width="80">  PixelPatrol

### Image Dataset Quality Control and Exploration

**[Example Report](https://pixelpatrol.app/viewer/?data=../example.parquet) | [Tutorials](https://pixelpatrol.app/docs/tutorials/) | [Documentation](https://pixelpatrol.app/docs/) | [Viewer](https://pixelpatrol.app/viewer/) | [PyPI](https://pypi.org/project/pixel-patrol/)**

Image datasets are rarely as clean or consistent as they appear. PixelPatrol scans your images and builds a shareable, browser-based interactive report - file and image metadata, pixel statistics, quality metrics, and per-dimension slice statistics - so you can compare conditions, catch outliers, and verify batch consistency before you use the data.

*Overview mode - every widget as a tile; click one to expand it in place.*

---

## Installation

Requires Python 3.12+. We recommend [uv](https://docs.astral.sh/uv/):

```bash
uv venv --python 3.12 .venv
source .venv/bin/activate   # Windows: .venv\Scripts\Activate.ps1
uv pip install pixel-patrol
```

Or with pip:

```bash
pip install pixel-patrol
```

For a modular install (core only + selected…
