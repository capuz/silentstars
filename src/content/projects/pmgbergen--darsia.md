---
repo: "pmgbergen/DarSIA"
name: "DarSIA"
description: "Darcy scale image analysis toolbox"
readmeQualityOk: true
url: "https://github.com/pmgbergen/DarSIA"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 13
forks: 10
openIssues: 72
closedIssues: 46
watchers: 0
contributors: 14
recentReleases: 0
createdAt: "2022-06-01T10:00:17Z"
lastCommitAt: "2026-09-12T08:04:44Z"
lastReleaseAt: "2023-12-20T01:04:21Z"
status: "thriving"
tags: ["solo_builder", "fork_magnet"]
healthScore: 87
undervaluedScore: 72
maintainers: ["jwboth", "Copilot"]
openGraphImageUrl: "https://opengraph.githubassets.com/4eed3243974a1cf1a841f42aec3ef3027f3c8f427172a852c6e14464aed709cc/pmgbergen/DarSIA"
---

# DarSIA

**Darcy scale image analysis toolbox** — an open-source Python library for
turning images of porous-media experiments into quantitative physical data.

DarSIA represents an image as an array that also knows its physical extent,
acquisition time and coordinate system, and provides:

- **I/O** for optical photographs, DICOM stacks and simulation output (vtu);
- **corrections** — colour, illumination, curvature, perspective, drift,
  deformation;
- **restoration** — total-variation and H1 denoising;
- **segmentation and registration** of multi-layered media;
- **concentration analysis** — tracer / CO2 / mass maps, with pluggable signal
  models and calibration;
- **transport-based distances** (Earth Mover's / Wasserstein);
- a **configuration-driven workflow system** and a **Qt GUI** that runs it
  without scripting.

## Documentation

<https://pmgbergen.github.io/DarSIA> — user guide, runnable example gallery, and full API reference.

See the [example gallery](https://pmgbergen.github.io/DarSIA/auto_examples/) for
more, including CO2 concentration analysis and Wasserstein distances.

## Installation

DarSIA needs **Python 3.12+** and is installed from a clone (not on PyPI…
