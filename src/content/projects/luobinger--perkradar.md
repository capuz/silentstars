---
repo: "luobinger/PerkRadar"
name: "PerkRadar"
description: "PerkRadar — A self-hosted deals aggregator that fetches freebies, limited-time offers, and discounts from multiple sources every two hours, with source status tracking, expiration handling, and personal bookmarks."
originalDescription: "PerkRadar — A self-hosted deals aggregator that fetches freebies, limited-time offers, and discounts from multiple sources every two hours, with source status tracking, expiration handling, and personal bookmarks."
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/luobinger/PerkRadar"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [83]
stars: 493
forks: 98
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 3
recentReleases: 1
createdAt: "2026-11-08T08:22:48Z"
lastCommitAt: "2026-11-13T18:34:55Z"
lastReleaseAt: "2026-11-08T09:17:56Z"
status: "newborn"
tags: ["solo_builder"]
healthScore: 90
undervaluedScore: 23
maintainers: ["github-actions[bot]", "luobinger"]
openGraphImageUrl: "https://opengraph.githubassets.com/0b65d67ab77d8117b0376f3aab4bbf1dda75c550a5d7e25a7235c3bac040253f/luobinger/PerkRadar"
---

# PerkRadar

PerkRadar is a self-deployable aggregator of deal leads. It periodically reads a fixed set of public RSS, Atom, JSON, and Markdown sources, organizes titles, original links, and short summaries into a lightweight SQLite database, and then uses a web dashboard to help you search, filter, bookmark, and mark items as claimed.

Entries come from public feeds and may include chit-chat, wanted posts, promotions, or expired offers. Categories are inferred from title rules and do not verify whether a deal is genuine, its validity period, or your eligibility to claim it. Please refer to the original post and the official terms of the offer.

## Deployment

We recommend having Personal Agent help with deployment, or you can run it yourself by following the steps below. PerkRadar is suited to single-host, single-instance deployment and requires a long-running Node process and a writable local SQLite data directory.

- **Local use**: binds to `127.0.0.1:38471` by default. If authentication is not enabled, use it only in a trusted single-user environment.
- **Public use**: access it through a TLS reverse proxy and set `PERKRADAR_ACCESS_TOKEN` to a random value of at least 32…
