---
repo: "Fangnai-byte/astrbot_plugin_group_log_archive"
name: "astrbot_plugin_group_log_archive"
description: "AstrBot 群聊日志归档插件：分群按天导出聊天记录，支持图片保存、AI 命名、脱敏"
readmeQualityOk: true
url: "https://github.com/Fangnai-byte/astrbot_plugin_group_log_archive"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["astrbot", "astrbot-plugin", "chat-log", "image-captioning", "log-archive", "privacy", "qq-bot", "chat-log-archive"]
stars: 6
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 10
createdAt: "2026-08-21T18:50:15Z"
lastCommitAt: "2026-08-25T04:10:12Z"
lastReleaseAt: "2026-08-23T08:14:09Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 80
undervaluedScore: 54
maintainers: ["Fangnai-byte"]
openGraphImageUrl: "https://opengraph.githubassets.com/97c97572d73beccc66e7ad69854f62278a6bbc0680b966e100b5df9715367512/Fangnai-byte/astrbot_plugin_group_log_archive"
---

# Group Log Archive (群聊日志归档)

一个 [AstrBot](https://github.com/Soulter/AstrBot) 插件：定时将 AstrBot 文件日志中的**群聊记录**增量导出为按天归档的纯文本文件，只保留聊天内容，省空间、省上下文。支持分群归档、图片实时保存与 AI 命名、隐私脱敏。

## 功能

- **定时增量导出**群聊记录，只保留聊天内容（默认 60 秒，支持 cron 自定义时间，如 `12:00` 或 `0 3 * * *`）
- **只保留聊天记录行**，过滤掉系统调试、LLM 请求等无关日志（体积可缩小 99%+）
- **分群按天归档**：`astrbot_<群号>_YYYY-MM-DD.log`，各群互不混淆
- **图片实时保存**：群里的图片自动存入 `tu/` 子目录并记录，支持 AI 自动命名、定时清理
- **隐私脱敏**：群号哈希、QQ 号打码（可选开关）
- 导出后自动清空源日志（truncate），避免 `data/logs` 与归档双份增长
- 增量断点续传（`.export_state.json`），AstrBot 重启/日志轮转不丢不重
- 插件卸载时执行最终导出，保证数据完整性
- 提供 `/log_archive` 指令查看状态、手动导出

## 前提条件

1. AstrBot 需开启**文件日志**并设为 **DEBUG** 级别（这样日志里才会记录群消息原文）：
   - WebUI → 设置 → 日志相关：`log_file_enable=true`、`log_level=DEBUG`
   - 修改后需重启 AstrBot 生效
2. 依赖 `apscheduler` 与 `Pillow`（AstrBot 自带，无需额外安装）

## 安装

将本插件目录放入 AstrBot 的 `data/plugins/` 下，然后在 WebUI 的插件市场/管理页启用即可。

## 快速开始（新手必看）

1. **安装插件**：下载 Release 页的 zip 解压后放入 `data/plugins/`，或在 WebUI 插件管理 → 从 Git 仓库安装：`https://github.com/Fangnai-byte/astrbot_plugin_group_log_archive`，然后启用。
2. **开启日志（关键，否则没有数据）**：
   - 插件配置里打开 `auto_enable_debug`（自动修改 AstrBot 配置），或手动开启 `log_file_enable=true` + `log_level=DEBUG`；
   - **重启 AstrBot** 生效。
3. **按需配置**（插件配置页）：
   -…
