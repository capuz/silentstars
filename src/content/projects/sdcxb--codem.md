---
repo: "sdcxb/codem"
name: "codem"
description: "Codem - AI Coding Assistant, Tauri + React + TypeScript"
readmeQualityOk: true
url: "https://github.com/sdcxb/codem"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [92]
stars: 7
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 10
createdAt: "2026-06-27T05:57:44Z"
lastCommitAt: "2026-08-24T04:20:41Z"
lastReleaseAt: "2026-07-14T14:15:27Z"
status: "thriving"
tags: ["solo_builder", "release_machine"]
healthScore: 80
undervaluedScore: 55
maintainers: ["sdcxb"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1281951806/da7fd15c-82a2-4266-a03e-eafddaa170b0"
---

# Codem 

对标 Codex，借鉴 MiMo Code CLI 和 Claude Code 开发的桌面 GUI 客户端。

## 项目简介

基于 Tauri v2 + React + TypeScript 构建的 AI 编程助手桌面应用，提供可视化界面与 MiMo 大模型交互，支持代码生成、文件操作、终端执行等功能。

> **作者的话：**
>
> 本项目初衷是为小米推出的 MiMoCode 开发一个 GUI 客户端，方便非程序员朋友在 Win 客户端使用，所以提供了 API 和 MiMo 专用的 CLI 登录两种登录方式。
>
> 基于初衷本项目最初定名为 mimo-gui，但是因为频繁调用 MiMoCode 调试本项目，并反复调用 MiMo CLI，我的 MiMo 免费模型被限制了，请悲允~
>
> 由于是对标 Codex，初心是 mimo-gui，所以最终本项目定名为 Codem。本人已经 10 年没敲代码了，全程使用 MiMoCode 开发，水平有限请轻喷。
>
> 作为一个最初始版本，目前本人亲测，CLI 小米账户登录、API登录（仅测试了deepseek，如果其他模型api有问题请反馈）、对话工具调用、项目文件读写等功能已经完成，SKILLS、MCP、子智能体调用等功能还没测试（MiMoCode 告诉我已经搞定了，让我放心使用，但是我不放心！）
>
> **v1.1.0 更新**：完成 DeepSeek Harness 第三轮对标全面整改 — Phase A-D 全部完成（孤岛模块接入 10 项 + 重复实现统一 4 项 + 缺失功能补齐 5 项）+ 5 个 Bug 修复 + 4 个新测试文件 / 118 用例。全量 107 文件 / 3624 用例通过。
>
> **v1.1.1 更新**：UI 布局优化（插件管理移至左下角 + CI/CD 移至右侧边栏 + 性能移至主对话框顶端）+ 插件条件渲染（关闭插件隐藏按钮/面板，启用后恢复）+ 宠物窗口关闭 Bug 修复 + 插件管理面板初始化时序修复 + 全工具 execute 回调 null 检查防御。
>
> **v1.2.0 更新**：Cordis 架构全面对齐 DSH — 移除核心文件 `@ts-nocheck`，`declare module` 类型声明全面生效，`ctx.get()` 返回强类型（对齐 DSH `ReflectService.get` keyof 推断模式）；消除双轨制服务获取；安全加固（AST 代码验证 + Worker 隔离 + XOR 密钥混淆 + SandboxGuard 覆盖读操作）；生命周期管理（复合 Dispose + LRU 淘汰 + 异步 I/O）；修复 React Hooks 顺序违规和 `useSyncExternalStore`…
