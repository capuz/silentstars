---
repo: "Neal2020GitHub/MMOne"
name: "MMOne"
description: "[ICCV 2025] MMOne: Representing Multiple Modalities in One Scene"
url: "https://github.com/Neal2020GitHub/MMOne"
language: "Python"
languages: ["Python", "Cuda"]
languagePcts: [70, 23]
stars: 22
forks: 1
openIssues: 1
closedIssues: 2
watchers: 2
contributors: 1
recentReleases: 0
createdAt: "2025-07-02T11:39:42Z"
lastCommitAt: "2026-07-03T06:24:53Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 58
undervaluedScore: 27
maintainers: ["Neal2020GitHub"]
openGraphImageUrl: "https://opengraph.githubassets.com/a6240f91c10279f95d7e416c3a7959796775b2bfef82f83320ddcdb3af100376/Neal2020GitHub/MMOne"
---

<h1>MMOne: Representing Multiple Modalities in One Scene</h1>

<hr>

<p>
  </a>
  </a>
  </a>
</p>

<p>
  <strong>Zhifeng Gu</strong> &nbsp;&nbsp; <strong>Bing Wang</strong>
</p>

<p>
  Spatial Intelligence Group, The Hong Kong Polytechnic University
</p>

</div>

## Installation
This code has been tested with Python 3.7, torch 1.12.1, CUDA 11.6.

- Clone the repository 
```
git clone git@github.com:Neal2020GitHub/MMOne.git
cd MMOne
```
- Create conda environment
```
conda env create -f environment.yml
conda activate mmone
```

## Datasets
Download the datasets: [RGBT-Scenes](https://github.com/chen-hangyu/Thermal-Gaussian-main), [LERF](https://github.com/minghanqin/LangSplat).

### Convert RGBT-Scenes to 3DGS Format

To reorganize RGBT-Scenes into the standard 3DGS dataset structure:
```
python convert_rgbt.py --path <path to RGBT-Scenes>
```
After conversion, the dataset should be structured as:
```
<location>/
|---images/
|   |---<image 0>
|   |---<image 1>
|   |---...
|---thermal/
|   |---<thermal 0>
|   |---<thermal 1>
|   |---...
|---sparse/
    |---0/
        |---cameras.bin
        |---images.bin
        |---points3D.bin
```

### Generate Language Features

We follow the…
