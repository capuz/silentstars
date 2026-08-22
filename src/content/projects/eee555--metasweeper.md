---
repo: "eee555/Metasweeper"
name: "Metasweeper"
description: "元扫雷v3.3.4 —— 包含无猜、可猜模式，录像播放器及插件系统的现代化专业扫雷版本"
readmeQualityOk: true
url: "https://github.com/eee555/Metasweeper"
homepage: "https://openms.top"
language: "Python"
languages: ["Python"]
languagePcts: [94]
topics: ["minesweeper", "pypi", "evf", "metasweeper"]
stars: 135
forks: 18
openIssues: 11
closedIssues: 57
watchers: 4
contributors: 8
recentReleases: 4
createdAt: "2020-03-27T08:44:17Z"
lastCommitAt: "2026-08-22T04:05:47Z"
lastReleaseAt: "2026-08-10T17:17:59Z"
status: "thriving"
tags: ["needs_contributors", "legacy_hero"]
healthScore: 95
undervaluedScore: 50
maintainers: ["eee555", "putianyi889", "ljzloser"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/250483493/fa24d5fd-342f-404a-aa40-e6df4870e053"
---

# 元扫雷（Metasweeper）

**[English version is here.](https://github.com/eee555/Metasweeper/blob/HEAD/README_EN.md)**

- 包含无猜、可猜模式，录像播放器及插件系统的现代化专业扫雷版本
 

## 简介

**元扫雷（Metasweeper）**由资深扫雷专业玩家与软件工程师共同打造——不是对传统扫雷的简单重复，而是在**算法、性能、可扩展性与工具链层面**的全面现代化。

元扫雷生成的录像格式已获得[开源扫雷网](https://openms.top)官方认可，并参与国际排行榜。

</div>

## 项目优势与技术亮点

### （1）算法与引擎体系

元扫雷由`ms_toollib`工具箱赋能，核心竞争力来自后者高度优化的算法组件，构成完整的扫雷智能算法系统。

* **三大判雷引擎**：提供多层次策略推理，覆盖从简单集合到枚举法求解。
* **统一局面状态机**：将游戏局面抽象为自动状态机，提升算法集成度与可扩展性。
* **概率推断引擎**：支持计算局面中任意一格是雷的概率，求解速度仅次于JSMinesweeper。
* **光学局面识别（OBR）引擎**：可从任意扫雷应用的截屏中重建局面，实现跨游戏智能分析。

</div>

</div>

---

### （2）架构与技术栈

项目在性能、安全性、工具链友好度之间取得扎实平衡。

* **Python / PyQt5 + Rust 复合架构**：

  * Python 负责 UI、生态扩展；
  * Rust 提供核心算法计算的高性能与内存安全。
* **界面与算法完全解耦**，使 UI和工具链可独立推进。
* 完全开源的工具链 **`ms_toollib`（MIT License）**，可通过 `pip install ms_toollib` 直接安装并在其他项目中复用。

---

### （3）游戏模式与交互能力

具备目前扫雷软件生态中覆盖度最广、交互方式最现代化的功能。

* 支持 **全部 6 种无猜模式 + 标准 + Win7 模式**；弱可猜 / 强可猜模式均为独家实现。
* **Ctrl + 滚轮** 自由缩放界面尺寸，提供罕见的 UI 灵活度。
* **Space**：即时计算当前盘面每一格的雷概率。
* **Ctrl + Space**：截屏识别并对任何外部扫雷应用执行概率计算（OBR）。
* **局面筛选器**：基于自定义策略的复杂条件过滤。
* **可编程计数器**：内置 3BV/s、STNB、RQP、pluck、ZiNi 等 30+ 指标，支持**完整 Python 表达式语法**自定义计算公式，自由度无上限。
*…
