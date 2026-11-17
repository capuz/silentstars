---
repo: "shuymn/kopje"
name: "kopje"
description: "A Mastodon-compatible ActivityPub server for one person or a small group, on one Cloudflare Worker"
readmeQualityOk: true
url: "https://github.com/shuymn/kopje"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [96]
topics: ["mastodon-api", "cloudflare-workers", "durable-objects", "self-hosted", "typescript", "activitypub", "fediverse", "mastodon"]
stars: 43
forks: 3
openIssues: 31
closedIssues: 132
watchers: 0
contributors: 21
recentReleases: 9
createdAt: "2023-04-05T04:55:59Z"
lastCommitAt: "2026-11-17T12:18:17Z"
lastReleaseAt: "2026-10-16T06:07:22Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 96
undervaluedScore: 59
maintainers: ["shuymn", "renovate[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/5e45bf163bcac106b80d389e3e5135b48c9c69aa4c7bf3b361f5bb73dc2b40fc/shuymn/kopje"
---

# Kopje

Kopje is a Mastodon-compatible [ActivityPub](https://www.w3.org/TR/activitypub/) server for one person or a small group
(up to about ten local accounts). It runs as one Cloudflare Worker and one SQLite-backed Durable Object on your own
Cloudflare account, works with Mastodon clients, and keeps a daily encrypted backup.

Kopje is a spiritual successor of [cloudflare/wildebeest](https://github.com/cloudflare/wildebeest). It is not
affiliated with or endorsed by Cloudflare, Inc.; Cloudflare and Cloudflare Workers are trademarks of Cloudflare, Inc.

## Status

Kopje is pre-1.0: a minor version may break. See the [CHANGELOG](https://github.com/shuymn/kopje/blob/HEAD/packages/kopje/CHANGELOG.md).

## Deploy

Read [Before you deploy](https://github.com/shuymn/kopje/blob/HEAD/deploy/README.md#before-you-deploy) in the instance template first.

## Docs

- [Setup](https://github.com/shuymn/kopje/blob/HEAD/packages/kopje/docs/setup.md): the `/setup` wizard
- [Upgrade](https://github.com/shuymn/kopje/blob/HEAD/packages/kopje/docs/upgrade.md): updates and rollback
- [Backup](https://github.com/shuymn/kopje/blob/HEAD/packages/kopje/docs/backup.md): the daily encrypted backup
-…
