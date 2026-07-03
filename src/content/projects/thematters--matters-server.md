---
repo: "thematters/matters-server"
name: "matters-server"
description: "Implementation of the Matters.Town API server"
url: "https://github.com/thematters/matters-server"
homepage: "https://server.matters.town/playground"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [84]
topics: ["matters", "graphql", "graphql-server", "apollo", "apollo-server"]
stars: 78
forks: 14
openIssues: 32
closedIssues: 760
watchers: 5
contributors: 23
recentReleases: 0
createdAt: "2018-11-14T23:56:43Z"
lastCommitAt: "2026-07-03T12:40:59Z"
lastReleaseAt: "2019-06-24T13:43:54Z"
status: "thriving"
tags: ["legacy_hero"]
healthScore: 99
undervaluedScore: 52
maintainers: ["mashbean", "zeckli", "yingshinlee"]
openGraphImageUrl: "https://opengraph.githubassets.com/7c61a6cd06a8e6fa50b9806c0fb328e8efc791fe0c87cb4ca56124c3c250e1fa/thematters/matters-server"
discussionCount: 1
---

# Matters Server

  [](http://commitizen.github.io/cz-cli/)

## Development

### Local

- Install dependencies: `npm install`
- Start Postgres, Redis, stripe-mock, and IPFS daemon
- Setup Environments: `cp .env.example .env`
- Run all migrations: `npm run db:migrate`
- Populate all seeds data if needed: `npm run db:seed`
- Run `npm run start:dev`, then go to `http://localhost:4000/playground` to GraphQL Playground.
- Run test cases: `npm run test`

- Run db rollup process; use the same psql command line parameters if modified in .env; (hint `-d database` and `-U username`, and `-w` to read saved password of psqlrc)

      (cd ./db; PSQL='psql -h localhost ... -w' bash -xe bin/refresh-lasts.sh )

### Docker

- `cp .env.example .env`
- `docker compose build`
- `docker compose run app npm run db:rollback`
- `docker compose run app npm run db:migrate`
- `docker compose run app npm run db:seed`
- `docker compose up`
- Run test cases: `docker compose run app npm run test`
- Init search indices: `docker compose run app npm run search:init`

## DB migrations and seeds

- Create a new migration: `npm run db:migration:make <migration-name>`
- Create a new seed file: `npm run db:seed:make…
