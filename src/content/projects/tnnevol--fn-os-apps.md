---
repo: "tnnevol/fn-os-apps"
name: "fn-os-apps"
description: "飞牛 fnOS 应用 Monorepo"
readmeQualityOk: true
url: "https://github.com/tnnevol/fn-os-apps"
homepage: "https://fnapps-doc.tnnevol.cn/"
language: "TypeScript"
languages: ["TypeScript", "Shell"]
languagePcts: [59, 34]
stars: 6
forks: 0
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 3
recentReleases: 5
createdAt: "2026-05-15T09:24:57Z"
lastCommitAt: "2026-08-21T04:09:44Z"
lastReleaseAt: "2026-06-03T09:10:54Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 89
undervaluedScore: 66
maintainers: ["tnnevol"]
openGraphImageUrl: "https://opengraph.githubassets.com/0282fa483c9a8c04d36a93d00aeaaed97d50f8f9a952ae48c1e9473ecb501513/tnnevol/fn-os-apps"
---

# fnOS Apps

飞牛 fnOS 应用 Monorepo，包含上架到 fnOS 应用商店的第三方应用打包。

## 项目结构

```
.
├── apps/
│   ├── fn-reader/                  # 阅读 - 在线电子书阅读器
│   ├── fn-xiaoya-only/             # 小雅 - 网盘聚合工具
│   ├── fn-bitwarden/               # Bitwarden - 密码管理器
│   ├── fn-mysql_v8/                # MySQL v8 - 关系型数据库(原生应用)
│   ├── fn-halo/                    # Halo - 建站系统
│   ├── fn-quark-auto-save/         # 夸克转存 - 夸克网盘自动化工具
│   ├── fn-new-api/                 # New API - AI API 管理平台
│   ├── fn-zentao/                  # 禅道项目管理 - 项目管理软件
│   ├── fn-memos/                   # Memos - 自托管笔记
│   ├── fn-moviepilot/              # MoviePilot - 影视自动化管理
│   ├── fn-hermes-agent/            # Hermes Agent - AI 代理(原生应用)
│   ├── fn-deepseek-harness/        # DeepSeek Harness - 插件化智能代理(原生应用)
│   ├── fn-uv/                      # uv - Python 包管理器(系统工具)
│   ├── fn-nvm/                     # NVM - Node.js 版本管理工具(系统工具)
│   └── fn-ohmyzsh/                 # Oh My Zsh - Zsh 配置管理框架
├── plugins/                        # Agent 插件 workspace
├── .github/workflows/              # CI: FPK 构建与 Release 发布
├── docs/                           # VitePress 项目文档
├── package.json                    # 项目版本与开发脚本
├── .gitignore
└──…
