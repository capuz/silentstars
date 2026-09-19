---
repo: "AdamFrisby/CodeyBox"
name: "CodeyBox"
description: "Runs CLI coding agents (Claude Code, Codex, Copilot, Cursor, Gemini, opencode) against a task queue. Each works in an isolated VM; output is checked by configurable auditors, then merged via git. Pools multiple provider subscriptions with quota-aware routing and fallback. C#/.NET 10, MIT-licensed."
readmeQualityOk: true
url: "https://github.com/AdamFrisby/CodeyBox"
language: "C#"
languages: ["C#"]
languagePcts: [99]
topics: ["agentic", "ai-agents", "ai-coding", "autonomous-agents", "claude-code", "code-review", "codex", "coding-agent", "csharp", "developer-tools"]
stars: 7
forks: 4
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 7
recentReleases: 1
createdAt: "2026-04-27T02:35:03Z"
lastCommitAt: "2026-09-19T01:37:30Z"
lastReleaseAt: "2026-09-18T20:57:11Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 90
undervaluedScore: 57
maintainers: ["AdamFrisby"]
openGraphImageUrl: "https://opengraph.githubassets.com/050b8d5b7293fdff81e789fc76175b286505b1f1c73f9b941f5cc10b743aff49/AdamFrisby/CodeyBox"
---

# CodeyBox

**An autonomous coding orchestrator.** Hand it a task — a title and a prompt
against one of your repos — and CodeyBox picks a coding agent, runs it inside a
throwaway VM, reviews the result, resolves merge conflicts, and lands the change
on your branch (and on GitHub, if you point it there). You stay in the loop for
product decisions; it handles the delivery grind.

It drives a *fleet* of agent CLIs — Claude Code, OpenAI Codex, GitHub Copilot,
Cursor, Gemini, opencode, Antigravity, CrockCode — and routes each task to
whichever one is best and available, falling back automatically when a provider
hits a rate limit. No coding agent ever runs on your host: every model call that
touches a repository happens through an agent CLI inside a sandbox.

Every agent is boxed in a real VM behind a host-enforced firewall, because the
point is to be able to leave it running — see
[Security: defense in depth](#security-defense-in-depth).

> Built in C#/.NET 10. Managed repos can be any stack — Python, Node, Go, Rust,
> C#, or your own — through config-driven auditors.

## Want a front end? Use Agnes

CodeyBox is an **orchestrator**, not an application. It exposes a REST API, a
SignalR…
