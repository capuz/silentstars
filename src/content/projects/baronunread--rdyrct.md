---
repo: "baronunread/rdyrct"
name: "rdyrct"
description: "Open-source URL shortener for teams: branded short links, QR codes, and custom domains on Cloudflare Workers."
readmeQualityOk: true
url: "https://github.com/baronunread/rdyrct"
homepage: "https://rdyrct.com"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [98]
topics: ["cloudflare", "cloudflare-workers", "d1", "d1-database", "open-source", "qr-code", "qrcode", "qrcode-generator", "url", "url-shortener"]
stars: 38
forks: 4
openIssues: 53
closedIssues: 144
watchers: 1
contributors: 2
recentReleases: 2
createdAt: "2026-07-20T13:51:42Z"
lastCommitAt: "2026-11-07T22:52:08Z"
lastReleaseAt: "2026-10-23T14:01:51Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "under_pressure"]
healthScore: 94
undervaluedScore: 43
maintainers: ["baronunread", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/16f14b6cf4dd2d548fe4c05a3d548a2eba9d8f440b22974c7dd740c8b34273dd/baronunread/rdyrct"
---

# rdyrct

**Organization-based link shortener + QR codes, running entirely on Cloudflare's edge.**

---

## Deploy in one click

Cloudflare copies this repository to your GitHub account, creates the database, storage and queues, and asks for one thing: the email of the account that becomes the platform admin. Leave every other value as it is. The first build serves your copy on its `workers.dev` address, generates the session key and applies the migrations; each push to your copy deploys it again. When you want your own domain, see [Move to your own domain](#move-to-your-own-domain).

Prefer a terminal? `bun run setup` does the same from a clone: see [Deploy to Cloudflare Workers](#deploy-to-cloudflare-workers).

---

## Features

- **Short links** with custom or random slugs, optional UTM parameters (source, medium, campaign, term, content) applied at redirect time.
- **Grouped link addresses**: renaming a link keeps the old slug redirecting for 48 hours before it's freed, and a link can carry extra aliases that all redirect to the same destination.
- **QR codes** per link (paid plans), with an optional logo in the center, live preview, and PNG/SVG download.
- **Custom domains**…
