---
repo: "rockbenben/fanqie-publisher"
name: "fanqie-publisher"
description: "番茄作家 MD/TXT 批量上传发布工具，支持定时发布、智能排期"
url: "https://github.com/rockbenben/fanqie-publisher"
language: "Python"
languages: ["Python"]
languagePcts: [99]
topics: ["automation", "content-distribution", "fanqie", "novel", "publishing", "python", "scheduler"]
stars: 8
forks: 4
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-03-09T12:42:30Z"
lastCommitAt: "2026-06-27T00:34:01Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 85
undervaluedScore: 44
maintainers: ["rockbenben"]
openGraphImageUrl: "https://opengraph.githubassets.com/8c5ede9e67cd9b535c2444c98265f59c8805314adcdbfe74702e8dd051369c67/rockbenben/fanqie-publisher"
---

# 番茄作家批量上传工具

> 把本地 Markdown / TXT 章节批量上传到[番茄作家](https://fanqienovel.com)，支持定时发布、立即发布、存草稿、修改内容与批量修改排期——全程图形界面，开箱即用。

![Python](https://img.shields.io/badge/Python-3.10%2B-3776AB?logo=python&logoColor=white)
![Playwright](https://img.shields.io/badge/Playwright-1.40%2B-2EAD33?logo=playwright&logoColor=white)
![Platform](https://img.shields.io/badge/Platform-Windows%20%7C%20macOS%20%7C%20Linux-lightgrey)
![License](https://img.shields.io/badge/License-MIT-green)

一次选好章节文件夹，工具会自动解析章节号、清洗 Markdown 格式、按你设定的时间表逐章发布，并在遇到平台限制时智能跳过、结束后给出可一键补传的失败清单。

## 最简上手

只想赶紧用？三步即可：

1. 安装 [Python 3.10+](https://www.python.org/downloads/)（Windows 安装时记得勾选 **Add Python to PATH**）
2. **Windows** 双击 `run.bat`；**macOS / Linux** 终端运行 `bash run.sh`——首次会自动装好依赖并启动
3. 点「登录/新建」，在弹出的浏览器里登录番茄账号，回到界面依次选作品 → 选章节文件夹 → 开始上传

> 更详细的图文步骤见 [使用指南](#使用指南)；卡住了看 [常见问题](#常见问题)。

## 目录

- [最简上手](#最简上手)
- [功能特性](#功能特性)
- [快速开始](#快速开始)
- [使用指南](#使用指南)
- [MD 文件格式](#md-文件格式)
- [配置文件](#配置文件)
- [命令行用法](#命令行用法)
- [项目结构](#项目结构)
- [测试](#测试)
- [常见问题](#常见问题)
- [许可证](#许可证)

## 功能特性

- **图形界面** — 全 GUI 操作，无需记命令
- **一键启动** — 首次运行自动安装依赖，开箱即用
- **新手引导** — 首次启动弹欢迎引导；顶部引导栏按「登录 → 选作品 → 选章节 → 上传」分步高亮并提示下一步，可「✕ 收起」，随时点「❓帮助」重看，各区块旁 `(?)` 有单独说明
-…
