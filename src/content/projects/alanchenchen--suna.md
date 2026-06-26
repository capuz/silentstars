---
repo: "alanchenchen/suna"
name: "suna"
description: "   Suna is a lightweight, local-first terminal AI agent and agent runtime for coding, research, automation, and developer workflows."
url: "https://github.com/alanchenchen/suna"
language: "Go"
languages: ["Go"]
languagePcts: [100]
topics: ["agent-runtime", "ai-agent", "local-first", "terminal-ai"]
stars: 11
forks: 3
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 9
createdAt: "2026-06-11T12:52:44Z"
lastCommitAt: "2026-06-26T06:46:10Z"
lastReleaseAt: "2026-06-25T07:55:59Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 80
undervaluedScore: 53
maintainers: ["alanchenchen"]
openGraphImageUrl: "https://opengraph.githubassets.com/1fdcbe21dd1ef59edc5f62807b939c7ca7a480a4851b9d698f9d0b8c4563fd6f/alanchenchen/suna"
---

# Suna

> Suna (सून्य / śūnya)：梵文“空”。出厂无形，遇缘则生。

Suna 是一个运行在本地终端里的通用 AI Agent。它用 TUI 和你对话，由本地 daemon 负责模型调用、工具执行、Guard、记忆、Skill、MCP、附件和会话状态，让你可以在终端里直接让 AI 理解项目、修改文件、执行命令、访问 HTTP、处理图片，并在高风险操作前获得确认或 Smart Review。

Suna 的设计取向是**轻量、克制、越用越懂你**：不追求把所有能力堆成复杂面板，而是把关键能力收敛在本地 daemon、少量自然语言入口和可审查的工具链路里。随着使用增加，Suna 会通过轻量记忆、会话状态、Skill 和可配置模型逐渐贴合你的工作方式。

> Suna 目前处于快速开发状态。如果升级或使用过程中遇到功能失效，建议先升级到最新版本，并在备份必要数据后清理 Suna 数据目录中的 `.db` 文件。

## 亮点

- **智能模型路由，用 Subtask 发挥不同模型优势**：这不是常见的“启动前手动选一个模型”，而是主 Agent 可以在运行中根据任务性质、模型能力、上下文窗口和多模态能力，显式选择某个模型执行独立子任务；每个 Subtask 都是独立上下文，并由主 Agent 动态分配可见信息、图片和工具权限，完成后只把结果交回主 Agent 汇总决策。
- **Smart Mode：让安全审核理解工具意图**：很多 Agent 只有 `auto` 或手动确认两档；Suna 的 `smart` Guard 会在硬规则、Workspace 和风险分级之外，用 LLM Review 判断工具调用是否安全且符合用户意图。Smart Review 是安全审查器，不做普通 tool-call 优化，因此在不牺牲高危拦截的前提下降低无意义打断。
- **Skill 预检查与可选 LLM Check**：目录式 Skill 导入或创建后先做静态检查，再可选 LLM review，最后由用户确认是否启用，避免把不合格或不可信 Skill 直接暴露给 Agent。
- **越用越懂你的轻量记忆**：Suna 不把完整聊天历史当作长期记忆，而是提取稳定偏好、习惯、约束和纠错信息；记忆是轻量背景，不喧宾夺主。
- **终端里的高性能 Agent 工作台**：TUI 支持流式回复、Markdown 渲染、reasoning 展开/折叠、工具详情、复制模式、会话恢复和配置页面；Chat transcript 使用窗口化渲染和流式增量渲染缓存，在不降低流式刷新体验的前提下降低长回复和滚动时的 CPU 压力。
- **本地 daemon 架构**：TUI 专注交互，daemon 持有…
