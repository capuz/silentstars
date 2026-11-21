---
repo: "hectorm/docker-compose-helpers"
name: "docker-compose-helpers"
description: "Some utilities for Docker Compose."
readmeQualityOk: true
url: "https://github.com/hectorm/docker-compose-helpers"
language: "Shell"
languages: ["Shell"]
languagePcts: [100]
stars: 7
forks: 2
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2019-05-29T18:11:38Z"
lastCommitAt: "2026-11-21T13:27:40Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero", "funded"]
healthScore: 73
undervaluedScore: 41
maintainers: ["hectorm"]
openGraphImageUrl: "https://opengraph.githubassets.com/2e640508da325dec45bcf895260a908e12b758c39e6067d1c88b5174d78e7811/hectorm/docker-compose-helpers"
fundingLinks: ["GITHUB:https://github.com/hectorm", "CUSTOM:https://hector.molinero.dev/donate"]
---

## Installation

```sh
curl --proto '=https' --tlsv1.3 --fail 'https://raw.githubusercontent.com/hectorm/docker-compose-helpers/master/bin/docker-compose-helpers-upgrade' | sudo sh
```

## Usage

Each deployment is a git clone in `/etc/docker-compose/<name>/`, with its restic repository URL and password in `/etc/restic/<name>/repository` and `/etc/restic/<name>/password`.

```sh
systemctl enable --now docker-compose@<name>.service

docker-compose-restic <name> init
systemctl enable --now docker-compose-backup@<name>.timer

systemctl enable --now docker-compose-update@<name>.timer
```

Backups include the deployment directory, its non-external volumes and its image digests.
