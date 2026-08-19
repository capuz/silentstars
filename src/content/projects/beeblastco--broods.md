---
repo: "beeblastco/broods"
name: "broods"
description: "Serverless agent orchestrator"
readmeQualityOk: true
url: "https://github.com/beeblastco/broods"
homepage: "https://beeblast.co"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [97]
topics: ["agentic-ai", "aws", "aws-lambda", "sst", "vercel-ai-sdk"]
stars: 9
forks: 1
openIssues: 16
closedIssues: 50
watchers: 0
contributors: 6
recentReleases: 10
createdAt: "2026-04-18T18:39:49Z"
lastCommitAt: "2026-08-19T04:09:52Z"
lastReleaseAt: "2026-08-14T16:43:57Z"
status: "thriving"
tags: ["needs_contributors", "release_machine"]
healthScore: 94
undervaluedScore: 61
maintainers: ["Phicks-debug", "github-actions[bot]", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/dde0c229609ae0f7e67f9113e7e6bb713059644a52d78319c966de16458a18fa/beeblastco/broods"
---

# broods

A serverless, multi-account AI agent harness built on Bun and AWS data-plane services. Configure agents, connect them to Telegram, Discord, Slack, GitHub, and more, and run them with your own model keys.

This is the open-source engine behind [Broods](https://github.com/beeblastco). The entire stack is self-hostable — you own your data, your AWS account, and your API keys.

---

## What It Is

- **Container agent runtime** — One Bun container handles account management, streaming agent execution, webhooks, async work, and cron runs behind the gateway.
- **Multi-tenant** — Each account has its own encrypted config, hashed API secret, and isolated data.
- **Bring your own model** — Google, OpenAI, AWS Bedrock, Vercel AI Gateway, or custom providers via the Vercel AI SDK.
- **Multi-channel** — Telegram, Discord, Slack, GitHub, Facebook Messenger (Pancake), and Zalo webhooks are built in.
- **Extensible** — Skills, subagents, workspaces, sandboxes, cron jobs, async tools, and custom uploaded tools.

---

## Quick Start

The fastest way to get running is the managed service via the Broods CLI and SDK:

```bash
# 1. Install the CLI (Bun 1.2+ or Node 22.15+)
bun add -g broods…
