---
repo: "daemonless/daemonless"
name: "daemonless"
description: "Native FreeBSD OCI container images - documentation and scripts"
readmeQualityOk: true
url: "https://github.com/daemonless/daemonless"
homepage: "https://daemonless.io/"
language: "Python"
languages: ["Python"]
languagePcts: [80]
topics: ["documentation", "freebsd", "oci-image", "podman"]
stars: 74
forks: 3
openIssues: 2
closedIssues: 9
watchers: 2
contributors: 2
recentReleases: 0
createdAt: "2025-12-24T21:44:10Z"
lastCommitAt: "2026-11-18T12:03:06Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 96
undervaluedScore: 45
maintainers: ["daemonless-bot[bot]", "ahze", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/e3528f6e356218a4cc4ac9efc98000dabee1a99cd0d5765f19d6225e0cc31e46/daemonless/daemonless"
discussionCount: 10
---

# Daemonless

Native FreeBSD OCI container images for self-hosted applications.

**No Linux VM required.** Run your containers directly on FreeBSD using Podman + ocijail.

## Features

- **One Process per Container** - The app is the container's process, so your runtime restarts, stops and logs it; multi-service appliances use `rcd`
- **PUID/PGID Support** - Seamless permission mapping for ZFS datasets and bind mounts
- **Multiple Tags** - Choose between upstream binaries (`:latest`), quarterly packages (`:pkg`), or rolling packages (`:pkg-latest`)
- **Automated CI/CD** - Every image built and tested automatically
