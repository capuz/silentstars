---
repo: "icenet-ai/icenet"
name: "icenet"
description: "The icenet library is a pip installable python package containing the commands and code you need to produce forecasts"
readmeQualityOk: true
url: "https://github.com/icenet-ai/icenet"
homepage: "https://icenet.ai/docs"
language: "Python"
languages: ["Python"]
languagePcts: [99]
stars: 34
forks: 16
openIssues: 97
closedIssues: 160
watchers: 4
contributors: 12
recentReleases: 0
createdAt: "2022-01-19T23:15:16Z"
lastCommitAt: "2026-11-11T11:18:44Z"
status: "thriving"
tags: ["needs_contributors", "hidden_gem"]
healthScore: 70
undervaluedScore: 41
maintainers: ["SophieGrunau", "bnubald", "scotthosking"]
openGraphImageUrl: "https://opengraph.githubassets.com/25c52d8a9771fed864fe3f0d185358520f2756fdc2fcb9b5a4e757ebafbd3986/icenet-ai/icenet"
discussionCount: 5
---

# icenet

This is the core python library for the IceNet sea-ice forecasting system. 

This `README` will be worked on more, but there's plenty of information around 
in the [`icenet-ai`][3] organisations repositories, which demonstrate usage of 
this library.

## Table of contents

* [Overview](#overview)
* [Installation](#installation)
* [Implementation](#implementation)
* [Pipeline](#pipeline)
* [Contributing to IceNet](#contributing-to-icenet)
* [Deployment](#deployment-to-pypi)
* [Credits](#credits)
* [License](#license)

## Installation

We're still working on clear dependency management using pip, Tensorflow is best through pip but obviously you need NVIDIA dependencies for GPU based training. If you're having trouble with system dependencies some advice about environment setup is given by the examples [under the pipeline repository][1].

Please note that icenet has an optional dependency on eccodes which requires a system library and a python wrapper. The system library can be installed via conda.

By default, Tensorflow will be built for CPU only when icenet is installed via pip. So, optionally, Tensorflow can be installed with CUDA support (recommended).

```bash
conda…
