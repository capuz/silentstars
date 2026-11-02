---
repo: "veildawn/ai-proxy-releases"
name: "ai-proxy-releases"
description: "Packaged release artifacts for ai-proxy-service (source: veildawn/ai-proxy-service)"
readmeQualityOk: true
url: "https://github.com/veildawn/ai-proxy-releases"
language: "Ruby"
languages: ["Ruby"]
languagePcts: [100]
stars: 11
forks: 4
openIssues: 3
closedIssues: 2
watchers: 0
contributors: 9
recentReleases: 0
createdAt: "2026-07-16T06:13:01Z"
lastCommitAt: "2026-11-02T11:36:43Z"
lastReleaseAt: "2026-07-18T21:08:43Z"
status: "thriving"
tags: []
healthScore: 87
undervaluedScore: 46
maintainers: ["weniatall", "veildawn", "devin-ai-integration[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/467b2985e6c594ed702a77a89c5a08ff6c1fe4ac5058e2b21e57449f8cf4ee3d/veildawn/ai-proxy-releases"
---

# AI Proxy Service

English | [简体中文](https://github.com/veildawn/ai-proxy-releases/blob/HEAD/README.zh.md)

Got Claude, Codex, Kiro, Kimi, Cursor, or xAI subscriptions (or API keys) and want the whole team on them? Drop the accounts into a pool, share one endpoint, and see who used what, what it cost, and which account is down — from one admin panel.

One binary, one port.

## What you get

**Clients**

- Point your usual AI clients at one address and you're in.
- Streaming, tool calls, images, and thinking/reasoning come through. If something can't be translated, you get an error — nothing is silently dropped.
- Codex, Claude, xAI, Kiro, Kimi, Cursor — sign in via the browser, or paste a token. Other compatible upstreams (DeepSeek, Zhipu, local models, …) can be added in the admin UI.
- Route models by name or prefix, and rewrite to whatever the upstream actually expects.

**Account pool**

- Accounts take turns; the same conversation sticks to the same account when it can.
- If one account fails, another picks up — the whole pool doesn't die with one bad key.
- Cap concurrency per account so you don't burn upstream rate limits.
- Each account can use its own outbound proxy.
-…
