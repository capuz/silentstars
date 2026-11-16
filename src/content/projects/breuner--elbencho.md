---
repo: "breuner/elbencho"
name: "elbencho"
description: "A distributed storage benchmark for file systems, object stores & block devices with support for GPUs"
readmeQualityOk: true
url: "https://github.com/breuner/elbencho"
language: "C++"
languages: ["C++", "Shell"]
languagePcts: [73, 25]
topics: ["benchmark", "storage", "nvme", "deep-learning", "live-stats", "distributed", "parallel", "file-systems", "block-storage", "ior"]
stars: 301
forks: 49
openIssues: 6
closedIssues: 59
watchers: 15
contributors: 18
recentReleases: 0
createdAt: "2020-06-29T21:18:25Z"
lastCommitAt: "2026-11-16T04:27:41Z"
lastReleaseAt: "2023-11-12T01:31:51Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 93
undervaluedScore: 38
maintainers: ["breuner", "jasoncwik", "jteh-cloudian"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/275928343/84197280-56bd-11eb-9b78-4a403c070f00"
---

# elbencho

**A distributed storage benchmark for files, objects & blocks with support for GPUs**

elbencho was inspired by traditional storage benchmark tools like [fio](https://github.com/axboe/fio), [mdtest](https://github.com/hpc/ior) and [ior](https://github.com/hpc/ior), but was written from scratch to replace them with a modern and easy to use unified tool for file systems, object stores & block devices.

## Table of Contents

- [Features](#features)
- [Usage](#usage)
- [Build Prerequisites](#build-prerequisites)
  - [Dependencies for Debian/Ubuntu](#dependencies-for-debianubuntu)
  - [Dependencies for RHEL/CentOS](#dependencies-for-rhelcentos)
- [Build & Install](#build--install)
- [Now what?](#now-what)
  - [Results & Charts](#results--charts)
  - [Questions & Comments](#questions--comments)
- [Optional Build Features](#optional-build-features)
  - [Nvidia CUDA Support](#nvidia-cuda-support)
  - [Nvidia GPUDirect Storage \(GDS\) Support](#nvidia-gpudirect-storage-gds-support)
  - [S3 Object Storage Support](#s3-object-storage-support)
  - [macOS Support](#macos-support)
  - [Windows Support](#windows-support)
  - [NVMe-oF Support](#nvme-of-support)
  - [Network…
