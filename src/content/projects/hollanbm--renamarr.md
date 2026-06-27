---
repo: "hollanbm/renamarr"
name: "renamarr"
description: "automatically scans and renames files using the sonarr/radarr API"
url: "https://github.com/hollanbm/renamarr"
language: "Python"
languages: ["Python"]
languagePcts: [99]
topics: ["sonarr", "sonarr-api", "sonarr-companion", "radarr", "radarr-api", "radarr-companion"]
stars: 69
forks: 2
openIssues: 2
closedIssues: 41
watchers: 4
contributors: 1
recentReleases: 0
createdAt: "2024-04-25T03:38:13Z"
lastCommitAt: "2026-06-27T00:46:36Z"
lastReleaseAt: "2024-05-13T23:59:56Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 97
undervaluedScore: 49
maintainers: ["renovate[bot]", "hollanbm"]
openGraphImageUrl: "https://opengraph.githubassets.com/7e7e0b7475bd318530ef48d20b066237269b2d8250b8467da59aded29d4923c5/hollanbm/renamarr"
---

# Renamarr

## Quick Start

### docker

1. Copy/Rename [config.yml.example](example/config.yml.example) to `config.yml`
2. Update `config.yml` as needed.
   - See [Configuration](#configuration) for further explanation
3. Bring up app using provided [docker-compose.yml](example/docker-compose.yml)

#### Troubleshooting

Image tags ending in `-dev` can be used for troubleshooting purposes, but are not intended for normal usage. Pre-release images are tagged with their specific release version and do not change or overwrite the `latest` or `latest-dev` tags.

## How it works

### Renamarr

This job uses the [Sonarr API](https://sonarr.tv/docs/api/)/[Radarr API](https://radarr.video/docs/api/) to do the following

- Iterate over all items (Movies or Series)
  - Checks if any items need to be renamed
    - Radarr [get_api_v3_rename](https://radarr.video/docs/api/#/RenameMovie/get_api_v3_rename)
    - Sonarr [get_api_v3_rename](https://sonarr.tv/docs/api/#/RenameEpisode/get_api_v3_rename)
  - Triggers a rename on any item that need be renamed
    - Series renames are batched up, for one rename call per series
    - Movie renames are discovered per movie, then initiated in one batch…
