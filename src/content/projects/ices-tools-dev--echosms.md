---
repo: "ices-tools-dev/echoSMs"
name: "echoSMs"
description: "Making acoustic scattering models available to fisheries and plankton scientists via the world wide web"
readmeQualityOk: true
url: "https://github.com/ices-tools-dev/echoSMs"
homepage: "https://ices-tools-dev.github.io/echoSMs/"
language: "Python"
languages: ["Python", "MATLAB"]
languagePcts: [56, 36]
topics: ["acoustics", "backscatter", "fisheries", "models", "plankton", "scattering"]
stars: 22
forks: 6
openIssues: 9
closedIssues: 10
watchers: 8
contributors: 8
recentReleases: 0
createdAt: "2024-05-23T10:27:10Z"
lastCommitAt: "2026-07-07T05:40:16Z"
lastReleaseAt: "2024-10-09T02:23:05Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "hidden_gem"]
healthScore: 89
undervaluedScore: 60
maintainers: ["gavinmacaulay"]
openGraphImageUrl: "https://opengraph.githubassets.com/2a335a5b9a2dbd130d3b02428a1a78afddc721c57a7011fed2054a36c9a16c73/ices-tools-dev/echoSMs"
discussionCount: 4
---

# echoSMs

> Making acoustic scattering models available to fisheries and plankton scientists via the world wide web

EchoSMs provides acoustic scattering models for fisheries and plankton acoustic research. By providing the models in an open-access and open-source software language (e.g, Python, R) and providing morphological and anatomical data in open data formats (e.g., HDF5, relational databases), the proper and appropriate use of these models can extend to the entire fisheries and plankton acoustics’ community.

## Install

EchoSMs is available on the python Package Index as [echosms](https://pypi.org/project/echosms/) and will be available on conda-forge in the future.

To install the core library:
```bash
pip install echosms
```

To install with the optional GUI shape viewer:
```bash
pip install echosms[viewer]
```

## Documentation

EchoSMs documentation is available [here](https://ices-tools-dev.github.io/echoSMs/).

## Viewer

EchoSMs includes a GUI tool for visualizing organism shapes. If installed with the `[viewer]` option, you can launch it using:

```bash
echosms-view
```

## Contributing

We welcome all contributions to echoSMs, be it code, test cases, bug…
