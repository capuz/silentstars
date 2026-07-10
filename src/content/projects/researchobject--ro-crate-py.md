---
repo: "ResearchObject/ro-crate-py"
name: "ro-crate-py"
description: "Python library for RO-Crate"
readmeQualityOk: true
url: "https://github.com/ResearchObject/ro-crate-py"
homepage: "https://pypi.org/project/rocrate/"
language: "Python"
languages: ["Python", "Jupyter Notebook"]
languagePcts: [56, 40]
topics: ["metadata", "ro-crate", "researchobject", "galaxy", "cwl", "biohackcovid20", "biohackeu20"]
stars: 86
forks: 37
openIssues: 18
closedIssues: 84
watchers: 37
contributors: 19
recentReleases: 0
createdAt: "2019-10-21T15:44:52Z"
lastCommitAt: "2026-07-10T07:00:21Z"
lastReleaseAt: "2021-11-08T10:05:38Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 89
undervaluedScore: 38
maintainers: ["simleo", "orviz", "chillenzer"]
openGraphImageUrl: "https://opengraph.githubassets.com/279589f5df89321d50a2131f4a2142df1fdebfdf3c2ac7c4ef9f5d43e4cc801a/ResearchObject/ro-crate-py"
---

ro-crate-py is a Python library to create and consume [Research Object Crates](https://w3id.org/ro/crate). It supports the current [RO-Crate 1.2](https://w3id.org/ro/crate/1.2) specification as well as the older [RO-Crate 1.1](https://w3id.org/ro/crate/1.1) and [RO-Crate 1.0](https://w3id.org/ro/crate/1.0).

## Installation

ro-crate-py requires Python 3.9 or later. The easiest way to install is via [pip](https://docs.python.org/3/installing/):

```
pip install rocrate
```

To install the package with support for converting Galaxy workflows to CWL:

```
pip install rocrate[ga2cwl]
```

To install manually from this code base (e.g., to try the latest development revision):

```
git clone https://github.com/ResearchObject/ro-crate-py
cd ro-crate-py
pip install .
```

## Usage

### Creating an RO-Crate

In its simplest form, an RO-Crate is a directory tree with an `ro-crate-metadata.json` file at the top level. This file contains metadata about the other files and directories, represented by [data entities](https://www.researchobject.org/ro-crate/1.1/data-entities.html). These metadata consist both of properties of the data entities themselves and of other, non-digital entities…
