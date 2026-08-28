---
repo: "ksk2kk/YujialeCode"
name: "YujialeCode"
description: "专门为本地模型玩家开发的code agent! 纯rust,极致简约的系统提示词 30tokens的速度也可以流畅使用。完美兼容claude skill。"
readmeQualityOk: true
url: "https://github.com/ksk2kk/YujialeCode"
language: "Rust"
languages: ["Rust"]
languagePcts: [88]
stars: 21
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-08-18T06:32:57Z"
lastCommitAt: "2026-08-28T15:31:10Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 89
undervaluedScore: 32
maintainers: ["ksk2kk", "dawalishi821"]
openGraphImageUrl: "https://opengraph.githubassets.com/01d7b119e8324db8124a6130633b2970e402613673d5a95d5b9cf111a874bce5/ksk2kk/YujialeCode"
---

# YujialeCode

[English](https://github.com/ksk2kk/YujialeCode/blob/HEAD/README.en.md) | [中文](https://github.com/ksk2kk/YujialeCode/blob/HEAD/README.md)

专门为本地模型玩家开发的 code agent。纯 Rust 实现，极致简约的系统提示词设计，30 tokens 的速度下也能流畅使用。完美兼容 Claude 风格 skill。

> **写给第一次接触本地 Agent 的你：** 你不需要先学会复杂的提示词，也不必因为模型不够聪明而放弃。YujialeCode 不靠堆叠提示词“祈祷模型听话”，而是用纯 Rust 工具层替模型兜底：自动纠正工具调用、完整读取文件、持续推进 Goal，并支持按需热注册新工具。你只需要尽量说清楚想做什么，剩下的路由、重试和失败恢复交给它。
>
> 这是一个会持续维护的长期项目。我会认真对待每一次卡住、崩溃和“不好用”，持续修复那些令人困惑的细节，也会不断吸收优秀开源项目的经验。希望本地模型 Agent 不只是少数人的玩具，而是一件普通用户也能放心拿起来使用的工具。

## 致谢

本项目以我的朋友 [Yujiale](https://github.com/dawalishi821) 的名字命名——YujialeCode 中的 "Yujiale" 正是他的名字。祝 Yujiale 生日快乐！

极简纯 Rust 本地模型 CLI Agent：依赖少（serde / ureq / reqwest / tokio / tungstenite 等 8 个 crate）、手搓 TUI、低系统提示词设计。面向 DeepSeek / Ollama / LM Studio / vLLM 等任意 OpenAI 兼容端点；`--mock` 离线演示无需任何 API key 即可跑通全流程；可选接入 QQ（OneBot v11，NapCat / Lagrange），支持群聊与私聊极速响应。

## 特性

- 短系统提示词：native 模式不复述函数 schema，只说明角色、工具入口与停止条件；text 模式只补充工具格式和一个 Read 示例。详细参数由 `list_tools` 按需返回。
- 双协议工具调用：text 模式解析 ```` ```tool {...} ```` 代码块；native 模式直接注册 `readline`、`execute_command`、`list_tools`、`ask_user` 四个核心入口，其余工具动态发现。
- 不打扰用户的 Computer Use：默认不再碰真实桌面。Linux 每个会话拥有独立的 headless Sway…
