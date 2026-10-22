---
repo: "pyronear/pyro-engine"
name: "pyro-engine"
description: "Wildfire detection on edge devices"
readmeQualityOk: true
url: "https://github.com/pyronear/pyro-engine"
homepage: "https://pyronear.org/pyro-engine"
language: "Python"
languages: ["Python"]
languagePcts: [85]
topics: ["wildfire", "docker", "image-classification", "onnxruntime", "python", "raspberry-pi"]
stars: 20
forks: 9
openIssues: 60
closedIssues: 38
watchers: 5
contributors: 11
recentReleases: 0
createdAt: "2020-09-03T06:08:11Z"
lastCommitAt: "2026-10-22T08:51:54Z"
lastReleaseAt: "2026-04-21T16:55:11Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "hidden_gem", "legacy_hero", "funded"]
healthScore: 82
undervaluedScore: 54
maintainers: ["MateoLostanlen", "fe51", "frgfm"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/292482058/241a2677-9bdf-476f-bac4-b9fe16ef71cb"
fundingLinks: ["GITHUB:https://github.com/pyronear"]
discussionCount: 1
---

# PyroEngine repository

This repository contains two main components used in Pyronear wildfire detection deployments:  `pyroengine` and `pyro_camera_api`

| Directory          | Description                                                               |
| ------------------ | ------------------------------------------------------------------------- |
| `pyroengine/`      | Detection engine that runs the wildfire model on edge devices             |
| `pyro_camera_api/` | Camera control API that exposes a unified interface for multiple adapters |
| `scripts/`         | Shell scripts for deployment and debugging                                |
| `src/`             | Helper scripts for camera control, focus, calibration and experiments     |
| `tests/`           | Test suite for the detection engine                                       |

Both components can run independently or together in the same deployment.

---

## PyroEngine: wildfire detection on edge devices

PyroEngine provides a high level interface to use deep learning models in production while being connected to the alert API.

### Quick example

```python
from pyroengine.core import Engine
from PIL import Image…
