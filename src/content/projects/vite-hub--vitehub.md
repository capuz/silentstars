---
repo: "vite-hub/vitehub"
name: "vitehub"
description: "Agents for any host, composed with server primitives through one Vite plugin."
readmeQualityOk: true
url: "https://github.com/vite-hub/vitehub"
homepage: "https://vitehub.dev"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [96]
topics: ["agent-framework", "agent-harness", "ai-agents", "ai-sdk", "background-jobs", "cloudflare-workers", "cron", "mcp", "netlify", "nitro"]
stars: 30
forks: 5
openIssues: 3
closedIssues: 62
watchers: 0
contributors: 5
recentReleases: 2
createdAt: "2026-04-12T08:35:50Z"
lastCommitAt: "2026-11-10T11:38:01Z"
lastReleaseAt: "2026-11-01T07:33:43Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 98
undervaluedScore: 52
maintainers: ["onmax"]
openGraphImageUrl: "https://opengraph.githubassets.com/6de869c01c90ff502bdb8bc7c4162ae14764fc90e5bf9da2836933133b833001/vite-hub/vitehub"
---

The server layer for Vite apps. Databases, storage, queues, workflows, and more.<br>
  Use one API in your app and deploy it to your choice of cloud.

  ·
  ·

## Server Primitives

Use each primitive alone, or use them together in one app.

## Write once, deploy anywhere

```ts
// server/api/settings.get.ts
import { defineEventHandler } from "h3";
import { kv } from "vite-hub/kv";

export default defineEventHandler(async () => {
  const [error, settings] = await kv.get("settings");
  if (error) throw error;
  return settings;
});
```

This route does not change between hosts. The host selects the provider:

| Host       | KV                   | Blob                  | Database          |
| ---------- | -------------------- | --------------------- | ----------------- |
| Cloudflare | Workers KV           | R2                    | D1                |
| Vercel     | Upstash Redis        | Vercel Blob           | libSQL or D1 HTTP |
| Netlify    | Upstash Redis        | Netlify Blobs         | libSQL            |
| Deno       | Deno KV              | S3-compatible         | libSQL            |
| Node       | `fs-lite` or Upstash | `fs` or S3-compatible | SQLite or libSQL  |

Support…
