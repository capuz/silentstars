---
repo: "jntegz/shorthop"
name: "shorthop"
description: "Self-hosted URL shortener on one Cloudflare Worker: see which link brought each Stripe or Paddle sale, and log every click on the links that matter. The admin signs in with passkeys or two-factor codes. Cookieless by default, fits the free tier."
readmeQualityOk: true
url: "https://github.com/jntegz/shorthop"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [93]
topics: ["analytics", "cloudflare", "cloudflare-d1", "cloudflare-workers", "hono", "link-shortener", "qr-code", "react", "self-hosted", "typescript"]
stars: 5
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 7
createdAt: "2026-10-21T11:40:09Z"
lastCommitAt: "2026-11-24T14:06:04Z"
lastReleaseAt: "2026-11-24T14:03:49Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 79
undervaluedScore: 59
maintainers: ["jntegz"]
openGraphImageUrl: "https://opengraph.githubassets.com/249afe1ef278d607b77e3797970b743cb3e4276a4e4fe6ac475d7a4c4b6689b3/jntegz/shorthop"
---

# Shorthop

**Short links on your own domain, and the paying customers they bring, in one Cloudflare Worker you own.**

Put a link in a LinkedIn post or on a printed QR code, then see the clicks, the visits and the Stripe payment it led to. Shorthop runs in your own Cloudflare account, so no shortener's plan decides whether your links keep working or how much history you keep. It sets no cookies and stores no IP addresses, unless you switch on Advanced tracking for a link. For most people it fits in Cloudflare's free allowances.

[Why people switch](#why-people-switch-to-shorthop) · [What's new](#whats-new-in-20) · [Features](#features) · [Screenshots](#screenshots) · [Install](#install) · [Common trip-ups](#things-new-users-commonly-trip-over) · [Documentation](#documentation) · [Costs](#costs) · [FAQ](#faq)

## Why people switch to Shorthop

What users of hosted shorteners keep running into, and what Shorthop does instead:
