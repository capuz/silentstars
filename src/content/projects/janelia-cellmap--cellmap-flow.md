---
repo: "janelia-cellmap/cellmap-flow"
name: "cellmap-flow"
description: "Interactive on-the-fly deep-learning inference, visualization and finetuning for large-scale 3D microscopy data in Neuroglancer."
readmeQualityOk: true
url: "https://github.com/janelia-cellmap/cellmap-flow"
homepage: "https://janelia-cellmap.github.io/cellmap-flow/"
language: "Python"
languages: ["Python", "TypeScript"]
languagePcts: [55, 34]
topics: ["neuroglancer", "deep-learning", "electron-microscopy", "image-analysis", "image-segmentation", "inference", "machinelearning", "microscopy"]
stars: 9
forks: 4
openIssues: 9
closedIssues: 6
watchers: 2
contributors: 12
recentReleases: 0
createdAt: "2024-09-25T19:08:57Z"
lastCommitAt: "2026-11-13T18:36:18Z"
lastReleaseAt: "2026-03-19T05:02:16Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 86
undervaluedScore: 73
maintainers: ["davidackerman", "mzouink"]
openGraphImageUrl: "https://opengraph.githubassets.com/853a8c424fb866e32cb9386dd2cdff19f6dddb9a63fe9612374d2af284219ac0/janelia-cellmap/cellmap-flow"
---

**Try it in your browser, with nothing to install:**

- **[Open the app](https://janelia-cellmap.github.io/cellmap-flow/app/)**, then open a volume (a public one, or in Chrome or Edge a folder on your machine) and pick models.
- **[Open an example](https://janelia-cellmap.github.io/cellmap-flow/app/?dataset=https://janelia-cosem-datasets.s3.amazonaws.com/jrc_mus-liver/jrc_mus-liver.zarr/recon-1/em/fibsem-uint8&model=setup_53)**,
  already running: an OpenOrganelle mouse-liver volume with the mitochondria model `setup_53` on it.

🚧 Still under construction: expect frequent changes.

## Features

- **Almost any model.** cellmap's own networks, any model in the
  [BioImage Model Zoo](https://bioimage.io), Cellpose-SAM in 2D or 3D,
  fly_organelles checkpoints, DaCapo runs, ONNX exports, and any PyTorch or
  TensorFlow model through a short Python script. Paste what you have (a path,
  a zoo nickname, a Hugging Face repo, a Cellpose model name) into the
  dashboard's *Add a model*, or run `cellmap_flow add REF`: it works out the
  model's type, the environment it runs in and anything it still needs.
- **Any volume.** zarr (v2 or v3, OME-Zarr), N5 or Neuroglancer precomputed,
  on…
