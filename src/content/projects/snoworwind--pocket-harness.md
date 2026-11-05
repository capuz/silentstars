---
repo: "snoworwind/pocket-harness"
name: "pocket-harness"
description: "Pocket Harness: an independent Android shell and embedded runtime for running an agent harness on a phone."
originalDescription: "Pocket Harness: an independent Android shell and embedded runtime for running an agent harness on a phone."
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/snoworwind/pocket-harness"
language: "JavaScript"
languages: ["JavaScript", "Kotlin", "TypeScript"]
languagePcts: [37, 37, 22]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 4
createdAt: "2026-10-18T01:27:40Z"
lastCommitAt: "2026-11-05T08:04:46Z"
lastReleaseAt: "2026-11-04T09:53:26Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 90
undervaluedScore: 55
maintainers: ["snoworwind"]
openGraphImageUrl: "https://opengraph.githubassets.com/9b43c3abe151aa70462191491c7a8860175f02f087a055e012e00a0ca5dcbdc1/snoworwind/pocket-harness"
---

# Pocket Harness：安卓上的 Agent 壳

[English](https://github.com/snoworwind/pocket-harness/blob/HEAD/README.en.md) · [下载最新版本](https://github.com/snoworwind/pocket-harness/releases/latest)

Pocket Harness 是 [DeepSeek Harness](https://github.com/deepseek-ai/deepseek-harness) 的 Android 壳。它把 WebView 界面与 Termux 运行时快照打包在同一个 APK 中，让 Agent 能在手机上使用 bash 和设备能力，无需另装 Termux。

## 能做什么

- **运行 Agent**：内嵌 Linux 运行时，提供 bash、Node.js 和项目插件。
- **操作手机**：通过无障碍与 Shizuku 通道读取界面、执行输入和截屏。
- **浏览网页**：使用与主界面隔离的浏览器工作台管理网页和标签页。
- **使用虚拟屏**：在独立虚拟显示屏中运行和操作第三方应用（需要 Shizuku）。
- **处理文件**：通过系统文件选择器、分享入口和 SAF 目录桥将文件交给会话。

模型可见的能力由插件提供，壳侧不直接注册工具。详细接口和能力清单见[桥协议](https://github.com/snoworwind/pocket-harness/blob/HEAD/docs/AGENTS/BRIDGE-API.md)及各插件说明。

## 下载与安装

从 [GitHub Releases](https://github.com/snoworwind/pocket-harness/releases/latest) 下载当前公开版本。安装包架构、升级方式和验收范围以该版本的 Release 说明为准。

```sh
adb install -r -t <apk>
```

APK ABI 必须与设备匹配；x86_64 模拟器不受支持。首次启动或覆盖安装后，运行时快照需要解压数分钟，请等待完成，期间不要强行停止应用。虚拟屏和特权 shell 功能需要安装并授权 Shizuku。

插件市场中的第三方插件尚未普遍完成手机适配，可能无法使用或存在问题；请不要把它们当作生产依赖。

## 构建

APK 只能通过源码来源链构建；仅构建 ARM64。云端构建：

```sh
gh workflow run build-apk-source.yml --repo snoworwind/pocket-harness --ref main
```

Linux / WSL…
