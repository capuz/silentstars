---
repo: "tkoyama010/pyvista-js"
name: "pyvista-js"
description: "PyVista-like API for vtk.js"
readmeQualityOk: true
url: "https://github.com/tkoyama010/pyvista-js"
homepage: "https://pyvista-js.readthedocs.io/en/latest/?badge=latest"
language: "Python"
languages: ["Python"]
languagePcts: [88]
topics: ["3d", "fem", "finite-element-analysis", "finite-elements", "hacktoberfest", "mesh", "mesh-processing", "meshviewer", "open-science", "plotting"]
stars: 7
forks: 2
openIssues: 26
closedIssues: 66
watchers: 0
contributors: 4
recentReleases: 0
createdAt: "2026-01-31T08:51:49Z"
lastCommitAt: "2026-10-24T08:20:19Z"
lastReleaseAt: "2026-03-16T16:01:58Z"
status: "thriving"
tags: ["hidden_gem", "funded"]
healthScore: 92
undervaluedScore: 67
maintainers: ["dependabot[bot]", "tkoyama010", "pre-commit-ci[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/fad54c4c869c7f939f742167b414c3ff9b8c385d4344faa24d39af8dc831e761/tkoyama010/pyvista-js"
fundingLinks: ["GITHUB:https://github.com/tkoyama010"]
discussionCount: 4
---

# pyvista-js

[PyVista](https://github.com/pyvista/pyvista)-like API for [vtk.js](https://github.com/Kitware/vtk-js) — bring intuitive 3D visualization to the browser.

| [Try it with JupyterLite] | [Try it with Stlite] |
| :-----------------------: | :------------------: |
| ![jupyterlite-preview] | ![stlite-preview] |

## Table of Contents

- [Table of Contents](#table-of-contents)
- [Install](#install)
- [Usage](#usage)
- [Citation](#citation)
- [Contributing](#contributing)
- [License](#license)

## Install

```bash
pip install pyvista-js
```

To generate scenes with large meshes several times faster, also install the
optional [orjson](https://github.com/ijl/orjson) dependency:

```bash
pip install "pyvista-js[fast]"
```

For Pyodide/stlite:

```python
import micropip

await micropip.install("pyvista-js")
await micropip.install("orjson")  # optional, for speed
```

## Usage

```python
import pyvista_js as pv

plotter = pv.Plotter()
plotter.add_mesh(pv.Sphere(), color="red")
plotter.show()
```

## Citation

If you use pyvista-js in your research or projects, please cite it using the following:

```bibtex
@software{koyama_pyvista_js,
  author       = {Koyama, Tetsuo},
  title…
