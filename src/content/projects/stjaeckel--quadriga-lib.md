---
repo: "stjaeckel/quadriga-lib"
name: "quadriga-lib"
description: "C++/MEX/Python Utility library for radio channel modelling and simulations"
readmeQualityOk: true
url: "https://github.com/stjaeckel/quadriga-lib"
homepage: "http://quadriga-lib.org"
language: "C++"
languages: ["C++"]
languagePcts: [74]
stars: 12
forks: 2
openIssues: 13
closedIssues: 0
watchers: 2
contributors: 2
recentReleases: 0
createdAt: "2023-02-23T10:21:15Z"
lastCommitAt: "2026-10-31T15:56:51Z"
lastReleaseAt: "2024-07-04T09:44:14Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded", "under_pressure"]
healthScore: 70
undervaluedScore: 60
maintainers: ["stjaeckel"]
openGraphImageUrl: "https://opengraph.githubassets.com/828176574f808cac11e52c21fd439980db8886cbeae92ad6b731073072d6b2bd/stjaeckel/quadriga-lib"
fundingLinks: ["GITHUB:https://github.com/stjaeckel"]
discussionCount: 0
---

# Quadriga-Lib

C++ library with MATLAB, Octave and Python interfaces for radio channel modelling and simulation.

Quadriga-Lib generates channel impulse responses for system-level studies of mobile radio networks. It also provides tools for array antennas, channel data storage and processing, and site-specific (ray-tracing) simulations. Documentation and API reference: **[quadriga-lib.org](http://quadriga-lib.org)**.

## Relation to QuaDRiGa

[QuaDRiGa](https://quadriga-channel-model.de) is a geometry-based stochastic channel model written in MATLAB. Quadriga-Lib is its C++ successor by the same lead developer: the model components are being rewritten in C++ for speed, with thin interfaces to MATLAB, Octave and Python. It is not a drop-in replacement for the MATLAB toolbox; functions, names and file formats follow their own API. See the [API documentation](http://quadriga-lib.org) for what is available.

[QuaDRiGa-NG](https://github.com/stjaeckel/QuaDRiGa-NG) is a fork of the MATLAB QuaDRiGa toolbox that uses Quadriga-Lib in its backend.

## Features

- **Stochastic channel model (GBSM)**: large-scale and small-scale fading parameters, path loss, LOS probability, O2I loss, and…
