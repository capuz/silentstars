---
repo: "alibaba/TorchEasyRec"
name: "TorchEasyRec"
description: "An easy-to-use framework for large scale recommendation algorithms."
readmeQualityOk: true
url: "https://github.com/alibaba/TorchEasyRec"
homepage: "https://torcheasyrec.readthedocs.io"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["deepfm", "din", "dssm", "multi-task-learning", "recommendation-algorithms", "recommender-system", "tdm", "mind", "dlrm", "hstu"]
stars: 486
forks: 89
openIssues: 4
closedIssues: 28
watchers: 8
contributors: 22
recentReleases: 2
createdAt: "2024-09-25T01:16:02Z"
lastCommitAt: "2026-11-09T00:52:52Z"
lastReleaseAt: "2026-10-12T09:44:21Z"
status: "thriving"
tags: []
healthScore: 96
undervaluedScore: 40
maintainers: ["tiankongdeguiji", "eric-gecheng", "WhiteSwan1"]
openGraphImageUrl: "https://opengraph.githubassets.com/bde64d86710b7e08e5e32aa31080495d392986b4e0bfdf5bdd6fdc07d24c3fbc/alibaba/TorchEasyRec"
---

## What is TorchEasyRec?

TorchEasyRec implements state-of-the-art deep learning models for recommendation tasks: **candidate generation (matching)**, **scoring (ranking)**, **multi-task learning**, and **generative recommendation**. It enables efficient development of high-performance models through simple configuration and easy customization.

## Key Features

### Data Sources

- **MaxCompute/ODPS** - Native Alibaba Cloud data warehouse integration
- **Parquet** - High-performance columnar file format when using Local | [OSS](https://help.aliyun.com/zh/oss/) | [NAS](https://help.aliyun.com/zh/nas/) storage, with built-in auto-rebalancing capabilities
- **CSV** - Standard tabular file format
- **Streaming** - Kafka message queue integration, also compatible with [Alibaba Datahub](https://help.aliyun.com/zh/datahub/product-overview/what-is-datahub)
- **Checkpointable** - Resume training from exact data position

### Scalability

- **Distributed Training** - Hybrid data/model parallelism via TorchRec
- **Large Embeddings** - Row-wise, column-wise, table-wise sharding
- **Zero-Collision Hash** - Large scale Dynamic embedding with eviction policies (LFU/LRU)
- **Mixed Precision** -…
