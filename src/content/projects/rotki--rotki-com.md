---
repo: "rotki/rotki.com"
name: "rotki.com"
description: "The frontend for rotki.com"
readmeQualityOk: true
url: "https://github.com/rotki/rotki.com"
language: "TypeScript"
languages: ["TypeScript", "Vue"]
languagePcts: [53, 27]
topics: ["nuxt", "vue", "website"]
stars: 15
forks: 21
openIssues: 1
closedIssues: 77
watchers: 4
contributors: 10
recentReleases: 0
createdAt: "2021-01-07T15:06:00Z"
lastCommitAt: "2026-11-25T12:46:06Z"
lastReleaseAt: "2023-08-03T13:25:02Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero", "fork_magnet"]
healthScore: 99
undervaluedScore: 78
maintainers: ["kelsos"]
openGraphImageUrl: "https://opengraph.githubassets.com/7d24ec9c71ea2f775441ac73375b0d250f617820fb4539d1da81edb1fc645e72/rotki/rotki.com"
discussionCount: 1
---

# rotki.com

The [rotki.com](https://rotki.com) website: the public pages, the premium checkout, account
management and NFT sponsorship.

It is a pnpm workspace:

| Package                        | What it is                                                                                      |
| ------------------------------ | ----------------------------------------------------------------------------------------------- |
| `packages/website`             | The Nuxt site, generated as static files (SSG)                                                  |
| `packages/card-payment`        | The card checkout app, served under `/checkout/pay/card` with its own CSP                       |
| `packages/card-payment-common` | Schemas and helpers shared by the website and the card app                                      |
| `packages/checkout-ui`         | Vue components and composables shared by the website checkout and the card app                  |
| `packages/sigil`               | The analytics event catalog                                                                     |
