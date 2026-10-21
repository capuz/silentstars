---
repo: "kzndotsh/watchdog"
name: "watchdog"
description: "Watchdog (branding subject to change) is an open-source intelligence (OSINT) case management platform for small teams."
readmeQualityOk: true
url: "https://github.com/kzndotsh/watchdog"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [94]
topics: ["ai", "better-auth", "evlog", "investigation", "investigative-journalism", "open-source-intelligence", "osint", "postgresql", "security", "tanstack-query"]
stars: 5
forks: 0
openIssues: 22
closedIssues: 180
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-08-25T19:36:09Z"
lastCommitAt: "2026-10-21T21:14:56Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "under_pressure"]
healthScore: 98
undervaluedScore: 53
maintainers: ["kzndotsh"]
openGraphImageUrl: "https://opengraph.githubassets.com/1f3c4ef3e1722a57f7ac01c261ce105c87ccccb91d34790c46d6bacb0b6c2d0d/kzndotsh/watchdog"
---

# Watchdog

## Investigations are messy. Your OSINT work requires a place you can trust.

[Quick start](#quick-start) • [Caps](#capabilities) • [Architecture](#architecture) • [Docs](#docs) • [Roadmap](https://github.com/kzndotsh/watchdog/blob/HEAD/docs/roadmap.md)

> [!WARNING]
>
> **Pre-1.0 and under active development.** Schemas, Cap ids, and API shapes change without notice, and several surfaces in [docs/roadmap.md](https://github.com/kzndotsh/watchdog/blob/HEAD/docs/roadmap.md) are half-built. Organization-scoped tenancy (Better Auth orgs, invites, org-bound cases) ships for small teams, but the install is not hardened for hostile multi-tenant SaaS or production deployment at scale.

## Why Watchdog

Most tools are built to collect. Watchdog is built to conclude.

### What usually goes wrong:

Small-team OSINT usually runs on general-purpose tools: a chat thread for coordination, a growing document for the case file, an assistant for summarizing, and ad-hoc scripts for collection. That works until the case gets big enough to hit the same failures every time.

- Summaries and assumptions get treated as fact.
- The case lives in three places at once. None of them agree.
- More…
