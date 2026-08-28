---
repo: "elafmusa/pyLOCO"
name: "pyLOCO"
description: "Python package for the Linear Optics from Closed Orbits (LOCO) algorithm used for parameters fittings and accelerator lattice tuning"
readmeQualityOk: true
url: "https://github.com/elafmusa/pyLOCO"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 7
forks: 2
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2025-09-16T17:35:02Z"
lastCommitAt: "2026-08-28T14:33:42Z"
lastReleaseAt: "2026-01-10T11:07:44Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 88
undervaluedScore: 68
maintainers: ["elafmusa"]
openGraphImageUrl: "https://opengraph.githubassets.com/cf0d45cf533b653ea77c7db119225ee50ab10e383800b713623f864cade4f14f/elafmusa/pyLOCO"
---

# pyLOCO

pyLOCO is a Python implementation of the Linear Optics from Closed Orbits (LOCO)
for fitting accelerator models to measured or error-simulated data.

LOCO reference: J. Safranek, “Experimental determination of storage ring
optics using orbit response measurements,” *NIM A* 388 (1997), 27–36,
[doi:10.1016/S0168-9002(97)00309-4](https://doi.org/10.1016/S0168-9002(97)00309-4).

## Install and launch

Python 3.10 or newer is recommended.

```bash
git clone https://github.com/elafmusa/pyLOCO.git
cd pyLOCO
python3 -m venv .venv
source .venv/bin/activate
python -m pip install -e ".[gui]"
```

## GUI

Launch the graphical interface from the pyLOCO directory:

```bash
pyloco-gui
```

Alternatively, launch it with Python:

```bash
python -m pyLOCO.gui.app
```

On Windows, activate the environment with `.venv\Scripts\activate` instead of
`source .venv/bin/activate`.

## Recommended examples

If you are new to pyLOCO, start with the simple single-quadrupole example:

```bash
python3 Examples/reconstruct_quadrupoles_errors_examples/reconstruct_one_quad_errors/example_one_quad_error.py
```

For a real measured-machine application, use the PETRA III coupling example:

```bash
python3…
