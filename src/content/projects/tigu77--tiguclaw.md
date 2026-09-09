---
repo: "tigu77/tiguclaw"
name: "tiguclaw"
description: "Your always-on AI assistant — you state the goal, it assembles the managers and sub-agents it needs. Self-hosted multi-LLM agent runtime: Telegram/Web/CLI, skills, memory, MCP."
readmeQualityOk: true
url: "https://github.com/tigu77/tiguclaw"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [83]
topics: ["ai-agent", "claude", "llm", "mcp", "personal-assistant", "self-hosted", "telegram-bot", "typescript", "claude-code"]
stars: 6
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 10
createdAt: "2026-06-16T09:15:19Z"
lastCommitAt: "2026-09-09T08:17:26Z"
lastReleaseAt: "2026-07-01T09:44:46Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 80
undervaluedScore: 53
maintainers: ["tigu77"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1271033115/29d123e9-bbc1-454f-9296-29a36385b703"
discussionCount: 0
---

# tiguclaw

**English** · [한국어](https://github.com/tigu77/tiguclaw/blob/HEAD/README.ko.md)

**The more agents you add, the more you have to manage.**
tiguclaw is an always-on AI assistant built so that **you only ever talk to one of them**.
You state the goal; the assistant assembles whatever organization it needs. On your machine, with your keys and your bot.

</p>

**Want it running now → [Quick start](#quick-start)** (download, run `onboard` once, done).

## Demo

  <br><sub>The web dashboard — every step as it happens, with managers and sub-agents running in the right-hand panel.</sub>
</p>

## Why this exists

The better AI tools get, the more there is for a person to manage. You create agents, define roles,
decide who gets what, pick models, run them in parallel, re-run the failures, collect the results.
At that point the AI isn't doing your work — **you have become the manager of an AI organization.**

tiguclaw goes the other way. You talk to **one assistant** and state a goal. The organization is
assembled by the assistant, sized to the goal.

## Who owns what

```text
you ──goal──▶ main assistant ──┬──▶ manager ──┬──▶ sub-agent
                               │…
