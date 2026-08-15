---
repo: "Lanlan13-14/zephyr"
name: "zephyr"
description: "A  tool"
readmeQualityOk: true
url: "https://github.com/Lanlan13-14/zephyr"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [44]
stars: 33
forks: 6
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 9
recentReleases: 0
createdAt: "2026-04-26T01:32:30Z"
lastCommitAt: "2026-08-15T04:04:02Z"
lastReleaseAt: "2026-04-26T04:23:17Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 98
undervaluedScore: 42
maintainers: ["Lanlan13-14"]
openGraphImageUrl: "https://opengraph.githubassets.com/b77213e7562e44c7c8b73fde640f34a56f2e562d7ec8a4f71d2f54ee6d907b7c/Lanlan13-14/zephyr"
---

#  Zephyr-SSH

> Zephyr-SSH 是一个基于 Node.js 的浏览器服务器管理平台，提供 WebSSH 终端、SSH / RDP / VNC 连接管理、SSH 跳板与代理路由、安全登录、多因素认证、远程批量执行、数据备份导入导出等能力。

> **项目当前处于维护冻结状态，暂不处理 Pull Request，不建议提交 PR。提交 Issue 请按 [Issue 模板](https://github.com/Lanlan13-14/zephyr/blob/HEAD/.github/ISSUE_TEMPLATE/bug_report.md) 格式填写。**

---

## 目录

- [功能特性](#功能特性)
- [协议与路由能力](#协议与路由能力)
- [快速开始](#快速开始)
- [配置说明](#配置说明)
- [AI 助理智能体](#ai-助理智能体)
- [RDP / VNC / noVNC](#rdp--vnc--novnc)
- [Zephyr Agent 文件磁盘映射](#zephyr-agent-文件磁盘映射)
- [Docker Compose 部署](#docker-compose-部署)
- [Docker 自行构建](#docker-自行构建)
- [更新容器并保留数据](#更新容器并保留数据)
- [项目结构](#项目结构)
- [安全建议](#安全建议)
- [依赖与数据说明](#依赖与数据说明)
- [计划](#计划)
- [赞助商](#赞助商)
- [致谢](#致谢)

---

## 功能特性

### 连接与终端

- 🖥️ **WebSSH 终端**：基于 `ssh2` + WebSocket，在浏览器中打开 SSH Shell。
- 🌊 **DOM 终端渲染**：基于 `@wterm/dom`，终端文本可像普通网页一样拖选复制。
- 📱 **移动端友好**：支持移动端长按、拖拽选择和系统复制菜单。
- 🗂️ **连接资产管理**：支持 SSH / RDP / VNC 连接管理、搜索、排序、标签和备注。
- 🖥️ **RDP / VNC 远程桌面**：RDP 使用浏览器端 Go WASM（grdp）协议栈，不依赖服务端 FreeRDP、Python 或 native bridge；默认且首选 `worker-gpu-v2`，能力探测失败时使用页面线程 `gpu-v2-page`。两条管线共用 RDPGFX/classic-bitmap semantic、WebGL2 FBO compositor、WebCodecs AVC420/AVC444 双流、可靠 FRAME_ACK 和 WebSocket↔TCP 双向背压；旧 Canvas2D/raw-H264/单纹理 WebGL…
