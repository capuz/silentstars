---
repo: "TeleBoxOrg/TeleBox"
name: "TeleBox"
description: "Your One-Stop Telegram Userbot. | 你的一站式 Telegram Userbot."
readmeQualityOk: true
url: "https://github.com/TeleBoxOrg/TeleBox"
homepage: "https://t.me/teleboxdev"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [96]
stars: 414
forks: 56
openIssues: 0
closedIssues: 8
watchers: 0
contributors: 13
recentReleases: 0
createdAt: "2025-08-08T14:43:33Z"
lastCommitAt: "2026-07-22T06:10:25Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 100
undervaluedScore: 37
maintainers: ["TiaraBasori", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/61ffea25e6566c2dd0e4ad85c1765a583a5e23b17894e4465a02b48a1585bd88/TeleBoxOrg/TeleBox"
---

# 🚀 TeleBox

**稳定可靠的 Telegram UserBot 框架**

_TypeScript 全栈 · 插件热加载 · 一键扩展 · 可与 TeleBox-Next 无缝切换_

[📖 快速开始](#-快速开始) · [🔌 插件生态](#-插件生态) · [🛠️ 开发指南](https://github.com/TeleBoxOrg/TeleBox/blob/main/TELEBOX_DEVELOPMENT.md) · [📋 安装](https://github.com/TeleBoxOrg/TeleBox/blob/main/INSTALL.md)

</div>

---

## ✨ 为什么选择 TeleBox

<table>
<tr>
<td width="33%">

### 📦 **插件即扩展**

🔄 **动态加载**  
安装、卸载、更新插件，按需热重载

🏷️ **别名系统**  
把常用命令映射成你习惯的短指令

👂 **消息 / 事件监听**  
不只是命令：可做自动回复、统计、定时任务

</td>
<td width="33%">

### 🛡️ **开箱即用**

🌐 **远程插件商店**  
`.tpm` 一键搜索 / 安装 / 批量更新

👑 **权限体系**  
sudo / sure，把能力安全分享给协作者

🔀 **版本切换**  
`.switch go` 在 TeleBox 与 Next 之间直切，会话与插件配置一并迁移

</td>
<td width="33%">

### ⚡ **生产就绪**

♻️ **Generation 生命周期**  
重载可中止、可清理，避免资源泄漏

⬆️ **自动更新**  
主仓 + 插件可自动拉取，重启后补齐状态

🔧 **一键修复**  
`.autofix`：清重名插件 → 硬同步代码 → 重启 → 更新插件

</td>
</tr>
</table>

## 🏗️ 项目结构

<details>
<summary><b>📁 点击展开项目结构</b></summary>

```
📦 TeleBox/
├── 🎯 src/
│   ├── 🚪 index.ts              # 入口
│   ├── 🔌 plugin/               # 内置系统插件（24 个）
│   │   ├── help.ts · tpm.ts · update.ts · switch.ts · autofix.ts
│   │   ├── status.ts · ping.ts · reload.ts · health.ts · exec.ts · sudo.ts
│   │   └── …
│   ├──…
