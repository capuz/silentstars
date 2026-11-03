---
repo: "NatLee/blur-generator"
name: "blur-generator"
description: "Generate blur image with 3 types of blur `motion`, `lens`, and `gaussian` by using OpenCV."
readmeQualityOk: true
url: "https://github.com/NatLee/blur-generator"
homepage: "https://pypi.org/project/BlurGenerator/"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["blur", "python3", "motion-blur", "lens-blur", "gaussian-blur", "blur-filter", "blur-generator", "blur-image", "blur-image-converter", "blurring-images"]
stars: 70
forks: 7
openIssues: 1
closedIssues: 2
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2021-05-13T10:29:46Z"
lastCommitAt: "2026-11-03T12:47:53Z"
lastReleaseAt: "2024-05-16T08:48:29Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 93
undervaluedScore: 34
maintainers: ["NatLee"]
openGraphImageUrl: "https://opengraph.githubassets.com/894e9e4e9996f1fa3bbf7a5d52f0870df5a932c30ba88a4319d5187d093fb3e6/NatLee/blur-generator"
---

# Blur Generator

Blur Generator adds **motion**, **lens** (bokeh) or **Gaussian** blur to images, from Python or from the
command line. Give it a depth map and it blurs every part of a photo by how far away it is, including a
camera-like depth of field that keeps one distance sharp and blurs what lies in front of and behind it.
Use it to make training data for blur detection or deblurring models (see
[simply-blur-detector](https://github.com/NatLee/simply-blur-detector)), or just to fake a portrait mode.

| Original | Motion |
|:---:|:---:|
|  |  |
| **Lens** | **Gaussian** |
|  |  |

## Installation

```bash
pip install BlurGenerator
```

It needs Python 3.7 or newer and installs OpenCV (`opencv-python`) and NumPy.

On a server or in a slim Docker image (for example `python:3.12-slim`), `import cv2` can fail with
`libxcb.so.1: cannot open shared object file` or `libGL.so.1: cannot open shared object file`. OpenCV needs
a few system libraries there; on Debian or Ubuntu install them with:

```bash
apt-get install -y libgl1 libglib2.0-0
```

## Quick start

The examples use the sample images in [`doc/`](https://github.com/NatLee/blur-generator/tree/main/doc).
Run them from the root…
