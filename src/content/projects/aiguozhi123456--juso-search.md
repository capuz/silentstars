---
repo: "aiguozhi123456/juso-search"
name: "juso-search"
description: "An open-source browser extension—a gateway with two-sided reach into search, with locally managed credentials—for humans and local AI agents."
readmeQualityOk: true
url: "https://github.com/aiguozhi123456/juso-search"
homepage: "https://aiguozhi123456.github.io/juso-search/"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [78]
topics: ["ai-agent", "ai-search", "browser-extension", "byok", "chrome-extension", "meta-search", "mv3", "react", "search", "search-engine"]
stars: 30
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 5
createdAt: "2026-07-15T15:18:59Z"
lastCommitAt: "2026-08-10T05:06:50Z"
lastReleaseAt: "2026-08-07T08:25:41Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 90
undervaluedScore: 44
maintainers: ["aiguozhi123456"]
openGraphImageUrl: "https://opengraph.githubassets.com/57f45c656457333dfd55b46699da050e060ebefa55f986e635adb762c8239cd4/aiguozhi123456/juso-search"
---

# 双面搜 / Juso

**简体中文** | [English](https://github.com/aiguozhi123456/juso-search/blob/HEAD/README.en.md)

> **一面为人，一面为智能体。**

Juso 是一个开源的双面搜索产品：它让人类用户在同一入口选择、切换传统搜索引擎、站外搜索（Site Engine）、自定义引擎、AI 对话引擎与已配置的 AI 搜索服务；也让本地 AI 智能体通过同一台浏览器调用 AI 搜索 API，或检索传统搜索引擎。密钥由扩展在本地管理，搜索请求直接前往你选择的服务。即使只使用人类这一面，它也是一个功能完整、开箱即用的搜索聚合与切换工具——无需配置任何 AI 服务即可使用 Google、Bing、Baidu、抖音、小红书、哔哩哔哩、Yandex 和 DuckDuckGo，也可在设置中保存面向指定站点的站外搜索、任意带查询参数的自定义引擎，并把 AI 对话站点当作搜索引擎切换。

| 面向谁 | 现在能做什么 |
| --- | --- |
| 人类用户 | 聚合传统搜索引擎、站外搜索、自定义引擎，并在独立搜索页与结果页中快速切换 |
| 人类用户 | 把 AI 搜索 API 变成可直接使用、可与传统引擎快切的搜索体验（支持多实例） |
| 人类用户 | 把 AI 对话站点当作搜索引擎，自动填入查询、可选自动提交 |
| 本地 AI 智能体 | 通过统一入口调用已配置的 AI 搜索 API（含按实例搜索） |
| 本地 AI 智能体 | 借助真实浏览器检索传统搜索引擎 |

## 截图与演示

**AI 搜索：综合答案与结果列表同屏**

**SERP 切换栏：在搜索引擎结果页内一键切换**

**多实例：同一 AI 服务的多套参数，快切栏一等切换**

**本地缓存与历史：成功的 AI 搜索可查看、可重放**

**搜索来源管理：五类来源统一管理**

**Agent Bridge：本地智能体的搜索入口**

**完整流程演示**

## 当前能力与来源

Juso 将**搜索来源**作为统一的用户选择：它可以是传统**搜索引擎**、用户保存的**站外搜索（Site Engine）**或**自定义引擎（Custom Engine）**、已配置的 AI 搜索服务（可为同一服务创建多个调好参数的**实例**），或预置的 **AI 对话引擎**；五类来源的执行方式不同。

- 传统搜索引擎：Google、Bing、Baidu、抖音、小红书、哔哩哔哩、Yandex、DuckDuckGo。它们不使用 API 密钥；Juso 通过浏览器导航，供人直接使用；八个引擎均支持智能体提取普通搜索结果（哔哩哔哩、小红书、抖音在浏览器已登录状态下提取）。
- 站外搜索（Site…
