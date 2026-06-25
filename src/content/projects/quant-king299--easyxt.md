---
repo: "quant-king299/EasyXT"
name: "EasyXT"
description: "EasyXT是基于miniqmt中xtquant的二次开发封装库，旨在简化xtquant的使用，提供更友好的API接口。通过统一的接口设计、智能参数处理和完善的错误处理，让量化交易开发变得更加简单高效。"
url: "https://github.com/quant-king299/EasyXT"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 476
forks: 169
openIssues: 18
closedIssues: 7
watchers: 10
contributors: 2
recentReleases: 0
createdAt: "2025-09-12T14:19:23Z"
lastCommitAt: "2026-06-25T06:41:48Z"
lastReleaseAt: "2026-03-12T14:22:04Z"
status: "thriving"
tags: ["solo_builder", "under_pressure"]
healthScore: 71
undervaluedScore: 27
maintainers: []
openGraphImageUrl: "https://opengraph.githubassets.com/0d83f63e883313ad11c81314e3e2dbd912e295236b326f3fa1ad9e516b90462f/quant-king299/EasyXT"
---

# EasyXT - 模块化QMT量化交易工具集

> **注意**：本项目使用的是miniQMT环境。QMT有两个版本：完整版QMT（包含GUI界面）和miniQMT（轻量级API版本）。两者在API使用上基本一致，但在环境配置和部署方式上有显著区别。详细区别请参阅 [📖 QMT版本说明](docs/assets/QMT_VERSIONS.md)。

> 量化为王，策略致胜，我是只聊干货的王者 quant！

---

## 🎯 项目定位

**EasyXT 不是单一框架，而是一套模块化的量化交易工具集**，包含：

### 核心特性

- 🎯 **简化API**: 封装复杂的QMT接口，提供易用的Python API
- 💰 **真实交易**: 支持通过EasyXT接口进行真实股票交易
- 📊 **数据获取**: 集成qstock、akshare等多种数据源
- 📈 **技术指标**: 内置常用技术指标计算
- 🚀 **策略开发**: 提供完整的量化策略开发框架
- 🔐 **自动登录**: 支持QMT/miniQMT自动登录，包括验证码识别
- 📚 **学习实例**: 丰富的教学案例，从入门到高级
- 🌍 **跨平台支持**: 支持Windows、macOS、Linux（通过xqshare远程客户端）

### 模块概览

| 模块 | 类型 | 说明 | 独立性 |
|------|------|------|--------|
| **easy_xt** | 📦 核心库 | QMT API的轻量级封装，提供简洁的数据/交易接口 | ✅ 可独立使用 |
| **easyxt_backtest** | 🔧 扩展工具 | 通用回测框架，支持多策略、多数据源 | ✅ 可独立使用 |
| **101因子平台** | 📊 独立应用 | 基于Streamlit的因子分析Web应用 | ✅ 完全独立 |
| **strategies** | 📁 策略集合 | 完整的交易策略示例（雪球跟单、网格交易等） | ⚠️ 依赖easy_xt |
| **学习实例** | 📚 教学案例 | 从入门到实战的代码教程 | ⚠️ 依赖easy_xt |

**核心理念**：按需选用，低耦合，清晰边界

---

## 🚀 快速导航

### 🤔 我该从哪里开始？

#### 我是新手，想学习量化交易
→ 📖 **[学习路径](#-学习路径)** → 从 `学习实例/` 开始

#### 我只需要API封装，要在自己的项目中使用
→ 📦 **[easy_xt API文档](easy_xt/README.md)** → 只需安装 `easy_xt`

#### 我想做策略回测
→ 🔧…
