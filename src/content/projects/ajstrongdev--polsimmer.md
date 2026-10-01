---
repo: "ajstrongdev/polsimmer"
name: "polsimmer"
description: "Polsimmer is a free to play, open source, multiplayer web-game. Build parties, win elections, and pass legislation in a living democracy."
readmeQualityOk: true
url: "https://github.com/ajstrongdev/polsimmer"
homepage: "https://oscana.nya.je"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [96]
topics: ["politics", "react", "tanstack-router", "tanstack-start", "polsim"]
stars: 9
forks: 4
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 8
recentReleases: 0
createdAt: "2025-09-20T20:25:27Z"
lastCommitAt: "2026-10-01T10:23:07Z"
lastReleaseAt: "2026-01-25T20:03:04Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 90
undervaluedScore: 75
maintainers: ["ajstrongdev", "jenewland1999", "leomosley"]
openGraphImageUrl: "https://opengraph.githubassets.com/0b1c2fc01bf8744953b9ec82b2a54678c10c397cde4ac073544a7c6c449b53c9/ajstrongdev/polsimmer"
---

# Oscana

Oscana is a TanStack Start game application with PostgreSQL and Firebase Authentication. This branch (`revival`) is an unfinished rewrite of the `develop` version. See [the rewrite notes](https://github.com/ajstrongdev/polsimmer/blob/HEAD/docs/REVIVAL_OVERVIEW.md) for the main product changes and known gaps.

## Local development

Use Node.js 24, pnpm 10.28.2, PostgreSQL, and Firebase credentials. Copy `.env.example` to `.env`, fill it, then run:

```bash
pnpm install --frozen-lockfile
pnpm db:migrate
pnpm dev
```

`pnpm seed:fresh` resets game data. Use it only for a new or disposable database. The scheduler can be run locally with `CRON_INTERNAL_TOKEN` set to the local cron token and `APP_BASE_URL=http://localhost:3001`.

To test party permissions on a **local development database**, first make sure AJ (`ajstrongdev@pm.me`) belongs to an active party with another active, unappointed member. Run `pnpm db:seed:party-leader`, `pnpm db:seed:chief-whip`, or `pnpm db:seed:social-media-officer` to switch AJ to that post. These commands do not reset the database, but replace the incumbent in the chosen post; moving AJ out of the leadership post assigns an eligible party member…
