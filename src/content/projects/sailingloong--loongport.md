---
repo: "SailingLoong/LoongPort"
name: "LoongPort"
description: "cc-switch 中转站的专用增强版（cc-switch for API relay providers），免去配置各种 密钥 endpoint 的烦恼。"
readmeQualityOk: true
url: "https://github.com/SailingLoong/LoongPort"
homepage: "https://loongport.dev"
language: "Rust"
languages: ["Rust", "TypeScript"]
languagePcts: [68, 31]
topics: ["ai-tools", "anthropic", "api-key-management", "api-relay", "cc-switch", "claude-code", "codex", "codex-cli", "desktop-app", "developer-tools"]
stars: 116
forks: 4
openIssues: 1
closedIssues: 0
watchers: 0
contributors: 23
recentReleases: 10
createdAt: "2026-08-02T03:38:07Z"
lastCommitAt: "2026-09-05T07:49:36Z"
lastReleaseAt: "2026-08-10T04:33:15Z"
status: "newborn"
tags: ["solo_builder", "release_machine"]
healthScore: 80
undervaluedScore: 29
maintainers: ["SailingLoong", "dependabot[bot]", "SaladDay"]
openGraphImageUrl: "https://opengraph.githubassets.com/c9a09b075d0820ea360ad2bc073b7309244cdc013e89d9e92ce94614b20301d1/SailingLoong/LoongPort"
---

# LoongPort

### 填域名、登录一次，Codex 与 Claude Code 即刻可用

### 🌐 官方网站：**[loongport.dev](https://loongport.dev)**

### 📖 图文教程：**[从下载到接上中转站，含从 cc-switch 迁移](https://github.com/SailingLoong/cc-switch-relay-tutorial)**

### 💬 QQ 群：**773696474**

中文 | [English](https://github.com/SailingLoong/LoongPort/blob/HEAD/README_EN.md)

</div>

## 它替你做什么

在中转站跑 Codex CLI 与 Claude Code，常规做法是一套繁琐流程：在中转站注册账号、定位控制台、手动创建 API Key、正确复制 `base_url`、找到并准确修改配置文件；更换 CLI 或档位后，整套流程还需重来一遍。

LoongPort 将其压缩为两步 —— **填入一个域名，登录一次。** 应用会为账号可用的每个档位备好密钥，按各 CLI 的配置形状完成写入；此后更换档位只需一次点击，配置文件从头到尾不用你碰。

除中转站档位外，LoongPort 还内置[官网直连档位](#官网直连官方-api)（DeepSeek、智谱 BigModel、opencode），两者并列参与[省心模式](#省心模式把挑档位交给系统)的自动调度。站点提供生图档位时，还可以[**在 CLI 的对话里直接生图**](#在-cli-里生图)，且无需让出对话档位。

</div>

## 三分钟上手

> **给中转站负责人**：本节可直接转发给你的用户。他们**无需**安装 cc-switch，也**无需**在 LoongPort 注册任何账号 —— 从下载到可用只有以下四步，且全程只与**你的站点**交互。若希望用户默认接入你的站点，见[给中转站负责人](#给中转站负责人)。

1. **下载并打开** —— 见[安装](#安装)。首次启动会弹出「选择服务站点」窗口。
2. **粘贴中转站域名** —— 直接从浏览器地址栏整条复制亦可（如 `https://bestapi.store/usage`，多余路径会自动去除）。
3. **注册或登录** —— LoongPort 会打开**该站点自己的**注册页。已有账号时，页面顶部的横幅可一键转至登录页。整个过程在该站点的真实页面中完成，LoongPort 仅获取登录后的凭据，**不接触你的密码**。
4. **完成接入** —— 账号下可用的每个档位均已备好密钥并完成配置。此后：
   - **更换档位**：点击「启用」即可
   -…
