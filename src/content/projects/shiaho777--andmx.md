---
repo: "shiaho777/andmx"
name: "andmx"
description: "Android-native AI coding agent (AndMX)"
readmeQualityOk: true
url: "https://github.com/shiaho777/andmx"
language: "Kotlin"
languages: ["Kotlin"]
languagePcts: [100]
stars: 7
forks: 2
openIssues: 0
closedIssues: 34
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-07-19T09:15:55Z"
lastCommitAt: "2026-09-12T08:05:34Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 97
undervaluedScore: 56
maintainers: ["shiaho777"]
openGraphImageUrl: "https://opengraph.githubassets.com/d0f4e79ba3bccc79c6b5a324e70df198a9e13814d9f80241e80baa4e51e1740d/shiaho777/andmx"
---

# AndMX

Android 原生的 AI 编程 agent。把「能真正改代码、跑命令、操作屏幕的 coding agent」装进手机——不是聊天壳，而是一个自带 Linux 沙盒、真实工具调用、Computer Use 能力的完整 agent。

- **包名**：`com.andmx`
- **SDK**：minSdk 26 / targetSdk 34（`proot` flavor 除外），仅 `arm64-v8a`
- **语言**：Kotlin + Jetpack Compose，外加少量 C（PTY、exec probe）
- **版本**：0.1.0

## 核心能力

| 能力 | 说明 |
|------|------|
| **Agent 循环** | provider 无关的多步循环：问模型 → 执行工具 → 喂回结果 → 直到模型用纯文本回答；支持并行工具调用、上下文压缩兜底、hooks |
| **工具系统** | Shell / File / Patch / Git / Browse / ComputerUse / Goal / MCP 等，按风险分级（READ/WRITE/EXECUTE/NETWORK）走批准策略 |
| **proot 沙盒** | App 内运行 Linux guest，Alpine rootfs 自动下载，PTY 交互终端，项目目录 bind-mount 到手机真实存储 |
| **Computer Use** | MediaProjection 截屏 + AccessibilityService 派发手势（tap/swipe/type），构成 screenshot→action→screenshot 纯视觉循环 |
| **多 Provider** | 统一抽象 OpenAI / Anthropic / GLM(BigModel) / DeepSeek / Ollama / vLLM…，`ProviderKind` → `WireAdapter` 单点分发，reasoning 元数据驱动。已完整实现三套协议：OpenAI Chat Completions、Anthropic Messages 与 OpenAI Responses（`instructions`/`input` items、`function_call(_output)`、`response.*` 类型化 SSE 事件，`store:false` 无状态回放） |
| **MCP** | 内置 JSON-RPC client，可挂载外部 MCP 服务器作为额外工具 |

## 两个构建变体（flavor）

| flavor | targetSdk | 用途 |
|--------|-----------|------|
|…
