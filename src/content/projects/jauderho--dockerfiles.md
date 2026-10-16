---
repo: "jauderho/dockerfiles"
name: "dockerfiles"
description: "Dockerfiles of things"
readmeQualityOk: true
url: "https://github.com/jauderho/dockerfiles"
homepage: "https://hub.docker.com/r/jauderho/"
language: "Dockerfile"
languages: ["Dockerfile", "Shell"]
languagePcts: [78, 22]
topics: ["dockerfiles", "docker", "docker-image", "docker-images", "containers", "dockerfile", "linux"]
stars: 174
forks: 24
openIssues: 4
closedIssues: 25
watchers: 3
contributors: 7
recentReleases: 0
createdAt: "2021-01-09T22:40:40Z"
lastCommitAt: "2026-10-16T08:26:13Z"
status: "thriving"
tags: ["needs_contributors", "legacy_hero", "funded"]
healthScore: 97
undervaluedScore: 44
maintainers: ["gromit-bot", "dependabot[bot]", "jauderho"]
openGraphImageUrl: "https://opengraph.githubassets.com/b0b12dd25b91550e2bc8f140282af97a38114ba4dddc81a0311adb17d047e016/jauderho/dockerfiles"
fundingLinks: ["GITHUB:https://github.com/jauderho"]
discussionCount: 2
---

# dockerfiles

This repo contains Dockerfiles for applications that I find useful.

- Upstream repos are [monitored](https://github.com/jauderho/dockerfiles/blob/main/.github/workflows/update.yml) and new images will be built an hour after a new release is tagged
- Whenever possible, binaries are hardened and images will be optimized for size
- Pull images from [GitHub Container Registry](https://github.com/users/jauderho/packages?repo_name=dockerfiles) (recommended) or [Docker Hub](https://hub.docker.com/u/jauderho/)
- Images are scanned daily using Trivy, Snyk and Anchore. See the [GHA workflow](https://github.com/jauderho/dockerfiles/blob/main/.github/workflows/scan.yml)
- Workflows use commit hashes and Dockerfiles use digest references in accordance with OpenSSF's [Security Scorecard](https://github.com/ossf/scorecard) and enforced using [Allstar](https://github.com/ossf/allstar)
- Runners are hardened using Step Security's [Harden Runner](https://github.com/step-security/harden-runner)
- Images are signed and SBOMs included

## [Build Status](https://github.com/jauderho/dockerfiles/blob/main/BUILD_STATUS.md)

|…
