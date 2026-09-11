---
repo: "FTShare-Lab/dsh_kline"
name: "dsh_kline"
description: "面向 DeepSeek Harness 的交互式 K 线分析插件，支持多市场行情、技术指标、支撑压力位、新闻与基本面分析，并在原生侧栏中直接展示。"
readmeQualityOk: true
url: "https://github.com/FTShare-Lab/dsh_kline"
language: "HTML"
languages: ["HTML", "Python"]
languagePcts: [46, 36]
topics: ["dsh-plugin", "deepseek-harness", "deepseek-harness-plugin", "ftshare", "awesome-deepseek-harness", "awesome-dsh-plugin", "deepseek-harness-plugin-dev", "deepseek-harness-plugins", "dsh-plugin-market", "dsh-plugins"]
stars: 27
forks: 3
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 10
createdAt: "2026-08-14T08:22:25Z"
lastCommitAt: "2026-09-11T08:14:29Z"
lastReleaseAt: "2026-09-09T03:12:59Z"
status: "newborn"
tags: ["hidden_gem", "release_machine"]
healthScore: 89
undervaluedScore: 43
maintainers: ["jasperyeoh"]
openGraphImageUrl: "https://opengraph.githubassets.com/272d5b501b84be96815cc4b74df6f69f589771ccac7aca19dfbc8fc76a6e3b22/FTShare-Lab/dsh_kline"
---

# 非凸 K 线助手 / dsh_kline

简体中文 | [English](https://github.com/FTShare-Lab/dsh_kline/blob/HEAD/README.en.md)

在 DeepSeek Harness 里看行情、读图表、找关键价位。你可以直接问 AI，也可以自己搜索标的、切换周期和指标，把 K 线当作一个随时可打开的工作台。

> 行情与技术分析用于研究和学习，不构成投资建议。

## 它能帮你做什么

- **一句话开始分析**：直接说“看看紫金矿业最近一个月趋势”或“分析英伟达的 MACD 和 RSI”。
- **自己动手看图**：打开 K 线工作台，搜索名称或代码，随时切换日、周、月、季、年和可用的分钟周期。
- **看清趋势与信号**：支持 MA、成交量、MACD、KDJ、RSI、BOLL、ATR、VWAP 等常用指标。
- **寻找价格区域**：一键分析支撑位和压力位；也可以自己画水平价位线、添加备注，并在本机保存。
- **比较与复盘**：叠加指数或标的、框选两个时间点查看涨跌、振幅、回撤和成交统计。
- **补充研究信息**：在“市场、板块、资讯、公司、龙虎榜”中浏览指数、板块排行、资金异动、新闻、公司画像、财务与股东信息。
- **建立自己的关注列表**：收藏标的、建立或重命名分组、排序、导入或批量打开；自选会作为你的用户级数据跨对话保留。

## 预览

## 开始使用

### 1. 安装并启用

在 DeepSeek Harness 的插件市场搜索 `dsh_kline`。如果市场目录还没有刷新，可以直接从 GitHub 安装：

```bash
dsh plugin --profile web add github:FTShare-Lab/dsh_kline
```

首次启动会自动准备所需运行环境。以后有新版本时，在插件市场或设置页更新即可。

插件支持 macOS、Linux 和原生 Windows。用户需要先安装可运行的 DSH Web，以及 Python 3.10 或更高版本；Windows 推荐使用 [python.org](https://www.python.org/downloads/windows/) 安装包并启用 Python Launcher。插件不要求 Git Bash 或 WSL。首次启动的依赖安装日志位于用户缓存目录下的 `dsh_kline/bootstrap.log`；Windows 默认为 `%LOCALAPPDATA%\dsh_kline\bootstrap.log`。

### 2. 任选一种入口

**和 AI 对话**：在对话中提出需求，例如：

- `调取紫金矿业的 K 线，看看最近一个月走势`
- `分析腾讯控股日…
