---
repo: "zlogic/cybervision"
name: "cybervision"
description: "Cybervision can generate a 3D model from two photos of an object"
readmeQualityOk: true
url: "https://github.com/zlogic/cybervision"
language: "Rust"
languages: ["Rust"]
languagePcts: [90]
topics: ["3d-reconstruction", "machine-vision", "vulkan-compute", "metal-compute-pipeline", "fundamental-matrix", "cross-correlation", "keypoint-detection", "image-processing", "rust-lang", "orb-features"]
stars: 10
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2015-02-25T17:32:38Z"
lastCommitAt: "2026-09-28T10:06:48Z"
lastReleaseAt: "2022-08-08T21:44:53Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 64
undervaluedScore: 34
maintainers: ["zlogic"]
openGraphImageUrl: "https://opengraph.githubassets.com/1f0d80fb55a2de77215b6fb3ff4f823d0df83ac647aa6a6d7c8c2268d394a9c6/zlogic/cybervision"
discussionCount: 0
---

# Cybervision

Cybervision is a 3D reconstruction software for Scanning Electron Microscope images.

The tool needs two images of an object taken from slighly different angles.
Cybervision can match those images and use the parallax effect to determine the object's 3D shape.

**⚠️  Experimental support for SFM** Cybervision has experimental support for SFM (structure from motion).
Multiple photos of the same object can be combined to create a mesh; however this can take a considerably longer time, and often produce weird loking results.

More information is available in the [Wiki](https://github.com/zlogic/cybervision/wiki).

## How to use it

Download a release distribution from [releases](https://github.com/zlogic/cybervision/blob/HEAD/zlogic/cybervision/releases).

Run cybervision:

```shell
cybervision [--scale=<scale>] [--focal-length=<focal-length>] [--mode=<cpu|gpu>] [--interpolation=<none|delaunay>] [--projection=<parallel|perspective>] [--mesh=<plain|vertex-colors|texture-coordinates>] [--no-bundle-adjustment] [--max-points=<max_points>] <img1> <img2> [<imgn>] <output>
```

`--scale=<scale>` is an optional argument to specify a depth scale, for example `--scale=-10.0`.…
