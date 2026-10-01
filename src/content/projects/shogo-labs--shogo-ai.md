---
repo: "shogo-labs/shogo-ai"
name: "shogo-ai"
description: "Open-source platform for building and running AI agents. TypeScript monorepo. SDK and client libraries MIT-licensed; server components AGPL-3.0."
readmeQualityOk: true
url: "https://github.com/shogo-labs/shogo-ai"
homepage: "https://shogo.ai"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [92]
topics: ["agent-runtime", "agentic-ai", "ai-agent-framework", "ai-agents", "expo", "hono", "internal-tools", "llm", "low-code", "open-source"]
stars: 15
forks: 13
openIssues: 28
closedIssues: 177
watchers: 0
contributors: 17
recentReleases: 0
createdAt: "2025-12-02T21:32:58Z"
lastCommitAt: "2026-10-01T10:20:15Z"
lastReleaseAt: "2026-04-08T06:17:21Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "fork_magnet"]
healthScore: 96
undervaluedScore: 73
maintainers: ["lacvapps", "ashutoshojha-odin", "Adhi15"]
openGraphImageUrl: "https://opengraph.githubassets.com/e75aec9763368c585e85cc926eac2884024ff5478e256df3fb0620b5bd69c624/shogo-labs/shogo-ai"
discussionCount: 0
---

# [Shogo AI](https://shogo.ai)

Shogo is an open-source platform for building AI agents that do real work:
reading from your systems, taking actions, and running workflows end to
end. TypeScript throughout. Self-host it or use Shogo Cloud.

**[Website](https://shogo.ai)** &middot; **[Launch Studio](https://studio.shogo.ai)** &middot; **[Documentation](https://shogo.ai/docs)**

Shogo combines a Hono API, Expo-based clients, agent runtimes, project
runtimes, and a developer SDK into one platform for building and operating
agentic products.

**License:** the SDK and client libraries you actually integrate
(`@shogo-ai/*`, plus the mobile/desktop clients) are MIT. The server
components behind Shogo Cloud (`apps/api/`, `packages/agent-runtime/`,
`packages/shared-runtime/`) are AGPL-3.0-or-later — a moat against hosted
resellers, not a restriction on your own use, modification, or
self-hosting. Full breakdown in [Open Source Model](#open-source-model)
below and [docs/LICENSING.md](https://github.com/shogo-labs/shogo-ai/blob/HEAD/docs/LICENSING.md).

There's no one-command quickstart yet. Running Shogo locally means
cloning the repo, installing with Bun, starting Postgres/Redis/MinIO in…
