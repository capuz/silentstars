---
repo: "Muvon/octomind"
name: "octomind"
description: "Open-source AI coding agent and agent runtime: one binary, any model, MCP-native. Runs in terminal, CI, or as a daemon."
readmeQualityOk: true
url: "https://github.com/Muvon/octomind"
homepage: "https://octomind.run"
language: "Rust"
languages: ["Rust"]
languagePcts: [99]
topics: ["agentic-ai", "ai", "cli", "developer-tools", "development", "mcp", "mcp-server", "vibe-coding", "ai-assistant", "autonomous-agents"]
stars: 135
forks: 11
openIssues: 1
closedIssues: 8
watchers: 2
contributors: 3
recentReleases: 0
createdAt: "2025-06-01T11:09:23Z"
lastCommitAt: "2026-09-13T08:26:32Z"
lastReleaseAt: "2025-07-10T09:56:43Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 98
undervaluedScore: 46
maintainers: ["donk8r"]
openGraphImageUrl: "https://opengraph.githubassets.com/86bd295268129dbb1fb86e6c56d3762c85a9167f4ee765a9c49d947696e2f289/Muvon/octomind"
discussionCount: 0
---

</a>
  <br /><br />
  <strong>The CLI-first AI coding agent runtime.</strong><br />
  <em>Pipe it, schedule it, embed it. One binary, multiple model providers, MCP-native — built for autonomous work, not just chat.</em>
  <br /><br />

  <br />

  [Documentation](https://octomind.run/docs/) · [Tap Registry](https://github.com/muvon/octomind-tap) · [Website](https://octomind.run)
</div>

---

Octomind is an open-source AI agent client: the model calls MCP tools to do real work — read and write files, run shells, search code, delegate to sub-agents. The same runtime supports several entry points: the same session runs **interactively**, **piped through stdin**, as a **background daemon**, over **WebSocket**, or as an **ACP sub-agent** inside another agent's stack. Models, tools, roles, guardrails, budgets — all of it is TOML, no framework code.

```bash
# Interactive
octomind run developer:general

# Piped — CI, scripts, automation
echo "Explain the auth module" | octomind run developer:general --format plain

# Daemon — long-running; send from another terminal on the same machine
echo "watch the build" | octomind run --name watcher --daemon --format jsonl
octomind send --name…
