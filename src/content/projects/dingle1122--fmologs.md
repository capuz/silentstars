---
repo: "dingle1122/FmoLogs"
name: "FmoLogs"
description: "Used for quickly backing up and querying QSO logs in FMO."
originalDescription: "用于快速备份及查询fmo中的qso日志"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/dingle1122/FmoLogs"
language: "Vue"
languages: ["Vue", "TypeScript"]
languagePcts: [43, 22]
stars: 14
forks: 5
openIssues: 0
closedIssues: 1
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2026-01-20T05:31:11Z"
lastCommitAt: "2026-11-19T05:17:15Z"
lastReleaseAt: "2026-06-30T00:24:54Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 86
undervaluedScore: 54
maintainers: ["dingle1122"]
openGraphImageUrl: "https://opengraph.githubassets.com/42bed56d15b749adcf7cf6127bb396c585f3a84e37de72d54e0ece8c90c55247/dingle1122/FmoLogs"
---

# FMO 日志查看器

FMO 日志查看器是一款专业的 **FMO 日志管理与分析工具**，提供日志导入、实时同步、数据查询、统计分析以及 APRS 远程控制等功能。本项目由 **BH5HSJ 后视镜** 开发并开源，采用 MIT 许可证。

📦 [GitHub 仓库](https://github.com/dingle1122/FmoLogs) · 🐛 [问题反馈](https://github.com/dingle1122/FmoLogs/issues)

## ✨ 主要功能

### 📁 数据导入与导出

- **导入 FMO 日志**：支持导入一个或多个 `.db`、`.zip` 格式的 FMO 日志或备份文件
- **导入 ADIF**：支持导入 `.adi`、`.adif` 格式的通联记录
- **FMO 同步**：
  - **自动同步**：配置 FMO 地址后，自动检测并提示同步今日通联记录
  - **手动同步**：一键同步今日通联记录
- **数据持久化**：使用 IndexedDB 存储，刷新页面数据不丢失
- **数据导出**：将当前查看的日志数据导出为 `.db` 或 `.adif` 文件
- **日志备份**：一键从 FMO 设备下载完整的日志备份文件

### 📡 服务器与设备管理

- **服务器列表**：查看所有可用服务器（Station）状态
- **服务器切换**：支持切换当前连接的服务器（上一台/下一台/列表选择）
- **实时监控**：
  - **发言状态**：实时显示当前正在发言的呼号及发言历史
  - **状态监控**：标题栏显示服务器连接状态
- **APRS 远程控制**：集成专业的 APRS 远程控制面板，支持 FMO 设备远程管理
  - **智能填充**：自动从 FMO 配置中填充登录呼号，简化操作流程
  - **安全校验**：严格的呼号、Passcode 和密钥格式校验，防止误操作
  - **服务器管理**：支持添加、编辑、删除自定义远程控制服务器
  - **多模式控制**：支持普通模式、待机模式、软重启三种控制指令
  - **操作记录**：完整的操作历史记录，支持中文状态显示（普通模式、待机模式、软重启）
  - **自动断开**：发送指令后 60 秒自动断开连接，节省资源
  - **状态反馈**：实时显示连接状态和指令执行结果，直观可靠

### 📊 数据查询模式

#### 1. 通联日志

- **全量记录**：按时间倒序展示所有通联日志
- **智能搜索**：支持按接收方呼号实时模糊搜索
- **当日序号**：高亮显示当日通联序号（前三名金银铜色高亮）
- **详细信息**：展示呼号、网格、频率、模式、中继及留言信息
