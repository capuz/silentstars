---
repo: "Genius-Society/rogsoft_goofish"
name: "rogsoft_goofish"
description: "Goofish for Asuswrt is a Koolcenter plugin that brings Xianyu shop automation to ASUS routers. It features AI-powered reply, auto-delivery, order management, and multi-account support, helping merchants run their stores efficiently from a router-based dashboard."
readmeQualityOk: true
url: "https://github.com/Genius-Society/rogsoft_goofish"
homepage: "https://github.com/Genius-Society/rogsoft_goofish"
language: "Classic ASP"
languages: ["Classic ASP", "Shell", "JavaScript"]
languagePcts: [32, 29, 24]
topics: ["asuswrt-merlin", "goofish-monitor", "koolcenter", "xianyu-tool"]
stars: 24
forks: 0
openIssues: 4
closedIssues: 1
watchers: 1
contributors: 3
recentReleases: 1
createdAt: "2025-01-29T02:45:52Z"
lastCommitAt: "2026-11-09T11:59:37Z"
lastReleaseAt: "2026-11-09T12:00:13Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 72
undervaluedScore: 48
maintainers: []
openGraphImageUrl: "https://opengraph.githubassets.com/b38add2c77d1613902b9c5fa33d4b87c66105f1b832d0082db1f302de93e838a/Genius-Society/rogsoft_goofish"
---

# 🐟 Goofish for ASUSWRT

**闲鱼管理系统 - Koolcenter 软件中心插件版本**

基于 [GuDong2003/xianyu-auto-reply-fix](https://github.com/GuDong2003/xianyu-auto-reply-fix) 二次开发 · 路由部署 · 持续更新

---

## 📖 简介

闲鱼管理系统 - Koolcenter 软件中心插件版本是在 [xianyu-auto-reply-fix](https://github.com/GuDong2003/xianyu-auto-reply-fix) 基础上的二次开发版本，部署到华硕路由器 Koolcenter 版 Merlin 固件，让闲鱼店铺管理更加高效便捷。

---

### 插件图标 ICO

### 前置插件
在 KoolCenter 软件中心即可安装并挂载, 安装顺序自上而下:
- USB2JFFS
- 虚拟内存
- 科学上网 lite

### 机型支持
在 asuswrt 为基础的固件上, goofish 插件目前仅支持 aarch64 架构的路由器, 具体如下:
- 部分及其未列出, 请根据 CPU 型号和支持软件中心与否自行判断
- 使用 goofish 建议配置 1G 及以上的虚拟内存, 特别是小内存的路由器

| 机型             | 内存  | CPU/SOC | 架构  | 核心  |  频率   |
| :--------------- | :---- | :-----: | :---: | :---: | :-----: |
| RT-AC86U         | 512MB | BCM4906 | armv8 |   2   | 1.8 GHz |
| GT-AC2900        | 512MB | BCM4906 | armv8 |   2   | 1.8 GHz |
| RT-AX92U         | 512MB | BCM4906 | armv8 |   2   | 1.8 GHz |
| GT-AC5300        | 1GB   | BCM4908 | armv8 |   4   | 1.8 GHz |
| RT-AX88U         | 1GB   | BCM4908 | armv8 |   4   | 1.8 GHz |
| GT-AX11000       | 1GB   | BCM4908 | armv8 |   4   | 1.8 GHz |
| NetGear RAX80    | 1GB   | BCM4908 | armv8 |   4   | 1.8 GHz |
| RT-AX68U         | 512MB |…
