---
repo: "cshonor/hft-embedded-linux-study"
name: "hft-embedded-linux-study"
description: "为高频交易 (HFT) 低延迟开发打造的 Linux 底层技术栈，同时延伸出嵌入式 Linux 无人机飞控的学习与实战路线"
readmeQualityOk: true
url: "https://github.com/cshonor/hft-embedded-linux-study"
language: "C"
languages: ["C"]
languagePcts: [77]
stars: 5
forks: 3
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2026-06-01T01:10:31Z"
lastCommitAt: "2026-08-11T04:50:18Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 80
undervaluedScore: 56
maintainers: ["cshonor"]
openGraphImageUrl: "https://opengraph.githubassets.com/ee71a5c948cee89c3420066b093af19012be7de637f3ee55213fa574a51d4c3b/cshonor/hft-embedded-linux-study"
---

# hft-embedded-linux-study

> **GitHub：** [github.com/cshonor/hft-embedded-linux-study](https://github.com/cshonor/hft-embedded-linux-study)  
> **HFT 低延迟 Linux 底层** + **嵌入式 Linux 无人机飞控** 双线笔记与路线仓库。

**技术板块 `00`–`22`（含现代补充 `05.5` / `05.6` / `06.5` / `14.5`）：** 顶层为**纯技术模块名**；**整数编号 = 学习顺序**，`.5` / `.6` = 现代补充资料（见 [§现代补充资料](#现代补充资料5--6-模块)）。

---

## 相关仓库

| 仓库 | 用途 | 本仓对应 |
|------|------|----------|
| **[hft-embedded-linux-study](https://github.com/cshonor/hft-embedded-linux-study)** | 本仓：读序、OUTLINE、章节 scaffold | `00`–`22` |
| **[cpp-learning-notes](https://github.com/cshonor/cpp-learning-notes)** | C / C++ 详细笔记与代码 | [01 C](https://github.com/cshonor/hft-embedded-linux-study/blob/HEAD/01-c-language/) · [04 C++](https://github.com/cshonor/hft-embedded-linux-study/blob/HEAD/04-cpp/) |
| [Computer-Networking](https://github.com/cshonor/Computer-Networking) | Socket / UNP / TCP/IP 实战代码 | [12 network-sockets](https://github.com/cshonor/hft-embedded-linux-study/blob/HEAD/12-network-sockets/) |

```bash
git clone https://github.com/cshonor/hft-embedded-linux-study.git
```

---

## 技术模块总览（编号 = 读序）

> **递进主轴：** 硬件底层 → 编程语言 → Linux 系统 → 驱动/设备树 → 嵌入式工程 → 网络栈 → 性能工具 → HFT 上层业务

| # | 文件夹 | 定位…
