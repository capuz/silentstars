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
contributors: 1
recentReleases: 1
createdAt: "2026-04-10T20:59:33Z"
lastCommitAt: "2026-09-01T08:47:57Z"
lastReleaseAt: "2026-08-22T08:45:49Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 56
maintainers: ["coolight7"]
openGraphImageUrl: "https://opengraph.githubassets.com/c3b48229c00ae515ba082324bd722ae78caa14639678491fcd45b406a421d8e5/coolight7/agentxx"
---

# Agentxx
[Github agentxx](https://github.com/coolight7/agentxx)

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
    - [测试](#测试)
- [目录结构](#目录结构)
- [编译](#编译)
- [运行&配置文件](#配置文件和运行)

## 特点
- **C++协程异步实现**; 程序体积和内存占用少且性能高，协程网络/文件读写支持不阻塞，可选添加 硬件加速Hyperscan 等扩展库
- **数据安全**; Agentxx 不会上传你的数据，如果使用局域网内的 LLM Api Server，完全可以实现全程断网运行; Agentxx 无法确认 LLM Api、MCP、Skill 的数据安全，如果导入需要自行确认
- **跨系统支持**; 优化 windows 兼容，可在 WSL 中直接执行 windows 命令、打开 windows 程序、自动转换文件路径
- **丰富的 tool**; 内置 文件读写、命令行执行、任务规划 等，编译时可选自由组合，支持自动纠正 LLM 的参数类型、字符编码
- **C++插件/JS插件/FFI支持**; 已实现 codegraph、系统CPU/GPU/RAM等信息、屏幕截取、鼠标选择文本事件流 等效果显著的功能，通过 C++ Quickjs 插件可以加载实现 js 插件
- **UI与Agent可分离**; 内置支持 TUI、cli、接入GUI、Websocket API、FFI调用、动态库/静态库嵌入App;…
