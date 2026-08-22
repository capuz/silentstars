---
repo: "11notes/docker-netbird"
name: "docker-netbird"
description: "run netbird rootless and distroless."
readmeQualityOk: true
url: "https://github.com/11notes/docker-netbird"
language: "Go"
languages: ["Go", "HCL", "Dockerfile"]
languagePcts: [40, 24, 21]
stars: 136
forks: 11
openIssues: 0
closedIssues: 5
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2025-06-18T09:31:38Z"
lastCommitAt: "2026-08-22T04:07:50Z"
lastReleaseAt: "2025-08-09T06:55:06Z"
status: "thriving"
tags: []
healthScore: 89
undervaluedScore: 45
maintainers: ["11notes", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/39832a5eb80c31e854db8c049a6a76bd6673a243d770133d3664f8ddab77e060/11notes/docker-netbird"
discussionCount: 0
---

# NETBIRD
[<img src="https://img.shields.io/github/issues/11notes/docker-netbird?color=7842f5">](https://github.com/11notes/docker-netbird/issues)

run netbird rootless and distroless.

# INTRODUCTION 📢

[NetBird](https://github.com/netbirdio/netbird) (created by [netbird](https://github.com/netbirdio)) combines a WireGuard-based overlay network with Zero Trust Network Access, providing a unified open source platform for reliable and secure connectivity. Create your own selfhosted ZTNA mesh network.

# CAUTION ⚠️
> [!CAUTION]
>Post tag 0.70.5 this image will now run the embedded IdP by default as well as using the unified management binary. If you were using an external IdP you can check the [guide](https://docs.netbird.io/selfhosted/migration/external-to-embedded-idp) from netbird what you can and need to do. This image is now also using the yml config and not the management.json anymore, please prepare your config accordingly!

# SYNOPSIS 📖
**What can I do with this?** This image will run netbird from a single image (not multiple) [rootless](https://github.com/11notes/RTFM/blob/main/linux/container/image/rootless.md) and…
