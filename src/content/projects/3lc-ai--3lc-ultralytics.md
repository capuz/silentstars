---
repo: "3lc-ai/3lc-ultralytics"
name: "3lc-ultralytics"
description: "3LC Integration with Ultralytics YOLO"
readmeQualityOk: true
url: "https://github.com/3lc-ai/3lc-ultralytics"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["computer-vision", "data-centric-ai", "image-classification", "image-detection", "image-segmentation"]
stars: 10
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 4
recentReleases: 0
createdAt: "2025-05-27T13:19:02Z"
lastCommitAt: "2026-10-21T21:14:44Z"
lastReleaseAt: "2026-06-03T03:13:57Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 85
undervaluedScore: 62
maintainers: ["fredmell", "gudbrandtandberg"]
openGraphImageUrl: "https://opengraph.githubassets.com/d84877258ba428b6697156aca3fa77e101c238b5cc2cf07e9fa39b57f4bc9b19/3lc-ai/3lc-ultralytics"
---

## About 3LC

[3LC](https://3lc.ai) is a tool which enables data scientists to improve machine learning models in a data-centric fashion. It collects per-sample predictions and metrics, allows viewing and modifying the dataset in the context of those predictions in the 3LC Dashboard, and rerunning training with the revised dataset.

3LC is free for non-commercial use.

## Quick Start

### Installation

Install the package and requirements into a virtual environment (Python 3.10–3.14):

```bash
pip install 3lc-ultralytics
```

> This installs both [`3lc`](https://pypi.org/project/3lc/) and [`ultralytics`](https://pypi.org/project/ultralytics/), which are dependencies of `3lc-ultralytics`. Refer to the respective projects for how to set up a 3LC user and the Ultralytics License.

If you use [`uv`](https://docs.astral.sh/uv/), the equivalent commands are `uv pip install 3lc-ultralytics`, or `uv add 3lc-ultralytics` to add it to a `uv` project.

### Basic Training

Import `YOLO` from `tlc_ultralytics` and start training with 3LC integration:

```python
from tlc_ultralytics import YOLO

model = YOLO("yolo11n.pt")
model.train(data="coco128.yaml", epochs=1)
```

In the background, 3LC…
