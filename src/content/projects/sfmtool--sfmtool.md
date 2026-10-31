---
repo: "sfmtool/sfmtool"
name: "sfmtool"
description: "Fun with Structure from Motion."
readmeQualityOk: true
url: "https://github.com/sfmtool/sfmtool"
homepage: "https://sfmtool.github.io/"
language: "Rust"
languages: ["Rust"]
languagePcts: [81]
topics: ["3d-reconstuction", "structure-from-motion"]
stars: 7
forks: 2
openIssues: 1
closedIssues: 0
watchers: 1
contributors: 3
recentReleases: 1
createdAt: "2026-03-31T01:39:32Z"
lastCommitAt: "2026-10-31T07:45:39Z"
lastReleaseAt: "2026-10-06T05:28:01Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 51
maintainers: ["mwiebe"]
openGraphImageUrl: "https://opengraph.githubassets.com/946eeac62ba35765b89c4edbc1e04ae3e38303504ea2cd1e704ae31bec82bdf9/sfmtool/sfmtool"
---

# SfM Tool

A tool for creating and exploring Structure from Motion (SfM) reconstructions,
built on [COLMAP](https://colmap.github.io/) and [OpenCV](https://opencv.org/).

The documentation is at [sfmtool.github.io](https://sfmtool.github.io/), built
from the
[sfmtool/sfmtool.github.io](https://github.com/sfmtool/sfmtool.github.io)
repository.

Under construction - project is being restructured to better fit what it
evolved into.

## Components

- **`sfm` CLI** - Create workspaces, run SfM solves, and inspect reconstructions
- **SfM Explorer GUI** - View reconstructions in 3D, explore tracks and camera rays
- **Python bindings** - Access SfM functionality from Python via `sfmtool-py`

## Quick Start

```bash
# Create a workspace with your images
mkdir -p workspace/images
cp /path/to/images/*.jpg workspace/images/
cd workspace

# Initialize and solve
sfm ws init .
sfm solve -g images/

# Inspect the result
sfm inspect sfmr/[filename].sfmr
```

## Convert videos to image sequences

To try many different things with a particular 3D reconstruction, having the
data as a video complicates individual frame access. Therefore the `sfm` command expects you
to always convert to images first.…
