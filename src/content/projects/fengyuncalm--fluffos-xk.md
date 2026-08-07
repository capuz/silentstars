---
repo: "FengYunCalm/Fluffos_XK"
name: "Fluffos_XK"
description: "Public FluffOS fork for LPC/MUD runtimes with owner-runtime, VM worker, WebSocket gateway, and modern CMake improvements"
readmeQualityOk: true
url: "https://github.com/FengYunCalm/Fluffos_XK"
homepage: "https://www.fluffos.info"
language: "C++"
languages: ["C++"]
languagePcts: [80]
topics: ["cmake", "fluffos", "lpc", "windows", "mud-driver", "game-server", "mud", "multithreading", "websocket", "owner-runtime"]
stars: 5
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-03-27T11:35:36Z"
lastCommitAt: "2026-08-07T05:14:28Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 89
undervaluedScore: 54
maintainers: ["FengYunCalm"]
openGraphImageUrl: "https://opengraph.githubassets.com/fa5ba16e08a4e80645ca3afe67788a8aefb29fea359f5b04cd80bae9690d9b89/FengYunCalm/Fluffos_XK"
---

# FluffOS_XK

English first. Chinese follows each major section.
英文在前；每个主要章节后提供中文说明。

## What This Engine Is

FluffOS_XK is a production-oriented FluffOS engine fork for modern LPC/MUD
projects. It keeps LPC and the classic FluffOS driver model, then adds a
completed owner/service multicore runtime, opt-in modern LPC contracts,
source/session encoding boundaries, VM hot-path diagnostics, and
downstream-friendly maintenance practices.

Use this repository as an engine source tree or as the source for rebuilt
`driver` and `lpcc` binaries. Keep mudlib content, world data, accounts,
deployment secrets, and operations policy in your game repository.

FluffOS_XK 是面向现代 LPC/MUD 项目的生产型 FluffOS 引擎分支。它保留 LPC
和经典 FluffOS driver 模型，同时加入已经完成的 owner/service 多核运行时、
按需启用的现代 LPC 合同、源码/会话编码边界、VM 热路径诊断，以及适合下游项目长期维护的工程边界。

本仓库应作为引擎源码树，或作为重建 `driver` 与 `lpcc` 二进制的来源。
mudlib、世界内容、账号、部署密钥和运维策略应留在游戏项目仓库中。

## Why It Exists

- **Controlled multicore execution**: owner/service executor paths cover object
  lifecycle, heartbeat, callout, async/file/db, DNS, socket callbacks, gateway
  commands, target-owner messages, and socket release/acquire handshakes.
- **Modern LPC without breaking legacy code**:…
