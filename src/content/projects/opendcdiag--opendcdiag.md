---
repo: "opendcdiag/opendcdiag"
name: "opendcdiag"
description: "OpenDCDiag is an open-source project designed to identify defects and bugs in CPUs. It consists of a set of tests built around a sophisticated CPU testing framework."
readmeQualityOk: true
url: "https://github.com/opendcdiag/opendcdiag"
language: "C++"
languages: ["C++", "C"]
languagePcts: [65, 23]
stars: 76
forks: 38
openIssues: 11
closedIssues: 26
watchers: 7
contributors: 33
recentReleases: 0
createdAt: "2021-10-13T20:24:10Z"
lastCommitAt: "2026-07-17T05:59:52Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 93
undervaluedScore: 50
maintainers: ["thiagomacieira", "mcisowsk", "AthenasJimenez"]
openGraphImageUrl: "https://opengraph.githubassets.com/de39ebb799aec6d12307e7eab80668c184c3584dd43c1cb0ea5a8d805fcb9d2e/opendcdiag/opendcdiag"
---

# OpenDCDiag

OpenDCDiag is an open-source project designed to identify defects and
bugs in CPUs. It consists of a set of tests built around a
sophisticated CPU testing framework. OpenDCDiag is primarily intended
for, but not limited to, Data Center CPUs.

## License

OpenDCDiag is released under the [Apache 2.0](https://github.com/opendcdiag/opendcdiag/blob/HEAD/LICENSE) license. The
OpenDCDiag framework includes some source code from other projects,
released under different licenses.  See
[LICENSE.3rdparty](https://github.com/opendcdiag/opendcdiag/blob/HEAD/LICENSE.3rdparty) for more details.

## Building OpenDCDiag

### Prerequisites

#### Ubuntu

OpenDCDiag has been built and tested on Ubuntu, starting with 21.04 and 21.10.
Before building, the following prerequisites must be installed.

```console
sudo apt-get install gcc g++ cmake libeigen3-dev libboost-all-dev libzstd-dev zlib1g-dev libgtest-dev meson
```

#### Fedora

OpenDCDiag has been built and tested on Fedora, starting with 33 and 34.
Before building, the following prerequisites must be installed.

```console
sudo dnf install -y boost-devel eigen3-devel gcc gcc-c++ git gtest-devel meson zlib-devel libzstd-devel
```…
