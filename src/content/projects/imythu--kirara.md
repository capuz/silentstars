---
repo: "imythu/kirara"
name: "kirara"
description: "云母 Kirara：面向 PT 用户的影视订阅、资源搜索、下载与自动化管理工具。原 rflush 项目的后续维护仓库。"
readmeQualityOk: true
url: "https://github.com/imythu/kirara"
homepage: "https://github.com/imythu/kirara#readme"
language: "Rust"
languages: ["Rust", "TypeScript"]
languagePcts: [64, 22]
stars: 10
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 3
recentReleases: 10
createdAt: "2026-09-05T13:03:59Z"
lastCommitAt: "2026-09-18T14:03:46Z"
lastReleaseAt: "2026-09-05T17:29:35Z"
status: "thriving"
tags: ["solo_builder", "release_machine"]
healthScore: 78
undervaluedScore: 55
maintainers: ["InuYashaYa", "imythu"]
openGraphImageUrl: "https://opengraph.githubassets.com/ef6ca7235cb3ef3098fd460d3645b00446ee66cdea50a2e91bc9fdfd55a3f09d/imythu/kirara"
---

# 云母

云母是一套面向 PT 用户的管理工具，提供自动追剧、电影订阅、多站资源搜索、qBittorrent 下载、刷流任务和站点数据总览。Windows 和 macOS 提供桌面应用，Linux 和 Docker 提供 Web 服务。

云母的英文项目名为 **Kirara**，仓库、二进制、Docker 镜像和新建数据库统一使用 `kirara`。项目已从 [imythu/rflush](https://github.com/imythu/rflush) 迁移至本仓库，后续更新、问题反馈和发布均在这里进行。

旧版本用户请先阅读[迁移指南](https://github.com/imythu/kirara/blob/HEAD/doc/migration-from-rflush.md)，保留原有数据目录即可继续使用。

## 主要功能

- 从 TMDB 搜索电影、电视剧和动漫并创建订阅
- 自动识别季、集、动画绝对集和已播出目标
- 并发搜索多个 NexusPHP、M-Team 站点
- 解析分辨率、片源和视频编码，按质量规则筛选排序
- 提供电视剧、电影、动漫的内置质量方案
- 手动搜索资源，查看匹配结果、拒绝原因和质量信息
- 自动或手动提交资源到 qBittorrent
- 使用持久化下载队列处理重试、去重和状态对账
- [RSS 下载](https://github.com/imythu/kirara/blob/HEAD/doc/rss-downloader.md)：订阅种子源，按标题与属性规则自动收取新增资源，预览判定并按需补下历史条目
- 管理 PT 刷流任务
- 使用公共 Lightpanda 或 Browserless 配置执行自动签到，支持单个新增和批量创建；每个站点最多一个签到任务（包括已暂停任务），批量失败项可重试
- 升级时若已有重复签到任务，保留最早创建的一条并合并执行记录，其余配置归档至 `sign_in_tasks_duplicate_archive` 表
- 查看 PT 站点上传量、下载量、分享率等账号数据
- 导出站点账号总览图片
- React Web 界面，适配桌面端和移动端

配置、订阅、下载记录和运行状态保存在本地 SQLite 数据库中，路径见[数据目录](#数据目录)。

## 快速开始

### Windows / macOS 桌面应用

从 [GitHub Releases](https://github.com/imythu/kirara/releases) 下载对应系统的安装包，并核对同一版本的 `SHA256SUMS.txt`：

| 系统 | 安装包 | 使用方式 |
| --- | --- | --- |
| Windows x64 |…
