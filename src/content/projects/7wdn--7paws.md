---
repo: "7wdn/7paws"
name: "7paws"
description: "3D desktop kitten pet for Windows and macOS: responds to global keyboard and mouse input, types on keys, reaches a paw toward the cursor, purrs when petted, and sleeps when idle."
originalDescription: "Windows 与 macOS 的 3D 桌面小猫桌宠：响应全局键鼠，敲键、追光标、伸爪互动，被摸会呼噜，闲置后睡觉。"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/7wdn/7paws"
language: "Rust"
languages: ["Rust", "TypeScript"]
languagePcts: [60, 27]
topics: ["cat", "desktop-pet", "macos", "rust", "tauri", "threejs", "typescript", "vite", "webgl", "windows"]
stars: 14
forks: 1
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 2
recentReleases: 4
createdAt: "2026-11-22T15:40:42Z"
lastCommitAt: "2026-11-23T10:18:03Z"
lastReleaseAt: "2026-11-23T09:25:16Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 90
undervaluedScore: 44
maintainers: ["7wdn"]
openGraphImageUrl: "https://opengraph.githubassets.com/afca3b0fcd5caa4b107beb353b54a980d1d44e4e86faf9a09a7c40178f097de8/7wdn/7paws"
---

## Contents

- [Features](#功能特性)
- [Download and Installation](#下载安装)
- [First Launch on macOS](#macos-首次打开)
- [Windows Installation](#windows-安装)
- [Usage](#使用)
- [Default Settings](#默认设置)
- [Tech Stack](#技术栈)
- [Building from Source](#从源码构建)
- [Project Structure](#项目结构)
- [Browser Preview](#浏览器预览)
- [Privacy and Security](#隐私与安全)
- [Current Scope](#当前范围)
- [Releases](#发布)
- [License](#开源协议)

## Features

### Interaction

- **Global keyboard and mouse response** — no window focus needed; typing or moving the mouse in any app triggers actions.
- **3D kitten** — a rounded, procedurally generated model available in six coat colors; it types on keys, watches the cursor, reaches out to grab the mouse, and sleeps when idle.
- **Petting and dragging** — hold the cat's head to pet it, or hold the body to drag the window; head hit-testing is done by renderer raycasting.
- **Purring** — synthesized with WebAudio, no audio assets; purring while petted and sleep purring can be toggled independently.
