---
repo: "twirapp/twir"
name: "twir"
description: "Twitch chat bot written on Golang and TypeScript."
readmeQualityOk: true
url: "https://github.com/twirapp/twir"
homepage: "https://twir.app"
language: "Go"
languages: ["Go", "Vue"]
languagePcts: [63, 23]
topics: ["bot", "twitch", "cloud", "golang", "streamers", "streaming", "typescript", "chat"]
stars: 215
forks: 16
openIssues: 61
closedIssues: 317
watchers: 3
contributors: 23
recentReleases: 10
createdAt: "2022-06-01T14:28:31Z"
lastCommitAt: "2026-07-06T07:02:36Z"
lastReleaseAt: "2026-06-12T22:52:10Z"
status: "thriving"
tags: ["solo_builder", "release_machine"]
healthScore: 96
undervaluedScore: 46
maintainers: ["Satont", "LWJerri"]
openGraphImageUrl: "https://opengraph.githubassets.com/4f750ebcaab5d0435a9316dc17bbc31f281ba90ecceeb200f5970d20e47e38f5/twirapp/twir"
---

# Development

## Requirements

- [Bun (1.3.5+)](https://bun.sh)
- [Go (1.24+)](https://go.dev/)

- [Docker](https://docs.docker.com/engine/)

### Development

> [!NOTE]
> For MOST of project management tasks we use own written cli. You can use `bun cli help` for print
> cli usage

- Create twitch application https://dev.twitch.tv/console/apps
- Set `http://localhost:3005/login` and `https://tokens-generator.twir.app` as your redirect url's
  for twitch application
- Go to https://tokens-generator.twir.app, set clientID and clientSecret from your app and generate
  initial token WITH
  ALL SCOPES
- `cp .env.example .env` and fill required envs

- Run needed services (Postgres, Adminer, Redis, Minio, e.t.c)

```bash
docker compose -f docker-compose.dev.yml up -d
```

- Start project

```bash
bun dev
```

- Visit https://localhost:3005

## Writing migrations

- Use command for create new migration

```bash
bun cli migrations create
```

- Navigate to folder and edit new migration file

```bash
cd libs/migrations/migrations
```

- Run new created migrations (optional, because it's running when you execute `bun dev`)

```bash
bun cli migrations run
```

## Https on localhost…
