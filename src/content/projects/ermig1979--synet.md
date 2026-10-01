---
repo: "ermig1979/Synet"
name: "Synet"
description: "A small framework to infer neural network"
readmeQualityOk: true
url: "https://github.com/ermig1979/Synet"
language: "C++"
languages: ["C++"]
languagePcts: [95]
stars: 146
forks: 29
openIssues: 9
closedIssues: 28
watchers: 18
contributors: 11
recentReleases: 0
createdAt: "2018-01-12T05:28:12Z"
lastCommitAt: "2026-10-01T10:23:54Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 95
undervaluedScore: 42
maintainers: ["ermig1979", "Centimo"]
openGraphImageUrl: "https://opengraph.githubassets.com/de02535244da3a2909bbd26a29e1b5cf64af18a113b29119a03a9d80c2fba11c/ermig1979/Synet"
---

Introduction
============

Synet is a small framework to infer neural network on CPU. Synet uses models previously trained by other deep neural network frameworks.

The main advantages  of Synet are:

* Synet is faster then most other DNN original frameworks (has great single thread CPU performance).
* Synet has next external dependencies - [Cpl](https://github.com/ermig1979/Cpl) and [Simd Library](https://github.com/ermig1979/Simd).

Building of test applications for Linux
==============================
To build test applications you can run following bash script:

    git clone -b master --recurse-submodules -v https://github.com/ermig1979/Synet.git clone
    cd clone
    ./build.sh

And applications `test_inference_engine`, `test_onnx`, `test_optimizer`, `test_precision`, 
`use_face_detection` will be created in directory `build`.
There is a detail description of these test applications below.

Building tests with pre-built Conan packages (OpenVINO and ONNX Runtime)
==============================
Instead of building OpenVINO and ONNX Runtime from submodules, you can use pre-built Conan packages.
This requires [Conan](https://conan.io/) 2.x installed…
