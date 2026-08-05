---
repo: "YizhengWw/HachimoDock"
name: "HachimoDock"
description: "A desktop pet that reacts to your Claude Code sessions in real-time — thinking, typing,  juggling, sleeping, and more."
readmeQualityOk: true
url: "https://github.com/YizhengWw/HachimoDock"
language: "C"
languages: ["C"]
languagePcts: [63]
stars: 22
forks: 2
openIssues: 0
closedIssues: 0
watchers: 2
contributors: 5
recentReleases: 0
createdAt: "2026-06-10T10:30:51Z"
lastCommitAt: "2026-08-05T06:07:01Z"
status: "newborn"
tags: ["hidden_gem"]
healthScore: 88
undervaluedScore: 37
maintainers: ["codex", "YizhengWw", "tudoom"]
openGraphImageUrl: "https://opengraph.githubassets.com/2e4a9ca2e1fed2a0ea249aef4e5f318a34193f71b3856a5eb9727b6d17ff7382/YizhengWw/HachimoDock"
---

<h1>HachimoDock（哈基米机）</h1>
  <p><strong>哈基米机 HachimoDock：让你的宠物 / 朋友 / 你推变成 AI Agent，和你一起工作</strong></p>
  <p>
    把 ChatGPT（Codex）、Claude 等 Agent 的实时工作状态变成桌上宠物的表情、动作、Session 气泡和提醒。
  </p>
  <p>
    </a>
  </p>
  <p>
    · <a href="#硬件端资料">硬件端资料</a>
    · <a href="#图集">图集</a>
    · <a href="#软件架构">软件架构</a>
    · <a href="#复刻与部署">复刻与部署</a>
    · <a href="#快速开始">快速开始</a>
    · <a href="#常见问题">常见问题</a>
  </p>
  <p>
  </p>
  <p>
  </p>
</div>

## 项目简介

HachimoDock（哈基米机）是一套桌面端管理器、ESP32-P4 小屏固件和开源硬件方案。它把电脑里正在运行的 Agent Session 实时同步到桌面小屏，让 AI 的思考、执行、完成和报错状态变成看得见的宠物动画与气泡；实体按键、四向摇杆和麦克风又能把操作与语音送回 Agent。

这个 GitHub 仓库主要托管软件端和固件端代码；硬件端资料在 OSHWHub 维护。

| 端 | 入口 | 说明 |
|---|---|---|
| 软件端 | [`ref/`](https://github.com/YizhengWw/HachimoDock/blob/HEAD/ref/) | Tauri 2 + React 桌面端。负责设备绑定、Agent 检测与跟随、形象管理、组件中心、语音入口、按钮配置、USB 下发和本地 bridge sidecar。 |
| 固件端 / 设备运行时 | `esp-p4-runtime/` | ESP32-P4 固件。负责 MIPI 屏渲染、宠物动画、Session 气泡、按键与四向摇杆、语音采集、PetUI 组件和 USB 协议。 |
| 兼容归档 | `legacy/board-runtime/` | 旧 Linux/Raspberry Pi 设备兼容源码，仅用于历史设备与回归测试；当前硬件不使用。 |
| 硬件端 | [OSHWHub 硬件复刻页面](https://oshwhub.com/eda_gqvzlprk/project_cnbmkbjc#3-%E7%A1%AC%E4%BB%B6%E5%A4%8D%E5%88%BB) | PCB、BOM、结构/装配和硬件复刻资料。 |

## 图集

<table>
  <tr>…
