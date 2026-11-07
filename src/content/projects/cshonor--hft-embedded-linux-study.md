---
repo: "cshonor/hft-embedded-linux-study"
name: "hft-embedded-linux-study"
description: "Low-level Linux systems deep-dive: HFT low-latency, kernel/memory/concurrency, with a parallel track on embedded UAV flight control."
readmeQualityOk: true
url: "https://github.com/cshonor/hft-embedded-linux-study"
language: "HTML"
languages: ["HTML"]
languagePcts: [95]
stars: 11
forks: 3
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2026-06-01T01:10:31Z"
lastCommitAt: "2026-11-07T16:11:57Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 80
undervaluedScore: 45
maintainers: ["cshonor"]
openGraphImageUrl: "https://opengraph.githubassets.com/621e2b7c7d0dcc2164c22e39f11f07fe92d7ef9010f780003acf7a592a9de647/cshonor/hft-embedded-linux-study"
---

# hft-embedded-linux-study

> **HFT 低延迟 Linux 底层** + **嵌入式 Linux 飞控** 双线笔记仓库。
> [github.com/cshonor/hft-embedded-linux-study](https://github.com/cshonor/hft-embedded-linux-study) ·
> **HTML 阅读版（59 本，离线可读）** → [html/index.html](https://github.com/cshonor/hft-embedded-linux-study/blob/HEAD/html/index.html) ·
> [GitHub Pages](https://cshonor.github.io/hft-embedded-linux-study/)

```bash
git clone https://github.com/cshonor/hft-embedded-linux-study.git
```

---

## 模块总览（编号 = 学习顺序）

> **递进主轴：** 硬件底层 → 编程语言 → Linux 系统 → 驱动/设备树 → 嵌入式工程 → 网络栈 → 性能工具 → HFT 上层业务
> `.5` / `.6` / `.7` 不是子模块，是**现代补丁层**——经典书基于 2.6/3.x 内核，这些模块补齐 5.x/6.x 的真实实现。

| # | 文件夹 | 定位 | Phase |
|---|--------|------|:-----:|
| **00** | [digital-logic-cpu](https://github.com/cshonor/hft-embedded-linux-study/blob/HEAD/00-digital-logic-cpu/) | 硬件底层：组合/时序/CPU 词汇 | **1** |
| **01** | [c-language](https://github.com/cshonor/hft-embedded-linux-study/blob/HEAD/01-c-language/) | C / 指针 / GNU-C | 2 |
| **01.5** | [cmake-build](https://github.com/cshonor/hft-embedded-linux-study/blob/HEAD/01.5-cmake-build/) | CMake 构建系统：最小工程 → 交叉编译 → 多目录库 → west build → HFT 编译选项 | 2 |
| **01.7** |…
