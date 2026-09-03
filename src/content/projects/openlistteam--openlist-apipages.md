---
repo: "OpenListTeam/OpenList-APIPages"
name: "OpenList-APIPages"
description: "OpenList API Token Generator"
readmeQualityOk: true
url: "https://github.com/OpenListTeam/OpenList-APIPages"
homepage: "https://api.oplist.org"
language: "TypeScript"
languages: ["TypeScript", "JavaScript"]
languagePcts: [58, 22]
topics: ["api", "openlist", "token"]
stars: 475
forks: 255
openIssues: 0
closedIssues: 40
watchers: 0
contributors: 38
recentReleases: 0
createdAt: "2025-06-11T07:06:47Z"
lastCommitAt: "2026-09-03T08:14:18Z"
lastReleaseAt: "2025-07-31T10:04:01Z"
status: "thriving"
tags: ["fork_magnet"]
healthScore: 79
undervaluedScore: 29
maintainers: ["PIKACHUIM", "Copilot", "Suyunmeng"]
openGraphImageUrl: "https://opengraph.githubassets.com/00a9f9db6907cc92ae2f59df2170cbbdbacdfb40abcdef3e057d5c2e0b1343e3/OpenListTeam/OpenList-APIPages"
---

# OpenList API Token Generator

## 项目说明

用于OpenList获取部分网盘API的接口和页面

部署地址：[OpenList Token 获取工具 - 全球站点](https://api.oplist.org/)
部署地址：[OpenList Token 获取工具 - 中国大陆](https://api.oplist.org.cn/)

## 部署方法

### 一键部署

#### EdgeOne Functions 国际站

部署完成后，请登录[EdgeOne Functions后台](https://console.tencentcloud.com/edgeone/pages)，修改环境变量，请参考[变量说明](#变量说明)部分

#### EdgeOne Functions 中国站

部署完成后，请登录[EdgeOne Functions后台](https://console.cloud.tencent.com/edgeone/pages)，修改环境变量，请参考[变量说明](#变量说明)部分

#### Cloudflare Worker 全球站

部署完成后，请登录[Cloudflare Worker后台](https://dash.cloudflare.com/)，修改环境变量，请参考[变量说明](#变量说明)部分

### 容器部署
#### 拉取镜像
```
docker pull openlistteam/openlist_api_server
```
or
```
docker pull ghcr.io/openlistteam/openlist_api_server:latest
```
- 镜像支持多平台架构：`linux/amd64`、`linux/arm64`
#### 启动项目
```
docker run -d --name oplist-api-server \
  -p 3000:3000 \
  -e OPLIST_MAIN_URLS="api.example.com" \
  -e OPLIST_PROXY_API="gts.example.com" \
  -e OPLIST_ONEDRIVE_UID= `#optional` \
  -e OPLIST_ONEDRIVE_KEY= `#optional` \
  -e OPLIST_ALICLOUD_UID= `#optional` \
  -e OPLIST_ALICLOUD_KEY= `#optional` \
  -e OPLIST_BAIDUYUN_UID= `#optional` \
  -e OPLIST_BAIDUYUN_KEY= `#optional` \
  -e OPLIST_BAIDUYUN_EXT=…
