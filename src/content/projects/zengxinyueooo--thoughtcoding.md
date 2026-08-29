---
repo: "zengxinyueooo/ThoughtCoding"
name: "ThoughtCoding"
description: "支持命令行的 AI Agent 编程工具"
readmeQualityOk: true
url: "https://github.com/zengxinyueooo/ThoughtCoding"
language: "Java"
languages: ["Java", "Python"]
languagePcts: [48, 47]
stars: 84
forks: 13
openIssues: 1
closedIssues: 10
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2025-10-08T06:25:28Z"
lastCommitAt: "2026-08-29T10:19:34Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 87
undervaluedScore: 44
maintainers: ["ClearVIper3", "zengxinyueooo"]
openGraphImageUrl: "https://opengraph.githubassets.com/da884de14bb72ba4a3feea22fe373d868d8d94d32def6a76aa2090fd77c7a00d/zengxinyueooo/ThoughtCoding"
---

# ThoughtCoding CLI

一个基于 LangChain4j 的交互式代码助手 CLI 工具，支持原生 Function Calling、流式输出和智能对话。

## 🎥 项目演示

*点击按钮前往bilibili观看完整项目演示*

## 🚀 项目特性

- **智能对话** - 基于多种 AI 模型的智能代码助手
- **流式输出** - 支持实时流式响应，提供更好的交互体验
- **原生 Function Calling** - 基于 LangChain4j 原生 function calling 的多轮 agentic 循环（工具结果按 `providerCallId` 自动配对回喂）
- **MCP 集成** - 内置 Model Context Protocol 支持，可连接丰富的工具生态系统
- **工具扩展** - 通过 MCP 支持文件管理、数据库操作、搜索、GitHub 等 50+ 种工具
- **动态工具发现** - 自动发现和注册 MCP 服务器的可用工具
- **即插即用** - 无需重启即可动态连接新的 MCP 服务器
- **预定义工具** - 内置常用 MCP 工具快捷方式，一键连接
- **技能系统** - 内置 6 个技能（docx/pdf/pptx/xlsx/mcp-builder/skill-creator），模型可按需加载 `SKILL.md` 完整说明
- **子代理** - `subAgent` 工具派发隔离的子 Agent；默认在独立 Git worktree/本地分支中执行，改动不会直接写进主工作区
- **并行子代理** - 基于 Java 21 虚拟线程（Loom）+ Semaphore 限流的 SubAgent 并发调度：同一批多个 subAgent 调用并行执行；`background: true` 时后台运行、结论自动注入下一轮对话
- **Worktree 生命周期** - 持久化跟踪隔离任务，启动时巡检历史残留；通过 `/agents list/cleanup` 安全回收已合并分支，未合并成果默认保留
- **任务中断** - 协作式取消令牌（CancelToken）跨层传播：agent 回合后台化，生成期间输入 `stop` 即可中断——流式提前结束、bash 子进程被 kill、子代理逐轮检查退出，且保证工具调用/结果 id 配对不被破坏
- **并发安全确认** - 并行子代理的权限确认框经全局锁串行化排队，终端输入由主线程统一路由（ConsoleInputRouter），多代理并发不打架
- **统一权限管道** - `PermissionGate` 收敛写/执行类工具的执行决策，越界只读操作弹确认，危险命令硬拒绝
- **配置管理** - 灵活的 YAML…
