---
repo: "S1qwy/fragment-api-py"
name: "fragment-api-py"
description: "Non-official python client for Fragment API - Telegram Stars, Premium and TON service."
readmeQualityOk: true
url: "https://github.com/S1qwy/fragment-api-py"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 24
forks: 4
openIssues: 0
closedIssues: 4
watchers: 4
contributors: 1
recentReleases: 0
createdAt: "2025-08-14T22:13:43Z"
lastCommitAt: "2026-11-02T11:35:49Z"
lastReleaseAt: "2026-06-04T09:44:34Z"
status: "thriving"
tags: []
healthScore: 87
undervaluedScore: 62
maintainers: ["S1qwy"]
openGraphImageUrl: "https://opengraph.githubassets.com/ec03a456f7416bf13968cf0eae7381e8ce9642d47783a2392e0e77e5b58605fd/S1qwy/fragment-api-py"
---

Stars · Premium · Gifts · Usernames · Numbers · Ads · Gateway


  &nbsp; / &nbsp;
  &nbsp; / &nbsp;

---

## Built for explicit workflows

**fragment-api-py** is an unofficial asynchronous Python SDK for Fragment.com.

Browse the marketplace, resolve recipients, prepare transactions for external signing, or configure a payer wallet for automatic broadcasting. Work with typed results instead of treating every accepted request as a completed purchase.


### Purchase

Telegram Stars, Premium gifts, channel giveaways, Ads top-ups, and Gateway credits.


### Discover

Search usernames, collectible numbers, and gifts. Inspect attributes, prices, ownership, and auction history.


### Manage

Operate user-owned assets, listings, offers, assignments, withdrawals, and sessions.


## Release 14.1.0

Current Fragment account headers, updated giveaway requests, and ordinary API error handling without a separate KYC workflow.

| Area | What changed |
|:--|:--|
| Profile | `get_profile()` reads the full page header; the removed `/my/profile` route is no longer requested |
| Account fields | Name, photo, wallet address and label; `username` is empty because the…
