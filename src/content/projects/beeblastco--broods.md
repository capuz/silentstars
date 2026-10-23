---
repo: "beeblastco/broods"
name: "broods"
description: "Serverless agent orchestrator"
readmeQualityOk: true
url: "https://github.com/beeblastco/broods"
homepage: "https://dashboard.broods.app"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [98]
topics: ["agentic-ai", "aws", "aws-lambda", "sst", "vercel-ai-sdk"]
stars: 11
forks: 1
openIssues: 12
closedIssues: 275
watchers: 1
contributors: 6
recentReleases: 10
createdAt: "2026-04-18T18:39:49Z"
lastCommitAt: "2026-10-23T12:04:03Z"
lastReleaseAt: "2026-08-14T16:43:57Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "release_machine"]
healthScore: 99
undervaluedScore: 61
maintainers: ["Phicks-debug", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/9c4b653037d7d29043f3702f67335dbc18fb1d1c678b705667aee9676596752c/beeblastco/broods"
---

# broods

Broods runs agents in a Bun container behind a gateway, with Convex for configuration and persistence. Connect agents to Telegram, Discord, Slack, Matrix, GitHub, and other channels, and run them with your own model keys.

This is the source-available engine behind [Broods](https://github.com/beeblastco). The whole stack is self-hostable, so the data, the AWS account, and the API keys stay yours.

> [!WARNING]
> **Pre-release.**
>
> Broods has not cut a 1.0 release. The HTTP API, CLI flags and SDK can change without a major version bump. Pin an exact version and read the release notes before upgrading.

---

## What it is

- **Container agent runtime.** One Bun container handles account management, streaming agent execution, webhooks, async work, and cron runs behind the gateway.
- **Multi-tenant.** Each account has its own encrypted config, hashed API secret, and isolated data.
- **Bring your own model.** Google, OpenAI, AWS Bedrock, Vercel AI Gateway, or custom providers via the Vercel AI SDK.
- **Multi-channel.** Telegram, Discord, Slack, Matrix, GitHub, Linear, Pancake, Zalo, WhatsApp, Microsoft Teams, Google Chat, Twilio SMS, Facebook Messenger and Instagram DMs are…
