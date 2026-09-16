---
repo: "ncatbot/NcatBot"
name: "NcatBot"
description: "NapCat Python SDK；快速开发你的 QQ 机器人"
readmeQualityOk: true
url: "https://github.com/ncatbot/NcatBot"
homepage: "https://docs.ncatbot.xyz"
language: "Python"
languages: ["Python"]
languagePcts: [98]
topics: ["napcat", "onebot", "qq", "ncatbot"]
stars: 111
forks: 64
openIssues: 8
closedIssues: 18
watchers: 2
contributors: 47
recentReleases: 0
createdAt: "2024-11-24T15:10:01Z"
lastCommitAt: "2026-09-16T08:48:58Z"
lastReleaseAt: "2026-03-20T04:50:56Z"
status: "thriving"
tags: ["needs_contributors", "fork_magnet"]
healthScore: 90
undervaluedScore: 46
maintainers: ["GEYUANwuqi", "huan-yp", "SilverLi0x10"]
openGraphImageUrl: "https://opengraph.githubassets.com/3126aa6eaa35f831265ff8333cb36f638fe2be3c0b5a692cb98241bf0ae865a3/ncatbot/NcatBot"
---

# 🚀 ncatbot

---

  <a><img src="https://img.shields.io/badge/License-NcatBot License-green.svg"></a>
</p>

[文档](https://docs.ncatbot.xyz) | [许可证](https://github.com/ncatbot/NcatBot/blob/HEAD/LICENSE) | [QQ群](https://qm.qq.com/q/AmdNUkSxFY) | [插件社区](https://www.ityzs.com/)

NcatBot 是基于 OneBot11 协议的 Python SDK/Framework，提供**开箱即用**的 QQ 机器人开发体验。<br>

它深度考虑了 AI 时代的开发者需求，工作区内置丰富的 Skills 能力，Agent 可自主完成插件编写、调试与测试。<br>

**只需要一句话，就能写出你的 QBot！**<br>

</div>

## 快速开始

### 1. 安装

```bash
pip install ncatbot5
```

### 2. 获取 AI 参考资料（推荐）

```bash
ncatbot ref              # 交互式选择 IDE
ncatbot ref --vscode     # VSCode + Copilot / Cursor
ncatbot ref --trae       # Trae
```

一键从 GitHub Releases 下载最新版 `user-reference.zip` 并自动解压到当前目录（自动使用 GitHub 代理加速）。也可以手动前往 [GitHub Releases](https://github.com/ncatbot/NcatBot/releases) 页面下载。解压后目录结构如下：

```
your-project/
├── .agents/skills/          ← AI Agent 技能文件（framework-usage / testing 等）
├── docs/
│   └── docs/
│       ├── examples/        ← 示例代码（qq / github / cross_platform …）
│       └── notes/
│           ├── guide/       ← 使用指南（快速开始 → 多平台开发，共 11 章）
│           └── reference/   ← API 参考（Bot API / 事件类型 / 插件系统 等）
├── config.yaml
└── plugins/
```

> 这些文件让 AI…
