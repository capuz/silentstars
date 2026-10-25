---
repo: "mrgoonie/zuey-me"
name: "zuey-me"
description: "Personal Website of Zuey Nguyen"
readmeQualityOk: true
url: "https://github.com/mrgoonie/zuey-me"
homepage: "https://zuey.me"
language: "TypeScript"
languages: ["TypeScript", "HTML"]
languagePcts: [58, 35]
stars: 5
forks: 5
openIssues: 39
closedIssues: 103
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-09-04T11:29:06Z"
lastCommitAt: "2026-10-25T08:40:30Z"
status: "thriving"
tags: ["solo_builder", "under_pressure", "fork_magnet"]
healthScore: 93
undervaluedScore: 72
maintainers: ["mrgoonie"]
openGraphImageUrl: "https://opengraph.githubassets.com/2dd1ef5fb958eee209d3e8b6001ea314f28b6edc00a00034a480e9095733ca3d/mrgoonie/zuey-me"
---

# zuey.me

Personal profile, Page Builder Studio, REST API, MCP Server, and AI Agent Skill for **Duy Nguyen (/zuey/)**.

- **Deployed URL**: [https://zuey.me](https://zuey.me)
- **Target Domain**: `zuey.me` (attached to Cloudflare Pages; DNS managed on Cloudflare)

---

## Architecture & Responsibilities

The system runs on **Cloudflare Pages** (SSR via `@astrojs/cloudflare`) backed by **Cloudflare D1** (`zuey_me_db`) and **PostHog** analytics (client events, plus server payment, subscription and sign-in events delivered from the D1 `analytics_outbox` by the scheduler worker; see [docs/analytics-events.md](https://github.com/mrgoonie/zuey-me/blob/HEAD/docs/analytics-events.md#server-event-outbox); KPIs in [docs/analytics-kpis.md](https://github.com/mrgoonie/zuey-me/blob/HEAD/docs/analytics-kpis.md), D1 reconciliation in [docs/analytics-reconciliation.md](https://github.com/mrgoonie/zuey-me/blob/HEAD/docs/analytics-reconciliation.md)).

- **Public Profile & Modals**: `src/components/ProfileView.tsx` renders the link-in-bio interface, fast social share sheet, and QR code modal.
- **Data & Storage**: `src/db/` defines the schema (`src/db/types.ts`), initial seed data…
