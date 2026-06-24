---
repo: "yaojingang/yao-open-tools"
name: "yao-open-tools"
description: "Yao 的开源小工具集合：聚焦本地优先的 AI 编码、网页截图、视频转写、终端诊断和磁盘空间分析工作流。"
url: "https://github.com/yaojingang/yao-open-tools"
language: "PHP"
languages: ["PHP", "Python", "JavaScript"]
languagePcts: [26, 23, 20]
topics: ["ai-tools", "developer-tools", "llm", "macos", "sqlite", "terminal", "token-tracking", "usage-analytics", "cli-tools", "local-first"]
stars: 70
forks: 9
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 3
recentReleases: 1
createdAt: "2026-04-02T03:47:16Z"
lastCommitAt: "2026-06-24T00:20:15Z"
lastReleaseAt: "2026-04-02T03:58:29Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 98
undervaluedScore: 37
maintainers: ["yaojingang", "0xtootoo29"]
openGraphImageUrl: "https://opengraph.githubassets.com/9470beb34a7fa13e7b9661c539ca815bf93b64fd44a0fc9eb5a0c46b0233f94d/yaojingang/yao-open-tools"
---

# yao-open-tools

Yao 的开源小工具集合，面向本地优先的 AI 编码、开发者效率、终端诊断、网页截图、网页/PDF 翻译、视频转写和磁盘空间分析等日常工作流。

这个仓库不是一个大而全的平台，也不是某个单一产品的源码仓库。它更像一个持续演进的工具箱：每个工具都尽量保持独立、轻量、可直接运行，并围绕一个明确问题提供可复用的命令行、浏览器扩展或本地工作台能力。

## 项目定位

`yao-open-tools` 的目标是沉淀一组真正能在本机工作流里反复使用的小工具。

它重点关注这些方向：

- AI 编码使用量、模型成本、终端来源和工具覆盖率的本地统计。
- 浏览器页面截图、长页面留档、主体内容裁剪和多格式导出。
- 浏览器网页和 PDF 的英译中辅助阅读、划词翻译、渐进式加载和本地缓存。
- 视频下载、字幕提取、音频转写和基于 transcript 的 AI 报告生成。
- 自托管短链接、二维码分发、访问统计和多用户链接管理。
- 本机内存、GPU、软件活跃度和进程热点诊断。
- 磁盘空间扫描、风险分类、可回收空间分析和安全清理计划。
- 未来更多围绕 `tok*`、本地日志、HTML 报告、终端效率和开发者运营的开源工具。

这个仓库的默认取向是本地优先：能在本机完成的采集、分析、渲染和导出，优先不依赖远程服务；必须调用外部服务时，应清楚说明数据路径、凭据来源和隐私边界。

## 当前工具

| 工具 | 类型 | 入口 | 主要用途 |
| --- | --- | --- | --- |
| [TokKit](tools/tokkit/README.md) | Python CLI | `tok` / `tokkit` | AI 编码工具使用量台账，统计 token、成本、模型、终端、客户端和来源覆盖率。 |
| [tokscr](tools/tokscr/README.md) | Chrome MV3 扩展 | 浏览器插件 | 网页截图工具，支持完整页面、可见区域、选择区域、主体去噪、预览页二次裁剪和 PNG/JPEG/PDF/复制/打印导出。 |
| [toktra](tools/toktra/README.md) | Chrome MV3 扩展 | 浏览器插件 | 网页和 PDF 英译中阅读插件，支持手动/站点/全局翻译模式、划词翻译、缓存、PDF 双栏阅读和本地 API 配置。 |
| [TokDoc](tools/TokDoc/README.md) | Node.js / Docker 本地工作台 | `npm run dev` / Docker | 本地文档管理器，支持上传 HTML/PDF/Word、目录监听、生成公开短链接、HTML 页面内编辑、回收站、访问统计和线上同步。 |
|…
