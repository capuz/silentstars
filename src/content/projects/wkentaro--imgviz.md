---
repo: "wkentaro/imgviz"
name: "imgviz"
description: "Rich Image Visualization with Minimum Dependency (no OpenCV, Matplotlib)"
url: "https://github.com/wkentaro/imgviz"
language: "Python"
languages: ["Python"]
languagePcts: [99]
topics: ["image-visualization", "deep-learning", "semantic-segmentation", "instance-segmentation", "object-detection"]
stars: 264
forks: 30
openIssues: 23
closedIssues: 35
watchers: 8
contributors: 4
recentReleases: 2
createdAt: "2018-12-26T10:27:22Z"
lastCommitAt: "2026-06-27T00:34:11Z"
lastReleaseAt: "2026-06-10T08:52:08Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 91
undervaluedScore: 39
maintainers: ["wkentaro", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/4ddeceb393e57a70f4990ac4e039dd0216aaf32c56fe25741429b22d70813608/wkentaro/imgviz"
---

<h1 align="center">
  imgviz
</h1>

<h4 align="center">
  Image Visualization Tools
</h4>

</div>

</div>

<br/>

</div>

## Installation

```bash
pip install imgviz

# there are optional dependencies like skimage, below installs all.
pip install imgviz[all]
```

## Dependencies

- [cmap>=0.1.0](https://pypi.org/project/cmap)
- [numpy>=1.21.0](https://pypi.org/project/numpy)
- [Pillow>=5.3.0](https://pypi.org/project/Pillow)

## Getting Started

```python
# getting_started.py

import numpy as np

import imgviz

# sample data of rgb, depth, class label and instance masks
data = imgviz.data.arc2017()

rgb = data["rgb"]
gray = imgviz.rgb2gray(rgb)

# colorize depth image with viridis colormap
depth = data["depth"]
depthviz = imgviz.colorize(depth, vmin=0.3, vmax=1)

# colorize label image
class_label = data["class_label"]
labelviz = imgviz.label2rgb(
    class_label, image=gray, label_names=data["class_names"], font_size=20
)

# instance bboxes
bboxes = data["bboxes"].astype(int)
labels = data["labels"]
masks = data["masks"] == 1
captions = [data["class_names"][l] for l in labels]
maskviz = imgviz.instances2rgb(gray, masks=masks, labels=labels, captions=captions)

# per-instance…
