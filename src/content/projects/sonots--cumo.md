---
repo: "sonots/cumo"
name: "cumo"
description: "Cumo (pronounced like \"koomo\") is CUDA aware numerical library whose interface is highly compatible with Ruby Numo"
readmeQualityOk: true
url: "https://github.com/sonots/cumo"
language: "Ruby"
languages: ["Ruby", "C"]
languagePcts: [47, 37]
topics: ["ruby", "cuda", "numo", "scicentific-computing"]
stars: 100
forks: 8
openIssues: 1
closedIssues: 22
watchers: 6
contributors: 9
recentReleases: 0
createdAt: "2017-11-15T13:56:36Z"
lastCommitAt: "2026-10-29T14:07:01Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 98
undervaluedScore: 46
maintainers: ["Watson1978"]
openGraphImageUrl: "https://opengraph.githubassets.com/ff95a9dbc9ac9a4af68a8096dae0eb50af847cabc0fabf2e6a11ad04c73effdd/sonots/cumo"
---

# Cumo

Cumo (pronounced "koomo") is a CUDA-aware, GPU-optimized numerical library that offers a significant performance boost over [Ruby Numo](https://github.com/ruby-numo), while (mostly) maintaining drop-in compatibility.

## Requirements

* Ruby 3.0 or later
* NVIDIA GPU Compute Capability 3.5 (Kepler) or later
* CUDA 11.0 or later
* cuDNN 8.0 or later (optional, for the cuDNN features)
* cuSOLVER with its 64-bit API, which comes with the CUDA Toolkit (optional, for `Cumo::Linalg`)

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

FYI: I use [cudnnenv](https://github.com/unnonouno/cudnnenv) to install…
