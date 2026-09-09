---
repo: "VallierDev/codex-switcher"
name: "codex-switcher"
description: "Codex CLI / Codex App 多账号桌面工具：账号管理、配额观察、本地代理、无损自动切号、中转站、Coding Plan 接入；限额时自动换号/切中转/接 GLM 或 MiMo 并重发。 Desktop switcher for Codex CLI/App accounts, relay endpoints, GLM/MiMo Coding Plan, and lossless proxy retries."
readmeQualityOk: true
url: "https://github.com/VallierDev/codex-switcher"
language: "Rust"
languages: ["Rust", "TypeScript"]
languagePcts: [70, 21]
topics: ["account-switcher", "codex", "rust", "tauri", "typescript", "windsurf"]
stars: 78
forks: 16
openIssues: 6
closedIssues: 2
watchers: 2
contributors: 4
recentReleases: 0
createdAt: "2026-01-17T15:53:50Z"
lastCommitAt: "2026-09-09T08:19:37Z"
lastReleaseAt: "2026-05-03T08:05:32Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 70
undervaluedScore: 26
maintainers: []
openGraphImageUrl: "https://opengraph.githubassets.com/805bfd02c4e8660320b758e565c695a9ef6747840d2cdc8ac3d17e3bcff29ed0/VallierDev/codex-switcher"
---

# Codex Switcher

**中文** | [English](#english) | [Русский](#русский)

> **Luna Reserve 备用额度现已支持。** 当账号的常规高级模型额度暂时耗尽时，Switcher 会识别该账号可用的 Luna Reserve，并让 `gpt-5.6-luna` 继续使用这部分独立额度，避免因误判常规额度耗尽而提前切换账号。

### Luna Reserve 是什么

Luna Reserve 是 OpenAI 在常规高级模型额度耗尽后，为部分账号提供的独立临时额度。它只适用于 `gpt-5.6-luna`，与普通 5 小时额度、周额度分别计算；因此普通 5H 显示为 `0%` 时，Luna Reserve 仍可能保持可用。

Switcher 会从用量接口读取这项独立额度，并在账号列表中单独展示剩余比例和重置时间：

当 Luna Reserve 仍可用时，使用 `gpt-5.6-luna` 不会因为普通额度耗尽而自动切换账号；Reserve 耗尽、过期或明确不可用后，系统才恢复正常的切号策略。

## v0.7.13 更新说明

- 修复 WebSocket 预检阶段忽略 `gpt-reserve` 路由提示的问题。
- 当前账号存在可用 Luna Reserve 时，`gpt-5.6-luna` 请求不会被普通额度预检提前切到其他账号。

## v0.7.12 更新说明

- 新增 Luna Reserve 独立额度识别与展示。
- 当 `gpt-5.6-luna` 的 Luna Reserve 仍可用时，普通 5 小时额度耗尽不会触发自动切号。
- Luna Reserve 不可用、耗尽或过期后，系统恢复原有的安全切号策略。

## v0.7.11 更新说明

本版本是在 `v0.7.10` 基础上的一次集中更新，重点是让额度窗口真正开始滚动、提高 Plus 账号利用率，并补齐 Google/Antigravity、Kimi/DeepSeek Relay、账号邀请和跨客户端 Skills 能力。

### 配额刷新与账号利用

- 刷新账号额度后，如果发现新的 5 小时或 7 天窗口需要启动，系统会在防重复记录落盘后，向对应账号发送一次极小的 Codex 请求，让该窗口真正开始计时；同一个窗口事件不会重复发送。
- 当 Plus 和 Pro 账号同时存在时，Plus 的 5 小时窗口回满且周额度仍可用，系统会优先把当前使用切到 Plus，避免 Plus 额度闲置；不会把周额度已经耗尽的 Plus 当作可用账号。
- 周期保鲜按接口返回的实际窗口识别 5H/7D，不把套餐名称硬编码成窗口类型；client/solo 模式由权威端执行，减少多机重复刷新和 refresh token…
