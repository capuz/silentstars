---
repo: "NEU-Libraries/cerberus"
name: "cerberus"
description: "Digital Repository Service"
url: "https://github.com/NEU-Libraries/cerberus"
language: "Ruby"
languages: ["Ruby"]
languagePcts: [73]
stars: 8
forks: 0
openIssues: 77
closedIssues: 859
watchers: 12
contributors: 16
recentReleases: 0
createdAt: "2013-07-19T14:56:33Z"
lastCommitAt: "2026-06-25T01:32:13Z"
lastReleaseAt: "2015-05-30T01:48:28Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero", "community_watch"]
healthScore: 98
undervaluedScore: 63
maintainers: ["dgcliff"]
openGraphImageUrl: "https://opengraph.githubassets.com/d9a3fea7ab0c382c3a6ba2519f0687b38fb2115ed8d7339657ea37b6dd9a83a3/NEU-Libraries/cerberus"
---

# Cerberus

Cerberus is the Ruby on Rails codebase for Northeastern's Digital Repository Service.

The code base utilizes Valkyrie, Blacklight, Solr and PostgreSQL

## Getting started

Make sure you have docker installed.

Get a copy of the codebase
```
git clone git@github.com:NEU-Libraries/cerberus.git
```

Make an .env file from .env.example, change as needed (i.e. ARCH to arm64)
```
cp .env.example .env
```

Use docker compose to pull down the containers and build Cerberus
```
docker compose -f docker-compose.yml -f docker-compose.dev.yml up --build
```

Once running, use another console/tab to go inside the container.
```
docker exec -ti cerberus-web-1 /bin/bash
```

Once inside, generate some test objects
```
bundle exec rake reset:data
```
