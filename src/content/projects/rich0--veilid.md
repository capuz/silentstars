---
repo: "rich0/veilid"
name: "veilid"
description: "Docker image for veilid"
readmeQualityOk: true
url: "https://github.com/rich0/veilid"
language: "Dockerfile"
languages: ["Dockerfile"]
languagePcts: [86]
stars: 11
forks: 4
openIssues: 1
closedIssues: 1
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2023-08-12T09:42:25Z"
lastCommitAt: "2026-11-02T11:36:33Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 69
undervaluedScore: 36
maintainers: ["rich0"]
openGraphImageUrl: "https://opengraph.githubassets.com/9a025487fc5162e01f1a9bc798cab1cccd2bfff5c3a5eb8dbf1db97362a8f548/rich0/veilid"
---

# veilid

Docker image for [veilid-server](https://github.com/veilid/veilid).

## Image

- Registry: `registry.rich0.org/public/veilid` (Zot, public anonymous pull)
- Base: `ubuntu:resolute`
- Packages: `veilid-server`, `veilid-cli` from [packages.veilid.net](https://packages.veilid.net)
- Ports: `5959/tcp` (client), `5050/tcp` + `5050/udp`
- Config: `/etc/veilid-server/veilid-server.conf`

### Pull

```bash
docker pull registry.rich0.org/public/veilid:latest
# or pin a version
docker pull registry.rich0.org/public/veilid:0.5.5
```

Public pulls do not require login.

## Build and publish

```bash
docker login registry.rich0.org -u ci-push -p '<password>'
./build-push.sh
```

Pins `VEILID_VERSION` and publishes to `registry.rich0.org/public/veilid` (`:<version>` and `:latest`).

Nightly builds (from `nightly/`):

```bash
cd nightly
./build-push.sh
```

Tags `:nightly-<date>` and `:nightly`.
