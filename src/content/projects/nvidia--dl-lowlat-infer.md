---
repo: "NVIDIA/dl-lowlat-infer"
name: "dl-lowlat-infer"
description: "Low Latency inference for sliding window LSTMs"
readmeQualityOk: true
url: "https://github.com/NVIDIA/dl-lowlat-infer"
language: "Cuda"
languages: ["Cuda"]
languagePcts: [76]
stars: 16
forks: 6
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 13
recentReleases: 0
createdAt: "2026-02-16T11:11:41Z"
lastCommitAt: "2026-08-31T08:05:06Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 55
undervaluedScore: 14
maintainers: ["nmarkovskiy", "chrisse27"]
openGraphImageUrl: "https://opengraph.githubassets.com/667d2a4855b69494c12b764f2eda7f3d70456b9baa5e88eb165b5fc3fe4f9517/NVIDIA/dl-lowlat-infer"
---

# Low Latency inference for sliding window LSTMs

Coding-agent instructions (build constraints, architecture, conventions): see [AGENTS.md](https://github.com/NVIDIA/dl-lowlat-infer/blob/HEAD/AGENTS.md). Claude Code loads the same content via [CLAUDE.md](https://github.com/NVIDIA/dl-lowlat-infer/blob/HEAD/CLAUDE.md).

## Obtaining the Source Code

Note that this project stores some files in [Git Large File System](https://docs.gitlab.com/ee/topics/git/lfs/). Make sure to have a [Git LFS client](https://git-lfs.github.com/) installed when cloning this repository. On Ubuntu you can install the client by running

```shell
sudo apt-get install git-lfs
```

## Building with CMake

The project requires the following build tools:

* a recent version of `gcc` supporting C++20
* [CMake](https://cmake.org/) >= 3.20
* [CUDA Toolkit](https://developer.nvidia.com/cuda-toolkit) >= 13.0 

Inside your code directory, configure and kick off a build as follows:

```shell
cmake -DCMAKE_BUILD_TYPE=Release -DCPU_ARCH=native -DCMAKE_CUDA_ARCHITECTURES="90a-real" -B build
cmake --build build --parallel
```

### Build Options

Key CMake options:

* `CMAKE_BUILD_TYPE`: Build type (Release or Debug)
*…
