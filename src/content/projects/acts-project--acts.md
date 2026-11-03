---
repo: "acts-project/acts"
name: "acts"
description: "Experiment-independent toolkit for (charged) particle track reconstruction in (high energy) physics experiments implemented in modern C++"
readmeQualityOk: true
url: "https://github.com/acts-project/acts"
homepage: "https://acts-project.github.io"
language: "C++"
languages: ["C++"]
languagePcts: [87]
topics: ["particle-track-reconstruction", "reconstruction", "physics-experiment", "simulation"]
stars: 134
forks: 294
openIssues: 105
closedIssues: 546
watchers: 10
contributors: 153
recentReleases: 0
createdAt: "2019-03-13T09:44:13Z"
lastCommitAt: "2026-11-03T09:23:57Z"
lastReleaseAt: "2020-03-30T07:27:47Z"
status: "thriving"
tags: ["legacy_hero", "community_hub", "fork_magnet"]
healthScore: 96
undervaluedScore: 53
maintainers: ["paulgessinger", "andiwand", "mimodekjaer"]
openGraphImageUrl: "https://opengraph.githubassets.com/7e00a4daf69ba8f6d0811ce694b366b07b3ff73b39df50e6cba87347e4f9f073/acts-project/acts"
discussionCount: 23
---

# ACTS Common Tracking Software

or *A Common Tracking Software* if you do not like recursive acronyms

ACTS is an experiment-independent toolkit for (charged) particle track
reconstruction in (high energy) physics experiments implemented in modern C++.

More information can be found in the [ACTS documentation](https://acts-project.github.io/).

## Quick start

ACTS is developed in C++ and is built using [CMake](https://cmake.org). Building
the core library requires [Boost](https://www.boost.org) and
[Eigen](https://eigen.tuxfamily.org). The default C++ standard is C++23;
C++20 is supported with `-DCMAKE_CXX_STANDARD=20`. The
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

### Python…
