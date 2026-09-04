---
repo: "coolight7/agentxx"
name: "agentxx"
description: "C++ AI Agent like langgraph. 支持嵌入普通程序中扩展实现AI功能"
readmeQualityOk: true
url: "https://github.com/coolight7/agentxx"
language: "C++"
languages: ["C++"]
languagePcts: [92]
topics: ["agent", "ai", "cpp", "langgraph", "android", "codegraph", "cxx", "linux", "windows", "mcp"]
stars: 5
forks: 2
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 1
createdAt: "2026-04-10T20:59:33Z"
lastCommitAt: "2026-09-04T08:08:17Z"
lastReleaseAt: "2026-08-22T08:45:49Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 90
undervaluedScore: 56
maintainers: ["coolight7"]
openGraphImageUrl: "https://opengraph.githubassets.com/5d0f3db83cf3b8366c3829b866f85f18252a97b77c826934554cc060760a980f/coolight7/agentxx"
---

# Agentxx
[Github agentxx](https://github.com/coolight7/agentxx)

- **README.md**: [中文 zh-cn](https://github.com/coolight7/agentxx/blob/HEAD/README.md) | [English en](https://github.com/coolight7/agentxx/blob/HEAD/docs/en/README.md)

```text
 █████╗  ██████╗ ███████╗███╗   ██╗████████╗      ╔══╗     ╔══╗
██╔══██╗██╔════╝ ██╔════╝████╗  ██║╚══██╔══╝   ╔══╬══╬═════╬══╬══╗
███████║██║  ███╗█████╗  ██╔██╗ ██║   ██║    ╔═╬  ║++║     ║++║  ╬═╗
██╔══██║██║   ██║██╔══╝  ██║╚██╗██║   ██║    ╚═╬       \_/       ╬═╝
██║  ██║╚██████╔╝███████╗██║ ╚████║   ██║      ╚═══════   ═══════╝
╚═╝  ╚═╝ ╚═════╝ ╚══════╝╚═╝  ╚═══╝   ╚═╝         ╚══╝     ╚══╝   
```
- C++ 协程异步实现的 AI Agent，可编译为`单程序、动态库`直接启动使用。降低内存占用、程序包体积、摆脱庞大的 动态库、python、js 等依赖，为普通性能的手机、电脑等设备上运行设计
- 目标支持嵌入App实现高性能的Agent功能，顺带实现 cli/TUI 的 Code Agent; GUI客户端计划将由[Lumenxx](https://github.com/coolight7/lumenxx-docx)支持，并实现 音视频处理、自动化控制 等 Agent 
- 已实测过最长单轮任务自动运行5小时完成，本项目已由 Agentxx 自身介入开发

> 初步完成 agent核心及服务、TUI、插件接口、FFI接口，但仍可能大幅度重构，接口可能大改动.

- [特点](#特点)
- [兼容性](#兼容性)
    - [跨系统支持](#跨系统支持)
    - [编译后的体积和依赖库](#编译后的体积和依赖库)
- [计划实现](#计划实现)
    - [基础模块](#基础模块)
    - [提示词训练](#提示词训练)
    - [插件化支持](#插件化支持)
    - [FFI动态库接口](#FFI动态库接口)
    - [功能](#功能)
    -…
