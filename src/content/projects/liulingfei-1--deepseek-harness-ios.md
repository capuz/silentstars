---
repo: "liulingfei-1/deepseek-harness-ios"
name: "deepseek-harness-ios"
description: "Native iOS DeepSeek Harness port: BYOK inference, on-device Agent tools, iSH sandbox, Cordis plugins, and trajectory."
readmeQualityOk: true
url: "https://github.com/liulingfei-1/deepseek-harness-ios"
language: "Swift"
languages: ["Swift"]
languagePcts: [95]
topics: ["ai-agent", "anthropic", "cordis", "deepseek", "deepseek-harness", "ios", "ish", "llm", "on-device-ai", "openai-api"]
stars: 6
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-08-22T19:24:48Z"
lastCommitAt: "2026-09-04T08:09:46Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 46
maintainers: ["liulingfei-1"]
openGraphImageUrl: "https://opengraph.githubassets.com/8da121b4830507d356562116ef6da898ab453b92570863cf9fd5a2a70afa63ca/liulingfei-1/deepseek-harness-ios"
discussionCount: 0
---

# Harness Mobile

**把 DeepSeek Harness 的 Agent 工作流带到 iPhone：推理走你自己的模型 API，工具、插件与命令只在设备本机执行。**

`iOS` · `SwiftUI` · `DeepSeek` · `OpenAI-compatible` · `Anthropic` · `Cordis` · `iSH` · `OpenMinis` · `Agent`

</div>

> [!WARNING]
> 这是面向个人 Xcode 侧载与开发调试的实验性项目，不是 App Store 发行版。请使用独立、限额、可撤销的模型 API Key；不要把密钥、私密日志或工作区内容提交到 Issue。

Harness Mobile 不是网页壳，也不会把命令悄悄转发到服务器。它是一个原生 SwiftUI Agent 客户端：模型推理由用户配置的 HTTPS API 完成；Agent loop、文件工作区、会话、轨迹、iOS 工具、Cordis Host-half 插件和 Linux 命令都在 iPhone 上运行。

</p>

</p>

## 为什么做它

桌面 Harness 的核心体验并不只是一个聊天窗口，而是模型、工具、上下文、轨迹、工作区与插件共同组成的可观察 Agent loop。Harness Mobile 选择把这条 loop 保留在手机上，并按 iOS 的能力边界重新实现。

- **BYOK 模型层**：DeepSeek、OpenAI-compatible 与 Anthropic 请求适配；模型与 API Key 可按会话选择。
- **本机行动层**：文件、照片 OCR、位置、通知、联系人、日历等由原生工具处理；Linux 命令在内嵌 iSH ARM64 Alpine guest 里执行。
- **可演进 Harness**：支持 Cordis Host-half JavaScript 包、原生 Client Sidecar、动态 Tool / Prompt 贡献、生命周期、设置与可追溯轨迹。
- **iPhone 工作流**：长对话虚拟化、会话/子 Agent、实时活动、持续处理和失败后的本地诊断导出。

## 快速开始

### 1. 前置条件

- macOS + **Xcode Beta**
- iOS 18+ 设备或 arm64 iOS Simulator
- 一个兼容的模型 API（DeepSeek、OpenAI-compatible 或 Anthropic）

### 2. 打开与运行

```sh
git clone https://github.com/liulingfei-1/deepseek-harness-ios.git
cd deepseek-harness-ios…
