---
repo: "ecmwf/eccodes"
name: "eccodes"
description: "ECMWF's GRIB and BUFR decoding/encoding library"
readmeQualityOk: true
url: "https://github.com/ecmwf/eccodes"
homepage: "https://confluence.ecmwf.int/display/ECC"
language: "C++"
languages: ["C++"]
languagePcts: [53]
topics: ["meteorology", "bufr", "grib", "decoding", "encoding", "wmo"]
stars: 274
forks: 112
openIssues: 13
closedIssues: 32
watchers: 18
contributors: 68
recentReleases: 0
createdAt: "2018-12-10T19:52:30Z"
lastCommitAt: "2026-10-29T14:06:51Z"
lastReleaseAt: "2022-12-05T11:54:59Z"
status: "thriving"
tags: ["legacy_hero"]
healthScore: 92
undervaluedScore: 41
maintainers: ["joobog", "mcocdawc", "Choochmeque"]
openGraphImageUrl: "https://opengraph.githubassets.com/329291ef46067fdd583771736e75b333817c14345c494dd1561c61310dfa9692/ecmwf/eccodes"
---

ecCodes
=======

> [!IMPORTANT]
> This software is **Graduated** and subject to ECMWF's guidelines on [Software Maturity](https://github.com/ecmwf/codex/raw/refs/heads/main/Project%20Maturity).

ecCodes is a package developed by ECMWF which provides an application programming interface
and a set of tools for decoding and encoding messages in the following formats:

   * WMO FM-92 GRIB edition 1 and edition 2
   * WMO FM-94 BUFR edition 3 and edition 4
   * WMO GTS abbreviated header (only decoding)

A useful set of command line tools provide quick access to the messages.
C, Fortran 90 and Python interfaces provide access to the main ecCodes functionality.

ecCodes is an evolution of GRIB API.
It is designed to provide the user with a simple set of functions to access data from
several formats with a key/value approach.

Documentation can be found here:
   https://confluence.ecmwf.int/display/ECC/ecCodes+Home

INSTALLATION
------------

1. Download ecCodes from https://confluence.ecmwf.int/display/ECC/Releases

2. Unpack distribution:
   ```
   tar -xzf eccodes-x.y.z-Source.tar.gz
   ```

3. Create a separate directory to build ecCodes:
   ```
   mkdir build
   cd build
   ```

4.…
