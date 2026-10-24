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
stars: 104
forks: 35
openIssues: 5
closedIssues: 904
watchers: 7
contributors: 23
recentReleases: 0
createdAt: "2023-02-14T09:19:25Z"
lastCommitAt: "2026-10-24T08:08:51Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 100
undervaluedScore: 51
maintainers: ["MathiasGruber"]
openGraphImageUrl: "https://opengraph.githubassets.com/17b009289a04e5db67c4b9841f7440b7dfa441ff0722b9c73f59a82ed3e62baf/studie-tech/TheNinjaRPG"
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
