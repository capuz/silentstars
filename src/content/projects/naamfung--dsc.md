---
repo: "naamfung/dsc"
name: "dsc"
description: "使用Golang重新实现DeepSeek Harness"
readmeQualityOk: true
url: "https://github.com/naamfung/dsc"
language: "Go"
languages: ["Go"]
languagePcts: [99]
stars: 5
forks: 2
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-08-16T13:13:12Z"
lastCommitAt: "2026-08-31T09:58:23Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 90
undervaluedScore: 62
maintainers: ["naamfung"]
openGraphImageUrl: "https://opengraph.githubassets.com/878478c8d44eeffa020fd16743ca72faca13f46c9193707beb918a4c240f257f/naamfung/dsc"
---

# DSC

本项目系使用 Golang 實現的編程代理系統，遵循 DeepSeek Harness 的一切皆插件的设计哲学，插件都可以热插拔方式加载或卸载。

## 核心功能

- **插件架構**：基於 `go-plugin` 与 gRPC 的宿主與插件通信機制，支持熱插拔加載或卸載。
- **熱重載（Hot Reload）**：支持 dsc / agent / llm / tool / policy 五類插件的在線熱重載，無需重啟主程序即可更新插件版本；幾乎全程不持全局鎖，失敗不影響舊實例。
- **多 LLM 支持**：支持 OpenAI、Anthropic、Ollama 等主流 LLM 提供商；其中 `llm-openai` 與 `llm-anthropic` 插件支持本地 LlamaCpp 推理引擎。
- **ReAct 循環**：實現 Agent 的 Reasoning and Acting 循環，支持多輪推理與工具執行。
- **工具調用與插件化**：支持通過 Tool 插件擴展工具集，內置文件操作與 shell 執行能力。沙箱策略三檔（对齐 DSH sandbox mode）：`read-only`（拒绝一切文件写）、`workspace-write`（仅允许在 workspace 根內写，默认）、`full-access`（不额外拦截）；TUI 内经 `/sandbox read-only | workspace | full-access` 运行时切换，workspace 根默认为启动 dsc 的目录（也可经 `workspace_root` 绝对路径覆盖）。各档下相对路径写始终以 workspace 为根（防止 `../` 路径穿越），绝对路径写 workspace 之外由沙箱策略统一管控；`read-only` 同时会禁用「命令无法从参数判定是否只读」的解释器/执行器（如 shell），防止 `echo x > /anywhere` 绕开只读档。
- **工具調用超時（活躍續命）**：shell 与命令型工具采用「十分鐘起步、活躍續命」超时（对齐 rex shell）——启动 10 分钟预算（`DSC_SHELL_TIMEOUT` 可覆盖），只要 stdout/stderr 持续有新输出就不间断续命，仅对「长时间完全无新输出」才判定超时，避免一刀切固定时长方误杀仍在产出嘅长编译/测试。
- **凭据隔离**：插件子进程 env 白名单化——仅 LLM 插件放行凭据类键（`*_API_KEY`/`*_TOKEN`/`*_SECRET` 等），其余 tool/policy/agent 插件一律滤除（`DSC_*` 宿主配置保留），防止 API key 经 shell 等工具进程被模型读进会话历史。
- **RPC…
