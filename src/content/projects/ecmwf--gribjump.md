---
repo: "ecmwf/gribjump"
name: "gribjump"
description: "Efficient access to GRIB data without reading the whole message"
readmeQualityOk: true
url: "https://github.com/ecmwf/gribjump"
homepage: "https://sites.ecmwf.int/docs/gribjump"
language: "C++"
languages: ["C++"]
languagePcts: [65]
topics: ["polytope", "fdb", "feature-extraction", "grib"]
stars: 6
forks: 1
openIssues: 1
closedIssues: 5
watchers: 9
contributors: 28
recentReleases: 1
createdAt: "2023-12-05T21:45:07Z"
lastCommitAt: "2026-11-09T11:59:56Z"
lastReleaseAt: "2026-10-30T15:50:12Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 92
undervaluedScore: 74
maintainers: ["caraghbiner", "mcocdawc", "tbkr"]
openGraphImageUrl: "https://opengraph.githubassets.com/b38add2c77d1613902b9c5fa33d4b87c66105f1b832d0082db1f302de93e838a/ecmwf/gribjump"
---

# GribJump

GribJump is a C++ library for extracting subsets of data from GRIB files, particularly data archived in the [FDB](https://github.com/ecmwf/fdb).

> \[!IMPORTANT\]
> This software is **Incubating** and subject to ECMWF's guidelines on [Software Maturity](https://github.com/ecmwf/codex/raw/refs/heads/main/Project%20Maturity).

## Installation

### Dependencies

Currently, GribJump has the following runtime dependencies:

- [eccodes](https://github.com/ecmwf/eccodes)
- [eckit](https://github.com/ecmwf/eckit)
- [metkit](https://github.com/ecmwf/metkit)
- [fdb5](https://github.com/ecmwf/fdb)
- [libaec](https://github.com/MathisRosenhauer/libaec)

as well as [ecbuild](https://github.com/ecmwf/ecbuild) for building.

### C++ Library

Building and installing:

```bash
   # Environment --- Edit as needed
   srcdir=$(pwd)
   builddir=build
   installdir=$HOME/local  
   
   # 1. Create the build directory:
   mkdir $builddir
   cd $builddir

   # 2. Run ecbuild
   ecbuild --prefix=${installdir} -- \
   -DENABLE_MEMFS=ON \
   -DENABLE_ECCODES_THREADS=ON \
   -DENABLE_AEC=ON \
   -DCMAKE_INSTALL_PREFIX=$</path/to/installations> ${srcdir}
   
   # 3. Compile / Install
   make -j10…
