---
repo: "silent-rs/Tiangong"
name: "Tiangong"
description: "Desktop-grade personal AI smart terminal built with Rust + Tauri: featuring built-in embedded browser human-AI collaboration, multi-agent cooperation, long-term memory and scheduled tasks, diverse plugin ecosystem (WASM / TypeScript / Pure UI) supporting self-built extensions, remote control via Feishu/WeChat/QQ mobile."
originalDescription: "基于 Rust + Tauri 的桌面级个人 AI 智能终端：内置嵌入式浏览器人机协同、多智能体协作、长期记忆与定时任务，多形态插件生态（WASM / TypeScript / 纯 UI）支持自建扩展，飞书/微信/QQ 移动端远程可控。"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/silent-rs/Tiangong"
language: "Rust"
languages: ["Rust"]
languagePcts: [80]
topics: ["rust", "tauri", "ai-agent", "llm", "wasm", "desktop-app", "automation", "mcp", "ai-assistant"]
stars: 27
forks: 10
openIssues: 9
closedIssues: 113
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-02-12T03:46:58Z"
lastCommitAt: "2026-10-01T10:23:42Z"
lastReleaseAt: "2026-06-11T07:43:20Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 98
undervaluedScore: 50
maintainers: ["hubertshelley"]
openGraphImageUrl: "https://opengraph.githubassets.com/7a5915896845f6f8ed40e5460e2100b3b17e676b349ea9cae4a08440881c289a/silent-rs/Tiangong"
---

# Tiangong（天工）

> Plugin-centric personal AI Agent host: the main program handles Agent loops, model integration, plugin runtime and sandbox, with capabilities like file access, command execution, browser control, desktop manipulation, memory, multi-agent collaboration, and scheduled tasks all provided by plugins.

Tiangong is a personal intelligent terminal built with Rust, Tauri, and [silent](https://github.com/silent-rs/silent), with desktop application as the core form, while also providing CLI and Server and other interface-free operation modes to integrate scripts, services, or external message channels. The main program itself only retains the universal framework: conversation and ReAct loops, model Provider, plugin registration and routing, permissions and sandbox boundaries, desktop interface and extension mounting points, as well as Bot hosting, Webhook and other external access channels; what the Agent can do depends on which plugins are installed and enabled.

Official plugins cover the main capabilities needed for daily work: file read/write, command and terminal execution, embedded browser operation, launching and controlling desktop applications, long-term memory,…
