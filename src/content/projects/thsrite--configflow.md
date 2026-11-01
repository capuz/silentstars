---
repo: "thsrite/configflow"
name: "configflow"
description: "A web tool for configuring subscriptions, nodes, rules, and more through a web interface, which can generate Mihomo (Clash Meta), Surge, and MosDNS configuration files. It also supports remote Agent management and can automatically push configurations to multiple servers."
originalDescription: "一个 Web 工具，支持在 Web 界面配置订阅、节点、规则等，可生成对应的 Mihomo (Clash Meta) 、Surge、MosDNS 配置文件。同时支持 Agent 远程管理，可将配置自动推送到多台服务器。"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/thsrite/configflow"
language: "Python"
languages: ["Python"]
languagePcts: [54]
stars: 156
forks: 29
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 9
recentReleases: 1
createdAt: "2026-01-21T06:27:47Z"
lastCommitAt: "2026-11-01T10:44:04Z"
lastReleaseAt: "2026-08-04T02:25:42Z"
status: "thriving"
tags: []
healthScore: 90
undervaluedScore: 34
maintainers: ["sunbroke555", "sunbrokerain"]
openGraphImageUrl: "https://opengraph.githubassets.com/b74b96e96afdbf0acb0d1c0f2e5bb8d1e2d56950d98823b30b30b8542b342bb0/thsrite/configflow"
---

# ConfigFlow

**Manage proxy subscriptions, internet rules, and network devices from one web page.**

ConfigFlow organizes subscriptions and nodes into configurations usable by Mihomo, Surge, Loon, MosDNS, and OxiDNS. It can also send configurations to devices and view their running status. Proxy subscriptions or nodes must be prepared by you.

[User Manual](https://thsrite.github.io/configflow/) · [Docker Image](https://hub.docker.com/r/thsrite/config-flow) · [Report an Issue](https://github.com/thsrite/configflow/issues)

## What It Can Do

- Organize subscriptions and nodes, check connectivity, and schedule automatic updates.
- Set internet rules for websites and devices, and generate configurations for phones, computers, or routers.
- Manage services on Linux, Docker, and RouterOS, send configurations, and view logs and running status.
- Configure shared DNS addresses for two OxiDNS instances, so that if one fails, the other takes over.

## Getting Started

1. [Install the management panel](https://thsrite.github.io/configflow/guide/install): choose Docker or NAS deployment, and set up an account and data storage directory.
2. [Complete the first-run…
