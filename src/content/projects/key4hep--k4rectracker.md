---
repo: "key4hep/k4RecTracker"
name: "k4RecTracker"
description: "Repository hosting tracker related reconstruction code (including vertex detector, outer tracker, tracking...)"
readmeQualityOk: true
url: "https://github.com/key4hep/k4RecTracker"
language: "C++"
languages: ["C++"]
languagePcts: [77]
stars: 6
forks: 40
openIssues: 2
closedIssues: 7
watchers: 6
contributors: 27
recentReleases: 1
createdAt: "2023-03-22T16:12:45Z"
lastCommitAt: "2026-11-04T08:03:10Z"
lastReleaseAt: "2026-10-16T16:18:01Z"
status: "thriving"
tags: ["hidden_gem", "fork_magnet"]
healthScore: 87
undervaluedScore: 82
maintainers: ["jmcarcell", "andread3vita", "davidlange6"]
openGraphImageUrl: "https://opengraph.githubassets.com/2aa96058b218152b75d05a7def34569df1ff03710f200282f820793bfaa95efe/key4hep/k4RecTracker"
---

# k4RecTracker

This repository hosts Gaudi components related to vertex and tracker reconstruction as well as tracking.

## Dependencies

* ROOT
* PODIO
* EDM4HEP
* DD4HEP
* Gaudi
* k4FWCore
* k4geo
* Delphes

Extra dependendis for tracking:
* PandoraSDK
* Eigen3
* onnxruntime
* Torch

## Installation
```
git clone git@github.com:key4hep/k4RecTracker.git
cd k4RecTracker
mkdir build install
cd build
cmake .. -DCMAKE_INSTALL_PREFIX=../install
make install -j 8
cd ../../
export K4RECTRACKER=$PWD/k4RecTracker/install/share/k4RecTracker; PATH=$PWD/k4RecTracker/install/bin/:$PATH; CMAKE_PREFIX_PATH=$PWD/k4RecTracker/install/:$CMAKE_PREFIX_PATH; LD_LIBRARY_PATH=$PWD/k4RecTracker/install/lib:$PWD/k4RecTracker/install/lib64:$LD_LIBRARY_PATH; export PYTHONPATH=$PWD/k4RecTracker/install/python:$PYTHONPATH
```

The following should be called in the folder hosting `k4RecTracker` each time you start a new session (even you do not need to re-build):
```
export K4RECTRACKER=$PWD/k4RecTracker/install/share/k4RecTracker; PATH=$PWD/k4RecTracker/install/bin/:$PATH; CMAKE_PREFIX_PATH=$PWD/k4RecTracker/install/:$CMAKE_PREFIX_PATH;…
