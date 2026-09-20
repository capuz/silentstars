---
repo: "antiv/mate"
name: "mate"
description: "Production-ready multi-agent orchestration engine built on Google ADK. Database-driven agent config, 50+ LLM providers, MCP protocol, persistent memory, web dashboard, RBAC."
readmeQualityOk: true
url: "https://github.com/antiv/mate"
homepage: "https://antonijevic.rs/mate"
language: "Python"
languages: ["Python", "HTML"]
languagePcts: [60, 20]
topics: ["agent-orchestration", "ai-agents", "dashboard", "fastapi", "google-adk", "litellm", "llm", "mcp", "multi-agent", "ollama"]
stars: 92
forks: 10
openIssues: 1
closedIssues: 34
watchers: 0
contributors: 5
recentReleases: 2
createdAt: "2026-02-27T21:02:40Z"
lastCommitAt: "2026-09-20T08:47:01Z"
lastReleaseAt: "2026-09-03T08:38:22Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 98
undervaluedScore: 41
maintainers: ["antiv", "claude"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1168827824/dd30b908-77ca-4cd9-bdf3-59f23f4c65e7"
discussionCount: 1
---

# MATE — The Command Center for AI Agents

**Stop the redeploy-to-tweak loop.**

Created by [Ivan Antonijević](https://antonijevic.rs)

You built an agent. Now you need to tune the prompt. Swap the model. Restrict access for specific users. Figure out what it's actually costing you. And make sure yesterday's behavior still works after today's changes.

Without a control layer, every one of those is a code change, a commit, and a redeploy.

**MATE is that control layer.** It adds everything production needs — live configuration, RBAC, cost tracking, regression testing, and an embeddable chat widget — without touching your agent code. Runs on **Google ADK** or **LangGraph**, switchable with one env var — same agents, same dashboard, same widget either way.

---

## Try it without installing anything

These run on a live MATE instance. No signup, no install.

- **[Play the murder mystery demo](https://ai.antonijevic.rs/static/mystery-demo.html?key=wk_sQgptSKpw21XGHAEdcfLA9RykUDcDPYBt8uQjG-eK-g&lang=en)** — a multi-agent game running on MATE. No signup: you question suspects, and a wrong accusation costs you
- **[Build an agent in the…
