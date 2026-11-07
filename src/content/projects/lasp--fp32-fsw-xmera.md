---
repo: "lasp/fp32-fsw-xmera"
name: "fp32-fsw-xmera"
description: "A collection of flight software modules that can be integrated into a flight system or Xmera simulation without modification."
readmeQualityOk: true
url: "https://github.com/lasp/fp32-fsw-xmera"
language: "C++"
languages: ["C++"]
languagePcts: [74]
stars: 6
forks: 4
openIssues: 1
closedIssues: 1
watchers: 0
contributors: 20
recentReleases: 0
createdAt: "2025-07-08T22:40:26Z"
lastCommitAt: "2026-11-07T22:52:08Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 89
undervaluedScore: 82
maintainers: ["patkenneally", "thibaudteil", "JulianHammerl"]
openGraphImageUrl: "https://opengraph.githubassets.com/d8f63715cfb808adc2b2211b2117453fce2223f96d6c46f185a4e7abf6f4b53a/lasp/fp32-fsw-xmera"
---

# Adamant-Xmera Flight Software Algorithms
This repository contains the GNC FSW algorithms.

## Getting Started
This repository has two primary usages and therefore two build paths:
1. To compile the FSW algorithms as modules for the Xmera simulation tool.
2. To compile the FSW algorithms as a single library for use within the Adamant system.

The build Xmera build path is controlled by the Xmera build system. It has the directory structure:
- algorithms/
  - CMakeLists.txt
  - alg1/
    - CMakeLists.txt
    - module.i
    - module.h
    - module.cpp
  - alg2/
    - etc.

The flight software build path is controlled by the CMake build system.

### Dependencies:
- Eigen for freestanding C++ (it's assumed that the Eigen repo is at ../ relative to this repo)

### Required Tooling:
- GCC 13.3.1 or higher
- CMake 3.24 or higher
- Python 3.10 or higher

### Linux
1. Install GCC 13.3.1 with `sudo apt install gcc-13`
2. Test GCC with `gcc --version` - this command should output information about the installed GCC compiler.

If you want to set GCC 13 as your default compiler;
```
# Add the compiler versions to the alternatives system
sudo update-alternatives --install /usr/bin/gcc gcc…
