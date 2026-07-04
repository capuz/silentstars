---
repo: "Thilas/plex-betaseries-webhook"
name: "plex-betaseries-webhook"
description: "Plex webhook to mark series and movies as watched on BetaSeries"
readmeQualityOk: true
url: "https://github.com/Thilas/plex-betaseries-webhook"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [100]
topics: ["plex", "betaseries", "webhook", "plex-webhook", "docker"]
stars: 7
forks: 0
openIssues: 1
closedIssues: 2
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2020-08-22T20:54:14Z"
lastCommitAt: "2026-07-04T22:18:59Z"
lastReleaseAt: "2020-12-23T06:46:26Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero"]
healthScore: 92
undervaluedScore: 70
maintainers: ["dependabot[bot]", "renovate[bot]", "Thilas"]
openGraphImageUrl: "https://opengraph.githubassets.com/c1a843d5732aba31dfe50e6754181ac1259236257a31b80dd6024ac2ea565060/Thilas/plex-betaseries-webhook"
---

# Plex Webhook for BetaSeries

[Plex webhook](https://support.plex.tv/articles/115002267687-webhooks/) to mark series and movies as watched on [BetaSeries](https://www.betaseries.com/).

## Usage

Here are some snippets to help get started creating a docker container.

### docker

```bash
docker create \
  --name=plex-betaseries-webhook \
  -h plex-betaseries-webhook \
  -e SERVER_URL=https://my.plex.webhook \
  -e PLEX_ACCOUNT=xxxxxxxxxxxx \
  -e BETASERIES_CLIENTID=xxxxxxxxxxxx \
  -e BETASERIES_CLIENTSECRET=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx \
  -p 12000:12000 \
  --restart unless-stopped \
  thilas/plex-betaseries-webhook
```

### docker-compose

```yml
version: "3.8"
services:
  plex-betaseries-webhook:
    image: thilas/plex-betaseries-webhook
    container_name: plex-betaseries-webhook
    hostname: plex-betaseries-webhook
    environment:
      - SERVER_URL=https://my.plex.webhook
      - PLEX_ACCOUNT=xxxxxxxxxxxx
      - BETASERIES_CLIENTID=xxxxxxxxxxxx
      - BETASERIES_CLIENTSECRET=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
    ports:
      - 12000:12000
    restart: unless-stopped
```

## Parameters

| Parameter                        | Description…
