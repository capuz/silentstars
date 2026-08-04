---
repo: "muggle-stack/cc-remote"
name: "cc-remote"
description: "Claude Code / Codex Remote Control"
readmeQualityOk: true
url: "https://github.com/muggle-stack/cc-remote"
language: "Python"
languages: ["Python", "TypeScript"]
languagePcts: [64, 32]
stars: 9
forks: 5
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 6
recentReleases: 1
createdAt: "2026-07-08T05:55:03Z"
lastCommitAt: "2026-08-04T06:11:37Z"
lastReleaseAt: "2026-07-24T09:18:31Z"
status: "newborn"
tags: ["hidden_gem", "fork_magnet"]
healthScore: 99
undervaluedScore: 62
maintainers: ["stack-muggle", "TroyMitchell911", "muggle-stack"]
openGraphImageUrl: "https://opengraph.githubassets.com/b9c0eda512e4df5b7fd881b873b95d8038805a5143b0ffbf34dfc01659352674/muggle-stack/cc-remote"
---

# cc-remote

**把你机器上的 Claude Code / Codex，带到手机和任意浏览器。**

自托管 · 双引擎 · 多会话 · 实时过程 · 响应式 Web

**当前版本：v3.0.0** · Wire protocol v29

[English](https://github.com/muggle-stack/cc-remote/blob/HEAD/README_en.md) ·
[5 分钟上手](#本地快速开始一台机器5-分钟) ·
[生产部署](#生产部署公网-vps-中继--你机器上的-wrapper) ·
[安全须知](#安全须知务必读) ·
[更新记录](https://github.com/muggle-stack/cc-remote/blob/HEAD/CHANGELOG_zh.md)

cc-remote 是一个开源的远程控制面：本机 `wrapper` 驱动已经安装并登录的
`claude` / `codex`，浏览器通过你自托管的 WebSocket 中继查看和控制会话。
模型、认证与工具执行仍由本地 CLI 决定；cc-remote 不代理模型 API，也不会把
API key 烤进网页。

v3.0.0 不是一次换皮升级。它在原有双引擎、多会话和远程控制之上新增相互隔离的
Code / Work 双空间，并重新设计历史投影、原生客户端协同、多设备路由和发布边界，
重点解决超长会话打开慢、App/CLI 状态不同步、移动端历史跳动和多机器串台等真实问题。

---

## 目录

- [v3 架构升级](#v3-架构升级)
- [核心能力](#核心能力)
- [架构](#架构)
- [真实界面与实用功能](#真实界面与实用功能)
- [本地快速开始（一台机器，5 分钟）](#本地快速开始一台机器5-分钟)
- [GitHub Release 一键安装（生产推荐）](#github-release-一键安装生产推荐)
- [生产部署（公网 VPS 中继 + 你机器上的 wrapper）](#生产部署公网-vps-中继--你机器上的-wrapper)
- [环境变量](#环境变量)
- [鉴权模型](#鉴权模型)
- [可靠性边界](#可靠性边界)
- [安全须知（务必读）](#安全须知务必读)
- [模型后端（可选）](#模型后端可选)
- [开发](#开发)
- [FAQ](#faq)
- [许可](#许可)

---

## v3 架构升级

v3 把 cc-remote 从“能在网页控制 CLI”推进为一个本地优先、可恢复、可同时连接
多台机器的完整控制面。相比此前公开版本，主要变化是：

| 升级方向 | v3.0.0 |
|---|---|
| **Code / Work 双空间** |…
