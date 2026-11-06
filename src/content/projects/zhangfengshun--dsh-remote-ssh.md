---
repo: "ZhangFengshun/dsh-remote-ssh"
name: "dsh-remote-ssh"
description: "DSH web plugin: VSCode Remote-SSH-like remote development (SSH, remote workspace, file explorer, integrated terminal)"
originalDescription: "DSH web plugin: VSCode Remote-SSH-like remote development (SSH, remote workspace, file explorer, integrated terminal)"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/ZhangFengshun/dsh-remote-ssh"
homepage: "https://www.npmjs.com/package/@zhangfengshun/dsh-remote-ssh"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [100]
topics: ["deepseek", "deepseek-harness", "dsh", "dsh-plugin-market", "dsh-plugins", "remote-ssh", "ssh", "dsh-plugin", "dsh-plugin-desktop", "remote"]
stars: 57
forks: 4
openIssues: 1
closedIssues: 34
watchers: 1
contributors: 3
recentReleases: 10
createdAt: "2026-08-18T11:00:59Z"
lastCommitAt: "2026-11-06T11:23:31Z"
lastReleaseAt: "2026-09-16T12:56:01Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 98
undervaluedScore: 44
maintainers: ["ZhangFengshun", "LPLS1zhang", "anupamme"]
openGraphImageUrl: "https://opengraph.githubassets.com/c1db13484fb82f4ec32b5a305e5906bbdd959cff43e56874724e6fd6638d76d5/ZhangFengshun/dsh-remote-ssh"
---

# @zhangfengshun/dsh-remote-ssh

[English](https://github.com/ZhangFengshun/dsh-remote-ssh/blob/HEAD/README_EN.md) | Chinese

A **DSH** plugin similar to **VSCode Remote-SSH**: connect to remote supercomputers / servers over SSH, and work with remote files and terminals directly in DSH's built-in “Files” and “Terminal” tabs.

**Contents**: [Features](#功能) · [Screenshots](#截图) · [Installation](#安装) · [Usage](#使用) · [Code Examples](#代码示例) · [Model Tools](#模型工具) · [Command Timeout and Recovery](#命令超时与恢复) · [Compatibility](#兼容性) · [Troubleshooting](#故障排查) · [How It Works](#原理) · [Caching and Consistency](#缓存与一致性) · [License](#许可证)

## Features

| Capability | Description |
| --- | --- |
| 🔌 SSH connection | Key / password authentication, ProxyJump jump host, one-click import from `~/.ssh/config` |
| 📂 Remote files | The built-in “Files” tab reads and writes remote files directly over SSH, no sync needed |
| 💻 Remote terminal | The built-in “Terminal” tab automatically detects the remote workspace and opens an SSH interactive terminal in **the remote directory corresponding to the workspace** (consistent with VSCode Remote-SSH) |
| 🌐 Remote workspace | Select a remote directory to…
