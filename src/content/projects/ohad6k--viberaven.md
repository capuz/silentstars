---
repo: "ohad6k/VibeRaven"
name: "VibeRaven"
description: "The production layer for AI-built apps: checks across Supabase, Vercel and Stripe, and an engine that races every database rule on real PostgreSQL. Works in ChatGPT, Claude, Codex and Cursor."
readmeQualityOk: true
url: "https://github.com/ohad6k/VibeRaven"
homepage: "https://viberaven.dev"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [100]
topics: ["claude-code", "codex", "cursor", "supabase", "vercel", "ai-built-apps", "vibe-coding", "mcp", "lovable", "row-level-security"]
stars: 65
forks: 11
openIssues: 18
closedIssues: 27
watchers: 4
contributors: 7
recentReleases: 4
createdAt: "2026-06-09T13:53:40Z"
lastCommitAt: "2026-11-17T14:37:07Z"
lastReleaseAt: "2026-11-16T21:17:38Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "hidden_gem"]
healthScore: 85
undervaluedScore: 34
maintainers: ["ohad6k", "AZERDSQ131", "vku2018"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1264035692/5ce51c23-9508-4ff5-a70c-9b64bcc6d9f4"
discussionCount: 5
---

Checks across Supabase, Vercel and Stripe, and an engine that races every rule in your database on real PostgreSQL, before your users do.

## Quick start

The engine inside VibeRaven, on the bundled example:

```sh
npx -y viberaven@1.10.0 race --example
```

```text
At most 2 bookings per event: 60 orders, 24 broken, 0 waiting; 1.495s total
  read committed: 12/20 broken
  repeatable read: 12/20 broken
  serializable: 0/20 broken
First broken order 001101 (read committed); COMMIT A=true, B=true
Replay record is byte-identical, including PostgreSQL protocol bytes.
```

That is the engine inside VibeRaven: `race` tests your app's database with two users at once, on real PostgreSQL, without Docker, and replays exactly what broke. In order 001101, A inserts, B inserts, A commits, B commits: the event ends with 3 bookings out of 2. The bundled fix brings it to 0 broken of 60.

## Inside your chat

Add `https://viberaven.dev/mcp` as a custom connector in ChatGPT, Claude, Codex, Cursor or Lovable, then ask: "Can two users book the last seat?" [Setup for each agent](https://viberaven.dev/connect/mcp).

## In your repo

```sh
npx -y viberaven@1.10.0 check   # what is risky before launch…
