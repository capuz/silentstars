---
repo: "ketan/paragliding-meshmap"
name: "paragliding-meshmap"
description: "Meshtastic map for paragliding pilots in India"
readmeQualityOk: true
url: "https://github.com/ketan/paragliding-meshmap"
homepage: "https://tracker.bircom.in"
language: "JavaScript"
languages: ["JavaScript", "TypeScript"]
languagePcts: [57, 42]
topics: ["meshtastic", "paragliding"]
stars: 11
forks: 3
openIssues: 10
closedIssues: 13
watchers: 1
contributors: 4
recentReleases: 0
createdAt: "2024-06-28T04:56:10Z"
lastCommitAt: "2026-10-09T10:50:05Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 89
undervaluedScore: 72
maintainers: ["renovate[bot]", "ketan"]
openGraphImageUrl: "https://opengraph.githubassets.com/d845a5b9279acd60ba3ac26309479d0fca79accbf0601ca3cb3107c5766da022/ketan/paragliding-meshmap"
---

# paragliding-meshmap

# Deployment

```bash
yarn install
yarn run docker:build
docker run -it -e DATABASE_URL=postgres://username:password@hostname:port/database-name paragliding-meshmap
```

# Development

Here's how you set up a development environment for contributing to paragliding-meshmap. The first step
is to run a postgres database. Keep this running in a terminal:

```bash
docker run --env=POSTGRES_USER=postgres --env=POSTGRES_PASSWORD=postgres --env=POSTGRES_DB=meshmap -p 5432:5432 --volume=pgdata:/var/lib/postgresql/data -ti postgres:alpine
```

Set up an environment for your `yarn` commands:

```bash
cp .env.sample .env.development.local
```

Update the following line in `.env.development.local` to connect to the database server you
started above.

```
DATABASE_URL=postgres://postgres:postgres@localhost:5432/meshmap
```

Now build the dependencies and run the backend and frontend together:

```bash
yarn install
yarn run build
yarn run start --mqtt-topics 'msh/#' --mqtt-broker-url=mqtt://mqtt.bircom.in --no-mqtt
```

Connect to http://localhost:5173 in your web browser, and the application should show up.
In order to get actual data showing up in the map, you'll need to…
