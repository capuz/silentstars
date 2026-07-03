---
repo: "ohong/straude"
name: "straude"
description: "Strava for Claude Code / Codex. CLI to track your AI coding output tokens, spend, and streaks. Compete on a global leaderboard and see what your friends are building. Make every agentic coding session count."
url: "https://github.com/ohong/straude"
homepage: "https://straude.com"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [92]
stars: 30
forks: 6
openIssues: 4
closedIssues: 22
watchers: 0
contributors: 7
recentReleases: 0
createdAt: "2026-02-16T19:48:48Z"
lastCommitAt: "2026-07-03T12:40:33Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 94
undervaluedScore: 44
maintainers: ["ohong", "alexesprit"]
openGraphImageUrl: "https://opengraph.githubassets.com/667934c3b87c65a3b547f06d6a8b048fea0c7fda916f27ed1aa92b8feab8dcdc/ohong/straude"
discussionCount: 2
---

# Straude

**Strava for Claude Code.**

Track your Claude Code usage. Share your sessions. Climb the leaderboard.

## Why?

Running used to be solitary. Then Strava made it social. Agentic engineering with Claude Code is the new solitary grind — people are [spending thousands](https://www.wsj.com/tech/ai/anthropic-claude-code-ai-7a46460e) building with AI, but there's no way to share the journey. Straude changes that.

## How it works

Sync your stats with a single command — no install needed:

```bash
npx straude@latest
```

The CLI reads your local [ccusage](https://github.com/ryoppippi/ccusage) data (cost, tokens, models, sessions), uploads it to Straude, and auto-creates a post on your feed. First run opens a browser login; after that, just run `npx straude@latest` daily. It automatically pushes new stats since your last sync.

Options: `--date YYYY-MM-DD` to push a specific date, `--days N` to backfill the last N days (max 7), `--dry-run` to preview without posting. Run `npx straude@latest status` to check your streak and rank.

## Features

- **Track** — Cost, tokens, models, and sessions in one place.
- **Share** — Auto-posted sessions with optional screenshots and…
