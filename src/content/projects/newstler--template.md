---
repo: "newstler/template"
name: "template"
description: "Lightweight AI-Native Rails Template with all required SaaS features"
readmeQualityOk: true
url: "https://github.com/newstler/template"
language: "Ruby"
languages: ["Ruby", "HTML"]
languagePcts: [55, 36]
stars: 21
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2024-12-06T16:52:38Z"
lastCommitAt: "2026-11-03T11:14:38Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 89
undervaluedScore: 56
maintainers: ["dependabot[bot]", "newstler"]
openGraphImageUrl: "https://opengraph.githubassets.com/b554c71ed174e60698f879e465cf046377c65d1ef8f803c7e4fe10171211a523/newstler/template"
---

# AI-Native Rails Template

A modern Rails template for building AI-powered apps — with built-in chat, MCP tools, multi-provider LLM support, and agent-native architecture. Follows 37signals' vanilla Rails philosophy.

## Tech Stack

- **Ruby** 4.0.x / **Rails** (edge)
- **AI**: RubyLLM (OpenAI, Anthropic) with streaming chat
- **MCP**: Model Context Protocol server via fast-mcp
- **Database**: SQLite with Solid Stack (Cache, Queue, Cable)
- **Replication**: Litestream (SQLite → S3-compatible storage)
- **Frontend**: Hotwire (Turbo + Stimulus), Tailwind CSS 4
- **Billing**: Stripe (subscriptions, checkout, customer portal)
- **Deployment**: Kamal 2
- **Authentication**: Magic Links (passwordless)
- **Multitenancy**: Team-based with roles (owner/admin/member)
- **Multilingual**: Mobility gem with RubyLLM auto-translation; full UI locales for `en, de, es, fr, ru` plus language-name stubs for `tg, uz, ky, tr, sr` (add content per consuming project)
- **Currencies**: `money` + `money-currencylayer-bank` (daily rate refresh)
- **Countries**: `countries` (iso3166) with emoji flags
- **Analytics**: [Nullitics](https://nullitics.com) with [MaxMind](https://www.maxmind.com) geolocation…
