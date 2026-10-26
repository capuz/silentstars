---
repo: "courtois-neuromod/cneuromod.all"
name: "cneuromod.all"
description: "Super-dataset of all cneuromod raw data and derivatives. "
readmeQualityOk: true
url: "https://github.com/courtois-neuromod/cneuromod.all"
language: "Shell"
languages: ["Shell"]
languagePcts: [100]
stars: 5
forks: 3
openIssues: 29
closedIssues: 17
watchers: 0
contributors: 7
recentReleases: 0
createdAt: "2025-08-25T17:32:14Z"
lastCommitAt: "2026-10-26T18:08:59Z"
status: "thriving"
tags: []
healthScore: 85
undervaluedScore: 80
maintainers: ["lunebellec", "bpinsard", "MarieStLaurent"]
openGraphImageUrl: "https://opengraph.githubassets.com/bd543f6776bdc3357cb64a5218c6ee7a431c81a9e774b74731e52e9430e3c764/courtois-neuromod/cneuromod.all"
---

# Courtois NeuroMod

The [Courtois NeuroMod project](https://www.cneuromod.ca/) is a dense fMRI database collected on 6 subjects since 2018 across a broad range of cognitive tasks. Full documentation — dataset descriptions, access instructions, and download guides — is available at [docs.cneuromod.ca](https://docs.cneuromod.ca).

## Repository structure

`cneuromod.all` is a [DataLad](https://www.datalad.org/) YODA meta-repository. Each experimental paradigm is a top-level folder (e.g. `hcptrt/`, `friends/`, `anat/`) containing independent git submodules for raw BIDS data, fMRIPrep derivatives, MRIQC reports, and other processing outputs. Most data files are git-annex symlinks and must be explicitly retrieved with `datalad get`.

## License

The CNeuroMod data are shared under a [CC0 license](https://creativecommons.org/publicdomain/zero/1.0/legalcode).

## How to cite

We kindly ask that all publications using CNeuroMod datasets include the following paragraph in their acknowledgement section:

> The Courtois project on neural modelling was made possible by a generous donation from the Courtois foundation, administered by the Fondation Institut Gériatrie Montréal at CIUSSS du…
