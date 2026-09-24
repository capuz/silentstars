---
repo: "eugenelyj/blinkvision_benchmark"
name: "blinkvision_benchmark"
description: "Code for \"BlinkVision: A Benchmark for Optical Flow, Scene Flow and Point Tracking Estimation using RGB Frames and Events\", ECCV 2024 and \"BlinkFlow: A Dataset to Push the Limits of Event-based Optical Flow Estimation\", IROS 2023"
readmeQualityOk: true
url: "https://github.com/eugenelyj/blinkvision_benchmark"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 5
forks: 1
openIssues: 5
closedIssues: 6
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2023-10-19T03:43:09Z"
lastCommitAt: "2026-09-24T08:42:07Z"
status: "thriving"
tags: []
healthScore: 81
undervaluedScore: 39
maintainers: ["eugenelyj"]
openGraphImageUrl: "https://opengraph.githubassets.com/e2f332401e4b9dffec13604644d990b683913fee2e9d87dc4436da758a362beb/eugenelyj/blinkvision_benchmark"
---

# BlinkVision benchmark scripts

This repository contains the following scripts for the BlinkVision benchmark.

1. Download scripts
2. PyTorch dataloader
3. Submission scripts
4. Evaluation scripts

Only the first three types of scripts are needed for the users. The fourth type of script is released for transparency.

# The relationship between the folders and the benchmark

1. flow_v1 benchmark: under `blinkflow_v1/`
2. flow_v2 benchmark: under `blinkvision_v1/`

# Citation

If you find this code useful for your research, please use the following BibTeX entry.

```bibtex
@inproceedings{blinkflow_iros2023,
  title={BlinkFlow: A Dataset to Push the Limits of Event-based Optical Flow Estimation},
  author={Yijin Li, Zhaoyang Huang, Shuo Chen, Xiaoyu Shi, Hongsheng Li, Hujun Bao, Zhaopeng Cui, Guofeng Zhang},
  booktitle={IEEE/RSJ International Conference on Intelligent Robots and Systems (IROS)},
  month = {October},
  year = {2023},
}

@inproceedings{blinkvision_eccv2024,
  title={BlinkVision: A Benchmark for Optical Flow, Scene Flow and Point Tracking Estimation using RGB Frames and Events},
  author={Yijin Li, Yichen Shen, Zhaoyang Huang, Shuo Chen, Weikang Bian, Xiaoyu Shi,…
