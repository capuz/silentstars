---
repo: "st-universe/core"
name: "core"
description: "ST-Universe Browsergame Source Code"
readmeQualityOk: true
url: "https://github.com/st-universe/core"
homepage: "https://www.stuniverse.de"
language: "PHP"
languages: ["PHP"]
languagePcts: [83]
topics: ["stu", "browsergame", "php"]
stars: 25
forks: 13
openIssues: 13
closedIssues: 233
watchers: 8
contributors: 9
recentReleases: 0
createdAt: "2019-07-30T18:34:09Z"
lastCommitAt: "2026-09-26T08:46:33Z"
status: "thriving"
tags: ["needs_contributors", "hidden_gem", "legacy_hero", "fork_magnet"]
healthScore: 98
undervaluedScore: 67
maintainers: ["g5bot", "Huxinator", "renovate[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/7bbdb9b72279f7d793f3d4a65d87332321c2b18b3f793decfb6668b2932970a0/st-universe/core"
---

# ST-Universe Source

## Lokales Setup

Benötigte Software: Linux (geht u.U. auch unter macOS) docker, php 8.5, composer, git.

- Repository forken und das Source-Code auschecken
- config.dist.json nach config.json kopieren und anpassen
- make local-setup
- Use the cli command to create a new user `./bin/cli user:create --help`

Danach sollte die Software via <http://localhost:1337> erreichbar sein, ggf. kann
es sein, dass der Hostname (stu-db) nicht aufgelöst werden kann. In diesem
Fall muss für die im `docker-compose.yml` File hinterlegte IP ein Eintrag in
der Hosts-Datei des Betriebssystems gemacht werden.

## Server-Deployment

Code:

- Repository auschecken
- make init-production
- make dirs
- rsync -rv --delete-after --exclude=assets --links --exclude=config.json --exclude=src/Public/admin/manage --exclude=src/Public/avatare/* src bin vendor Makefile cli-config.php config.dist.json /path/to/stuniverse-source/
- cd /path/to/stuniverse-source && make clearCache && make migrateDatabase

### Assets

- Repository auschecken
- php generator/building_generator/gen.php
- php generator/field_generator/generator.php
- rsync -rv --delete-after --exclude=dist --exclude=".git" .…
