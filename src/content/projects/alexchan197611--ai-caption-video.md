---
repo: "alexchan197611/ai_caption_video"
name: "ai_caption_video"
description: "AI caption video generator with TTS support"
url: "https://github.com/alexchan197611/ai_caption_video"
language: "Python"
languages: ["Python", "TypeScript"]
languagePcts: [73, 25]
stars: 81
forks: 6
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 3
createdAt: "2026-06-16T01:20:58Z"
lastCommitAt: "2026-06-27T00:36:46Z"
lastReleaseAt: "2026-06-26T23:43:28Z"
status: "thriving"
tags: []
healthScore: 79
undervaluedScore: 20
maintainers: ["alexchan197611"]
openGraphImageUrl: "https://opengraph.githubassets.com/6d3aa423a6202c28ae3f8a361f3a551458d3b1500d8d27dd997bdc31b935a444/alexchan197611/ai_caption_video"
---

# AI Media Assistant Web

AI Media Assistant Web 是一款面向中文内容创作者的本地短视频生成工具。它在浏览器中完成文案编辑、字幕模板、逐句配图、配音、BGM 和视频导出，所有项目数据和生成结果默认保存在本机。

服务默认只监听 `127.0.0.1`，适合个人电脑本地使用。

</p>

https://github.com/user-attachments/assets/1332d442-f919-4064-ad73-bb960943f4ea

https://github.com/user-attachments/assets/c6010d8a-5c08-4af2-81dc-150750757820

- [观看 B 站视频演示](https://www.bilibili.com/video/BV18y7P66EAQ)

  新的教程视频正在录制中，很快会和大家见面，到B站视频评论区里看看夸克网盘下载链接。
  
## 主要能力

- 本地 Web 编辑器：项目创建、打开、复制、删除和自动保存。
- 多行文案管理：每一行文案都是独立片段，并使用 UUID 保存配图、颜色、音频等关联数据。
- 字幕模板：支持居中大字、滚动队列、古风模板和情感模板。
- 情感模板自动配图：根据每行文案匹配本地背景图库，已匹配图片在同一项目中不会重复使用。
- 逐句配图轨道：每一句可上传、修改或删除背景图。
- 重点词标记：支持选中文案后标记重点，并在字幕中高亮。
- 后端统一预览：浏览器预览和最终导出共享同一套字幕排版与画面裁切逻辑。
- TTS 配音：支持 OmniVoice、Qwen3-TTS、参考音频、预设语音和语速控制。
- BGM：支持内置音乐库、随机选曲、上传 BGM 和音量调整。
- 后台任务：TTS 和视频渲染由 Worker 执行，不阻塞 API 请求。
- 任务控制：支持任务状态显示、取消、重试和生成后视频预览/下载。
- 本地资源：支持内置背景图、预设音色、BGM、Logo 和模板索引。

## 技术结构

```text
apps/
  web/                 React + TypeScript + Vite 前端
  api/                 FastAPI + SQLAlchemy + Alembic 后端
workers/
  render_worker/       TTS 与视频渲染后台任务进程
packages/
  media_core/          字幕排版、模板、TTS 桥接、音视频合成核心
storage/
  resources/           可分发本地素材
  projects/            SQLite 数据库与…
