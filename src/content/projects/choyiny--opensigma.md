---
repo: "choyiny/opensigma"
name: "opensigma"
description: "Open-source Stripe Sigma alternative"
readmeQualityOk: true
url: "https://github.com/choyiny/opensigma"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [100]
stars: 9
forks: 3
openIssues: 2
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-05-28T02:02:46Z"
lastCommitAt: "2026-08-22T04:07:00Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 58
undervaluedScore: 36
maintainers: ["choyiny"]
openGraphImageUrl: "https://opengraph.githubassets.com/9946150fcd276be6d48a19db41c90b78e15fa941542f53af733ddf80b91ce888/choyiny/opensigma"
---

# opensigma

### Your Stripe data, in your own database. Free, open source, no Sigma bill.

</div>

  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="docs/assets/architecture-dark.png">
  </picture>
</div>

A free, open-source replacement for [Stripe Sigma](https://stripe.com/sigma) and [Stripe Data
Pipeline](https://stripe.com/data-pipeline). It mirrors your Stripe account into a Cloudflare D1
database so you can query it, join it against your own data, and build dashboards on top — without
paying Stripe a second time for data you already gave them.

It replicates the core behaviour of [stripe/sync-engine](https://github.com/stripe/sync-engine), but
runs entirely on Cloudflare Workers + D1 + Queues instead of Postgres and a long-lived server.

## What you get

- **Every billing-core object as a queryable SQLite row** — 25 synced Stripe resources, mirroring
  sync-engine's Postgres column set, ported to SQLite.
- **Webhook-driven freshness.** Rows update seconds after they change in Stripe. Out-of-order
  deliveries are dropped by a per-row `last_event_at` guard.
- **Historical backload**, paged from the Stripe REST API on an hourly cron, with a queue that…
