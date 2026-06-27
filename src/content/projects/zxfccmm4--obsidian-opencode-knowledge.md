---
repo: "zxfccmm4/Obsidian-OpenCode-Knowledge"
name: "Obsidian-OpenCode-Knowledge"
description: "🧠 AI 知识库一键部署模板 | Obsidian + OpenCode 驱动的本地知识管理方案"
url: "https://github.com/zxfccmm4/Obsidian-OpenCode-Knowledge"
language: "Shell"
languages: ["Shell"]
languagePcts: [100]
stars: 257
forks: 28
openIssues: 1
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 3
createdAt: "2026-04-14T02:23:54Z"
lastCommitAt: "2026-06-27T06:25:00Z"
lastReleaseAt: "2026-06-22T14:49:16Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 73
undervaluedScore: 16
maintainers: ["zxfccmm4"]
openGraphImageUrl: "https://opengraph.githubassets.com/73fb2805ca350e80a7c39f418b6986dd03c867bf730f5e03f7e1f7856035c50d/zxfccmm4/Obsidian-OpenCode-Knowledge"
---

[English](README.en.md) | [中文](README.md)

# 🧠 Obsidian + AI Agent 知识库

> 面向非技术用户的本地 AI 知识管理方案。支持 OpenCode / Claude Code / Codex，无需编程，一键部署，开箱即用。

---

## ✨ 核心功能

| 功能 | 说明 |
|------|------|
| 📥 **自动录入** | 文章、PDF、截图直接丢给 AI，自动整理成结构化笔记 |
| 📱 **社交媒体采集** | 小红书、抖音、Twitter、微博等平台内容一键归类、分析、消化（通过 [OpenCLI](https://github.com/jackwener/OpenCLI) 驱动） |
| 🔍 **智能查询** | 像聊天一样问 AI：「我之前写过关于 XX 的内容吗？」 |
| 🏥 **定期体检** | AI 自动检查知识库健康度，发现死链、重复、孤岛页面 |
| 🔒 **本地存储** | 笔记文件保存在你的电脑上；使用 AI 时，内容会发送给你配置的模型服务商 |
| 🛠️ **一键部署** | 运行脚本，5 分钟搞定安装 |

---

## 🚀 快速开始

> 📌 **平台支持：** 一键脚本当前仅支持 **macOS**（脚本依赖 `open`、Homebrew 等系统命令）。
> Linux 用户可手动执行 `setup.sh`，部分调用需把 `open` 替换为 `xdg-open`；Windows 用户建议在 WSL2 中使用。

### 方式一：让 AI 帮你部署（零门槛）

把下面这句话发给任何 AI 助手（ChatGPT、Claude、GLM 等），它会自动帮你完成全部部署：

```
请帮我部署 AI 知识库：https://github.com/zxfccmm4/Obsidian-OpenCode-Knowledge/blob/main/GUIDE_FOR_AI.md
```

> 📖 AI 助手会读取 [`GUIDE_FOR_AI.md`](GUIDE_FOR_AI.md) 中的完整部署流程，自动完成环境检查、安装、配置。

### 方式二：手动安装（3 步）

```bash
# 第 1 步：克隆仓库
git clone https://github.com/zxfccmm4/Obsidian-OpenCode-Knowledge.git
cd Obsidian-OpenCode-Knowledge

# 第 2 步：运行安装脚本（macOS）
bash setup.sh

# 第 3 步：在 Obsidian 中打开生成的「我的知识库」文件夹
```

> 📖 详细步骤请参考…
