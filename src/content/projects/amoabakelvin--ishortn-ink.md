---
repo: "AmoabaKelvin/ishortn.ink"
name: "ishortn.ink"
description: "URL Shortening, Link Analytics & QR Code Platform"
readmeQualityOk: true
url: "https://github.com/AmoabaKelvin/ishortn.ink"
homepage: "https://ishortn.ink"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [96]
topics: ["nextjs", "qrcode-generator", "typescript", "url-shortener"]
stars: 152
forks: 28
openIssues: 6
closedIssues: 419
watchers: 2
contributors: 4
recentReleases: 0
createdAt: "2023-07-29T07:27:43Z"
lastCommitAt: "2026-11-27T16:31:14Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 100
undervaluedScore: 47
maintainers: ["ishortn-engineer[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/672180626/df5e8c26-b454-4283-b082-2b4512f28e2e"
---

Short links that track every click. Create branded short links with powerful analytics, QR codes, UTM templates, custom domains, and more.

> **Self-hosting at a glance**
>
> - Runs as one Cloudflare Worker and needs the [Workers Paid plan](https://developers.cloudflare.com/workers/platform/pricing/) (KV, Hyperdrive, Queues and a raised CPU limit).
> - Needs a MySQL 8 database Cloudflare can reach, and a Clerk application for sign-in.
> - There is no Docker image (`compose.yaml` is only for local development); you deploy from a clone with `bun run deploy`.
>
> Full steps: [self-hosting guide](https://github.com/AmoabaKelvin/ishortn.ink/blob/HEAD/docs/self-hosting.md).

## About

iShortn is an open-source URL shortener and link intelligence platform. It turns long URLs into short, branded links and gives you deep insight into every click — country, city, device, referrer, and hour-by-hour trends — without shipping third-party cookies or chasing visitors across the web.

Use it for marketing campaigns, product onboarding, event tracking, newsletter links, QR codes on printed material, or as a self-hosted alternative to proprietary shorteners.
