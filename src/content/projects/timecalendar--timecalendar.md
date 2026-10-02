---
repo: "timecalendar/timecalendar"
name: "timecalendar"
description: "TimeCalendar gives you easy access to your university timetable."
readmeQualityOk: true
url: "https://github.com/timecalendar/timecalendar"
homepage: "https://timecalendar.app"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [79]
stars: 10
forks: 1
openIssues: 0
closedIssues: 6
watchers: 0
contributors: 6
recentReleases: 0
createdAt: "2021-12-29T23:09:13Z"
lastCommitAt: "2026-10-02T10:00:24Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 97
undervaluedScore: 78
maintainers: ["paperclip-timecalendar[bot]", "samuelprak"]
openGraphImageUrl: "https://opengraph.githubassets.com/14cea3632eec067efe3ec831330774577436fda53b543c01a568cc76749f8727/timecalendar/timecalendar"
---

# TimeCalendar

## Development setup

### Docker

To start working on TimeCalendar, you must first [install Docker](https://docs.docker.com/get-docker/).

Once Docker is installed, start the dev-env services (Postgres, Redis, and an
nginx TLS proxy) in the background from the repository root:

```bash
bin/server-compose.sh up -d
```

The wrapper keeps the main checkout's historical `server` Compose project and
gives each worktree its own project, network, containers, and named volumes. The
default URLs remain `https://api.timecalendar.host:1443`, Postgres on
`localhost:37291`, Redis on `127.0.0.1:37292`, and the separately started NestJS
server on `http://localhost:3005`. The self-signed TLS certificate the proxy
serves is generated on first use and is not committed — see
[the dev TLS certificate](https://github.com/timecalendar/timecalendar/blob/HEAD/docs/agent-dev-environment.md#the-dev-tls-certificate).

Choose unoccupied host ports for another worktree with shell-scoped overrides:

```bash
TIMECALENDAR_TLS_PORT=24443 TIMECALENDAR_POSTGRES_PORT=47291 \
  TIMECALENDAR_REDIS_PORT=47292 bin/server-compose.sh up -d
```

Generation and server tests do not need nginx. Start only…
