---
repo: "peterspackman/chmpy"
name: "chmpy"
description: "Spherical harmonic shape descriptors, promolecule densities, isosurfaces and Hirshfeld surfaces in python"
readmeQualityOk: true
url: "https://github.com/peterspackman/chmpy"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["machine-learning-library", "crystallography", "descriptor-learning", "descriptor", "hirshfeld-surface", "isosurface", "promolecule", "electron-density"]
stars: 30
forks: 4
openIssues: 1
closedIssues: 5
watchers: 2
contributors: 2
recentReleases: 0
createdAt: "2019-09-29T10:20:06Z"
lastCommitAt: "2026-10-27T12:38:21Z"
lastReleaseAt: "2025-06-20T04:29:31Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 90
undervaluedScore: 54
maintainers: ["peterspackman"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/211644812/3813f580-ecfb-11ea-8135-62290d73f342"
---

A library for computational chemistry in python.
    ·

chmpy supports handling molecules, crystals, Hirshfeld & promolecule 
density isosurfaces, spherical harmonic shape descriptors and much more...

# Installation

Basic installation can be done through the python package manager `pip`:

``` bash
pip install chmpy
# or to install directly from GitHub:
pip install git+https://github.com/peterspackman/chmpy.git
```

Plotting and mesh handling are optional extras, so the default install stays
small:

``` bash
pip install 'chmpy[plots]'   # matplotlib, for the plotting helpers
pip install 'chmpy[mesh]'    # trimesh, for isosurfaces and meshes
pip install 'chmpy[all]'     # everything
```

For development or modifications, install locally using pip:

``` bash
pip install -e .
```

# Features
While the library is intended to be flexible and make it easy to build
complex pipelines or properties, the following is a brief summary of
intended features:

- Load crystal structures from `.cif`, `.res`, `POSCAR` files.
- Evaluate promolecule and procrystal electron densities.
- Easily generate Hirshfeld or promolecule isosurfaces and associated properties.
- Easily generate spherical…
