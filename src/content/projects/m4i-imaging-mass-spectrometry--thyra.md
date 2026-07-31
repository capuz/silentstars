---
repo: "M4i-Imaging-Mass-Spectrometry/thyra"
name: "thyra"
description: "A modern Python library for converting Mass Spectrometry Imaging (MSI) data into standardized SpatialData/Zarr format, enabling seamless integration with spatial omics analysis workflows."
readmeQualityOk: true
url: "https://github.com/M4i-Imaging-Mass-Spectrometry/thyra"
homepage: "https://m4i-imaging-mass-spectrometry.github.io/thyra/"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["bioinformatics", "bruker", "data-conversion", "imzml", "mass-spectrometry", "mass-spectrometry-imaging", "msi", "omics-data-integration", "scientific-computing", "spatial-omics"]
stars: 22
forks: 1
openIssues: 4
closedIssues: 25
watchers: 3
contributors: 4
recentReleases: 0
createdAt: "2024-10-30T16:21:44Z"
lastCommitAt: "2026-07-31T06:30:37Z"
lastReleaseAt: "2026-02-25T14:07:03Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 92
undervaluedScore: 64
maintainers: ["Tomatokeftes"]
openGraphImageUrl: "https://opengraph.githubassets.com/c0ec69e45687cbe9e7117266843a1a2453312a996cfc5a2b5ff0bb13748e6c77/M4i-Imaging-Mass-Spectrometry/thyra"
---

</p>

**Thyra** (from Greek thyra, meaning "door" or "portal") -- a modern Python library for converting Mass Spectrometry Imaging (MSI) data into the standardized **SpatialData/Zarr format**, serving as your portal to spatial omics analysis workflows.

**[Read the documentation](https://M4i-Imaging-Mass-Spectrometry.github.io/thyra)** | [Getting Started](https://M4i-Imaging-Mass-Spectrometry.github.io/thyra/getting-started/) | [Tutorial](https://M4i-Imaging-Mass-Spectrometry.github.io/thyra/tutorial/) | [CLI Reference](https://M4i-Imaging-Mass-Spectrometry.github.io/thyra/cli/) | [API Reference](https://M4i-Imaging-Mass-Spectrometry.github.io/thyra/api/)

### Try it without any data

```bash
pip install thyra
thyra-example-data example_data/synthetic_brain.imzML   # generates a small synthetic dataset
thyra example_data/synthetic_brain.imzML example_data/synthetic_brain.zarr
```

See the **[Tutorial](https://M4i-Imaging-Mass-Spectrometry.github.io/thyra/tutorial/)**
for a full walkthrough, including the published example dataset
([10.5281/zenodo.18326569](https://doi.org/10.5281/zenodo.18326569)).

## Features

- **Multiple Input Formats**: ImzML, Bruker (.d directories), Waters…
