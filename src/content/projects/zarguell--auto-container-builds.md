---
repo: "zarguell/auto_container_builds"
name: "auto_container_builds"
description: "github actions to publish docker builds to dockerhub for images missing docker images by the maintainer, or missing specific architectures"
readmeQualityOk: true
url: "https://github.com/zarguell/auto_container_builds"
language: "Dockerfile"
languages: ["Dockerfile"]
languagePcts: [94]
stars: 5
forks: 2
openIssues: 1
closedIssues: 0
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2023-05-18T00:55:09Z"
lastCommitAt: "2026-08-28T12:23:24Z"
status: "thriving"
tags: []
healthScore: 78
undervaluedScore: 69
maintainers: ["renovate[bot]", "zarguell", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/9032519bdea0bb99fd88d997fe2ef9badde6e7d5804ffc39aa0debbc89d64388/zarguell/auto_container_builds"
---

# Automatic Container Builds

GitHub Actions that build and push Docker images to DockerHub on a weekly schedule. The purpose is to provide multi-arch images for projects where the maintainer doesn't publish official builds, or where official builds are missing specific architectures.

## Images

### Self-Hosted Apps (Active)

| Docker Image | Source Repository | Cron (UTC) | Architectures |
|---|---|---|---|
| `zarguell/sitebox` | [zarguell/sitebox](https://github.com/zarguell/sitebox) | Sun 05:00 | linux/amd64, linux/arm64 |
| `zarguell/typemill` | [typemill/typemill](https://github.com/typemill/typemill) | Sun 06:15 | linux/amd64, linux/arm64 |
| `zarguell/documenso` | [documenso/documenso](https://github.com/documenso/documenso) | Sun 07:05 | linux/amd64, linux/arm64 |
| `zarguell/monica-fpm-supervisor-alpine` | [monicahq/docker](https://github.com/monicahq/docker) | Sun 13:25 | linux/amd64, linux/arm64 |
| `zarguell/monica-nginx` | [monicahq/docker](https://github.com/monicahq/docker) | Sun 13:25 | linux/amd64, linux/arm64 |
| `zarguell/firefly-iii-email-summary` | [davidschlachter/firefly-iii-email-summary](https://github.com/davidschlachter/firefly-iii-email-summary) | Sun…
