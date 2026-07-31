---
repo: "Fenglin-Maple/star-owner"
name: "star-owner"
description: "星⭐收藏家：Bilibili 收藏视频 Markdown 多 Agent 本地编排工作台"
readmeQualityOk: true
url: "https://github.com/Fenglin-Maple/star-owner"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [81]
topics: ["bilibili", "electron", "faster-whisper", "knowledge-base", "markdown", "multi-agent", "video-summary"]
stars: 30
forks: 3
openIssues: 2
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 10
createdAt: "2026-07-10T09:55:33Z"
lastCommitAt: "2026-07-31T06:30:13Z"
lastReleaseAt: "2026-07-18T12:50:41Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 69
undervaluedScore: 32
maintainers: ["Fenglin-Maple"]
openGraphImageUrl: "https://opengraph.githubassets.com/71c4ce449a94e953d5e983926dee12cbb6eb4bcaffb9388eea249e65642524d3/Fenglin-Maple/star-owner"
---

</p>

<h1 align="center">星藏家</h1>

  <strong>把“稍后再看”变成真正可用的视频知识库</strong><br>
  面向 Bilibili 收藏夹的本地 AI 视频知识整理桌面应用
</p>

</p>

星藏家是一个面向 Bilibili 收藏夹的本地视频知识整理桌面应用。它负责收藏夹同步、视频缓存、ASR、关键帧、字幕比较、AI 视频总结、Markdown 文档库、RAG 对话、知识库导出，以及“B站之外”中的本地媒体和多模态文档工具。

项目主页与源码：[Fenglin-Maple/star-owner](https://github.com/Fenglin-Maple/star-owner)

**Built with OpenAI Codex.**

> `1.2.0` 版本边界：视频总结任务只由应用内 Agent 工作流执行。外部 Codex、Claude Code、OpenCode 或其它 Agent 不再领取视频任务，也不能调用媒体工具或提交产物；它们可以通过本机只读 HTTP API 访问全部已完成 Markdown 知识库。
>
> 当前稳定版只处理普通 BV 单 P 视频。多 P 视频会在元数据阶段被识别、清理本次缓存并关闭任务；`ep/ss/md`、课程、活动聚合、音频和直播等特殊页面会在输入阶段直接拒绝。这样可以避免把只处理第一 P 的结果误标为完整总结。完整多 P 支持将在独立 Git 分支完成并通过专项测试后再合并。

`1.2.0` 默认使用多语言 `large-v3-turbo` ASR：NVIDIA GPU 使用 `int8_float16`，CPU 使用 `int8`。CPU 与 CUDA 是互斥的独立运行模式，ASR 请求仍在选定通道中排队。当前版本只在应用中暴露 `large-v3-turbo` 和 `small`；旧版 `medium` 依赖包保留在历史 Release 中供旧应用使用，不会被新版本删除或展示。本版本的本地工具复用应用媒体和 ASR 资源池，大批任务只向界面发送计数和失败摘要，避免进度更新拖慢主界面；“终末地 / Endfield”使用黑色侧栏和白色选中态，“B站之外”入口的显示/隐藏带有过渡动画。

## 快速安装与第一次使用

适用于 Windows 10/11 x64。普通用户不需要预先安装 Node.js、Python、FFmpeg、SQLite 或 faster-whisper。

1. 打开 [最新 GitHub Release](https://github.com/Fenglin-Maple/star-owner/releases/latest)，下载…
