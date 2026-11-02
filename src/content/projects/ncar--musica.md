---
repo: "NCAR/musica"
name: "musica"
description: "Multi-Scale Infrastructure for Chemistry and Aerosols"
readmeQualityOk: true
url: "https://github.com/NCAR/musica"
homepage: "https://musica.readthedocs.io/en/stable/"
language: "Jupyter Notebook"
languages: ["Jupyter Notebook"]
languagePcts: [54]
stars: 20
forks: 12
openIssues: 26
closedIssues: 367
watchers: 7
contributors: 25
recentReleases: 0
createdAt: "2022-10-12T16:42:28Z"
lastCommitAt: "2026-11-02T13:38:11Z"
lastReleaseAt: "2024-09-26T19:03:39Z"
status: "thriving"
tags: ["hidden_gem", "fork_magnet"]
healthScore: 97
undervaluedScore: 71
maintainers: ["K20shores", "github-actions[bot]", "boulderdaze"]
openGraphImageUrl: "https://opengraph.githubassets.com/acbdecb6d1449c4289a573fecabb07c119312900f3075e977e1549cc99521dff/NCAR/musica"
discussionCount: 6
---

# MUSICA

Multi-Scale Infrastructure for Chemistry and Aerosols

MUSICA is a collection of modeling software, tools, and grids, that
allow for robust modeling of chemistry in Earth's atmosphere.

At present the project encompasses these core components
- [TUV-x](https://github.com/NCAR/tuv-x)
    - A photolysis rate calculator 

- [MICM](https://github.com/NCAR/micm)
    - Model Independent Chemical Module

- [CARMA](https://github.com/ESCOMP/CARMA)
    - Community Aerosol and Radiation Model for Atmospheres (integration in development)

- [Mechanism Configuration](https://github.com/NCAR/MechanismConfiguration)
    - The standardized format to describe atmospheric chemistry

These components are used to drive the MUSICA software ecosystem. This is a snapshot of how MUSICA can be used with different
models.

# Installation

MUSICA provides interfaces for multiple programming languages. Choose the installation method that best fits your needs:

## Python

Most scientific users may prefer our python interface. It can be installed with pip:

```bash
pip install musica
```

For detailed Python installation instructions, usage examples, and development information, see the [Python…
