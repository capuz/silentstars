---
repo: "openghg/openghg_inversions"
name: "openghg_inversions"
description: "University of Bristol Atmospheric Chemistry Research Group RHIME Inversion code (with openghg dependency)"
readmeQualityOk: true
url: "https://github.com/openghg/openghg_inversions"
homepage: "https://openghg.github.io/openghg_inversions/"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 8
forks: 1
openIssues: 103
closedIssues: 131
watchers: 1
contributors: 12
recentReleases: 0
createdAt: "2022-10-25T11:19:47Z"
lastCommitAt: "2026-07-05T20:18:01Z"
lastReleaseAt: "2026-01-30T12:12:01Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "hidden_gem"]
healthScore: 89
undervaluedScore: 73
maintainers: ["brendan-m-murphy", "Copilot"]
openGraphImageUrl: "https://opengraph.githubassets.com/641a22f77edacf886f430ba9441fadfebb555302980527805b44c571adcf21f8/openghg/openghg_inversions"
discussionCount: 6
---

# OpenGHG Inversions

OpenGHG Inversions is a Python package that is being developed as part of the [OpenGHG project](https://openghg.org) with the aim of merging the data-processing and simulation modelling capabilities of OpenGHG with the atmospheric Bayesian inverse models developed by the Atmospheric Chemistry Research Group (ACRG) at the University of Bristol, UK.

Currently, OpenGHG Inversions includes the following regional inversion models:
- Hierarchical Bayesian Markov Chain Monte Carlo (HBMCMC) model (as described in Ganesan et al., 2014, _ACP_)

## Installation

### Using Pixi (recommended for development)

OpenGHG Inversions reads and writes NetCDF/HDF5 data through OpenGHG,
`xarray`, `h5netcdf`, `h5py`, and `netcdf4`. If these packages
are installed from unrelated PyPI wheels, their bundled HDF5 libraries can
be incompatible. The Pixi environment in this repository installs the
compiled HDF5/NetCDF stack from conda-forge and installs
`openghg_inversions` in editable mode.

Install [Pixi](https://pixi.prefix.dev/latest/installation/), then run:

```bash
git clone https://github.com/openghg/openghg_inversions.git
cd openghg_inversions
pixi install -e dev
pixi run -e…
