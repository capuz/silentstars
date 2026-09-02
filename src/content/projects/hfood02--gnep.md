---
repo: "hfood02/GNEP"
name: "GNEP"
description: "Gradient-optimized Neuroevolution Potentials"
readmeQualityOk: true
url: "https://github.com/hfood02/GNEP"
language: "Cuda"
languages: ["Cuda", "C++"]
languagePcts: [70, 22]
stars: 13
forks: 1
openIssues: 1
closedIssues: 0
watchers: 1
contributors: 23
recentReleases: 0
createdAt: "2025-04-10T10:54:08Z"
lastCommitAt: "2026-09-02T08:04:31Z"
status: "thriving"
tags: []
healthScore: 70
undervaluedScore: 24
maintainers: ["hfood02"]
openGraphImageUrl: "https://opengraph.githubassets.com/d29aa1c8adf511ac0f1697331ea5486b92b504d424ffff9883476b49402b5939/hfood02/GNEP"
---

</div>

# `GNEP`

Copyright (2025) Hongfu Huang.
This is the GPUMD potential extension package GNEP (Gradient-optimized Neuroevolution Potential).
This software is distributed under the GNU General Public License (GPL) version 3.

## Prerequisites

* You need to have a GPU card with compute capability no less than 3.5, a `CUDA` toolkit no older than `CUDA` 9.0 and A compiler that supports `C++14`.
* Works for both Linux (with GCC) and Windows (with MSVC) operating systems. 

## Compile
* Go to the `src` directory and type `make gnep`.
* The `gnep` executable will be generated in the `src` directory. The `gpumd`
  and `nep` targets can be built separately when needed.

## Run
Go to the directory containing `gnep.in` and the training data, then select the
GPU devices with `CUDA_VISIBLE_DEVICES`:

```bash
CUDA_VISIBLE_DEVICES=0 path/to/gnep
CUDA_VISIBLE_DEVICES=0,1 path/to/gnep
CUDA_VISIBLE_DEVICES=0,1,2,3 path/to/gnep
```

GNEP uses all useful visible GPUs on one node. Device 0 means the first logical
device after applying `CUDA_VISIBLE_DEVICES`; it does not need to be physical
GPU 0.

## How to use?
### input file `gnep.in`
```bash
prediction          0
output_descriptor   2
type…
