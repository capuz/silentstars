---
repo: "tydaytygx/docker-clouddrives"
name: "docker-clouddrives"
description: "适用于NAS等支持docker的服务器，docker容器运行阿里云盘、夸克网盘，等软件，通过VNC或者WEB访问图形界面 | Aliyundrive/alipan, QuarkCloudDrive GUI in docker "
readmeQualityOk: true
url: "https://github.com/tydaytygx/docker-clouddrives"
language: "Dockerfile"
languages: ["Dockerfile"]
languagePcts: [86]
stars: 15
forks: 1
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2024-09-10T09:42:09Z"
lastCommitAt: "2026-08-21T04:11:42Z"
status: "thriving"
tags: []
healthScore: 80
undervaluedScore: 30
maintainers: ["tydaytygx"]
openGraphImageUrl: "https://opengraph.githubassets.com/b682be9ff46039a3a4919c30eb52380f77709bd3226ffebb6ade0430f0c96721/tydaytygx/docker-clouddrives"
---

# docker_clouddrives 
中文 | [English](https://github.com/tydaytygx/docker-clouddrives/blob/main/README_EN.md)

Clouddrives in docker | docker容器运行的阿里云盘，夸克网盘等软件的图形界面，适用于各种Linux或者基于Linux的NAS、没有图形界面的服务器上

希望各种软件官方可以尽快支持Linux版

（镜像大小也许有改进的空间）

# 为什么要这样做

1. 某些应用获取管理员权限会修改系统的默认行为，如果不得不使用它们，让它们呆在隔离环境里是更好的选择

2. 找个地方挂机下载

# 声明

仓库仅提供运行环境，不对任何官方的程序进行更改，请自行下载官方网站的安装包

## 已经经过测试的软件（最低配置测试平台为J1900，非图形界面）

- [x] 阿里云盘
- [x] 夸克网盘
- [x] 微信
- [x] 网易云音乐

# 前言

项目基于

[https://github.com/jlesage/docker-baseimage-gui](https://github.com/jlesage/docker-baseimage-gui)

[https://github.com/GloriousEggroll/wine-ge-custom](https://github.com/GloriousEggroll/wine-ge-custom)

参考了下面这个项目的部分做法

[https://github.com/KevinLADLee/baidunetdisk-docker](https://github.com/KevinLADLee/baidunetdisk-docker)

请自行安装docker

# 使用说明
## 使用预构建镜像
```bash
docker pull tydaytygx/clouddrives:latest

git clone https://github.com/tydaytygx/docker-clouddrives

cd docker-clouddrives

chmod +x startapp.sh

mkdir -p config downloads

docker compose up -d
```
## 拉取资源并在本地构建镜像（可选）
```bash 
git clone https://github.com/tydaytygx/docker-clouddrives

cd docker-clouddrives

git clone https://github.com/jlesage/docker-baseimage-gui

cp -r…
