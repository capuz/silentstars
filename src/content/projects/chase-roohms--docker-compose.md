---
repo: "chase-roohms/docker-compose"
name: "docker-compose"
description: "Central management of my docker-compose files across multiple systems"
readmeQualityOk: true
url: "https://github.com/chase-roohms/docker-compose"
language: "Shell"
languages: ["Shell"]
languagePcts: [100]
topics: ["docker-compose"]
stars: 8
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2025-12-13T22:24:30Z"
lastCommitAt: "2026-11-01T22:59:21Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 66
undervaluedScore: 39
maintainers: ["chase-roohms"]
openGraphImageUrl: "https://opengraph.githubassets.com/1026e760b0612210cb600a84f5bb8548abfdc11056bd9757b75949cab146d3fd/chase-roohms/docker-compose"
---

# chase-roohms/docker-compose

## Useful Aliases
```shell
alias dockdate="docker compose pull && docker compose up -d"
alias dockdate_all="bash /home/neonvariant/docker/docker-compose/scripts/update-all-stacks.sh /home/neonvariant/docker/docker-compose/REPLACEME"
```

## Setting up a machine
```shell
git clone --no-checkout https://github.com/chase-roohms/docker-compose.git
cd ./docker-compose
git sparse-checkout init --no-cone

git sparse-checkout set \
  /.gitignore \
  /scripts/** \
  /REPLACEME/**

git checkout
git pull
```
