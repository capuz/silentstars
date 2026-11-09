---
repo: "shen9220/stock-quant-select"
name: "stock-quant-select"
description: "股票量化选股模型 - 包含首板战法、涨停三阴法、隔夜战法等多个策略"
readmeQualityOk: true
url: "https://github.com/shen9220/stock-quant-select"
language: "Python"
languages: ["Python", "HTML"]
languagePcts: [77, 20]
stars: 7
forks: 4
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-04-27T08:37:15Z"
lastCommitAt: "2026-11-09T12:00:40Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 80
undervaluedScore: 56
maintainers: ["shen9220"]
openGraphImageUrl: "https://opengraph.githubassets.com/7826a00f90449cbf7a4ebf9924e4b8c65695e7ab2e01461841507f831ae495e5/shen9220/stock-quant-select"
---

# 股票量化选股模型系统

一套完整的股票量化选股策略系统，包含多个经过验证的交易模型。

---

## 重要提醒

处理任何问题前，先读 `00_项目必读/`：

```bash
cat 00_项目必读/项目必读.md
cat 00_项目必读/项目规范.md
cat 00_项目必读/注意事项.md
```

当前在跑的选股、通知、回补和看板，看：

[`00_项目必读/项目内容概述.md`](https://github.com/shen9220/stock-quant-select/blob/HEAD/00_项目必读/项目内容概述.md)

目录落盘规范（含根目录禁堆文件）：[`00_项目必读/项目规范.md`](https://github.com/shen9220/stock-quant-select/blob/HEAD/00_项目必读/项目规范.md)

---

## 快速开始

```bash
# 依赖
pip install -r requirements.txt
# 或
./02_智能工具/install_deps.sh

# 一键运行
cd 02_智能工具 && ./启动模型.sh
```

环境变量模板：`05_配置文件/.env.example`（根目录 `.env.example` 为符号链接）。

---

## 项目结构（2026-10-27 整理后）

```
stock-quant-select/
├── README.md                 # 本入口（根目录只留入口+依赖）
├── requirements.txt
├── .env.example → 05_配置文件/.env.example
├── 00_项目必读/              # 必读、规范、总览、安全、依赖说明
├── 01_量化模型/              # 首板 / 隔夜 / 三阴（结果 JSON 在战法内）
├── 02_智能工具/              # 一键运行 + install_deps.sh
├── 03_智能体/                # Stock Assistant / 技能包
├── 04_文档说明/              # 使用指南、GitHub、重组修复记录等
├── 05_配置文件/              # .env 模板
├── 06_测试报告/              # 历史快照（含根目录遗留）
├── 07_其他文档/              # 杂项 / 个人杂项
├── 08_Git测试/               # 非生产 Git 试跑（原「08_测试 git」）
└── 09-新模式/                # 新策略（需求与代码同子目录）…
