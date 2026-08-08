---
repo: "zephyros-dev/docker-koreader"
name: "docker-koreader"
description: "Koreader running on web browser using container with VNC"
readmeQualityOk: true
url: "https://github.com/zephyros-dev/docker-koreader"
language: "Dockerfile"
languages: ["Dockerfile"]
languagePcts: [100]
stars: 58
forks: 4
openIssues: 3
closedIssues: 5
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2023-07-18T08:40:31Z"
lastCommitAt: "2026-08-08T04:34:58Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 91
undervaluedScore: 42
maintainers: ["renovate[bot]", "zephyros-dev"]
openGraphImageUrl: "https://opengraph.githubassets.com/377b3f6c1a18fed37ba6be5e4df5e87f244f45700e04d70ed3b926c202b1a875/zephyros-dev/docker-koreader"
---

# Description

Koreader installed in a docker container, accessible via browser.

## Tags

The image name is `ghcr.io/zephyros-dev/koreader`. The following tags are supported:

- `latest`: Latest version built on the main branch
- `Koreader.version`: Specific version of Koreader. e.g: `v2023.06.1`

## Installation

1. Create a `docker-compose.yaml`. Checkout the [docker-compose.yaml](https://github.com/zephyros-dev/docker-koreader/blob/HEAD/docker-compose.yaml) for example.

2. Run the following command to start the container

   ```bash
   docker-compose up -d
   ```

3. Open your browser and go to `http://localhost:3000`

## Configurations

- The image is based on [linuxserver/baseimage-selkies](https://github.com/linuxserver/docker-baseimage-selkies). See the base image for more configurations options.
- The koreader configurations can be found in `/config/.config/koreader` inside the container.

### Renovate autoupdate

- For [renovate user](https://github.com/renovatebot/renovate), add this to the renovate configuration for the tags auto-update:

  ```json
  {
    "extends": ["github>zephyros-dev/docker-koreader"],
  }
  ```
