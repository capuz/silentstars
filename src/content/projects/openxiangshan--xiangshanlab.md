---
repo: "OpenXiangShan/XiangShanLab"
name: "XiangShanLab"
description: "A learning and practice repository for the open-source XiangShan RISC-V processor, featuring a full pathway from environment setup to microarchitecture optimization, designed for developers, students, and researchers."
readmeQualityOk: true
url: "https://github.com/OpenXiangShan/XiangShanLab"
language: "Scala"
languages: ["Scala"]
languagePcts: [89]
stars: 32
forks: 17
openIssues: 32
closedIssues: 8
watchers: 2
contributors: 46
recentReleases: 0
createdAt: "2026-05-20T02:16:01Z"
lastCommitAt: "2026-09-09T08:17:59Z"
status: "thriving"
tags: ["fork_magnet"]
healthScore: 83
undervaluedScore: 36
maintainers: ["syhhyl", "seckitten", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/38b36a6e678b0e50dbc621b8ef15506a5e26a1a20a9fd36ecf27b005d9b74951/OpenXiangShan/XiangShanLab"
discussionCount: 1
---

# XiangShanLab：香山处理器学习与实践平台

[English](https://github.com/OpenXiangShan/XiangShanLab/blob/HEAD/README_EN.md) | [香山官网](https://openxiangshan.cc/) | [GitHub Issues](https://github.com/OpenXiangShan/XiangShanLab/issues)

XiangShanLab 是面向香山处理器学习、开发与验证的开放式知识与实践仓库。仓库围绕香山开发环境、Scala/Chisel、Diplomacy、RISC-V 规范、处理器微架构、运行场景分析、调试方法和工程实践组织内容，并提供题库、Bug 案例、研究资料、AI 辅助工具与竞赛项目。

本仓库适合：

- 希望从零开始运行并系统学习香山的学习者；
- 希望掌握 Chisel、Diplomacy、SoC 集成与总线互联的开发者；
- 希望分析香山流水线、访存、预测、异常和调试机制的研究者；
- 希望开展 RISC-V 验证、Bug 定位、波形分析或 AI 加速扩展的工程人员。

> 仓库内容仍在持续建设中。部分章节、题目和工具可能尚未完善，欢迎通过 Issue 或 Pull Request 参与改进。

## 快速开始

### 1. 克隆仓库

仓库包含 `wavekit-xslab` 子模块，建议递归克隆：

```bash
git clone --recursive https://github.com/OpenXiangShan/XiangShanLab.git
cd XiangShanLab
```

如果已经完成普通克隆，可补充初始化子模块：

```bash
git submodule update --init --recursive
```

### 2. 选择入口

- **第一次接触香山**：阅读[学习路径指引](https://github.com/OpenXiangShan/XiangShanLab/blob/HEAD/XiangShanLab-user-guide/XiangShanLab‑Learning‑Path‑Guide.md)，然后从[开发环境课程](https://github.com/OpenXiangShan/XiangShanLab/blob/HEAD/xiangshan-course/docs/1-xiangshan-development-environment/Introduction_Preface.md)开始。
- **学习 Chisel /…
