---
repo: "TeleBoxOrg/TeleBox_M"
name: "TeleBox_M"
description: "TeleBox migrated to native mtcute API (teleproto-free). Migration WIP fork of TeleBoxOrg/TeleBox."
url: "https://github.com/TeleBoxOrg/TeleBox_M"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [100]
stars: 5
forks: 2
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-06-10T05:53:08Z"
lastCommitAt: "2026-06-25T01:37:17Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 54
maintainers: ["TiaraBasori"]
openGraphImageUrl: "https://opengraph.githubassets.com/bd7f4e884d15173b59366fde4232d380dc652f29595b733b80fb9e5e88ada6c5/TeleBoxOrg/TeleBox_M"
---

# 🚀 TeleBox

**现代化 Telegram UserBot 开发框架**

_基于 Node.js 和 TypeScript 构建，提供强大的插件系统与丰富的功能模块_

[📖 快速开始](#-快速开始) • [🔌 插件生态](#-插件生态) • [🛠️ 开发指南](https://github.com/TeleBoxOrg/TeleBox_M/blob/main/TELEBOX_DEVELOPMENT.md) • [📚 文档](#-相关链接)

</div>

---

## ✨ 核心特性

<table>
<tr>
<td width="33%">

### 📦 **模块化插件架构**

🔄 **动态插件加载**  
支持热重载，无需重启即可更新插件

🏷️ **命令别名系统**  
灵活的命令重定向和自定义别名

🎯 **多命令支持**  
单个插件可注册多个命令和子命令

👂 **消息监听器**  
支持全局消息监听和事件处理

</td>
<td width="33%">

### 🔧 **内置功能模块**

⚙️ **系统管理**  
进程管理、系统信息监控、日志查看

🛡️ **权限控制**  
sudo 权限分配和用户管理

🌐 **远程插件**  
在线插件商店，一键安装/卸载

💻 **Shell 执行**  
安全的命令行执行环境

🔍 **信息查询**  
用户、群组、频道详细信息获取

</td>
<td width="33%">

### ⚡ **高性能设计**

🔒 **TypeScript**  
类型安全，开发体验优秀

🚀 **异步架构**  
基于 Promise 的非阻塞设计

🛠️ **错误处理**  
完善的异常捕获和恢复机制

💾 **内存优化**  
智能缓存和资源管理

</td>
</tr>
</table>

## 🏗️ 项目结构

<details>
<summary><b>📁 点击展开项目结构</b></summary>

```
📦 TeleBox/
├── 🎯 src/                     # 核心源代码
│   ├── 🚪 index.ts            # 应用入口点
│   ├── 🔌 plugin/             # 内置插件目录
│   │   ├── 📖 help.ts         # 帮助系统
│   │   ├── 📦 tpm.ts          # 插件管理器
│   │   ├── 🆔 id.ts           # 信息查询
│   │   ├── 👑 sudo.ts         # 权限管理
│   │   ├── 💻 exec.ts…
