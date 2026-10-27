---
repo: "vevcom/omegaweb-next"
name: "omegaweb-next"
description: "Omegaweb Next: Omega's website"
readmeQualityOk: true
url: "https://github.com/vevcom/omegaweb-next"
homepage: "https://omega.ntnu.no"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [97]
stars: 14
forks: 2
openIssues: 79
closedIssues: 87
watchers: 0
contributors: 18
recentReleases: 1
createdAt: "2023-08-25T16:52:11Z"
lastCommitAt: "2026-10-27T09:16:44Z"
lastReleaseAt: "2026-10-22T09:28:34Z"
status: "thriving"
tags: ["needs_contributors", "hidden_gem"]
healthScore: 90
undervaluedScore: 70
maintainers: ["Paulijuz", "kake21", "JohanHjelsethStorstad"]
openGraphImageUrl: "https://opengraph.githubassets.com/e96a846ab26248a11b493be3210b17f530cad885a41acddf3eddcb3d7193fea6/vevcom/omegaweb-next"
---

# Project Next
Project Next is the new website for Sanctus Omega Broderskab.

## Getting started

For getting started please refer to our [Getting Started Guide](https://github.com/vevcom/projectNext/wiki/Getting_Started).

## Development

Have the docker deamon running, then run:

```bash
npm run docker:dev
```

or run

```bash
docker compose -f docker-compose.dev.yml up --build
```

#### DevContainer

To setup the development container see [this guide](https://github.com/vevcom/projectNext/wiki/Getting_Started#development-container).

If you want to have access to the container outside vscode, use the command bellow.
```bash
docker exec -it -w /workspaces/projectNext pn-dev /bin/bash
```

#### Working with the DB

To remigrate the db, just rerun the prisma container
To regenerate the client-libary from the schema file run:

```bash
npx prisma generate
```

in the projectnext container

#### Seeding

Every time the dev container starts, it applies any pending migrations and upserts the seed data, so your data survives restarts. To wipe the database and seed it from scratch, run the following command. It works whether or not the dev environment is running.

```bash
npm run…
