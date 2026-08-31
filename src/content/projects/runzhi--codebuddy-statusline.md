---
repo: "runzhi/codebuddy-statusline"
name: "codebuddy-statusline"
description: "CodeBuddy Code statusline plugin - display git branch, model, cost in your terminal"
readmeQualityOk: true
url: "https://github.com/runzhi/codebuddy-statusline"
language: "Python"
languages: ["Python"]
languagePcts: [89]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-06-04T03:21:37Z"
lastCommitAt: "2026-08-31T09:58:46Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 77
undervaluedScore: 41
maintainers: []
openGraphImageUrl: "https://opengraph.githubassets.com/c3a34367f4054d9f877576a85b92d222ecd2512f0203dcdd21ec0c4a3b51417e/runzhi/codebuddy-statusline"
---

# CodeBuddy Statusline

CodeBuddy Code 的实时状态栏工具，在状态栏实时显示当前会话的 Context 进度条、Token 用量、工具调用、费用等信息。

## 环境要求

- Python 3.6+
- CodeBuddy Code v1.16.0+
- macOS / Linux / Git Bash / Windows PowerShell 均可

## 安装

### macOS / Linux / Git Bash

外网 (GitHub)：
```bash
git clone https://github.com/runzhi/codebuddy-statusline.git ~/.codebuddy/statusline
bash ~/.codebuddy/statusline/install.sh
```

内网：
```bash
git clone https://git.woa.com/four-harness/codebuddy-statusline.git ~/.codebuddy/statusline
bash ~/.codebuddy/statusline/install.sh
```

### Windows PowerShell

外网 (GitHub)：
```powershell
git clone https://github.com/runzhi/codebuddy-statusline.git "$env:USERPROFILE\.codebuddy\statusline"
powershell -ExecutionPolicy Bypass -File "$env:USERPROFILE\.codebuddy\statusline\install.ps1"
```

内网：
```powershell
git clone https://git.woa.com/four-harness/codebuddy-statusline.git "$env:USERPROFILE\.codebuddy\statusline"
powershell -ExecutionPolicy Bypass -File "$env:USERPROFILE\.codebuddy\statusline\install.ps1"
```

安装脚本会自动克隆/更新插件文件、创建缓存目录、并在 `~/.codebuddy/settings.json` 中配置 `statusLine`（已有则跳过）。安装后即时生效，无需重启会话。

## 效果预览

状态栏分三行实时显示：

### 第一行：概览

| 字段 | 说明 |
|------|------|
| `GLM-5.1` | 当前模型名称 |
|…
