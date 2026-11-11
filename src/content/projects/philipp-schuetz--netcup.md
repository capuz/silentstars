---
repo: "philipp-schuetz/netcup"
name: "netcup"
description: "netcup gutschein"
readmeQualityOk: true
url: "https://github.com/philipp-schuetz/netcup"
homepage: "https://netcupgutschein.com"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [100]
topics: ["netcup", "netcup-voucher", "netcup-vouchers"]
stars: 81
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-08-21T17:14:36Z"
lastCommitAt: "2026-11-11T19:44:02Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 79
undervaluedScore: 31
maintainers: ["github-actions[bot]", "codex"]
openGraphImageUrl: "https://opengraph.githubassets.com/6e7ca00110a6fe33a65e530251a9188989734f2334922d4e7f11310d9f382586/philipp-schuetz/netcup"
---

# netcup voucher CLI

A small, read-only command-line program for querying available netcup product
voucher codes.

Prefer a browser? Browse the current [netcup Gutschein finder and live voucher
catalog](https://netcupgutschein.com/).

The program sends one HTTPS GET request to the configured voucher API,
validates the response, and prints product-to-code pairs. The default data
source keeps each complete response unchanged for one hour. It contains no web
crawler, scraper, account login, data writer, database client, or deployment
tooling.

> This is an independent community project and is not affiliated with netcup.
> Voucher codes are one-time use and can become unavailable at any moment.

## Current voucher codes

This table is refreshed automatically every six hours from the same one-hour
cached data source used by the CLI. Codes are one-time use and may become
unavailable between refreshes. The timestamp changes only when the code list
changes, so routine checks do not create no-op commits. Failed or expired
API responses fail the action instead of being presented as newly verified data.
The action only reads the cached feed; it never logs into CCP or generates codes.
The…
