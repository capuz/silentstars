---
repo: "ArchSightLabs/archsight-solver"
name: "archsight-solver"
description: "Open-source structural mechanics workbench for verifiable beam, plane frame, and plane truss analysis."
readmeQualityOk: true
url: "https://github.com/ArchSightLabs/archsight-solver"
language: "TypeScript"
languages: ["TypeScript", "Python"]
languagePcts: [59, 37]
stars: 5
forks: 0
openIssues: 0
closedIssues: 2
watchers: 0
contributors: 1
recentReleases: 8
createdAt: "2026-05-25T08:02:53Z"
lastCommitAt: "2026-08-25T04:08:23Z"
lastReleaseAt: "2026-08-07T15:38:30Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 89
undervaluedScore: 64
maintainers: ["whitecandy2025"]
openGraphImageUrl: "https://opengraph.githubassets.com/3be22469c79b1f1dbca447ca05db315e72fc7e3540f6d053199313095a5e9824/ArchSightLabs/archsight-solver"
---

# ArchSight Solver

中文 | [English](https://github.com/ArchSightLabs/archsight-solver/blob/HEAD/README.en.md)

一个面向结构工程师、教师和进阶学习者的**开源核心、Web 原生、透明可验证**的结构力学求解器工作台。

ArchSight Solver 当前聚焦三类典型结构分析：

- 梁系：连续梁、简支梁、悬臂梁。
- 二维平面桁架：典型屋架、桥式桁架和教学算例。
- 二维平面框架：门式刚架与显式二维杆系。

在线体验：[solver.archsight.cn](https://solver.archsight.cn/)（公开演示环境）

## 独立开源声明

本项目为独立开源实现，不隶属于任何企业、高校、研究机构或商业软件产品，也不代表任何第三方机构的授权、认可或背书。仓库不包含第三方商业软件源码、内部资料、专有规则库、客户数据或非公开算法。

详见 [NOTICE.md](https://github.com/ArchSightLabs/archsight-solver/blob/HEAD/NOTICE.md)。

## 归属、商标与官方版本

本仓库代码、文档和测试样例按 Apache-2.0 许可开放，允许在遵守许可证和 NOTICE 保留要求的前提下使用、修改、分发和商业使用。

Apache-2.0 不授予 ArchSight、ArchSight Solver、ArchSightLabs、项目 logo、官方域名或其他品牌标识的商标使用权。派生版本和商业服务应使用清晰不同的产品名称，并保留原始归属说明，不得暗示 ArchSightLabs 官方发布、认证、合作或背书。详见 [TRADEMARKS.md](https://github.com/ArchSightLabs/archsight-solver/blob/HEAD/TRADEMARKS.md)。

## 快速开始

需要 Python `>=3.13`、[uv](https://docs.astral.sh/uv/) 和 Node.js `>=22.22.0`。首次克隆后先按锁文件安装依赖：

```bash
git clone https://github.com/ArchSightLabs/archsight-solver.git
cd archsight-solver
uv sync --frozen
npm --prefix frontend ci --include=optional
```

然后在两个终端分别启动后端和前端：

```bash
uv run python app.py
npm --prefix frontend run dev
```

默认地址：…
