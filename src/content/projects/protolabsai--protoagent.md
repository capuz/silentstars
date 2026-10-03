---
repo: "protoLabsAI/protoAgent"
name: "protoAgent"
description: "Local-first agent that drives Claude Code and Codex over ACP. Desktop app, git-URL plugins, A2A 1.0. MIT."
readmeQualityOk: true
url: "https://github.com/protoLabsAI/protoAgent"
homepage: "https://agent.protolabs.studio"
language: "Python"
languages: ["Python", "TypeScript"]
languagePcts: [71, 25]
topics: ["a2a", "agent-framework", "agent2agent", "ai-agent", "ai-agents", "autonomous-agents", "langgraph", "llm-agent", "mcp", "multi-agent-systems"]
stars: 10
forks: 8
openIssues: 6
closedIssues: 1011
watchers: 0
contributors: 5
recentReleases: 0
createdAt: "2026-04-17T16:45:59Z"
lastCommitAt: "2026-10-03T08:00:04Z"
lastReleaseAt: "2026-05-27T09:09:20Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "fork_magnet"]
healthScore: 100
undervaluedScore: 66
maintainers: ["mabry1985", "dependabot[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1213686959/26f00f2d-a32d-4e23-94a1-c235b8b2ac37"
discussionCount: 0
postedAt: "2026-07-25T06:06:56.645Z"
---

</p>

<h3 align="center">Your local agent, handing real coding work to Claude Code and Codex.</h3>

  A private, plugin-extensible desktop agent. It plans and remembers, and it gives the coding
  to the CLI agents you already use, over the Agent Client Protocol. Your chats, memory and
  tasks stay in SQLite on your disk. No analytics, tracking or telemetry — <a href="./docs/explanation/network-egress.md">what it does call out to</a>.
</p>

</p>

## Get it running

**Desktop app (beta)** — [download for macOS, Windows or Linux](https://agent.protolabs.studio/download).
About 100 MB installed with the server bundled; no Python, Node or other runtime is downloaded at first launch. The macOS
build (Apple Silicon) is signed and notarized; the Windows and Linux builds are unsigned for now.

**One command** — with [uv](https://docs.astral.sh/uv/) installed:

```bash
uvx --from protolabs-agent protoagent serve
```

then open <http://localhost:7870>.

**From source:**

```bash
git clone https://github.com/protoLabsAI/protoAgent.git && cd protoAgent
uv sync && uv run python -m server
```

Whichever you pick, the setup wizard connects any OpenAI-compatible endpoint — a hosted
provider, a…
