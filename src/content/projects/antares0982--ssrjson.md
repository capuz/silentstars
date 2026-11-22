---
repo: "Antares0982/ssrJSON"
name: "ssrJSON"
description: "A SIMD boosted high-performance and correct Python JSON parsing library, faster than the fastest."
readmeQualityOk: true
url: "https://github.com/Antares0982/ssrJSON"
language: "C"
languages: ["C"]
languagePcts: [64]
topics: ["json", "python", "simd", "c", "cpp", "performance"]
stars: 38
forks: 1
openIssues: 1
closedIssues: 13
watchers: 0
contributors: 4
recentReleases: 0
createdAt: "2025-06-23T15:02:56Z"
lastCommitAt: "2026-11-18T16:17:41Z"
lastReleaseAt: "2026-01-05T17:44:37Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 89
undervaluedScore: 50
maintainers: ["Antares0982", "Nambers"]
openGraphImageUrl: "https://opengraph.githubassets.com/ad9c255b93b72e605ecd70b524d310232b7995702d2846deef6da12cb4c46db4/Antares0982/ssrJSON"
discussionCount: 0
---

# **ssrJSON**

A SIMD boosted high-performance and correct Python JSON parsing library, faster than the fastest.

[中文](https://github.com/Antares0982/ssrJSON/blob/main/README.zh-CN.md)

## Introduction

ssrJSON is a Python JSON library that leverages modern hardware capabilities to achieve peak performance, implemented primarily in C. It offers a fully compatible interface to Python’s standard `json` module, making it a seamless drop-in replacement, while providing exceptional performance for JSON encoding and decoding.

If you prefer to skip the technical details below, please proceed directly to the [How To Install](#how-to-install) section.

### How Fast is ssrJSON?

TL;DR: ssrJSON is faster than or nearly as fast as [orjson](https://github.com/ijl/orjson) (which [announces](https://github.com/ijl/orjson/blob/3.11.4/README.md#:~:text=It%20benchmarks%20as%20the%20fastest) itself as the fastest Python library for JSON) on most benchmark cases.
