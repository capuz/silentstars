---
repo: "HD838A/remote-mic-app"
name: "remote-mic-app"
description: "无线麦（Remote Mic）：将小米蓝牙遥控器 2 Pro / RC003 变成 Mac 语音输入设备"
readmeQualityOk: true
url: "https://github.com/HD838A/remote-mic-app"
language: "Swift"
languages: ["Swift"]
languagePcts: [85]
stars: 107
forks: 14
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 3
recentReleases: 10
createdAt: "2026-07-22T13:28:04Z"
lastCommitAt: "2026-08-11T04:49:08Z"
lastReleaseAt: "2026-08-09T06:32:02Z"
status: "thriving"
tags: ["solo_builder", "release_machine"]
healthScore: 90
undervaluedScore: 33
maintainers: ["HD838A", "rickyxu83"]
openGraphImageUrl: "https://opengraph.githubassets.com/ae2b618ce385fad83294c66086c5a259e2954158349a6bf0ff6e18563ed02de7/HD838A/remote-mic-app"
---

# 无线麦

[English](https://github.com/HD838A/remote-mic-app/blob/HEAD/README.en.md)

<table>
  <tr>
    <td align="center">
      <strong>飞书固定入口</strong><br>
    </td>
    <td align="center">
      <strong>微信群二维码</strong><br>
      微信扫码加入交流群
    </td>
  </tr>
</table>

iOS App 公测：[加入 TestFlight 公测](https://testflight.apple.com/join/J8k8fb7v)

无线麦是一款 macOS 应用，可以把小米蓝牙遥控器 2 Pro 变成 Mac 的无线语音遥控器。它同时提供常规 Dock 入口和常驻菜单栏入口。

按住遥控器的语音键即可说话；遥控器上的方向、确定、返回、主页、菜单、TV 和音量键也可以用来控制 Mac，或设置为打开常用应用。

无线麦使用 SwiftUI 原生开发，常驻运行时 CPU 占用率低于 0.5%，内存占用约 50 MB，比一个 Chrome 标签页还要轻量。

<picture>
  <source media="(prefers-color-scheme: dark)" srcset="Screenshots/connection-and-voice-dark-zh.png">
</picture>

## 使用要求

- Apple Silicon Mac；
- macOS 14 或更高版本；
- 小米蓝牙遥控器 2 Pro；
- 使用语音输入时，需要安装随安装包提供的兼容麦克风，或在 Mac 上已有 BlackHole 2ch 等回环音频设备。

## 下载与安装

发布的安装包会在 [GitHub Releases](https://github.com/HD838A/remote-mic-app/releases/latest) 提供，文件名为 `Remote-Mic-<版本>.dmg`。

Windows 与 Mac 单独构建和发布。当前仅提供面向小米 RC003 的 [Windows RC003 Community Preview v0.1.0](https://github.com/HD838A/remote-mic-app/releases/tag/windows-v0.1.0-community-preview)，它是未签名、尚未由主项目维护者独立真机复验的社区预览版，不进入 Mac 的 Sparkle 更新序列。下载前请阅读 Release 中的权限、杀毒软件和虚拟音频设备提示，并使用…
