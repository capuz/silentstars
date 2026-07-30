---
repo: "kychee-com/run402"
name: "run402"
description: "MCP server for Run402 — AI-native Postgres + REST + auth + storage + static sites. Pay with x402 USDC on Base. No signups."
readmeQualityOk: true
url: "https://github.com/kychee-com/run402"
homepage: "https://run402.com"
language: "TypeScript"
languages: ["TypeScript", "JavaScript"]
languagePcts: [70, 29]
topics: ["ai-agent", "backend-as-a-service", "database", "mcp", "micropayments", "model-context-protocol", "openclaw", "postgres", "supabase-alternative", "x402"]
stars: 22
forks: 4
openIssues: 36
closedIssues: 429
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-03-05T12:51:02Z"
lastCommitAt: "2026-07-30T06:07:35Z"
lastReleaseAt: "2026-03-17T16:39:04Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 97
undervaluedScore: 48
maintainers: ["MajorTal", "github-actions[bot]", "claude"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/github-production-repository-image-32fea6/1173507078/e7c10bee-0d0c-4e9c-881b-59d267679345?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAVCODYLSA53PQK4ZA%2F20260730%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20260730T061030Z&X-Amz-Expires=300&X-Amz-Signature=18ab60368946e001195c1c820f35178254b6f10e2b717ba3d2852c8f76563216&X-Amz-SignedHeaders=host&jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoiaHR0cHM6Ly9yZXBvc2l0b3J5LWltYWdlcy5naXRodWJ1c2VyY29udGVudC5jb20vIiwia2V5Ijoia2V5MSIsImV4cCI6MTc4NTM5MjEzMCwibmJmIjoxNzg1MzkxODMwLCJwYXRoIjoicmVwb3NpdG9yeS1pbWFnZXMuZ2l0aHVidXNlcmNvbnRlbnQuY29tIn0.JHc8DBUT9JB-LIe6i4UwvWwGHdenLRJ1HCfpihwZGLY"
---

</p>

<h1 align="center">run402: Postgres, storage & deploys for AI agents</h1>

This is the backend Kychee's open products run on. We needed a layer an agent can drive end to end, with room for whatever each app turns out to need, and nothing off the shelf had all of it, so we built it and opened it the same way we open the apps: this repo holds the agent surfaces (MIT), [`run402-core`](https://github.com/kychee-com/run402-core) holds the full backend (Apache-2.0), and [kysigned](https://github.com/kychee-com/kysigned) is the first product running on it.

One call to [run402](https://run402.com) gives an agent a full Postgres database, REST API, user auth, content-addressed file storage, static site hosting, serverless functions, and image generation, paid with x402 USDC on Base (or Stripe credits). The prototype tier is free on testnet.

This monorepo ships every surface an agent can pick up:

| Surface | Use when… |
|---------|-----------|
| [`@run402/sdk`](https://github.com/kychee-com/run402/blob/HEAD/sdk/) | Calling run402 from TypeScript: typed kernel, isomorphic (Node 22 / Deno / Bun / V8 isolates) with a Node entry that auto-loads the local keystore + allowance + x402…
