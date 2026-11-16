---
repo: "blueokanna/Talk2u"
name: "Talk2u"
description: "An interactive entertainment application that combines AI role-playing with multimedia content generation."
originalDescription: "An interactive entertainment application that combines AI role-playing with multimedia content generation."
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/blueokanna/Talk2u"
language: "Dart"
languages: ["Dart", "Rust"]
languagePcts: [43, 29]
topics: ["ai", "chatbot", "live2d", "moss-tts-nano-100m", "zhipu", "qwen"]
stars: 5
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-02-11T08:31:09Z"
lastCommitAt: "2026-11-16T11:52:02Z"
lastReleaseAt: "2026-07-30T16:00:08Z"
status: "thriving"
tags: []
healthScore: 63
undervaluedScore: 33
maintainers: ["blueokanna", "Talk2U"]
openGraphImageUrl: "https://opengraph.githubassets.com/264350427daf5a6a5123f90e995efff51c9c4783a2f0407be2e05762c71186f9/blueokanna/Talk2u"
---

# Talk2U

Talk2U 是一个 Flutter + Rust 的本地角色聊天应用。聊天记录、角色设定、记忆和知识数据保存在本机；模型回复可以来自用户选择的联网 LLM，也可以在 Android 上由端侧 Qwen 模型生成。Android、Windows 和 Linux 默认显示 Live2D 对话界面，对话文字按需展开，文字输入始终可用。Android 语音不依赖系统 TTS/STT：识别使用应用内 sherpa-onnx + SenseVoice INT8，合成使用 MOSS-TTS-Nano + Qualcomm QNN HTP。

> 本文档既是安装说明，也是当前实现边界。请先阅读“能力状态”，再按“Windows 到 Android 真机的最短路径”操作。

## Model 内置文件夹开源模型下载链接
[下载](https://1drv.ms/f/c/716401d0cdd5bd0e/IgDdaEU7EX-mRqR-h47_q-UUAftK4GNb5I9nDv1JGAVG0ik?e=VTbi0P)

## 能力状态

| 能力 | 状态 | 实际实现 |
| --- | --- | --- |
| 智谱清言 | 已实现 | 与其它平台共用 `courierust` 传输与同一套 SSE 解析，按 OpenAI 协议直连 |
| DeepSeek | 已实现 | OpenAI-compatible SSE，支持 `deepseek-chat` / `deepseek-reasoner` |
| OpenAI | 已实现 | Chat Completions SSE，Bearer API Key |
| Anthropic | 已实现 | Messages API、`x-api-key`、`anthropic-version`、Anthropic SSE |
| Kimi | 已实现 | Moonshot OpenAI-compatible SSE |
| Qwen | 已实现 | DashScope OpenAI-compatible SSE |
| 自定义 URL | 已实现 | OpenAI-compatible；API Key 可留空，支持 HTTP(S) 完整地址 |
| 跨平台继续同一对话 | 已实现 | conversation 与供应商解耦，切换供应商不创建新会话 |
| 本地记忆/知识检索 | 已实现 | Rust 本地文件存储、短期上下文、长期摘要、知识事实检索；system 上下文按 token 预算完整保留 |
| Android 端侧 LLM | 已实现 | `Qwen/Qwen3-4B-Instruct-2507` Q4_K_M GGUF；4096 token 窗口内按 token 预算裁剪历史，单次输出上限…
