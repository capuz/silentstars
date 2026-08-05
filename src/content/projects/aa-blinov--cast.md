---
repo: "aa-blinov/cast"
name: "cast"
description: "Minimal terminal coding agent with OpenAI-compatible routing. Works with any provider — OpenRouter, Ollama, vLLM, LiteLLM, or your own."
readmeQualityOk: true
url: "https://github.com/aa-blinov/cast"
homepage: "https://aa-blinov.github.io/cast/"
language: "TypeScript"
languages: ["TypeScript", "HTML"]
languagePcts: [64, 21]
topics: ["cli", "coding-agent", "ink", "llm", "mcp", "openai", "openrouter", "terminal", "typescript"]
stars: 5
forks: 1
openIssues: 7
closedIssues: 0
watchers: 0
contributors: 3
recentReleases: 10
createdAt: "2026-07-01T15:14:12Z"
lastCommitAt: "2026-08-05T06:07:11Z"
lastReleaseAt: "2026-07-06T07:42:44Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 70
undervaluedScore: 54
maintainers: ["aa-blinov"]
openGraphImageUrl: "https://opengraph.githubassets.com/10a9db156966b03a197dbe06a351ece2ee14b9b589f2378561a1f2041d64f7ad/aa-blinov/cast"
discussionCount: 1
---

# cast

A role-based terminal agent harness. 20 built-in personas — senior dev, QA, DBA, security reviewer, PM, tech writer, and more — same tools, different judgment. Runs on any OpenAI-compatible model, including the one on your own hardware.

## Why cast?

**A cast, not a coder.** 20 built-in personas swap the agent's role without changing its tools. Senior dev for root-cause fixes, QA for edge cases, DBA for schema design, PM for specs, appsec for threat modeling — same tools, different judgment. Add your own with a single markdown file.

**Real tools, real work.** It reads files, writes code, runs shell commands, searches your codebase — and does it all in parallel. Delegates sub-tasks to isolated sub-agents. Rules, skills, and MCP servers extend capabilities without touching the codebase.

**Runs where your code runs.** vLLM, Ollama, your own inference server, or any OpenAI-compatible API. No account, no telemetry, no cloud dependency.

**Ink TUI.** A proper terminal interface with multiline paste, image attachments, smooth animations.
**Web UI.** `cast web` launches a browser-based control room — background agents, token-by-token streaming, diff viewer, and chat commands…
