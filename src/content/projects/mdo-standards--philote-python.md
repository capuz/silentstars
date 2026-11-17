---
repo: "MDO-Standards/Philote-Python"
name: "Philote-Python"
description: "Python library for using and creating Philote analysis servers."
readmeQualityOk: true
url: "https://github.com/MDO-Standards/Philote-Python"
homepage: "https://mdo-standards.github.io/Philote-Python/"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 14
forks: 8
openIssues: 8
closedIssues: 31
watchers: 3
contributors: 9
recentReleases: 0
createdAt: "2023-03-01T02:17:32Z"
lastCommitAt: "2026-11-17T14:46:39Z"
lastReleaseAt: "2024-02-27T05:18:21Z"
status: "thriving"
tags: ["hidden_gem", "fork_magnet"]
healthScore: 86
undervaluedScore: 75
maintainers: ["chrislupp", "FrancoisGallard", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/5c6dcfea885b2242963f64206731c8049460c75c7c7337fec0166b0dce9f38a9/MDO-Standards/Philote-Python"
discussionCount: 2
---

[//]: # (![Philote]&#40;https://github.com/MDO-Standards/Philote-Python/blob/main/doc/graphics/philote-python.svg?raw=true&#41;)

# Philote-Python

Python library for using and creating Philote analysis servers.

Documentation can be found at:

https://MDO-Standards.github.io/Philote-Python

## Requirements

The development process requires the following tools to be installed
(they will be installed if not present):

- grpcio-tools
- protoletariat
- importlib.resources

Additionally, the following dependencies are required by Philote MDO and will be
installed automatically during the installation process:

- numpy
- scipy
- grpcio

To run the unit and integration tests, you will need:

- openmdao (can be found [here](https://github.com/OpenMDAO/OpenMDAO) or installed via pip)
- gemseo (can be found [here](https://gitlab.com/gemseo/dev/gemseo) or installed via pip)

## Installation

The easiest way for users to install this library is via pip using the PyPI package:

    pip install philote-mdo

If you need or want to install the package from the repository, you can doe this using pip:

    pip install <path/to/Philote-Python>

or

    pip install -e <path/to/Philote-Python>

for…
