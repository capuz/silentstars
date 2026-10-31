---
repo: "protoLabsAI/protoAgent"
name: "protoAgent"
description: "Local-first agent that drives Claude Code and Codex over ACP. Desktop app, git-URL plugins, A2A 1.0. MIT."
readmeQualityOk: true
url: "https://github.com/protoLabsAI/protoAgent"
homepage: "https://agent.protolabs.studio"
language: "Python"
languages: ["Python", "TypeScript"]
languagePcts: [70, 26]
topics: ["a2a", "agent-framework", "agent2agent", "ai-agent", "ai-agents", "autonomous-agents", "langgraph", "llm-agent", "mcp", "multi-agent-systems"]
stars: 16
forks: 10
openIssues: 21
closedIssues: 1177
watchers: 1
contributors: 5
recentReleases: 0
createdAt: "2026-04-17T16:45:59Z"
lastCommitAt: "2026-10-30T23:27:22Z"
lastReleaseAt: "2026-05-27T09:09:20Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "fork_magnet"]
healthScore: 99
undervaluedScore: 59
maintainers: ["mabry1985", "dependabot[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1213686959/26f00f2d-a32d-4e23-94a1-c235b8b2ac37"
discussionCount: 0
postedAt: "2026-07-25T06:06:56.645Z"
---

A private, plugin-extensible desktop agent. It plans and remembers, and it gives the coding
  to the CLI agents you already use, over the Agent Client Protocol. Your chats, memory and
  tasks stay in SQLite on your disk. No analytics, tracking or telemetry — <a href="./docs/explanation/network-egress.md">what it does call out to</a>.

## Get it running

**What you need:** a Claude Pro/Max or ChatGPT Plus/Pro plan, an API key
(OpenAI, OpenRouter, …), or a local model (Ollama / LM Studio).
Or nothing, to just explore.

**[Download the desktop app](https://agent.protolabs.studio/download)** for macOS,
Windows, or Linux.

On first run, click **Next** on the welcome screen, connect and test a model (or
choose **Explore without a model**), choose **Basic** and name your agent, then
review your choices and click **Finish**.
The [first-agent tutorial](https://github.com/protoLabsAI/protoAgent/blob/HEAD/docs/tutorials/first-agent.md) covers installation,
connection testing, and your first chat.

macOS builds are **Apple Silicon only**. Windows and Linux builds are unsigned;
expect an OS warning on first launch.

### Run the Python package

With [uv](https://docs.astral.sh/uv/) installed,…
