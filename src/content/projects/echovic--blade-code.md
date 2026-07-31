---
repo: "echoVic/blade-code"
name: "blade-code"
description: "AI-powered CLI coding agent with 20+ built-in tools, MCP support, and multi-model providers"
readmeQualityOk: true
url: "https://github.com/echoVic/blade-code"
homepage: "https://echovic.github.io/blade-code/"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [98]
topics: ["agent", "ai", "cli", "code", "llm", "mcp", "nodejs", "skills", "terminal", "tools"]
stars: 173
forks: 25
openIssues: 0
closedIssues: 3
watchers: 1
contributors: 2
recentReleases: 10
createdAt: "2025-05-30T10:08:27Z"
lastCommitAt: "2026-07-31T06:28:22Z"
lastReleaseAt: "2026-07-31T06:26:44Z"
status: "thriving"
tags: ["solo_builder", "release_machine"]
healthScore: 91
undervaluedScore: 46
maintainers: ["echoVic"]
openGraphImageUrl: "https://opengraph.githubassets.com/62239acee0d144c7439ee482d36acc710015bdaa02ecdf7c085a7d033d819a69/echoVic/blade-code"
---

# 🗡️ Blade Code

**新一代 AI 编程助手（CLI + Web UI）**

[English](https://github.com/echoVic/blade-code/blob/HEAD/README.en.md) | 简体中文

</div>

---

## 📸 界面预览

  <p><em>CLI 终端界面</em></p>
</div>

  <p><em>Web UI 界面（0.2.0 新增）</em></p>
</div>

---

## ✨ 核心特性

- 🤖 **智能对话** - 上下文理解、多轮协作、可继续会话
- 🧠 **自动记忆** - 跨会话持久化项目知识，自动学习构建命令、代码模式、调试洞察
- 🌐 **双模式界面** - CLI 终端 + Web UI，随心切换
- 🛠️ **丰富工具** - 20+ 内置工具：文件/搜索/Shell/Git/Web 等
- 🔗 **扩展能力** - MCP、插件与 Skills 系统
- 📋 **结构化工作流** - Spec / Plan / Subagents
- 🔒 **安全可控** - default/autoEdit/plan/yolo 权限模式与工具白/黑名单
- 🎨 **现代 UI** - React + Ink 终端 UI / React + Vite Web UI

---

## 🚀 快速开始

```bash
# 快速体验
npx blade-code

# 全局安装
npm install -g blade-code
# 或
pnpm add -g blade-code

# CLI 模式
blade
blade "帮我分析这个项目"
blade --print "写一个快排算法"
blade --headless "分析这个仓库并给出重构建议"
blade --headless --output-format jsonl "在 CI 中运行完整 agent 循环"

# Web UI 模式（0.2.0 新增）
blade web                    # 启动并打开浏览器
blade serve --port 3000      # 无头服务器模式
```

> 首次启动需配置模型，运行 `blade` 后输入 `/model add` 进入向导。

---

## ⚙️ 可选配置

配置文件支持全局和项目级：`~/.blade/config.json` 或 `.blade/config.json`。
更多配置项见文档。

```json
{
  "provider": "openai-compatible",
  "apiKey": "${BLADE_API_KEY}",
  "baseUrl":…
