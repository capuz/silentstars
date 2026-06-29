---
repo: "zzispp/Hook"
name: "Hook"
description: "AI API gateway and operations platform for unified model routing, token/RBAC access control, billing, provider management, and monitoring."
url: "https://github.com/zzispp/Hook"
homepage: "https://zzispp.github.io/Hook"
language: "Rust"
languages: ["Rust", "TypeScript"]
languagePcts: [61, 33]
topics: ["ai", "gateway", "llm"]
stars: 18
forks: 2
openIssues: 1
closedIssues: 1
watchers: 0
contributors: 1
recentReleases: 3
createdAt: "2026-05-07T01:06:36Z"
lastCommitAt: "2026-06-29T07:23:20Z"
lastReleaseAt: "2026-06-07T12:23:59Z"
status: "newborn"
tags: ["hidden_gem"]
healthScore: 89
undervaluedScore: 50
maintainers: ["zzispp"]
openGraphImageUrl: "https://opengraph.githubassets.com/6ca095f6ee73a847c93e7f9ded7221f8e825c97e6dc7415dc04cff64834ab124/zzispp/Hook"
---

# Hook

</p>

  <strong>AI API Gateway and Operations Platform</strong>
</p>

  English • <a href="README_CN.md">中文</a>
</p>

---

## Overview

Hook is a Rust and pnpm monorepo for an AI API gateway, user console, and operations admin panel. The backend uses Axum, SeaORM, Redis, and PostgreSQL for proxying, authentication, scheduling, billing, monitoring, and admin APIs. The frontend uses Next.js, React, MUI, and TypeScript.

Users call Hook with Hook-issued tokens through `/v1` or `/v1beta`. Hook routes requests by model, provider, group, wallet balance, and permission policy, then records usage, billing, and runtime status.

## Features

- **Unified AI proxy**: OpenAI-style `/v1` and Gemini-style `/v1beta` routes for chat, Responses, Claude Messages, images, embeddings, rerank, audio, moderations, and Realtime.
- **Provider and model management**: Global models, providers, endpoints, upstream API keys, model bindings, model costs, cooldown release, and model connectivity tests.
- **Tokens and permissions**: User tokens, admin tokens, RBAC roles, menus, API permissions, navigation permissions, and system token policy.
- **Wallet and billing**: User wallets, balances,…
