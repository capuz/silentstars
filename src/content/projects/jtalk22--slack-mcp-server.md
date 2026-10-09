---
repo: "jtalk22/slack-mcp-server"
name: "slack-mcp-server"
description: "Put your agent inside your Slack. Zero bots, zero admin queues, no Business+ upgrade — 20+ tools for stealth search, thread parsing and mention tracking. Every message attributed. Your session never leaves your Mac."
readmeQualityOk: true
url: "https://github.com/jtalk22/slack-mcp-server"
homepage: "https://mcp.revasserlabs.com"
language: "JavaScript"
languages: ["JavaScript", "Go Template"]
languagePcts: [76, 22]
topics: ["ai-agents", "claude", "cursor", "mcp", "mcp-server", "model-context-protocol", "slack", "slack-api", "claude-code", "local-first"]
stars: 31
forks: 25
openIssues: 0
closedIssues: 12
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2026-01-03T19:19:56Z"
lastCommitAt: "2026-10-09T10:51:19Z"
lastReleaseAt: "2026-01-09T00:36:28Z"
status: "thriving"
tags: ["hidden_gem", "funded", "fork_magnet"]
healthScore: 97
undervaluedScore: 62
maintainers: ["jtalk22", "dependabot[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1127385442/3b5fed6a-974a-45c1-9258-5e6e298a47cd"
fundingLinks: ["GITHUB:https://github.com/jtalk22", "KO_FI:https://ko-fi.com/jtalk22", "BUY_ME_A_COFFEE:https://buymeacoffee.com/jtalk22"]
discussionCount: 3
---

**Set it up, then register it with your client.**

```sh
npx -y @jtalk22/slack-mcp --setup
```

```sh
claude mcp add slack -- npx -y @jtalk22/slack-mcp
```

Check where your credentials are stored and how old they are, or run it read-only so your agent can read Slack but never post.

```sh
npx -y @jtalk22/slack-mcp --doctor --security
```

```sh
npx -y @jtalk22/slack-mcp --read-only
```

On **Enterprise Grid**, Slack can end a session it sees being automated. Use [Slack's official MCP server](https://docs.slack.dev/ai/slack-mcp-server/) there.

---

## If your workspace is on Slack's free plan

Checked against Slack's published plans and pricing on 2026-10-07.

A free workspace keeps 90 days of message history, allows 10 app integrations, and gets only Slack's basic AI. The AI people actually want — AI search across the workspace, channel recaps, Slackbot acting as an agent, AI workflow generation — starts on Business+ at $15 per user per month on annual billing ($18 month to month). Pro, at $7.25, buys unlimited history and unlimited apps, not the advanced AI. So a ten-person free workspace that wants an AI it can ask about its own Slack is looking at $1,800 a year, and the…
