---
repo: "jskoiz/has-codex-rate-limits-reset-today"
name: "has-codex-rate-limits-reset-today"
description: "Has the Codex team at OpenAI reset rate limits today? Now you can stay up to date."
readmeQualityOk: true
url: "https://github.com/jskoiz/has-codex-rate-limits-reset-today"
homepage: "https://hascodexratelimitreset.today/"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [78]
stars: 6
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-03-11T15:32:54Z"
lastCommitAt: "2026-08-08T04:33:17Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 88
undervaluedScore: 53
maintainers: []
openGraphImageUrl: "https://opengraph.githubassets.com/a588224a98763c655f5def97f393237dc602030391e5097c52e487d5bc12c3bc/jskoiz/has-codex-rate-limits-reset-today"
---

# Codex Limit

`Codex Limit` is a small status site for tracking whether Codex rate limits have reset.

It has two surfaces:

- A public `/` page that shows a simple `Yes` or `No`
- A private `/config` page for state control, timer management, subtitle editing, and tweet-monitor review

## Screenshot

Admin config UI:

## What It Does

- Serves a public reset-status page
- Persists shared state in `data/site-state.json`
- Protects admin actions with cookie-based auth
- Supports manual state changes and an auto-reset timer
- Polls recent `@thsottiaux` tweets and classifies whether they indicate a reset
- Sends uncertain tweets to manual review instead of flipping the public page automatically
- Exposes a compact public automation summary that adapts to active `yes` and inactive `no` states

## Architecture

- Frontend: plain HTML, CSS, and JavaScript
- App server: `server.mjs`
- API routes: `api/`
- Cloudflare Pages adapters: `functions/`
- Shared state store: tracked `data/site-state.json`
- Tweet monitor: `api/_lib/reset-monitor.mjs`

The public state file contains the public fields plus an encrypted private blob for session and automation internals.

## Public Summary UX

The…
