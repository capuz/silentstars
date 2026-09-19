---
repo: "bwhtech/commera"
name: "commera"
description: "Open Source E-commerce Platform, powered by ERPNext"
readmeQualityOk: true
url: "https://github.com/bwhtech/commera"
homepage: "https://bwh.tech"
language: "CSS"
languages: ["CSS", "Python"]
languagePcts: [45, 26]
stars: 39
forks: 38
openIssues: 37
closedIssues: 47
watchers: 3
contributors: 7
recentReleases: 1
createdAt: "2025-07-29T11:20:04Z"
lastCommitAt: "2026-09-19T02:47:14Z"
lastReleaseAt: "2026-08-19T10:38:33Z"
status: "thriving"
tags: ["solo_builder", "fork_magnet"]
healthScore: 90
undervaluedScore: 66
maintainers: ["Rl0007", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/1d268229bc085edcb9b0f31233ab6ce0374a57f65d2b209d64d37b512f83f54a/bwhtech/commera"
---

<h1>Commera</h1>

**Open source storefront and merchant dashboard for ERPNext**

</div>

</div>

## Commera

Commera turns an ERPNext site into a complete online shop. Shoppers get a fast, bilingual, themeable storefront rendered server-side; the people running the shop get a modern dashboard built with Vue 3 and Frappe UI. ERPNext stays the system of record underneath, so stock, pricing, tax and accounting are never a second copy that drifts.

### Motivation

Most ERPNext storefronts make you choose. Either you take a server-rendered portal that is quick and SEO-friendly but painful to administer, or you bolt on a separate storefront platform and spend the rest of the project reconciling two catalogues, two stock counts and two sets of orders.

Commera refuses that trade. The storefront is Jinja, Tailwind and Alpine — no SPA payload between a shopper and a product page — while the merchant side is a proper single-page app that feels like the commerce tools people already use. Both read and write the same ERPNext documents.

### The Merchant Dashboard

</div>

A Vue 3 + [Frappe UI](https://github.com/frappe/frappe-ui) app served at `/commera`, and registered on the desk apps…
