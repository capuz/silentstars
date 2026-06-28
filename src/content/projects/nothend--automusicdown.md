---
repo: "Nothend/autoMusicDown"
name: "autoMusicDown"
description: "Automatically download the daily recommended songs if not in Navidrome or Music-Tag-Web"
url: "https://github.com/Nothend/autoMusicDown"
language: "Python"
languages: ["Python"]
languagePcts: [94]
stars: 6
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2025-10-22T00:30:31Z"
lastCommitAt: "2026-06-28T02:01:18Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 80
undervaluedScore: 21
maintainers: []
openGraphImageUrl: "https://opengraph.githubassets.com/1e002dbe397af4d14e2c84b82365a974503978b9cbb3142f96f406e07b3f6973/Nothend/autoMusicDown"
---

# 佛系云音乐每日推荐自动下载

一个帮你自动下载云音乐每日推荐歌曲的工具，适合已有音乐库、需要增量更新的朋友（每日推荐通常30首，不适合大量下载场景）。

## 核心功能
- 自动扫描并下载以当日日期命名的歌单（如`20251025`）中的歌曲
- 支持与Navidrome/music-tag-web联动，自动跳过库中已存在的歌曲
- 下载的歌曲包含完整元信息（歌词、年份、封面、歌手等）

## 使用流程
> 前提：需要一个**云音乐黑胶会员**账号（否则无法获取无损/高音质下载链接）。

1. **手动创建歌单**：在云音乐客户端（PC/手机），将每日推荐中喜欢的歌曲添加到以当日日期命名的歌单（如`20251025`）
2. **自动下载**：工具会在每日固定时间扫描该歌单，自动下载其中的歌曲

## 配置说明
1. **文件位置**：`config.yaml`与`docker-compose.yml`需放在同一目录
2. **关键配置**：
   - `cookie`：获取Cookie方法：登录云音乐网页版 → F12开发者工具 → Network标签页 → 复制任意请求的Cookie值（无需引号）
   - `uid`：你的云音乐用户ID
   - `QUALITY_LEVEL`：下载音质（默认`lossless`无损）
   - `NAVIDROME`/`music-tag-web`：按需开启，避免重复下载（分别对应 Navidrome 与 music-tag-web 的 MySQL 库）
   - `BARK_API`：可选，配置后可接收下载通知
   - `REQUEST_DELAY`：可选，处理每首歌之间的间隔秒数（默认`0.5`，用于降低被网易云限流的概率；想更快可设为`0`）

## 部署步骤（Docker）
1. 准备环境：群晖或其他支持Docker的主机
2. 修改`docker-compose.yml`：
   - `CRON_SCHEDULE`：设置每日执行时间（cron格式，默认`0 20-23,0 * * *`）
   - `PULL_CRON`：可选，设置代码拉取时间（默认每天18点）
   - 目录映射：`./downloads`可直接映射到music-tag-web的下载目录，方便管理
3. 启动容器：
   ```bash
   docker-compose up -d
   ```

## 致谢
感谢 [苏晓晴](https://github.com/Suxiaoqinx) 的贡献

## 支持
如果觉得工具有用，欢迎随意打赏：

| 微信 | 支付宝 |
|------|--------|
|  |  |
