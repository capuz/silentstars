---
repo: "ucmao/pan-relay"
name: "pan-relay"
description: "Pan‑Relay是一款专为网盘推广员和资源站长打造的自动化收益工具。项目支持批量接入第三方搜索API，自动转存替换资源为自己的分享链接。已适配夸克、百度、阿里、UC、迅雷，提供后台资源管理、搜索接口配置管理、云盘凭证配置、前台展示网盘控制等。项目API接口方便接入机器人，适合网盘推广场景进行统一检索、管理与分发。"
readmeQualityOk: true
url: "https://github.com/ucmao/pan-relay"
homepage: "https://so.ucmao.cn"
language: "Python"
languages: ["Python", "JavaScript"]
languagePcts: [46, 23]
topics: ["aliyundrive", "baidunetdisk", "cloud-drive", "cloud-storage", "netdisk", "netdisk-search", "quark-netdisk", "resource-search", "search-aggregation", "self-hosted"]
stars: 57
forks: 17
openIssues: 1
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2025-12-17T04:19:01Z"
lastCommitAt: "2026-09-03T08:13:33Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 50
undervaluedScore: 16
maintainers: ["ucmao"]
openGraphImageUrl: "https://opengraph.githubassets.com/aef11601361f3fc022d4e666b6e61714a9160d586a7d0734be6c00105328ccdb/ucmao/pan-relay"
---

**基于 Python 的多网盘聚合中继与自动化变现管理系统**

</p>

Pan-Relay 是一款专为网盘推广员、资源站长打造的**全自动化收益与聚合分发系统**。

通过“资源聚合 -> 自动转存 -> 链接洗白 -> 裂变分发”的闭环，助你实现拉新与转存收益最大化。

**内置 SQLite 数据库，零配置一键启动；原生集成 Telegram 公开频道与多上游 API 搜索。**

</div>

---

## 💎 核心业务逻辑

* **自动化链接洗白**：已接入 **夸克网盘、百度网盘、阿里云盘、UC网盘、迅雷网盘**。批量导入他人分享链接，系统自动执行“转存至个人盘 -> 生成个人分享链 -> 替换入库”，实现收益权转移。
* **私有资源库管理**：资源统一存入本地 SQLite 数据库，支持后台批量增删查改、按类型标注、关键词检索及一键导出 Excel，方便全网分发。
* **多渠道聚合搜索**：
  * **前台搜索**：极简响应式搜索首页，优先展示内部收益资源，随后并发聚合 Telegram 公开频道及第三方 API 搜索结果。
  * **公开接口**：提供标准 RESTful JSON 搜索接口，无缝对接公众号、小程序、微信机器人或资源导航站。

## ✨ 项目特点

* **零外部依赖**：持久化层内置 SQLite 数据库，自带 WAL 模式与并发读优化，无需安装配置 MySQL 等外部服务。
* **开箱即用**：应用启动时**自动检测并初始化表结构与 16+ 预置 API 搜索源**，克隆源码或运行 Docker 即可直接启动。
* **免凭证 TG 搜索**：直接抓取 Telegram 公开频道 Web 预览页，无需申请 Bot Token 或海外账号，自动提取提取码并拼接访问链接。
* **容器化部署**：提供精简轻量 Dockerfile 与 Docker Compose 编排，支持数据持久化挂载与健康检查。

---

## 💾 支持的网盘矩阵

| 网盘平台 | 识别状态 | 自动转存/洗白 | 动态查看/临时分享 | 凭证类型 |
| :--- | :------: | :-----------: | :---------------: | :------- |
| **夸克网盘** | ✓ | ✓ | ✓ | Cookie |
| **百度网盘** | ✓ | ✓ | ✓ | Cookie |
| **阿里云盘** | ✓ | ✓ | ✓ | Refresh Token |
| **UC网盘** | ✓ | ✓ | ✓ | Cookie |
| **迅雷网盘** | ✓ | ✓ | ✓ | Refresh Token + Captcha Sign + User ID |
| **其他网盘** | ✓…
