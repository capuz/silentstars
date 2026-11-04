---
repo: "openclaw/clawrouter"
name: "clawrouter"
description: "ClawRouter API gateway and provider router for OpenClaw services"
readmeQualityOk: true
url: "https://github.com/openclaw/clawrouter"
language: "JavaScript"
languages: ["JavaScript", "TypeScript"]
languagePcts: [69, 30]
stars: 42
forks: 13
openIssues: 1
closedIssues: 13
watchers: 0
contributors: 25
recentReleases: 6
createdAt: "2026-06-05T01:57:58Z"
lastCommitAt: "2026-11-04T11:27:35Z"
lastReleaseAt: "2026-10-22T17:30:42Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded", "release_machine"]
healthScore: 97
undervaluedScore: 46
maintainers: ["vincentkoc", "roboclaw-bot"]
openGraphImageUrl: "https://opengraph.githubassets.com/872dd3579d464f8e68330097ecb1c62c23fc14d15e916920464b480f8e566417/openclaw/clawrouter"
fundingLinks: ["GITHUB:https://github.com/openclaw"]
---

# ClawRouter 🦞 — One key, many upstreams.

ClawRouter is a provider-neutral API gateway for OpenClaw deployments. It routes policy-scoped credentials across model and tool providers while enforcing access, revocation, budgets, request retention, and metered usage.

## Install

ClawRouter is distributed from source. Local development requires Node.js 24 or newer and the pnpm version declared in `package.json`.

```sh
git clone https://github.com/openclaw/clawrouter.git
cd clawrouter
corepack enable
pnpm install --frozen-lockfile
```

For a complete service without a Cloudflare account, use the [Docker self-hosting profile](https://github.com/openclaw/clawrouter/blob/HEAD/docs/self-hosting.md). It requires Docker with Compose and OpenSSL.

## Quick start

Run the local end-to-end Worker smoke:

```sh
pnpm worker:e2e
```

The smoke starts a local Worker and fixture upstream, exercises discovery, authentication, routing, budgets, failover, retention, usage, and admin paths, then removes its temporary state.

## Routing

Clients authenticate with one policy-scoped `clawrouter-` credential. The selected policy controls which providers and models are visible, how upstream grants are…
