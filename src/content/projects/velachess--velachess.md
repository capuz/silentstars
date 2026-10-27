---
repo: "velachess/velachess"
name: "velachess"
description: "Turn your games into better chess."
readmeQualityOk: true
url: "https://github.com/velachess/velachess"
homepage: "https://velachess.com"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [97]
topics: ["chess", "hono", "ia", "pgn", "react", "stockfish", "typescript", "fen", "self-hosted", "nextjs"]
stars: 17
forks: 12
openIssues: 0
closedIssues: 57
watchers: 0
contributors: 8
recentReleases: 0
createdAt: "2026-08-20T19:41:10Z"
lastCommitAt: "2026-10-27T09:17:09Z"
status: "thriving"
tags: ["hidden_gem", "fork_magnet"]
healthScore: 98
undervaluedScore: 59
maintainers: ["yurimutti", "dependabot[bot]", "Sarthak-Shreshtha01"]
openGraphImageUrl: "https://opengraph.githubassets.com/b8e851e84597a837a9df1cfafa97e1ff600a00eb85892e4529a2d7d0fd4deb1c/velachess/velachess"
discussionCount: 2
---

VelaChess lets you import games from Chess.com, Lichess, or PGN files,
  analyze your moves, and review your decisions on an interactive board.

## How it works

```text
Chess.com / Lichess / PGN file
  └─→ Games library → open a game → Stockfish (on demand) → saved review
```

## Quick start

Requires Node.js 24 or later, pnpm via Corepack, and Docker.

```bash
cp .env.example .env

pnpm dev:setup
pnpm dev
```

Open <http://localhost:5173>. See [Running locally](https://github.com/velachess/velachess/blob/HEAD/docs/how-to/run-locally.md)
for the full development setup or [Self-hosting](https://github.com/velachess/velachess/blob/HEAD/docs/how-to/self-host.md) for
deployment.

## Documentation

Start with the [documentation index](https://github.com/velachess/velachess/blob/HEAD/docs/README.md), or go directly to:

- [Guided first run](https://github.com/velachess/velachess/blob/HEAD/docs/tutorials/build-and-run-locally.md)
- [Architecture and repository layout](https://github.com/velachess/velachess/blob/HEAD/docs/explanation/architecture.md)
- [Domain reference](https://github.com/velachess/velachess/blob/HEAD/docs/README.md#reference) and
  [API…
