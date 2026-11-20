---
repo: "hookdeck/webhook-skills"
name: "webhook-skills"
description: "Webhook integration skills for AI coding agents (Claude Code, Cursor, Copilot). Step-by-step guidance for setting up webhook receivers, signature verification, and event handling for Stripe, Shopify, GitHub, and more. Built on the Agent Skills specification."
readmeQualityOk: true
url: "https://github.com/hookdeck/webhook-skills"
language: "JavaScript"
languages: ["JavaScript", "TypeScript", "Python"]
languagePcts: [34, 34, 32]
topics: ["agent-skills", "ai-coding", "api-integrations", "event-driven", "github-webhooks", "llm-tools", "shopify-webhooks", "stripe-webhooks", "webhook-security", "webhook-signatures"]
stars: 102
forks: 17
openIssues: 7
closedIssues: 2
watchers: 3
contributors: 8
recentReleases: 0
createdAt: "2026-01-30T17:58:03Z"
lastCommitAt: "2026-11-20T12:21:42Z"
status: "thriving"
tags: []
healthScore: 83
undervaluedScore: 33
maintainers: ["garethx", "leggetter", "hookdeck-ci[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/82eb7886c72bf8401cdc1777f609f1726e0e9b7e9179a2140de1b6ed29349137/hookdeck/webhook-skills"
---

# Webhook Skills

This repository contains webhook-related skills for AI coding agents that need to **receive, verify signatures, handle events, retry deliveries, or debug webhook integrations** from various providers ([see Provider Webhook Skills table below](#provider-webhook-skills)).

Skills provide step-by-step instructions, signature verification code, and runnable examples for Express, Next.js, and FastAPI.

Works with [Claude Code](https://claude.ai/code), [Cursor](https://cursor.com), [VS Code Copilot](https://github.com/features/copilot), and other AI coding assistants that support the [Agent Skills specification](https://agentskills.io).

## When Should an Agent Use These Skills?

Use these webhook skills when:

- You need to **receive webhooks** from third-party providers (Stripe, Shopify, GitHub, etc.)
- You need to **verify webhook signatures** to ensure authenticity
- You need to **handle webhook event payloads** and extract data
- You need to **implement idempotency** for webhook handlers
- You need to **retry or replay** failed webhook deliveries
- You need **provider-specific webhook handling logic** (e.g., Stripe checkout events, GitHub push events)
