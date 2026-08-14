---
repo: "XiaomingX/mimofan"
name: "mimofan"
description: "mimofan - AI coding agent platform"
readmeQualityOk: true
url: "https://github.com/XiaomingX/mimofan"
homepage: "https://x.com/seclink"
language: "Rust"
languages: ["Rust"]
languagePcts: [94]
topics: ["agent", "mimo", "openai"]
stars: 28
forks: 1
openIssues: 67
closedIssues: 618
watchers: 0
contributors: 3
recentReleases: 10
createdAt: "2026-06-25T02:29:37Z"
lastCommitAt: "2026-08-14T05:11:29Z"
lastReleaseAt: "2026-08-10T16:45:27Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "funded", "release_machine"]
healthScore: 97
undervaluedScore: 50
maintainers: ["XiaomingX"]
openGraphImageUrl: "https://opengraph.githubassets.com/0dce326e880a23c7e2846abb7fefdbc14f9f598382d1aac549af77be1d926a5a/XiaomingX/mimofan"
fundingLinks: ["GITHUB:https://github.com/Hmbown", "BUY_ME_A_COFFEE:https://buymeacoffee.com/hmbown"]
---

# 米谋 (mimofan)

> 终端 AI 编程助手 —— 与你并肩，谋定而后动
>
> 基于 Rust 实现，原生支持小米 MiMo 模型，兼容 DeepSeek、OpenAI、通义千问等主流大模型。

---

## 米谋是什么

米谋（mimofan）是一个跑在终端里的 AI 编程搭档：你用自然语言下指令，它调用大模型思考，再用工具（读文件、改代码、跑命令）把活干完，工作流是「模型决策 → 工具执行 → 结果回灌 → 再决策」的闭环。

基于 Rust 实现，原生支持小米 MiMo，兼容 DeepSeek、OpenAI、通义千问等主流大模型。对标 Claude Code / OpenCode，差异在：**本地优先 · MIT 协议 · 默认 MiMo**。

它能做什么：

- 读懂项目结构，理解模块关系
- 生成符合规范的代码与测试
- 写完自动跑验证，红了就修
- 给报错信息就能定位到具体代码行
- 不弹窗不打扰，只在需要你决策时才开口（每次危险操作都会先问「可以吗？」）
- Spec Freeze 冻结计划，防止 Agent 偏离
- Issue Monitor 监控 GitHub Issue，自动关联 PR

> 米谋不是一个替你写代码的工具，而是一个帮你把代码写好的搭档。谋定而后动，知止而有得。

---

## 30 秒极速上手（零配置开箱即用）

### 1. 安装

```bash
# 使用 cargo 编译安装
cargo install --path crates/tui --locked

# 或下载预编译二进制
# https://github.com/XiaomingX/mimofan/releases
```

### 2. 零配置直接启动

无需手动创建配置文件！直接设置环境变量即可一键启动：

```bash
# 使用 小米 MiMo (默认)
export XIAOMI_MIMO_API_KEY="你的_XIAOMI_MIMO_API_KEY"
mimofan

# DeepSeek / OpenAI / 通义千问 等非内置服务商，请使用自定义 provider：
# 在 ~/.mimofan/config.toml 中按下方「配置示例」填写后运行 mimofan
```

> **提示**：若未设置环境变量，首次运行 `mimofan` 会自动启动交互式配置向导帮你完成配置。

---

## 常用调用方式

```bash
# 启动全屏 TUI 交互界面
mimofan

# 单次指令模式（不进入 TUI）
mimofan exec "帮我写一个正则表达式匹配邮箱"

# 自动运行系统诊断
mimofan doctor
```

---

## 高频实用场景

### 场景一：快速修复 Bug…
