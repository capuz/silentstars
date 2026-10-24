---
repo: "crypt0rr/EdgeWatch"
name: "EdgeWatch"
description: "(Continuously) scans your internet facing infrastructure to discover exposed ports and services, helping you identify changes and reduce your external attack surface."
readmeQualityOk: true
url: "https://github.com/crypt0rr/EdgeWatch"
homepage: "https://edgewatch.offsec.nl"
language: "Go"
languages: ["Go"]
languagePcts: [79]
topics: ["easm", "naabu", "nmap", "port-scan"]
stars: 5
forks: 0
openIssues: 1
closedIssues: 931
watchers: 0
contributors: 2
recentReleases: 10
createdAt: "2026-09-03T07:17:19Z"
lastCommitAt: "2026-10-24T08:07:49Z"
lastReleaseAt: "2026-09-04T18:25:36Z"
status: "newborn"
tags: ["hidden_gem", "release_machine"]
healthScore: 100
undervaluedScore: 68
maintainers: ["crypt0rr", "renovate[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/32abf20118b749888c875cdeed5bedd3e30d421d2e4ba56fba93ffd919c8df17/crypt0rr/EdgeWatch"
---

# EdgeWatch

EdgeWatch is a self-hosted network-surface monitor. It schedules TCP and UDP
scans, learns what is expected, and notifies you when the observed surface
changes. It ships as one Docker image with an embedded web console and SQLite
storage.

https://github.com/user-attachments/assets/ddff32e8-617a-477f-b9b7-8681dbc25b82

> Only scan systems you own or are authorized to assess. Full-range UDP scans
> can take many hours and generate significant traffic.

## Quick start

Requirements: Docker Engine 25 or later and Docker Compose v2 on a host
supporting host networking and scanner capabilities. From a checkout of this repository:

```sh
cp config.example.yaml config.yaml
```

Create the data directory for your Docker mode. For standard rootful Docker:

```sh
sudo install -d -m 0750 -o 0 -g 0 ./data
```

For rootless Docker:

```sh
install -d -m 0750 ./data
```

With user-namespace remapping, use the host UID mapped to container UID 0. The
container runs as UID 0 with filesystem capabilities dropped; keep data owned
by that mapped identity and do not use world-writable permissions. For an
existing deployment, read the installation and backup guides before changing…
