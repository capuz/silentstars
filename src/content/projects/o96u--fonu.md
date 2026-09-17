---
repo: "O96u/Fonu"
name: "Fonu"
description: "面向飞牛fnOS的轻量公网访问管理工具"
readmeQualityOk: true
url: "https://github.com/O96u/Fonu"
language: "Go"
languages: ["Go", "Vue"]
languagePcts: [50, 45]
stars: 5
forks: 0
openIssues: 2
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 10
createdAt: "2026-09-12T11:15:32Z"
lastCommitAt: "2026-09-17T08:51:29Z"
lastReleaseAt: "2026-09-13T13:14:15Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 70
undervaluedScore: 37
maintainers: ["O96u"]
openGraphImageUrl: "https://opengraph.githubassets.com/d5b10f63ac07d1e29aa5e82394f74ace760456ad45284ace85621fe0aeeb48c9/O96u/Fonu"
---

</p>

<h1 align="center">Fonu</h1>

  面向 <strong>飞牛 fnOS</strong> 的轻量公网访问管理工具<br />
  反向代理 · DDNS · HTTPS 证书 · 内网穿透 · 一站式 Web 管理
</p>

</p>

---

## 简介

**Fonu** 是一款主要为 **飞牛 fnOS** 编写的反代与管理工具，帮助你在 NAS 上快速搭建稳定的公网访问能力：通过 Web 界面管理 Nginx 反向代理、自动同步 DDNS、申请与续期 Let's Encrypt 证书，并在一个仪表盘里查看服务状态、访问日志与流量统计。

无需手写 Nginx 配置，也无需在多个工具之间切换。当前开发与测试环境以飞牛 fnOS 为主，**群晖、威联通、自建 Linux 等其他环境尚未充分测试**，部署前请自行验证。

## 功能特性

| 模块           | 说明                                                                         |
| -------------- | ---------------------------------------------------------------------------- |
| **反向代理**   | 多域名、多端口、HTTP/HTTPS、自动重定向；实时访问日志、流量统计、当前连接 IP  |
| **DDNS**       | 支持 Cloudflare、DNSPod、阿里云、腾讯云 DNS；单任务多根域名，自动同步公网 IP |
| **HTTPS 证书** | ACME 自动申请与续期；证书/私钥/ZIP 下载；申请进度实时日志                    |
| **仪表盘**     | 公网 IP、域名、证书、服务状态一览；请求趋势与运行健康度                      |
| **日志**       | Nginx 访问/错误日志、系统运行日志；分页与实时 SSE 推送                       |
| **内网穿透**   | FRP 客户端（Nginx 网关穿透）：无公网 IP 时经 VPS 中转，反代与安全策略不变    |
| **设置**       | 管理员密码、配置备份与恢复、服务发现（如飞牛 fnOS :5666）                    |
| **其他**       | 深色模式、配置导出/导入、GitHub Release 更新提示                             |

## 界面展示

</p>

</p>

</p>

</p>…
