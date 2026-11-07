---
repo: "artraweditor/SMART"
name: "SMART"
description: "SMART is a simple GUI front-end to AI models for the ART raw image processor."
readmeQualityOk: true
url: "https://github.com/artraweditor/SMART"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 7
forks: 3
openIssues: 0
closedIssues: 2
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2025-09-03T20:01:58Z"
lastCommitAt: "2026-11-07T16:10:48Z"
lastReleaseAt: "2025-09-07T15:13:42Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 88
undervaluedScore: 69
maintainers: ["agriggio"]
openGraphImageUrl: "https://opengraph.githubassets.com/69a28d6785a384b5b6057474abbb17fa8682529395aa0fbf0592c5f1e902875c/artraweditor/SMART"
---

# SMART

SMART is a simple GUI front-end to AI models, tailored to the
[ART](https://artraweditor.github.io/) raw image processor. It has two
modes:

- **AI masking** (the default): builds subject masks for an image using
  Segment Anything 2, to be used with ART.
- **AI healing**: removes unwanted elements by painting over them and
  filling the area with the LaMa inpainting model ("generative fill"),
  working on linear float32 TIFF files exported from ART without
  clipping.

- **Raw denoising**: removes noise from a mosaiced (Bayer) or a linear
  (demosaiced) DNG with a learned denoiser, with a before/after preview,
  either from the GUI or from the command line.

The mode is selected with the `--mode` command-line switch: `--mode mask`,
`--mode heal` or `--mode denoise`. If the switch is not given, the GUI asks
which mode to use when it starts.

## Prerequisites

Make sure you have the following installed:

1. **Python 3**
2. **wxPython**: https://wxpython.org
3. **Pillow**: https://pillow.readthedocs.io/
4. **platformdirs**: http://pypi.org/project/platformdirs/
5. **NumPy**, **SciPy**, **tifffile** and **imagecodecs**
6. For AI masking, healing and raw denoising:…
