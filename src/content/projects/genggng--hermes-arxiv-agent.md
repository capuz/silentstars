---
repo: "genggng/hermes-arxiv-agent"
name: "hermes-arxiv-agent"
description: "一个基于 Hermes 的 agent skill：每天自动从 arXiv 抓取论文，用 AI 生成中文摘要和作者单位，推送到飞书，并提供本地静态阅读网站。 "
url: "https://github.com/genggng/hermes-arxiv-agent"
homepage: "https://genggng.github.io/hermes-arxiv-agent/"
language: "Python"
languages: ["Python"]
languagePcts: [63]
topics: ["arxiv-papers", "hermes-agent", "skill-md"]
stars: 86
forks: 34
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-04-14T15:48:17Z"
lastCommitAt: "2026-06-25T01:31:09Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 69
undervaluedScore: 32
maintainers: ["genggng"]
openGraphImageUrl: "https://opengraph.githubassets.com/e1d72fe83811c34d0a861c7d52e27292ade58eb6670e85fec69a460853b34d67/genggng/hermes-arxiv-agent"
---

# hermes-arxiv-agent

一个基于 Hermes 的 agent skill：每天自动检索 arXiv 论文、补全中文摘要和作者单位，并将结果推送到飞书，同时提供本地或 GitHub Pages 的网页阅读入口。项目支持两种模式：

- 本地模式：默认模式。每天自动检索并处理论文，推送到你自己的飞书，并通过 `python3 viewer/run_viewer.py` 在本机启动网页阅读页
- GitHub Pages 模式：增强模式，包含本地模式的全部功能，并额外把静态网站自动发布到你自己 fork 的 GitHub Pages

## 安装目录

- [本地模式安装](#本地模式)
- [GitHub-Pages-模式安装](#github-pages-模式)

## 效果展示

### 飞书推送

每天自动推送论文日报，包含标题、作者、单位、PDF 链接和中文摘要。

### Web 阅读网站

支持按日期筛选、关键词检索、查看中文总结与 Abstract，以及本地收藏。

## 功能

- 每天按关键词监控 arXiv 新论文
- 自动下载 PDF，维护本地 Excel 记录
- 由 Hermes/LLM 补全作者单位和中文摘要
- 自动推送飞书日报
- 提供静态阅读网站，支持本地运行或 GitHub Pages 发布
- 以 Hermes skill 的形式完成部署和日常运行

## 前提条件

使用本项目前，必须先安装 Hermes，并完成飞书配置。

### Hermes 安装

```bash
curl -fsSL https://raw.githubusercontent.com/NousResearch/hermes-agent/main/scripts/install.sh | bash
source ~/.bashrc
hermes
```

### 飞书配置

```bash
hermes gateway setup
```

## 本地模式

这是默认模式，适合希望每天自动检索并处理论文、推送飞书日报，同时在本机浏览网页阅读页的人。

这个模式下：

- 可以直接使用上游公开仓库
- 不要求 fork
- 不要求 GitHub 写权限
- 定时任务不会执行 `bash scripts/publish_viewer.sh`
- 网站依然可用，但通过本地 Python 脚本启动

### 安装方法

在 Hermes 对话中直接说这句固定安装话术：

```text
请从该地址 https://github.com/genggng/hermes-arxiv-agent/blob/main/AGENT_SKILL.md 安装 skill，并按本地模式部署。不要配置 GitHub Pages 发布。
```…
