---
repo: "cbodden/ambed-xlxd-docker"
name: "ambed-xlxd-docker"
description: "Dockerized XLXd, AMBEd, with reflectors for NXDN, P25, and YSF"
readmeQualityOk: true
url: "https://github.com/cbodden/ambed-xlxd-docker"
homepage: "https://xlx.poa.nyc/index.php"
language: "Shell"
languages: ["Shell", "Dockerfile"]
languagePcts: [53, 47]
topics: ["docker", "xlx", "xlxd", "ambed", "ysf", "ysf-reflector", "ysfreflector", "nxdn", "p25", "nxdn-dashboard"]
stars: 7
forks: 0
openIssues: 0
closedIssues: 3
watchers: 1
contributors: 2
recentReleases: 5
createdAt: "2023-12-24T02:03:49Z"
lastCommitAt: "2026-11-13T18:32:43Z"
lastReleaseAt: "2026-11-13T18:33:18Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 100
undervaluedScore: 86
maintainers: ["cbodden"]
openGraphImageUrl: "https://opengraph.githubassets.com/d5032d0b091e3ba96f4639be6df65347415278c9221707e0d825d3d7fa31ab65/cbodden/ambed-xlxd-docker"
---

# AMBEd / XLXd docker images

Docker images for the [LX3JL/xlxd](https://github.com/LX3JL/xlxd) XLX multiprotocol reflector (`xlxd`) and its AMBE transcoder (`ambed`), plus optional NXDN, P25 and YSF reflectors to peer into it, built for x86_64 and ARM64.

## Images

| Service | Docker Hub | GHCR | Architectures | Base Image |
| :------ | :--------- | :--- | :------------ | :--------- |
| AMBEd   | [cbodden/ambed-docker](https://hub.docker.com/r/cbodden/ambed-docker/tags) | `ghcr.io/cbodden/ambed-docker` | x86_64, ARM64/v8 | Ubuntu Latest |
| XLXd    | [cbodden/xlxd-docker](https://hub.docker.com/r/cbodden/xlxd-docker/tags)   | `ghcr.io/cbodden/xlxd-docker`  | x86_64, ARM64/v8 | Alpine Latest |
| NXDNReflector | [cbodden/nxdnreflector-docker](https://hub.docker.com/r/cbodden/nxdnreflector-docker/tags) | `ghcr.io/cbodden/nxdnreflector-docker` | x86_64, ARM64/v8 | Alpine Latest |
| P25Reflector  | [cbodden/p25reflector-docker](https://hub.docker.com/r/cbodden/p25reflector-docker/tags)   | `ghcr.io/cbodden/p25reflector-docker`  | x86_64, ARM64/v8 | Alpine Latest |
| NXDN dashboard | [cbodden/nxdndashboard-docker](https://hub.docker.com/r/cbodden/nxdndashboard-docker/tags) |…
