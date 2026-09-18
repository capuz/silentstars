---
repo: "mudtools/MudFeishu"
name: "MudFeishu"
description: "飞书服务端 SDK 的 .NET 适配版，提供类型安全的 API 封装，事件订阅组件提供 WebSocket 与 Webhook 双模式支持，让开发者能够在 .NET 应用程序中便捷、高效地集成飞书服务端功能。"
readmeQualityOk: true
url: "https://github.com/mudtools/MudFeishu"
homepage: "https://www.mudtools.cn/"
language: "C#"
languages: ["C#"]
languagePcts: [99]
topics: ["feishu", "feishu-sdk", "feishu-webhook", "feishu-websocket", "feishu-dotnet", "feishu-webbook", "lark", "lark-webhook", "lark-websocket", "lark-dotnet"]
stars: 23
forks: 4
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2025-12-09T07:40:31Z"
lastCommitAt: "2026-09-18T08:26:11Z"
lastReleaseAt: "2026-02-26T13:15:06Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 95
undervaluedScore: 58
maintainers: ["mudtools"]
openGraphImageUrl: "https://opengraph.githubassets.com/3fced90b5b1e9ff35bf2cbb2ff429a79aa1faf79425bfac482acf1fd27bb4083/mudtools/MudFeishu"
---

# MudFeishu

企业级 .NET 飞书 API 集成 SDK

**完整的 HTTP API、WebSocket 实时事件订阅和 Webhook 事件处理解决方案**

[快速开始](#-快速开始) • [API 模块](#-api-模块) • [使用示例](#-使用示例) • [文档](#-详细文档)

</div>

---

## 📖 项目简介

MudFeishu 是一套现代化的企业级 .NET 飞书 API 集成 SDK，提供完整的 HTTP API 调用、WebSocket 实时事件订阅和 Webhook 事件处理能力。SDK 采用策略模式和工厂模式设计，内置自动令牌管理、智能重试、高性能缓存等企业级特性，大幅简化飞书应用的开发难度。

### ✨ 核心优势

- 🚀 **极简 API** - 一行代码完成服务注册，开箱即用
- 🏗️ **类型安全** - 强类型数据模型，编译时类型检查
- 🔄 **自动令牌管理** - 智能缓存和刷新，无需手动维护
- 🛡️ **企业级稳定** - 统一异常处理、智能重试、详细日志
- 🎯 **事件驱动** - 策略模式事件处理，灵活扩展
- 📊 **多框架支持** - .NET Standard 2.0、.NET 6.0、.NET 8.0、.NET 10.0
- ⚡ **原生 AOT 支持** - net8.0+ 一等公民支持 Native AOT 发布，全链路源生成 JSON 序列化与配置绑定，严格模式下 IL 警告归零
- 🔒 **安全防护** - SSRF 防护、URL 白名单验证、签名验证、加密解密
- 📈 **可观测性** - 内置 FeishuMetrics 指标收集，支持 OpenTelemetry 集成

---

## 📦 项目概览

| 组件                          | 描述                                                                                             | NuGet                                                                                                                               | 下载                                                                    |
| ----------------------------- |…
