---
repo: "OpenAEV-Platform/injectors"
name: "injectors"
description: "OpenAEV Injectors"
url: "https://github.com/OpenAEV-Platform/injectors"
language: "Python"
languages: ["Python"]
languagePcts: [96]
stars: 7
forks: 5
openIssues: 26
closedIssues: 86
watchers: 2
contributors: 50
recentReleases: 0
createdAt: "2024-03-11T00:14:42Z"
lastCommitAt: "2026-07-03T12:40:31Z"
lastReleaseAt: "2024-06-06T14:58:20Z"
status: "thriving"
tags: ["hidden_gem", "fork_magnet"]
healthScore: 92
undervaluedScore: 82
maintainers: ["Filigran-Automation", "SamuelHassine", "Megafredo"]
openGraphImageUrl: "https://opengraph.githubassets.com/beefd4ac83440efa4735b1d135071e86cf033f91cc6868eb46bfab44e0c7e08f/OpenAEV-Platform/injectors"
---

# OpenAEV injectors

The following repository is used to store the OpenAEV injectors for the platform integration with other tools and applications. To know how to enable injectors on OpenAEV, please read the [dedicated documentation](https://docs.openaev.io/latest/deployment/ecosystem/injectors).

## Injectors list and statuses

This repository is used to host injectors that are supported by the core development team of OpenAEV. Nevertheless, the community is also developing a lot of injectors, third-parties modules directly linked to OpenAEV. You can find the list of all available injectors and plugins in the [OpenAEV ecosystem dedicated space](https://filigran.notion.site/OpenAEV-Ecosystem-30d8eb73d7d04611843e758ddef8941b).

### Creating a new injector

#### Project setup
Assuming a new collector by the name of `new_injector`, create a skeleton directory with:
```shell
poetry new new_injector
```

#### `pyoaev` dependency
We wish to retain the possibility to develop simultaneously on `pyoaev` and collectors. We rely on PEP 508 environment
markers to alternatively install a local path `pyoaev` dependency or a released version from PyPI; specifically the `extra`
marker.

Navigate…
