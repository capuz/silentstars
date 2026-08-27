---
repo: "ucmao/media-parser"
name: "media-parser"
description: "Media-Parser是一个高性能RESTful API解析去水印服务，专注于多平台短视频的解析与去水印核心功能。它支持抖音、小红书、视频号、豆包、即梦等30+主流平台，支持获取作者、标题、封面、视频、图集、音频、Live实况等，并提供简洁易用的接口供前端调用。项目采用下载器工厂模式实现平台兼容性，是支撑去水印小程序或Web应用的理想后端解决方案。"
readmeQualityOk: true
url: "https://github.com/ucmao/media-parser"
language: "Python"
languages: ["Python"]
languagePcts: [73]
topics: ["douyin", "douyin-downloader", "media-parser", "no-watermark", "video-downloader", "xiaohongshu", "xiaohongshu-downloader", "tiktok"]
stars: 159
forks: 42
openIssues: 1
closedIssues: 10
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2025-12-14T07:16:01Z"
lastCommitAt: "2026-08-27T14:25:33Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 92
undervaluedScore: 28
maintainers: ["ucmao"]
openGraphImageUrl: "https://opengraph.githubassets.com/71eaa24904274f423a595972cfd15b16bbbdd052a493d592860e1a0a7617d11f/ucmao/media-parser"
---

**基于 Python 的多平台媒体原生本地解析系统**

</p>

媒体解析去水印是一款专为短视频创作者打造的**原生本地解析工具**。

通过“智能识别 -> 本地抓取 -> 提取地址 -> 快捷下载”的闭环，助你高效获取无水印素材。

**不依赖第三方解析服务，不中转用户链接，核心解析逻辑全部在本地代码中完成。**

</div>

---

## 💎 核心解析逻辑

* **多平台智能适配**：内置 `ParserFactory` 工厂模式，自动识别链接来源并分配对应解析器。
* **原生本地解析**：解析逻辑直接内置在项目代码中，由各平台 Parser 本地发起请求并提取真实媒体地址。
* **不依赖第三方解析服务**：不接入外部“代解析 API”或 SaaS 中转服务，部署后即可独立运行。
* **纯粹解析 API**：极简版只保留最核心的 JSON 解析服务，无数据库依赖，无鉴权门槛，适合开发者快速提取原型直接使用。

## ✨ 项目特点

* **本地可控**：解析链路和请求逻辑都在仓库内，方便审计、调试和二次开发。
* **部署简单**：安装 Python 依赖后即可运行，不需要额外申请第三方解析平台账号或密钥。
* **便于扩展**：每个平台对应独立 Parser，新增平台时可沿用现有工厂模式和统一返回结构。

---

## 💾 支持的平台矩阵

| 平台名称 | 作者 | 标题 | 封面 | 视频 | 图集 | 音频 | 实况 |
| --- | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| **抖音** | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| **小红书** | ✓ | ✓ | ✓ | ✓ | ✓ | | ✓ |
| **视频号** | ✓ | ✓ | ✓ | ✓ | | | |
| **快手** | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | |
| **哔哩哔哩** | ✓ | ✓ | ✓ | ✓ | | ✓ | |
| **豆包** | ✓ | ✓ | ✓ | ✓ | ✓ | | |
| **即梦 AI** | ✓ | ✓ | ✓ | ✓ | | | |
| **可灵 AI** | ✓ | ✓ | ✓ | ✓ | | | |
| **通义千问** | ✓ | ✓ | ✓ | ✓ | ✓ | | |
| **闲鱼** | | ✓ | ✓ | | ✓ | | |
| **Soul** | ✓ | ✓ | ✓ | ✓ | ✓ | | |
| **汽水音乐** | ✓ | ✓ | ✓ | ✓ | | ✓ | |
| **腾讯频道** | ✓ | ✓ | ✓ | ✓ | | | |
| **剪映** | ✓ | ✓ | ✓ | ✓…
