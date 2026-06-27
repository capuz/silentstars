---
repo: "fqscfqj/Y2A-Auto"
name: "Y2A-Auto"
description: "YouTube到AcFun和bilibili自动化搬运工具，支持AI翻译、字幕生成、内容审核、智能监控"
url: "https://github.com/fqscfqj/Y2A-Auto"
language: "Python"
languages: ["Python", "HTML"]
languagePcts: [72, 25]
topics: ["acfun", "bilibili"]
stars: 313
forks: 43
openIssues: 0
closedIssues: 11
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2025-05-10T11:07:45Z"
lastCommitAt: "2026-06-27T00:47:04Z"
lastReleaseAt: "2025-09-02T08:07:58Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 99
undervaluedScore: 39
maintainers: ["fqscfqj", "Copilot"]
openGraphImageUrl: "https://opengraph.githubassets.com/df16df707f52f0fa12e29f65fac119b3b99770e2c207e67a89951aa50d036bba/fqscfqj/Y2A-Auto"
discussionCount: 2
---

# Y2A-Auto

将 YouTube 视频自动搬运到 AcFun / bilibili 的一体化工具。

从下载、ASR、字幕翻译、字幕质检、内容审核到上传，全流程自动化；内置 Web 管理后台、YouTube 监控和维护能力。

[快速开始](#快速开始) · [功能概览](#功能概览) · [部署与运行](#部署与运行) · [配置说明](#配置说明) · [使用指南](#使用指南) · [通知推送](#通知推送) · [CookieCloud](#cookiecloud-集成) · [安全特性](#安全特性) · [常见问题](#常见问题)

---

</div>

  </a>
  <br/>
  <strong>Telegram 转发机器人（试用）：</strong>
  <br/>
  <sub>自部署版本：<a href="https://github.com/fqscfqj/Y2A-Auto-tgbot">Y2A-Auto-tgbot</a></sub>
</p>

## 项目展示

</p>

</p>

  <sub>以上为当前页面截图。</sub>
</div>

## 核心亮点

| 能力模块 | 说明 |
| --- | --- |
| 全流程自动化 | 从下载、ASR、字幕、元信息到上传一条龙处理 |
| 审核可控 | 支持人工审核、强制上传、内容安全检测和登录保护 |
| 灵活部署 | Docker / 本地双模式，支持 CPU 与多种 GPU 编码 |
| 监控拉取 | 支持 YouTube 频道 / 关键词定时抓取与历史记录 |
| 消息推送 | 企业微信、Server酱、message-pusher 多渠道异步通知 |
| CookieCloud | 从 CookieCloud 服务自动同步 YouTube Cookies |
| 安全防护 | 密码保护、暴力破解锁定、会话超时、路径遍历防护 |
| 维护完善 | 支持日志清理、下载清理、并发控制和 FFmpeg 自动补齐 |

## 功能概览

- 自动化流水线
  - `yt-dlp` 下载视频与封面
  - 自动或按需进行语音识别生成字幕，支持 Whisper、Voxtral
  - 字幕翻译、字幕后处理、字幕质检（QC）与字幕烧录
  - AI 生成标题、简介、标签与分区推荐
  - 内容安全审核（阿里云 Green）
  - 自动上传到 AcFun / bilibili / 双平台
- Web 管理后台
  - 任务列表、人工审核、强制上传
  - 设置中心分组管理：运行概览、账号与网络、内容审核、AI 模型、字幕处理、语音识别、视频转码、监控与维护、安全
  - 登录保护、错误次数锁定和密码管理
- YouTube 监控
  -…
