---
repo: "Wolido/hea_ducklake"
name: "hea_ducklake"
description: "HEA Data Lakehouse: Metadata and Application Cases"
readmeQualityOk: true
url: "https://github.com/Wolido/hea_ducklake"
language: "Python"
languages: ["Python"]
languagePcts: [76]
stars: 5
forks: 2
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2025-10-10T08:53:29Z"
lastCommitAt: "2026-08-24T04:20:49Z"
lastReleaseAt: "2025-11-04T03:24:13Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 82
undervaluedScore: 48
maintainers: ["mumuya41330023", "Wolido"]
openGraphImageUrl: "https://opengraph.githubassets.com/8017554583e0c6b10b1b9f29d0ef42efc81374f2ab2d8c7cbdc4f08913bb83f1/Wolido/hea_ducklake"
discussionCount: 0
---

- [中文](https://github.com/Wolido/hea_ducklake/blob/HEAD/README_zh.md)
- [English](https://github.com/Wolido/hea_ducklake/blob/HEAD/README.md)

---

# HEA DuckLake

**A lakehouse database for six-principal-element high-entropy alloys (HEAs).**

This project provides a foundational dataset and toolchain for HEA computation, machine-learning training, and property prediction. The data is distributed as a **DuckDB/DuckLake lakehouse**: you only need to download a small metadata file (tens of MB) to query a remote dataset whose total volume is **17.5 TB**.

The repository contains:

- Lakehouse metadata files (`.ducklake`) and `init.sql` files for connecting to the data.
- The `calc_descriptors` computation pipeline used to generate the descriptors.
- A `predict_plasticity` module for ready-to-use plasticity classification.
- `examples/minimal_workflow`, a fully reproducible laptop-scale version of the whole framework.

## Table of Contents

- [Quick Start](#quick-start)
  - [Try it online with Binder](#try-it-online-with-binder)
  - [Reproduce it locally](#reproduce-it-locally)
- [What is HEA DuckLake?](#what-is-hea-ducklake)
- [Accessing the Lakehouse](#accessing-the-lakehouse)
  -…
