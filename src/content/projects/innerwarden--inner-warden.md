---
repo: "InnerWarden/inner-warden"
name: "inner-warden"
description: "Open-source runtime guardrail for AI agents: screens shell commands and MCP/tool calls before they run (allow/review/deny). Cross-OS, Apache-2.0."
readmeQualityOk: true
url: "https://github.com/InnerWarden/inner-warden"
homepage: "https://www.innerwarden.com"
language: "Rust"
languages: ["Rust"]
languagePcts: [85]
topics: ["ai-agents", "ai-security", "claude-code", "devsecops", "guardrails", "llm-security", "mcp", "prompt-injection", "rust", "sandbox"]
stars: 6
forks: 3
openIssues: 10
closedIssues: 5
watchers: 1
contributors: 5
recentReleases: 0
createdAt: "2026-07-23T13:32:30Z"
lastCommitAt: "2026-11-23T10:14:43Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "hidden_gem"]
healthScore: 86
undervaluedScore: 54
maintainers: ["maiconburn", "jay23606"]
openGraphImageUrl: "https://opengraph.githubassets.com/af5a60641788ade0cf1c520878a515871678f14c9f6a66465491538f30d35299/InnerWarden/inner-warden"
discussionCount: 0
---

It screens the shell commands and MCP tool calls an agent tries to run, before they run,
  and answers <code>allow</code>, <code>review</code> or <code>deny</code>.

AI agents no longer just suggest, they act: they run shell commands, edit
files and call tools over MCP. When an agent is hijacked (prompt injection,
tool poisoning, a compromised skill), its own process is the wrong place to
hold the line. InnerWarden runs beside the agent, on your machine, reads what
the agent is about to do, and gives a verdict a hook or a proxy can enforce.

- **No account.** The guard itself sends nothing off the machine (a
  notification channel only if you set one up), and the dashboard is on
  loopback.
- **Works with the agents you use:** a hook for Claude Code, Codex CLI,
  Gemini CLI, Antigravity CLI, Hermes Agent and Cursor, an MCP proxy for
  OpenClaw or any MCP client, and an AI Jail for anything else.
- **Open rules, open engine.** Written in Rust, Apache-2.0, with YAML rules
  you can read and extend.
