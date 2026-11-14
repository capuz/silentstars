---
repo: "LinuxDevil/lousho"
name: "lousho"
description: "TypeScript AI agent SDK: offline CI evals, durable runs, human approvals, MCP. Runs in your own Node process."
readmeQualityOk: true
url: "https://github.com/LinuxDevil/lousho"
homepage: "https://lousho.com"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [98]
topics: ["ai-agents", "sdk", "agents", "ai-agent", "cli", "llm", "mcp", "model-context-protocol", "nodejs", "openai"]
stars: 9
forks: 0
openIssues: 0
closedIssues: 92
watchers: 0
contributors: 3
recentReleases: 10
createdAt: "2025-10-05T12:56:46Z"
lastCommitAt: "2026-11-14T10:42:12Z"
lastReleaseAt: "2026-11-07T13:35:08Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 100
undervaluedScore: 86
maintainers: ["LinuxDevil"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1070187580/fa25f27f-8269-483f-b91c-095c29c4dbcc"
discussionCount: 0
---

# Lousho — TypeScript AI agent SDK

TypeScript AI agents you can test in CI, pause for approval, and resume after a crash. Runs in your own Node process.

## Why Lousho

- **Test agents in CI without an API key.** `lousho eval` records a real run once, replays it with no network, and reports when the tool-call trajectory drifts. [Evals](https://lousho.com/evals)
- **Resume after a crash.** Give the agent a store and `agent.resume()` finishes an interrupted run. Tool calls that already have a result do not run again. [Durable execution](https://lousho.com/durable-execution)
- **Pause for a human.** A tool marked `needsApproval` pauses the run. Another request, or with a durable store another process, can approve it later, and the run continues where it stopped. [Approvals](https://lousho.com/approvals)
- **Runs in your own Node process.** There is no hosted runtime. `lousho build` targets a Node server, Docker or Cloudflare Workers, and `lousho studio` runs on your machine. [Deployment](https://lousho.com/deployment)
- **Works with the Vercel AI SDK.** `fromAiSdk()` and `fromAiSdkTools()` wrap AI SDK models and tools, so you can move over one piece at a time. [Migrating from the AI…
