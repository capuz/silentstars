---
repo: "sonots/cumo"
name: "cumo"
description: "Cumo (pronounced like \"koomo\") is CUDA aware numerical library whose interface is highly compatible with Ruby Numo"
readmeQualityOk: true
url: "https://github.com/sonots/cumo"
language: "C"
languages: ["C", "Ruby"]
languagePcts: [50, 33]
topics: ["ruby", "cuda", "numo", "scicentific-computing"]
stars: 99
forks: 8
openIssues: 6
closedIssues: 17
watchers: 7
contributors: 9
recentReleases: 0
createdAt: "2017-11-15T13:56:36Z"
lastCommitAt: "2026-08-20T04:08:20Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 95
undervaluedScore: 44
maintainers: ["Watson1978"]
openGraphImageUrl: "https://opengraph.githubassets.com/d29143ed704dcda8d08606648c5385371576c74190a6e9fb930b0b193f6393bd/sonots/cumo"
---

# Cumo

Cumo (pronounced "koomo") is a CUDA-aware, GPU-optimized numerical library that offers a significant performance boost over [Ruby Numo](https://github.com/ruby-numo), while (mostly) maintaining drop-in compatibility.

## Requirements

* Ruby 3.0 or later
* NVIDIA GPU Compute Capability 3.5 (Kepler) or later
* CUDA 11.0 or later

## Preparation

Install CUDA and set your environment variables as follows:

```bash
export CUDA_PATH="/usr/local/cuda"
export CPATH="$CUDA_PATH/include:$CPATH"
export LD_LIBRARY_PATH="$CUDA_PATH/lib64:$CUDA_PATH/lib:$LD_LIBRARY_PATH"
export PATH="$CUDA_PATH/bin:$PATH"
export LIBRARY_PATH="$CUDA_PATH/lib64:$CUDA_PATH/lib:$LIBRARY_PATH"
```

To use cuDNN features, install cuDNN and set your environment variables as follows:

```
export CUDNN_ROOT_DIR=/path/to/cudnn
export CPATH=$CUDNN_ROOT_DIR/include:$CPATH
export LD_LIBRARY_PATH=$CUDNN_ROOT_DIR/lib64:$LD_LIBRARY_PATH
export LIBRARY_PATH=$CUDNN_ROOT_DIR/lib64:$LIBRARY_PATH
```

FYI: I use [cudnnenv](https://github.com/unnonouno/cudnnenv) to install cudnn under my home directory like `export CUDNN_ROOT_DIR=/home/sonots/.cudnn/active/cuda`.

## Installation

Add the following line to your Gemfile:…
