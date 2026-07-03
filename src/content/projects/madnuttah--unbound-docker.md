---
repo: "madnuttah/unbound-docker"
name: "unbound-docker"
description: "🛡️ This distroless Unbound Docker image is based on Alpine Linux with focus on security, privacy, performance and a small image size. And with Pi-hole in mind."
url: "https://github.com/madnuttah/unbound-docker"
homepage: "https://hub.docker.com/r/madnuttah/unbound"
language: "Dockerfile"
languages: ["Dockerfile"]
languagePcts: [88]
topics: ["alpine-linux", "docker", "unbound", "dnssec", "dns", "dns-over-https", "dns-over-tls", "multiarch", "dns-privacy", "dnscrypt"]
stars: 357
forks: 30
openIssues: 1
closedIssues: 61
watchers: 4
contributors: 13
recentReleases: 0
createdAt: "2021-12-20T15:21:09Z"
lastCommitAt: "2026-07-03T06:23:27Z"
lastReleaseAt: "2022-05-24T09:44:50Z"
status: "thriving"
tags: []
healthScore: 99
undervaluedScore: 39
maintainers: ["madnuttah", "madnuttah-bot", "renovate[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/440215882/b79c7ae3-c3d4-4a6a-a1d7-d27fa626754b"
discussionCount: 13
---

# Alpine Linux Based DNSSEC Validating Recursive Unbound DNS Resolver Docker Image

<details>
  <summary>Build status (click to expand)</summary><br>

</details>

This repository provides a lightweight Alpine Linux based Docker image running [Unbound](https://unbound.net), an open source high performance DNS resolver developed by the people at [NLnet Labs](https://nlnetlabs.nl). The image is a secure single layer distroless scratch build that follows best practice principles and is suitable for professional and personal use alike.

<details>
  <summary>Features (click to expand)</summary><br>

| Feature                                  | Supported | Explanation |
| ---------------------------------------- | --------- | ----------- |
| Unprivileged user                        | yes | Runs Unbound without root to reduce attack surface. |
| Unprivileged port (privileged possible)  | yes | Allows binding to high ports by default or low ports when needed. |
| Custom UID and GID build and environment variables | yes | Lets you match container permissions to host requirements. |
| Optional full rootless mode              | yes | Enables running the container without any root privileges.…
