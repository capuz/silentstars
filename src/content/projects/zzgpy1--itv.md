---
repo: "zzgpy1/ITV"
name: "ITV"
description: "全自动IPTV源采集、检测及整合"
readmeQualityOk: true
url: "https://github.com/zzgpy1/ITV"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 7
forks: 13
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-05-24T08:50:58Z"
lastCommitAt: "2026-07-31T06:31:52Z"
status: "thriving"
tags: ["fork_magnet"]
healthScore: 70
undervaluedScore: 61
maintainers: ["zzgpy1", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/288109428444a1eaeee67079d6b63945597d04969c15e70bb36c30115e2f9a77/zzgpy1/ITV"
---

# IPTV 智能整理平台

全自动 IPTV 直播源采集、测速、验证、分类、合并与自治管理平台。

## 功能特性

- 多源聚合 – 同时拉取多个公开 IPTV 源，自动解析 M3U / TXT 格式
- 双重测速 – HTTP 快速探测 + ffmpeg 深度验证
- 智能分类 – 按央视、卫视、地方（省份）、港澳台自动归类
- 固定源保护 – 用户可预设优质源，系统永不自动替换
- 自治模式 – 源池 → 候选观察 → 稳定提升 → 质量监控
- 多格式输出 – tv.m3u、tv.txt、tv_multi.m3u、channels.json

## 快速开始

### 使用 Docker

```bash
docker-compose up -d
