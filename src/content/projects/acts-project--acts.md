---
repo: "acts-project/acts"
name: "acts"
description: "Experiment-independent toolkit for (charged) particle track reconstruction in (high energy) physics experiments implemented in modern C++"
readmeQualityOk: true
url: "https://github.com/acts-project/acts"
homepage: "https://acts-project.github.io"
language: "C++"
languages: ["C++"]
languagePcts: [88]
topics: ["particle-track-reconstruction", "reconstruction", "physics-experiment", "simulation"]
stars: 129
forks: 274
openIssues: 106
closedIssues: 540
watchers: 10
contributors: 141
recentReleases: 0
createdAt: "2019-03-13T09:44:13Z"
lastCommitAt: "2026-09-03T08:14:40Z"
lastReleaseAt: "2020-03-30T07:27:47Z"
status: "thriving"
tags: ["legacy_hero", "community_hub", "fork_magnet"]
healthScore: 96
undervaluedScore: 54
maintainers: ["andiwand", "paulgessinger", "krasznaa"]
openGraphImageUrl: "https://opengraph.githubassets.com/584ff274bbb21980701e88f60bbe881a535dd02fdf659b0e878358ac80c7268d/acts-project/acts"
discussionCount: 23
---

# ACTS Common Tracking Software

or *A Common Tracking Software* if you do not like recursive acronyms

ACTS is an experiment-independent toolkit for (charged) particle track
reconstruction in (high energy) physics experiments implemented in modern C++.

More information can be found in the [ACTS documentation](https://acts-project.github.io/).

## Quick start

ACTS is developed in C++ and is build using [CMake](https://cmake.org). Building
the core library requires a C++20 compatible compiler,
[Boost](https://www.boost.org), and [Eigen](https://eigen.tuxfamily.org). The
following commands will clone the repository, configure, and build the core
library

```sh
git clone https://github.com/acts-project/acts <source>
cmake -B <build> -S <source>
cmake --build <build>
```

For more details, e.g. specific versions and additional dependencies, have a
look at the ["Building ACTS"
guide](https://acts-project.github.io/building_acts.html). If you find a bug,
have a feature request, or want to contribute to ACTS, have a look at the
[contribution guidelines](https://github.com/acts-project/acts/blob/HEAD/CONTRIBUTING.md).

### Python bindings

ACTS is also available as a Python package via…
