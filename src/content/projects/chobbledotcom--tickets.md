---
repo: "chobbledotcom/tickets"
name: "tickets"
description: "Chobble Tickets: Minimalist and private ticket sales on Bunny's Edge Scripts - a \"no per-attendee fee\" alternative to BookItBee, Eventbrite, Seetickets, etc"
readmeQualityOk: true
url: "https://github.com/chobbledotcom/tickets"
homepage: "https://tickets.chobble.com"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [98]
topics: ["bunny", "deno", "edge", "libsql", "tickets", "events", "event-management", "manchester", "ticket-booking", "ticketing"]
stars: 34
forks: 3
openIssues: 76
closedIssues: 104
watchers: 0
contributors: 4
recentReleases: 0
createdAt: "2026-01-21T05:33:42Z"
lastCommitAt: "2026-10-10T09:59:22Z"
lastReleaseAt: "2026-05-25T00:36:09Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded"]
healthScore: 91
undervaluedScore: 45
maintainers: ["stefan-burke"]
openGraphImageUrl: "https://opengraph.githubassets.com/86a379fcf2e4c383a15a4f59bd888208994cbb17f69eae2ff60953393025055f/chobbledotcom/tickets"
fundingLinks: ["GITHUB:https://github.com/stefan-burke", "PATREON:https://patreon.com/Chobble", "LIBERAPAY:https://liberapay.com/chobble"]
---

# Chobble Tickets

Chobble Tickets is a reservation system that runs on Bunny Edge Scripting (or
any Deno environment) with libsql, which encrypts all PII at rest and handles
free and paid listings with Stripe, Square, or SumUp.

It is developed by [Chobble CIC](https://www.chobble.com) - a community interest
company, which means the assets are locked to the community and cannot be sold
off.

**Website**: [tickets.chobble.com](https://tickets.chobble.com)

This is not "open core" - every feature is available under
[AGPL-3.0-only](https://github.com/chobbledotcom/tickets/blob/HEAD/LICENSE) with no proprietary add-ons. If you prefer not to host
it yourself, I offer hosted instances at
[tix.chobble.com](https://tix.chobble.com/ticket/register) for £5/month or
£50/year.

---

## Deploy on Bunny Edge Scripting

This is the recommended way to deploy it. Fork the repo, connect it to Bunny,
and deploy via GitHub Actions - you can pull in upstream changes and push your
own customisations on your own schedule.

1. **Fork or clone** this repository
2. **Create a Bunny Database** in the
   [Bunny dashboard](https://dash.bunny.net) - note the database URL and token
3. **Create a Bunny Edge…
