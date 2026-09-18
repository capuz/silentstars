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
stars: 10
forks: 1
openIssues: 8
closedIssues: 77
watchers: 1
contributors: 6
recentReleases: 10
createdAt: "2026-04-18T18:39:49Z"
lastCommitAt: "2026-09-18T08:25:50Z"
lastReleaseAt: "2026-08-14T16:43:57Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "release_machine"]
healthScore: 98
undervaluedScore: 61
maintainers: ["Phicks-debug"]
openGraphImageUrl: "https://opengraph.githubassets.com/0f1bd7c37a3bd1f392b5768f977a97f144c4325d9dd5dc0bfbcdd4db6a7fd49d/beeblastco/broods"
---

# broods

A serverless, multi-account AI agent harness built on Bun and AWS data-plane services. Configure agents, connect them to Telegram, Discord, Slack, Matrix, GitHub, and more, and run them with your own model keys.

This is the open-source engine behind [Broods](https://github.com/beeblastco). The whole stack is self-hostable, so the data, the AWS account, and the API keys stay yours.

> [!WARNING]
> **Pre-release.**
>
> Broods has not cut a 1.0 release. The HTTP API, the CLI flags and the SDK all
> still change between versions, and an upgrade can break your code without a
> major version bump. Pin an exact version and read the release notes before
> upgrading.

---

## What it is

- **Container agent runtime.** One Bun container handles account management, streaming agent execution, webhooks, async work, and cron runs behind the gateway.
- **Multi-tenant.** Each account has its own encrypted config, hashed API secret, and isolated data.
- **Bring your own model.** Google, OpenAI, AWS Bedrock, Vercel AI Gateway, or custom providers via the Vercel AI SDK.
- **Multi-channel.** Telegram, Discord, Slack, Matrix, GitHub, Facebook Messenger (Pancake), and Zalo are built in.
-…
