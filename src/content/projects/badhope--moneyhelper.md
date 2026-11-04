---
repo: "badhope/moneyhelper"
name: "moneyhelper"
description: "Moneyhelper ｜ Settle every entry, build every step steadily —— a conversation-first personal finance AI agent: one-sentence bookkeeping, portfolio risk control, stock research, financial report analysis, strategy backtesting, and team paper trading. FastAPI + LangGraph + React, local-first, verifiable numbers, open MCP."
originalDescription: "Moneyhelper ｜ 算清每一笔，攒稳每一步 —— 对话优先的个人理财智能体：一句话记账、持仓风控、股票投研、财报分析、策略回测、团队模拟盘。FastAPI + LangGraph + React，本地优先、数字可复核、MCP 开放。"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/badhope/moneyhelper"
homepage: "https://badhope.github.io/moneyhelper/"
language: "Python"
languages: ["Python", "TypeScript"]
languagePcts: [64, 33]
topics: ["agent-orchestration", "agentskills", "ai-agents", "ai-coding", "claude-code", "codex", "coding-assistant", "cursor", "dev-tools", "mcp"]
stars: 92
forks: 10
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 3
recentReleases: 10
createdAt: "2026-02-06T08:52:31Z"
lastCommitAt: "2026-11-04T13:04:36Z"
lastReleaseAt: "2026-10-28T11:15:27Z"
status: "thriving"
tags: ["hidden_gem", "release_machine"]
healthScore: 89
undervaluedScore: 42
maintainers: ["badhope", "x1882"]
openGraphImageUrl: "https://opengraph.githubassets.com/f2b39e1d5c2bd8ffecca6326bd51a1b96cce88c36b0f439e1f322a925a25d104/badhope/moneyhelper"
discussionCount: 0
---

# Moneyhelper

**An AI financial assistant that does the accounting.** Log expenses in one sentence, check holdings, run financial check-ups, and get morning briefings.
All numbers come from a deterministic engine. The model only interprets intent and writes the text, so **it cannot make up amounts**.

Simplified Chinese | [English](https://github.com/badhope/moneyhelper/blob/HEAD/README.en.md) | [Architecture details](https://github.com/badhope/moneyhelper/blob/HEAD/docs/ARCHITECTURE-detail.md)

---

## Three forms, one core

| Form | How to start | Best for |
|---|---|---|
| **Desktop installer** | Download `.exe` / `.msi` / `.dmg` / `.AppImage` | People who just want to double-click and open it, without touching the command line |
| **Web + backend** | `docker compose up -d` → `localhost:8787` | Self-hosted servers, multi-device access |
| **CLI** | `moneyhelper add "咖啡 28"` | Keyboard enthusiasts, script integration |

```bash
# Local development (one command: venv + dependencies + frontend build + start service)
scripts/dev.sh --prod        # → http://localhost:8788

# CLI
moneyhelper add "午餐 45 打车 28"    # multiple entries in one sentence, auto-categorized
moneyhelper…
