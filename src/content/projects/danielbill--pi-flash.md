---
repo: "danielbill/pi-flash"
name: "pi-flash"
description: "用rust为Pi在Windows上做个Shell，享受极速的乐趣"
readmeQualityOk: true
url: "https://github.com/danielbill/pi-flash"
language: "Rust"
languages: ["Rust"]
languagePcts: [90]
stars: 69
forks: 11
openIssues: 0
closedIssues: 8
watchers: 1
contributors: 3
recentReleases: 10
createdAt: "2026-09-23T23:13:51Z"
lastCommitAt: "2026-11-09T04:35:22Z"
lastReleaseAt: "2026-10-15T15:10:16Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "funded", "release_machine"]
healthScore: 90
undervaluedScore: 41
maintainers: ["danielbill"]
openGraphImageUrl: "https://opengraph.githubassets.com/81d9c736d65fc4463c0e270005bc4521bddf1cbe3ea0db5d7607899e6b095188/danielbill/pi-flash"
fundingLinks: ["CUSTOM:https://afdian.com/a/abcyberwire"]
---

Pi Flash ： Windows上的极速 Pi coding agent！

需要 Node.js ≥ 22.19
> 平台范围：**仅 Windows x64**

## 演示

## 功能特性
- **模型管理**：设置面板内完成 provider 登录与 API key 管理（OS 凭据库加密保存）、模型白名单与通路测试。
- **技能 / 扩展 / MCP**：技能管理、扩展装载与内置扩展市场、MCP 服务器配置，一应俱全。
- **会话管理**：会话按项目分组管理，可恢复、重命名、置顶、删除，逾期自动清理、上下文用量与费用、自动/手动压缩上下文；支持跨项目的全量会话搜索。
- **消息级分支**：在任意一条回复上点「新分支」，即从该处复制出一份独立的会话文件继续对话，原会话保持不动。
- **项目文件工具**：文件树浏览与编辑、文件名 + 全文搜索、一键在内置终端运行脚本（exe/bat/ps1/js/py/sh）、Git 状态暂存与 diff 查看。
- **内置终端**：多标签页终端（alacritty + ConPTY），与文件树、会话同窗协作。
- **文件编辑与预览**：源码编辑，Markdown Preview，支持图片等常见格式预览。

## 快速开始

Pi Flash 仅支持 **Windows x64**。

方式一：npm 安装（需要 Node.js ≥ 22.19，用 `node --version` 检查版本）：

```bash
npm install -g pi-flash@latest   # 首次安装与更新同命令
pi-flash
```

方式二：绿色包，无需 Node——从 [GitHub Releases](https://github.com/danielbill/pi-flash/releases) 下载 `pi-flash-<版本>-win32-x64.zip`，解压后双击 `pi-flash.exe` 即用。

## 首次启动
如果还未配置过模型 provider，请打开「设置 → 模型」面板，点击「添加 Provider」添加 API key或登录。

## 许可证
本项目以 **GPL-3.0-or-later** 许可证发布（见 [LICENSE](https://github.com/danielbill/pi-flash/blob/HEAD/LICENSE)），继承自Zed项目。
你可以自由使用、修改、分发本软件，但任何基于本软件的衍生作品**必须**以GPL-3.0-or-later 开源。
不接受未经 Copyright Holder 同意的闭源分发。…
