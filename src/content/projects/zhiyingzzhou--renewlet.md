---
repo: "zhiyingzzhou/renewlet"
name: "renewlet"
description: "Self-hosted subscription tracker for recurring renewals, with timezone-aware reminders, ten notification channels, budgets, and spending insights."
readmeQualityOk: true
url: "https://github.com/zhiyingzzhou/renewlet"
homepage: "https://renewlet.cc"
language: "TypeScript"
languages: ["TypeScript", "Go"]
languagePcts: [73, 22]
stars: 316
forks: 71
openIssues: 2
closedIssues: 42
watchers: 0
contributors: 4
recentReleases: 0
createdAt: "2026-05-17T00:39:48Z"
lastCommitAt: "2026-11-18T12:04:53Z"
lastReleaseAt: "2026-06-18T21:58:20Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 98
undervaluedScore: 30
maintainers: ["zhiyingzzhou", "github-actions[bot]", "almokhtarbr"]
openGraphImageUrl: "https://opengraph.githubassets.com/14175eb35a6c5e8cf0c76203a70c5abb277b87212c7f4ec4b0d49b59e3a44e8f/zhiyingzzhou/renewlet"
---

# Renewlet

Renewlet is a self-hosted subscription ledger for recurring expenses. See what you spend, what is due next, and get a reminder before renewal.

Run it in a single Docker container or deploy it to Cloudflare Workers.

## Demo

<https://demo.renewlet.cc/>

Sign in with `demo@renewlet.local` / `renewlet-demo`. Data resets regularly; do not enter real information or credentials.

## Features

- Keep prices, billing cycles, renewal dates, payment methods, and notes in one place.
- Review monthly or yearly spending, track a budget, and convert between currencies.
- Send reminders in your timezone through Telegram, Notifyx, Webhook, WeCom, DingTalk, email, Bark, ServerChan, Discord, or PushPlus.
- Turn screenshots, notes, or tables into editable drafts, then review them before import. You can also import or export Renewlet data, or migrate from Wallos.
- Add all or individual subscriptions to a calendar, or share a public status page with prices hidden when needed.
- Secure the account with an authenticator, recovery codes, or passkeys, and optionally protect password login with Cloudflare Turnstile.
