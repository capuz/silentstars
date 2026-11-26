---
repo: "robconery/kolea"
name: "kolea"
description: "Kōlea — self-hosted broadcasts, drip sequences, and transactional email in one Cloudflare Worker. Unsubscribe is scoped: leaving a sequence doesn't remove you from the list."
readmeQualityOk: true
url: "https://github.com/robconery/kolea"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [91]
topics: ["cloudflare-d1", "cloudflare-queues", "cloudflare-workers", "drizzle-orm", "email", "email-marketing", "hono", "mcp", "mcp-server", "self-hosted"]
stars: 12
forks: 3
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 1
createdAt: "2026-08-19T19:18:29Z"
lastCommitAt: "2026-11-26T23:38:10Z"
lastReleaseAt: "2026-11-26T23:37:53Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 78
undervaluedScore: 47
maintainers: ["robconery", "dependabot[bot]", "openbotgit[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/9d1043e6843cb6ddb31dda178456f5d1de9bc0305aecb57a6173c444cbdea92d/robconery/kolea"
---

# Kōlea

**Self-hosted email on one Cloudflare Worker.**
Broadcasts, drip sequences, transactional mail and a blog. The list stays yours.

[Run it locally](#-run-it-locally) · [Go live](#-put-it-on-your-own-cloudflare-account) · [Tour](https://github.com/robconery/kolea/blob/HEAD/docs/TOUR.md) · [Install guide](https://github.com/robconery/kolea/blob/HEAD/docs/INSTALL.md) · [Architecture](https://github.com/robconery/kolea/blob/HEAD/docs/ARCHITECTURE.md)

## 🐦 What it is

Kōlea is an email list server you run yourself. It replaces a paid email service
provider (ESP) for one person or one small business: you write in a block editor,
send to a segment, run drip series, and see what worked. Everything lives in your
own Cloudflare account, in a database you can query.

It is for a **single operator**: a writer, a course author, a small software shop.
It is not multi-tenant, it has no drag-and-drop builder, and it does not run its own
mail server. It hands mail to a provider (Resend today) and keeps the rest.

Two ideas make it different:
