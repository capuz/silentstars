---
repo: "llnl/Umpire"
name: "Umpire"
description: "An application-focused API for memory management on NUMA & GPU architectures"
readmeQualityOk: true
url: "https://github.com/llnl/Umpire"
language: "C++"
languages: ["C++"]
languagePcts: [82]
topics: ["hpc", "memory-management", "gpu", "blt", "portability", "radiuss", "cpp"]
stars: 422
forks: 67
openIssues: 25
closedIssues: 120
watchers: 15
contributors: 46
recentReleases: 0
createdAt: "2018-03-12T19:13:20Z"
lastCommitAt: "2026-10-21T21:14:36Z"
lastReleaseAt: "2019-02-25T18:05:40Z"
status: "thriving"
tags: ["legacy_hero"]
healthScore: 89
undervaluedScore: 32
maintainers: ["kab163", "adrienbernede", "davidbeckingsale"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/124938654/eb9bca80-f001-11e9-866a-555def3e056c"
---

# <img src="https://cdn.rawgit.com/LLNL/Umpire/develop/share/umpire/logo/umpire-logo.png" width="128" valign="middle" alt="Umpire"/> Umpire

Umpire is a resource management library that allows the discovery, provision,
and management of memory on machines with multiple memory devices like NUMA and GPUs.

Umpire uses CMake and BLT to handle builds. Since BLT is included as a
submodule, first make sure you run:

    $ git submodule init && git submodule update

Then, make sure that you have a modern compiler loaded, and the configuration is as
simple as:

    $ mkdir build && cd build
    $ cmake ..

CMake will provide output about which compiler is being used. Once CMake has
completed, Umpire can be built with Make:

    $ make

For more advanced configuration you can use standard CMake variables.

# Documentation

Both user and code documentation is available [here](http://umpire.readthedocs.io/).

The Umpire [tutorial](https://umpire.readthedocs.io/en/develop/sphinx/tutorial.html) provides a step by step introduction to Umpire features.

If you have build problems, we have comprehensive [build system…
