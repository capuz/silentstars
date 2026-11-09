---
repo: "silkweave/silkweave"
name: "silkweave"
description: "Silkweave Monorepo"
readmeQualityOk: true
url: "https://github.com/silkweave/silkweave"
homepage: "https://www.silkweave.dev"
language: "TypeScript"
languages: ["TypeScript", "Astro"]
languagePcts: [73, 26]
topics: ["api", "cli", "mcp", "server"]
stars: 18
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-04-08T01:29:35Z"
lastCommitAt: "2026-11-09T11:50:45Z"
lastReleaseAt: "2026-06-18T00:56:53Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 86
undervaluedScore: 38
maintainers: ["tobiasstrebitzer"]
openGraphImageUrl: "https://opengraph.githubassets.com/fc3f63c77e149798434d939e58ff26e90c440cf753efb3525dba7eed79ddec53/silkweave/silkweave"
---

# Silkweave

**Write your logic once. Run it everywhere.**

Silkweave is a TypeScript toolkit that lets you define application logic as portable **Actions** and instantly expose them through any combination of transports - MCP servers (stdio, HTTP, and serverless), end-to-end-typed tRPC, REST APIs with auto-generated OpenAPI docs, and fully-featured CLIs. It also meets your framework where it is: expose existing **NestJS** controllers as MCP tools, project one action set onto **Next.js** App Router route handlers, or stream to the **Vercel AI SDK**'s `useChat`. No glue code required.

```
                  ┌───────────────────────────────────┐
                  │              ACTIONS              │
                  │  name + zod schema + async run()  │
                  └─────────────────┬─────────────────┘
                                    │
 ADAPTER  ┌────────────────┬────────┼────────┬────────────────┐
          │                │        │        │                │
  ┌───────▼──────┐ ┌───────▼──────┐ │ ┌──────▼───────┐ ┌──────▼───────┐
  │ MCP          │ │ API          │ │ │ CLI          │ │ EDGE         │
  │ Http/Stdio   │ │ tRPC/Fastify │ │ │ Commander    │ │ Serverless…
