---
repo: "watchttvv/free-proxy-list"
name: "free-proxy-list"
description: "free socks5 http https proxy-list 免费socks5代理 socks5爬虫代理 最新socks5"
readmeQualityOk: true
url: "https://github.com/watchttvv/free-proxy-list"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 148
forks: 48
openIssues: 2
closedIssues: 1
watchers: 2
contributors: 2
recentReleases: 0
createdAt: "2025-09-19T21:31:55Z"
lastCommitAt: "2026-07-25T06:00:06Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 77
undervaluedScore: 34
maintainers: ["watchttvv"]
openGraphImageUrl: "https://opengraph.githubassets.com/825eb44b7a7ab58d541e88d6fb00b9ca1fb0a382e82591c2b8ee2958e8109f2f/watchttvv/free-proxy-list"
---

# 代理列表

## 项目简介

发现一个在线代理网页挺好玩，代理更新比较快，我就爬来了，代理基本都是可用的，不是那种1万个代理，只有几个可以使用的垃圾。

网页 https://tomcat1235.nyc.mn/ 上比较全，有兴趣自己去爬爬看

## 功能特点

- ⚡ 自动抓取最新代理列表
- 🔄 定时更新（每小时执行一次）
- 📝 标准格式输出：`协议://ip:port [地址位置]`
- 🌍 包含地理位置信息
- 📊 支持多种代理协议（HTTP、SOCKS5等）

## 使用方法

### 手动运行

```bash
python generate_proxy_list.py
```

### 查看结果

代理列表会保存在 `proxy.txt` 文件中，格式如下：

```
socks5://37.18.73.60:5566 [美国 加州 圣何塞]
http://123.143.162.221:6388 [韩国 首尔特别市]
socks5://35.183.59.99:5080 [加拿大 魁北克省 蒙特利尔]
```

## 自动更新

本项目使用 GitHub Actions 实现自动化更新：

- 🕐 每小时自动运行一次
- 📝 自动提交更新的代理列表
- 🔄 保持代理信息实时更新

## 依赖项

- requests
- beautifulsoup4

## 免责声明

本项目仅用于学习和研究目的，请遵守相关法律法规和网站使用条款。
