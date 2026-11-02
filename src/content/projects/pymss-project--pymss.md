---
repo: "pymss-project/pymss"
name: "pymss"
description: "Inference package for music source separation models"
readmeQualityOk: true
url: "https://github.com/pymss-project/pymss"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 72
forks: 10
openIssues: 3
closedIssues: 3
watchers: 3
contributors: 10
recentReleases: 0
createdAt: "2026-05-03T15:15:07Z"
lastCommitAt: "2026-11-02T15:17:43Z"
lastReleaseAt: "2026-06-24T12:17:46Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 86
undervaluedScore: 30
maintainers: ["TheSmallHanCat", "baicai-1145", "SUC-DriverOld"]
openGraphImageUrl: "https://opengraph.githubassets.com/058244550168af30a58235ae931b3b67db50772b71c495dbe276f9250050deac/pymss-project/pymss"
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

### AMD ROCm

```sh
pip install torch --index-url https://download.pytorch.org/whl/rocm7.2
pip install pymss
```

**Windows:** native support starts with ROCm 7.2.1 (Adrenalin 26.2.2+ driver, Python 3.12). Install the AMD wheels by direct URL, then pymss:

```bat
pip install --no-cache-dir https://repo.radeon.com/rocm/windows/rocm-rel-7.2.1/rocm_sdk_core-7.2.1-py3-none-win_amd64.whl https://repo.radeon.com/rocm/windows/rocm-rel-7.2.1/rocm_sdk_devel-7.2.1-py3-none-win_amd64.whl https://repo.radeon.com/rocm/windows/rocm-rel-7.2.1/rocm_sdk_libraries_custom-7.2.1-py3-none-win_amd64.whl https://repo.radeon.com/rocm/windows/rocm-rel-7.2.1/torch-2.9.1%2Brocm7.2.1-cp312-cp312-win_amd64.whl
pip install pymss
```

WSL2 (RDNA3/RDNA4) can follow the Linux steps instead.

### Ascend NPU

pymss runs on Huawei Ascend NPUs through `torch_npu`.…
