---
repo: "ecmwf/metkit"
name: "metkit"
description: "Toolkit for manipulating and describing meteorological objects, implementing the MARS language and associated processing and semantics."
readmeQualityOk: true
url: "https://github.com/ecmwf/metkit"
homepage: "https://sites.ecmwf.int/docs/metkit/"
language: "C++"
languages: ["C++"]
languagePcts: [86]
topics: ["mars", "fdb"]
stars: 10
forks: 17
openIssues: 2
closedIssues: 5
watchers: 13
contributors: 47
recentReleases: 0
createdAt: "2019-10-11T09:18:30Z"
lastCommitAt: "2026-10-29T14:06:58Z"
lastReleaseAt: "2023-03-13T11:55:20Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero", "community_watch", "fork_magnet"]
healthScore: 92
undervaluedScore: 75
maintainers: ["danovaro", "mcocdawc", "tweska"]
openGraphImageUrl: "https://opengraph.githubassets.com/afd688bd982e5afc41a4418d6ca46c2fa896127e5b7856a50e6cadc14dee2456/ecmwf/metkit"
---

> \[!IMPORTANT\]
> This software is **Graduated** and subject to ECMWF's guidelines on [Software Maturity](https://github.com/ecmwf/codex/raw/refs/heads/main/Project%20Maturity).

# metkit

## Requirements

Runtime dependencies:

- eckit -- http://github.com/ecmwf/eckit

Build dependencies:

- CMake --- For use and installation see http://www.cmake.org/
- ecbuild --- ECMWF library of CMake macros ()

## Installation

metkit employs an out-of-source build/install based on CMake.

Make sure ecbuild is installed and the ecbuild executable script is found ( `which ecbuild` ).

Now proceed with installation as follows:

```bash
# Environment --- Edit as needed
srcdir=$(pwd)
builddir=build
installdir=$HOME/local  

# 1. Create the build directory:
mkdir $builddir
cd $builddir

# 2. Run CMake
ecbuild --prefix=$installdir -- -DECKIT_PATH=<path/to/eckit/install> $srcdir

# 3. Compile / Install
make -j10
make install
```

## Release

Config files should be updated before releasing a new version.
Please refer to the documentation available on [Confluence](https://confluence.ecmwf.int/display/METK/MetKit+configuration)

## License

Copyright 2021 European Centre for Medium-Range Weather…
