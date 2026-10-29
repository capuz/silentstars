---
repo: "OpenIPC/website"
name: "website"
description: "Source code for openipc.org website"
readmeQualityOk: true
url: "https://github.com/OpenIPC/website"
language: "Go"
languages: ["Go", "TypeScript"]
languagePcts: [42, 29]
topics: ["openipc"]
stars: 10
forks: 12
openIssues: 18
closedIssues: 121
watchers: 1
contributors: 16
recentReleases: 0
createdAt: "2022-07-10T11:01:12Z"
lastCommitAt: "2026-10-29T10:36:58Z"
status: "thriving"
tags: ["hidden_gem", "funded", "fork_magnet"]
healthScore: 97
undervaluedScore: 85
maintainers: ["openipc-ai", "widgetii", "compot-dev"]
openGraphImageUrl: "https://opengraph.githubassets.com/3be1d76d5a873d479e448a9ffe3da6218fac209dbe79f86b1a03217086ed4d9b/OpenIPC/website"
fundingLinks: ["OPEN_COLLECTIVE:https://opencollective.com/openipc"]
---

# website

The OpenIPC project's website, [openipc.org](https://openipc.org).

| | |
|---|---|
| `frontend/` | every page: an Astro site (`apps/site`) and its Preact component library (`packages/ui`) |
| `service/` | the Go service and PostgreSQL behind the camera uploads, the Open Wall and the firmware downloads |
| `data/` | the hardware catalogue, the translations and the WebUI gallery manifest, which both of the above read |
| `deploy/` | nginx, the deploy and backup scripts, and how to run them: start with `deploy/DEV-VALIDATION.md` |

`deploy/GO-CUTOVER.md` records how the site reached this shape (#287, #304).

## Links the project posts

Add `?ref=<tag>` to any openipc.org link the project publishes. The site counts
it once as `ref:<tag>` and then removes it from the address, so the tag shows up
in the analytics dashboard without splitting the page's own figures across a row
per source.

This exists because 39% of human page views arrive with no referrer at all --
Telegram and most apps send none -- so the channels the project controls are
otherwise indistinguishable from someone typing the URL.

| where | tag |
|---|---|
| Telegram pins | `ref=tg-en`, `ref=tg-ru`,…
