---
repo: "hw-native-sys/pypto"
name: "pypto"
description: "A community-driven pypto implementation "
readmeQualityOk: true
url: "https://github.com/hw-native-sys/pypto"
language: "Python"
languages: ["Python", "C++"]
languagePcts: [67, 33]
stars: 109
forks: 90
openIssues: 59
closedIssues: 621
watchers: 0
contributors: 67
recentReleases: 0
createdAt: "2025-12-31T10:40:54Z"
lastCommitAt: "2026-09-02T08:05:09Z"
status: "thriving"
tags: ["fork_magnet"]
healthScore: 98
undervaluedScore: 43
maintainers: ["Hzfengsy", "lyfne123", "Little-oil"]
openGraphImageUrl: "https://opengraph.githubassets.com/527d5d7cabbc8f04dbe7974242e0697f4ce1e62a66647a64deb8d7a6b8f69ea0/hw-native-sys/pypto"
discussionCount: 3
---

# PyPTO

**English** | [Chinese](https://github.com/hw-native-sys/pypto/blob/HEAD/README.zh-CN.md)

## Overview

PyPTO (pronounced: pai p-t-o) is a high-performance programming framework for AI accelerators, designed to simplify the development of complex fused operators and entire model networks while maintaining high-performance computing capabilities. The framework adopts an innovative **PTO (Parallel Tensor/Tile Operation) programming paradigm**, with a **Tile-based programming model** as its core design philosophy. Through a multi-level intermediate representation (IR) system, it compiles AI model applications built via APIs from high-level Tensor graphs step by step into hardware instructions, ultimately generating executable code that runs efficiently on target platforms.

### Core Features

- **Tile-based Programming Model**: All computations are based on Tiles (hardware-aware data blocks), fully leveraging hardware parallel computing capabilities and memory hierarchy
- **Multi-level Computation Graph Transformation**: Transforms Tensor Graphs into Tile Graphs, Block Graphs, and Execution Graphs through compilation passes, with each step including a series of pass…
