---
repo: "studie-tech/TheNinjaRPG"
name: "TheNinjaRPG"
description: "Source code for TheNinja-RPG Core 4"
readmeQualityOk: true
url: "https://github.com/studie-tech/TheNinjaRPG"
homepage: "https://www.theninja-rpg.com"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [98]
topics: ["ai", "game", "t3"]
stars: 106
forks: 37
openIssues: 15
closedIssues: 921
watchers: 7
contributors: 25
recentReleases: 0
createdAt: "2023-02-14T09:19:25Z"
lastCommitAt: "2026-11-07T09:29:26Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 100
undervaluedScore: 51
maintainers: ["MathiasGruber", "Kebeetz"]
openGraphImageUrl: "https://opengraph.githubassets.com/35c7d5b8f2a4a2b2524df583ee24ee8ae456c85709806a4324196a18379d790b/studie-tech/TheNinjaRPG"
discussionCount: 0
---

# :tada: TheNinja-RPG - Core 4 :tada:

This is the official source code for the game [www.TheNinja-RPG.com](https://github.com/studie-tech/TheNinjaRPG/blob/HEAD/www.TheNinja-RPG.com).

# :computer: Setting up locally

The codebase relies on a variety of external services for e.g. auth, websockets, database, etc. Some of these are next to impossible to replicate locally, but provide free (or very cheap) tiers. To get up and running, it is therefore required to sign up for free accounts on the following services:

- https://clerk.com/ - for auth (required)
- https://uploadthing.com/ - for file uploads (optional)
- https://replicate.com/ - for AI inference (optional)

To get started, copy `app/.env.example` to `app/.env` and fill in all variables related to services (`*CLERK*`, `REPLICATE*`, `UPLOADTHING*`).

```bash
make setup # Install bun locally
make install # Run bun install
make dbpush # Setup database tables
make seed # Seed database tables
make start PORT=3000 # Start development server in the foreground
```

- Go to `http://localhost:3000` to view the site (use `localhost`, not `127.0.0.1`, or Next.js chunks 403)
- Go to `http://127.0.0.1:3001` to manage the database

For…
