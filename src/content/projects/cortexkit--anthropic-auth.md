---
repo: "cortexkit/anthropic-auth"
name: "anthropic-auth"
description: "Anthropic auth, quota, cache, and relay support for OpenCode and Pi"
readmeQualityOk: true
url: "https://github.com/cortexkit/anthropic-auth"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [99]
stars: 50
forks: 23
openIssues: 4
closedIssues: 86
watchers: 1
contributors: 9
recentReleases: 0
createdAt: "2026-05-06T14:47:51Z"
lastCommitAt: "2026-10-30T10:58:38Z"
lastReleaseAt: "2026-05-27T04:28:37Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 99
undervaluedScore: 41
maintainers: ["ualtinok"]
openGraphImageUrl: "https://opengraph.githubassets.com/8eb9a7e6e65c12d581859f6842e76f43b514d50ee394cadcc2d275c111ecacc9/cortexkit/anthropic-auth"
---

# CortexKit Anthropic Auth for OpenCode and Pi

Use Claude Pro/Max subscriptions in [OpenCode](https://opencode.ai) 1 and 2 with `@cortexkit/opencode-anthropic-auth`, or in [Pi](https://pi.dev) with `@cortexkit/pi-anthropic-auth`. Both integrations use the shared `@cortexkit/anthropic-auth-core` package.

## Why use it

- Multiple Claude accounts with ordered fallbacks, quota-aware routing and per-session account affinity.
- Prompt-cache controls and optional cache keepalive for active sessions.
- Optional Claustrum integration: Claustrum is a local credential-vault service that supplies Claude accounts instead of each application's local account pool.
- An optional user-owned Cloudflare relay to reduce repeated request uploads.

## Disclaimer

This project is not affiliated with or endorsed by Anthropic. Using Claude subscriptions outside Anthropic's official clients may violate Anthropic's terms and can lead to account restrictions or suspension. Use it at your own risk.

## Install

```bash
npx @cortexkit/opencode-anthropic-auth setup
```

After setup:

OpenCode 1: open `/claude` → **Accounts** to sign in.

OpenCode 2: connect Anthropic with **Claude Pro / Max (native account…
