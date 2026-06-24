---
repo: "sleep2agi/agent-network"
name: "agent-network"
description: "助力搭建你的数字 AI 员工军团 — 多 Agent 一行命令组网协作。Claude Code / Claude Agent SDK / Codex / Grok Build 4 runtime + 8+ 家 LLM（Anthropic / OpenAI / xAI / MiniMax / DeepSeek / GLM / Kimi / 书生 / 小米 MiMo），自带 Web Dashboard，Apache 2.0 开源。"
url: "https://github.com/sleep2agi/agent-network"
homepage: "https://anet.sh"
language: "TypeScript"
languages: ["TypeScript", "JavaScript"]
languagePcts: [51, 39]
topics: ["ai-agents", "claude-code", "codex", "mcp", "multi-agent", "agent-network", "anthropic", "claude", "deepseek", "llm"]
stars: 39
forks: 8
openIssues: 66
closedIssues: 144
watchers: 0
contributors: 4
recentReleases: 10
createdAt: "2026-03-31T17:34:18Z"
lastCommitAt: "2026-06-24T00:22:18Z"
lastReleaseAt: "2026-05-17T05:10:30Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 89
undervaluedScore: 46
maintainers: ["SmartFlowAITeam", "s2agi", "vansin"]
openGraphImageUrl: "https://opengraph.githubassets.com/318b6dbc641ea97ba58ff341beb2672b5dd046260513726406e1d384656281fe/sleep2agi/agent-network"
discussionCount: 0
---

</p>

<h1 align="center">Agent Network</h1>

  <strong>助力搭建你的数字 AI 员工军团</strong>
</p>

  把 Claude、Codex、Grok 拉进同一张网，一行命令编成你指挥的协作团队。4 个 Runtime × 8 家 LLM 厂商 · MCP 自动发现 · 流式协作 · 本地优先 · Apache 2.0 开源。
</p>

</p>

  <strong><a href="https://anet.sh">📖 文档</a></strong> ·
  <strong><a href="https://www.npmjs.com/org/sleep2agi">📦 NPM</a></strong> ·
  <strong><a href="https://github.com/sleep2agi/agent-network/discussions">💬 Discussions</a></strong> ·
  <strong><a href="https://anet.sh/community">💚 微信群</a></strong>
</p>

</p>

---

## 30 秒上手

```bash
# 装一个全局包
npm install -g @sleep2agi/agent-network

# 终端 1 —— 起 Hub（保持开着）
anet hub start
#   监听 http://127.0.0.1:9200，SQLite 在 ~/.commhub/commhub.db
#   自动创建默认账号：admin / anethub（公网部署务必先 anet passwd）

# 终端 2 —— 起 Dashboard（保持开着）
anet hub dashboard
#   浏览器访问 http://localhost:3000

# 终端 3 —— 登录 + 创建 + 启动 Agent
anet login --username admin --password anethub
anet node create my-bot          # 交互式：选 runtime → 选 provider → 填 API key
anet node start my-bot           # 等到 "SSE connected" 即就绪
```

打开 Dashboard 的 Chat 面板派任务即可。再起一个节点让第一个去派活，两个 Agent 会通过 MCP 自动发现彼此并协作。

### 已装过 anet？升级到最新

```bash
anet upgrade            # 一键把 4 个包升到 npm @latest
anet…
