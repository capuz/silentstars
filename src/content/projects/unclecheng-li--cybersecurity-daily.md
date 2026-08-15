---
repo: "Unclecheng-li/cybersecurity-daily"
name: "cybersecurity-daily"
description: "网络安全日报—每日推送；Daily updated report on cybersecurity hotspots"
readmeQualityOk: true
url: "https://github.com/Unclecheng-li/cybersecurity-daily"
homepage: "https://unclecheng-li.github.io/cybersecurity-daily/"
language: "HTML"
languages: ["HTML"]
languagePcts: [97]
topics: ["cybersecurity", "hacker-news", "html", "security", "vulnerability"]
stars: 109
forks: 3
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2026-06-04T09:38:37Z"
lastCommitAt: "2026-08-15T04:04:14Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 90
undervaluedScore: 29
maintainers: ["Unclecheng-li", "Eklos9z"]
openGraphImageUrl: "https://opengraph.githubassets.com/43c9ad7485a66a7e2e76e14d2554deef650d87dfbd257fa08d0069ab381b78a7/Unclecheng-li/cybersecurity-daily"
---

# 网安日报速递

> 每天一份网络安全简报，覆盖 CVE、漏洞通报、安全事件、威胁情报。AI 生成，人工校验，自动发布。

**在线阅读**：https://unclecheng-li.github.io/cybersecurity-daily/

</div>

---

## 这是什么

一个自动化网安日报项目。每天中午自动抓取当天的网络安全动态，挑出 5-10 条值得看的，生成 Markdown 报告和 HTML 页面，推送到 GitHub Pages。

跟新闻聚合和 RSS 转发不一样，这边每条内容都带筛选、解读和原始出处链接。

---

## 为什么要搞这个

安全圈信息量大，噪音也大。CVE 每天几十个，真正要你动手的可能就两三个。安全事件一堆，大部分看完就忘。

这个项目就干一件事，帮你过一遍，把当天该看的挑出来，说清楚为什么该看。5 分钟，跟上当天的安全态势。

---

## 内容长什么样

每期日报包含：

| 板块 | 说明 |
|------|------|
| 头条 | 当天最值得关注的事件，通常带攻击链分析 |
| 重点分析 | 3-6 条深度内容，包含 CVE 编号、CVSS 评分、漏洞机制、利用方式 |
| 速览区 | 2-4 条一句话概括 |
| 可视化 | Mermaid 图表（象限图、流程图、时序图、饼图等，按内容选配） |
| 出处链接 | 每条内容的原始来源，方便你进一步追踪 |

HTML 页面用了报纸风格的排版，暗色背景 + 暖色调，支持移动端和打印。

---

## 运行方式

日报由 WorkBuddy 自动化工作流驱动，每天中午 12:00 自动执行：

1. 搜索当天网络安全新闻（CVE、漏洞通报、安全事件、APT 活动等）
2. 筛选 5-10 条最有价值的内容
3. 生成 Markdown 报告（含 Mermaid 图表）
4. 基于 HTML 模板生成日报页面
5. 更新首页存档列表
6. 推送到 GitHub 仓库，Pages 自动更新

---

## 技术栈

- **内容生成**：WorkBuddy 自动化 + AI 模型（信息检索、筛选、摘要）
- **页面**：纯静态 HTML + CSS，无框架依赖
- **图表**：Mermaid.js（象限图、流程图、时序图、饼图、甘特图）
- **部署**：GitHub Pages，推送到 `main` 分支即发布
- **自动化**：WorkBuddy 定时任务（`rrule: FREQ=DAILY;BYHOUR=12`）

---

## 项目结构

```text
cybersecurity-daily/
├── index.html              # 首页（存档列表，数据内联）
├── assets/
│   └──…
