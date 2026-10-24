---
repo: "vite-hub/vitehub"
name: "vitehub"
description: "Agents for any host, composed with server primitives through one Vite plugin."
readmeQualityOk: true
url: "https://github.com/vite-hub/vitehub"
homepage: "https://vitehub.dev"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [97]
stars: 25
forks: 2
openIssues: 3
closedIssues: 58
watchers: 0
contributors: 4
recentReleases: 2
createdAt: "2026-04-12T08:35:50Z"
lastCommitAt: "2026-10-24T08:21:31Z"
lastReleaseAt: "2026-09-04T07:33:36Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 99
undervaluedScore: 51
maintainers: ["onmax", "vitehub-bot[bot]", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/78616ecf962d0c542c9306b6f11191f3f4c485cbf2b3216db1ee935ed8de5937/vite-hub/vitehub"
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
