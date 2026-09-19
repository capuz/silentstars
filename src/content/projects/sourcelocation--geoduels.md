---
repo: "sourcelocation/geoduels"
name: "geoduels"
description: "GeoDuels — A free GeoGuessr alternative with duels, rankings, custom lobbies, and cheater mitigations."
readmeQualityOk: true
url: "https://github.com/sourcelocation/geoduels"
homepage: "https://geoduels.io"
language: "TypeScript"
languages: ["TypeScript", "Go"]
languagePcts: [50, 42]
topics: ["geography", "geoguessr", "k3s", "k8s", "maps", "postgres", "react", "redis", "streetview"]
stars: 69
forks: 17
openIssues: 5
closedIssues: 4
watchers: 2
contributors: 4
recentReleases: 0
createdAt: "2026-05-06T09:13:40Z"
lastCommitAt: "2026-09-19T01:36:43Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 84
undervaluedScore: 33
maintainers: ["sourcelocation", "Puupuls", "comodo08"]
openGraphImageUrl: "https://opengraph.githubassets.com/5ee3b1c2f4c3ad97f6087ac1f0778405ee0321a9ff6c3f39364fd10c9c889476/sourcelocation/geoduels"
---

# GeoDuels

A free multiplayer geography game with community maps and competitive duels. Play at [geoduels.io](https://geoduels.io/).

Not a pretty readme, but does the job.

## Local development

Use Docker, Go 1.26, and Node 22 (matching CI).

```sh
cp infra/compose/.env.example infra/compose/.env
cp web/.env.local.example web/.env.local
./infra/scripts/dev-up.sh
npm ci
npm run dev
```

Open `http://localhost:3000`. Start optional workers with `./infra/scripts/compose.sh up -d moderation-worker discord-worker`; stop with `./infra/scripts/compose.sh down`.

## Development references

- [AGENTS.md](https://github.com/sourcelocation/geoduels/blob/HEAD/AGENTS.md): constraints and cross-cutting behavior to preserve.
- [Development notes](https://github.com/sourcelocation/geoduels/blob/HEAD/docs/development.md): generated code, meaningful verification, local infrastructure, releases, and map tools.
- [Extension notes](https://github.com/sourcelocation/geoduels/blob/HEAD/extension/README.md): local installation and production packaging.
- [Contributor agreement](https://github.com/sourcelocation/geoduels/blob/HEAD/CONTRIBUTOR_LICENSE_AGREEMENT.md) and…
