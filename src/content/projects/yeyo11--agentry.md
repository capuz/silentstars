---
repo: "yeyo11/agentry"
name: "agentry"
description: "Run Claude Code as a service: REST API, web UI and multi-agent orchestration in one container"
readmeQualityOk: true
url: "https://github.com/yeyo11/agentry"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [87]
topics: ["agent-orchestration", "ai-agents", "claude", "claude-code", "docker", "fastify", "llm", "rest-api", "self-hosted", "typescript"]
stars: 6
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 10
createdAt: "2026-09-18T20:00:26Z"
lastCommitAt: "2026-09-24T08:40:50Z"
lastReleaseAt: "2026-09-19T08:29:26Z"
status: "newborn"
tags: ["hidden_gem", "funded", "release_machine"]
healthScore: 90
undervaluedScore: 54
maintainers: ["yeyo11", "agentry-release-bot[bot]", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/2ed952ffce37b6618547b95679ffcd613a3b7739bd5bfacd4ce88625a0752633/yeyo11/agentry"
fundingLinks: ["BUY_ME_A_COFFEE:https://buymeacoffee.com/yeyo11"]
discussionCount: 0
---

# Agentry

**Run Claude Code as a service.**

A REST API, a web UI and multi-agent orchestration around the Claude Code CLI, in one container.

</div>

Claude Code lives in your terminal. One machine, one session at a time, and nothing to look at
once you close the tab.

Agentry puts it behind a REST API and a web UI: start and watch conversations from anywhere, run a
graph of agents in parallel, browse every transcript the CLI has ever written, and rotate between
accounts when one runs out of quota — without giving up a single thing the CLI can do, because
Agentry drives it through the CLI and nothing else.

```bash
docker run -p 127.0.0.1:8787:8787 -v agentry-data:/data ghcr.io/yeyo11/agentry
```

### What you get

- **Every conversation, from anywhere** — start a chat from the UI or the API, stream the tokens,
  answer follow-up turns, and pick up any session the CLI has ever written on that machine.
- **Answer what Claude asks, as it asks** — a headless chat has nobody to ask, so it is normally
  denied anything that needs permission. Agentry speaks the CLI's control protocol
  (`--permission-prompt-tool stdio`) and routes every prompt to the panel: tool calls with the exact…
