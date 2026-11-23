---
repo: "HKMV/devroute"
name: "devroute"
description: "A forwarding tool for local development and debugging with two modes that can each be started and stopped independently: mirror sites (the local port serves remote pages directly and forwards API calls to local services, without changing the system proxy) and SOCKS5/HTTP proxy (matches by Host + path prefix, forwards, and rewrites paths). Native Rust + FLTK GUI, single file about 2.9MB."
originalDescription: "本地开发调试用的转发工具：镜像站点（本地端口直接提供远端页面，接口转发到本地服务，不用改系统代理）与 SOCKS5/HTTP 代理（按 Host + 路径前缀匹配转发并重写路径）两种模式，可各自独立启停。Rust + FLTK 原生 GUI，单文件约 2.9MB。 | Mirror sites + SOCKS5/HTTP proxy for local development. Native Rust + FLTK GUI, ~2.9MB single binary, no system proxy needed."
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/HKMV/devroute"
language: "Rust"
languages: ["Rust"]
languagePcts: [97]
topics: ["debugging-tool", "rust", "socks5", "cross-platform", "devtools", "fltk", "gui", "http-proxy", "local-development", "mirror-site"]
stars: 9
forks: 1
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 1
recentReleases: 8
createdAt: "2025-07-11T10:10:58Z"
lastCommitAt: "2026-11-23T10:15:39Z"
lastReleaseAt: "2026-11-05T16:36:42Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 85
undervaluedScore: 74
maintainers: ["HKMV"]
openGraphImageUrl: "https://opengraph.githubassets.com/cf15e9591cea0a63327fec55bc50735a0a6c520ec23370a1ef56233cbd0130df/HKMV/devroute"
---

# devroute (开发路由)

[English](https://github.com/HKMV/devroute/blob/HEAD/README_EN.md) | Chinese

> A forwarding tool for local development and debugging: **extremely lightweight, with memory usage starting at just 3.4MB (2.5MB in headless mode)**, and a single file of about 3MB that you can copy and run directly. It offers two **independent modes that can each be started and stopped separately**: **SOCKS5/HTTP proxy** (forwards by `Host + path prefix` and rewrites paths), and **local mirror** (serves remote pages and local APIs directly from a local port, without relying on the system proxy). It has a GUI with two tabs, Local Mirror and Proxy Mode; Local Mirror is on the left and selected by default. Rules and sites are configured separately, with live statistics, logs, and system proxy linkage. Implemented in **pure native Rust + FLTK, not WebView (not Tauri/Electron)**, with no embedded browser engine.

## Download

If you don't want to compile it yourself, download the packaged single-file program directly (Windows 2.9 MB / macOS 2.6 MB / Linux 4.4 MB; all dependencies are statically linked, so no runtime needs to be installed):
