---
repo: "pymss-project/pymss"
name: "pymss"
description: "Inference package for music source separation models"
readmeQualityOk: true
url: "https://github.com/pymss-project/pymss"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 73
forks: 10
openIssues: 3
closedIssues: 3
watchers: 3
contributors: 11
recentReleases: 0
createdAt: "2026-05-03T15:15:07Z"
lastCommitAt: "2026-11-04T10:45:32Z"
lastReleaseAt: "2026-06-24T12:17:46Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 87
undervaluedScore: 30
maintainers: ["TheSmallHanCat", "baicai-1145", "SUC-DriverOld"]
openGraphImageUrl: "https://opengraph.githubassets.com/fa1718e5ecca9253e3f6abdf66a0a22487600f215472880ec280d99344255745/pymss-project/pymss"
---

# pymss

Python package for music source separation. <br>
[English]   [简体中文](https://github.com/pymss-project/pymss/blob/HEAD/README_CN.md)

## Install

pymss 2.2 and later requires Python 3.11 or newer.

If you want the CUDA build of PyTorch, install it first:

```sh
pip install torch torchvision --index-url https://download.pytorch.org/whl/cu128
```

### Intel XPU (Arc)

Linux requires working Level Zero and OpenCL drivers. Install the official PyTorch XPU wheel before pymss:

```sh
pip install torch --index-url https://download.pytorch.org/whl/xpu
pip install pymss
```

Use `--device xpu` to force Intel GPU execution and `--device-id` to select a device. When multiple IDs are supplied, only the first is used; multi-XPU parallel execution is not supported. `--device auto` prefers CUDA, then XPU, NPU, and Apple Silicon. XPU hardware inference is experimental and explicitly uses FP32, even when `use_amp=True`. bf16 AMP requires separate model accuracy and performance validation.

A manual benchmark script is available at `test/manual/xpu_benchmark.py` to compare FP32 CPU and XPU inference performance on local hardware.

### AMD ROCm

```sh
pip install torch --index-url…
