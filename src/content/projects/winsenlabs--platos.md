---
repo: "winsenlabs/platos"
name: "platos"
description: "Platos is the only runtime infrastructure you will need to deploy, monitor and manage agents in production!"
readmeQualityOk: true
url: "https://github.com/winsenlabs/platos"
homepage: "https://platos.dev"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [97]
topics: ["agent", "open-source", "runtime", "vercel-ai-sdk"]
stars: 22
forks: 2
openIssues: 1
closedIssues: 4
watchers: 0
contributors: 3
recentReleases: 1
createdAt: "2026-05-02T08:39:58Z"
lastCommitAt: "2026-07-31T05:38:41Z"
lastReleaseAt: "2026-07-09T18:20:58Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 96
undervaluedScore: 47
maintainers: ["fanpitapp", "tejassudsfp"]
openGraphImageUrl: "https://opengraph.githubassets.com/7ff01bbf70db2c450e031f2f4c42209abe4aea4302236424bea3237ac906bd76/winsenlabs/platos"
---

# Platos

**The open-source agent runtime.**

Build, ship, and operate AI agents on infrastructure you own.
Apache 2.0. Self-hostable in one `docker compose up`.

[Docs](https://platos.dev/docs) ·
[Guides](https://platos.dev/guides) ·
[Quickstart](https://platos.dev/guides/quickstart) ·
[Roadmap](https://platos.dev/roadmap) ·
[Discord](https://discord.gg/7zxegt73zr)

</div>

---

## What is Platos?

Platos is a complete agent runtime — the open-source replacement for hosted services like Claude Managed Agents and OpenAI Assistants.

It bundles everything an agent needs to live in production:

- **Streaming chat runtime** with prompt caching, tool-calling, structured outputs, sub-agents, and multi-turn compaction.
- **Durable execution layer** built on top of [trigger.dev](https://trigger.dev) — every long-running tool call, scheduled job, or batch operation is a resumable run with retries, queues, and traces.
- **Universal MCP gateway** that federates four tool families (entity-pushed, native, skills, control plane) behind a single endpoint with OAuth scoping and per-tool ACL.
- **Memory + skills + observability** wired together at the runtime layer — vector store, knowledge…
