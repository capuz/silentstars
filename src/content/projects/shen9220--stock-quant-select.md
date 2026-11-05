---
repo: "shen9220/stock-quant-select"
name: "stock-quant-select"
description: "Stock quantitative stock-selection model - includes multiple strategies such as the first-limit-up tactic, the limit-up three-black-crows method, the overnight tactic, and others"
originalDescription: "股票量化选股模型 - 包含首板战法、涨停三阴法、隔夜战法等多个策略"
descriptionLang: "zh"
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
lastCommitAt: "2026-11-05T08:06:24Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 80
undervaluedScore: 55
maintainers: ["shen9220"]
openGraphImageUrl: "https://opengraph.githubassets.com/ae7f790c5f3f3d4b895def02e1277f60924b9d405d0f3172526a74e9cccee2d9/shen9220/stock-quant-select"
---

# Stock Quantitative Stock-Selection Model System

A complete stock quantitative stock-selection strategy system containing multiple validated trading models.

---

## Important Notice

Before handling any issue, read `00_项目必读/`:

```bash
cat 00_项目必读/项目必读.md
cat 00_项目必读/项目规范.md
cat 00_项目必读/注意事项.md
```

For the stock selection, notification, backfill, and dashboard currently running, see:

[`00_项目必读/项目内容概述.md`](https://github.com/shen9220/stock-quant-select/blob/HEAD/00_项目必读/项目内容概述.md)

Directory file-placement conventions (including the rule against piling files in the root directory): [`00_项目必读/项目规范.md`](https://github.com/shen9220/stock-quant-select/blob/HEAD/00_项目必读/项目规范.md)

---

## Quick Start

```bash
# Dependencies
pip install -r requirements.txt
# or
./02_智能工具/install_deps.sh

# One-click run
cd 02_智能工具 && ./启动模型.sh
```

Environment variable template: `05_配置文件/.env.example` (the root `.env.example` is a symbolic link).

---

## Project Structure (reorganized 2026-10-27)

```
stock-quant-select/
├── README.md                 # This entry (root keeps only the entry and dependencies)
├── requirements.txt
├── .env.example → 05_配置文件/.env.example
├── 00_项目必读/              #…
