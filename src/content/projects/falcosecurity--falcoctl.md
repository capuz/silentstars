---
repo: "falcosecurity/falcoctl"
name: "falcoctl"
description: "Administrative tooling for Falco"
readmeQualityOk: true
url: "https://github.com/falcosecurity/falcoctl"
language: "Go"
languages: ["Go"]
languagePcts: [100]
stars: 131
forks: 70
openIssues: 4
closedIssues: 117
watchers: 10
contributors: 46
recentReleases: 0
createdAt: "2019-08-30T23:13:43Z"
lastCommitAt: "2026-10-26T09:17:51Z"
lastReleaseAt: "2022-10-20T10:54:10Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero", "fork_magnet"]
healthScore: 96
undervaluedScore: 48
maintainers: ["dependabot[bot]", "leogr", "arpitjain099"]
openGraphImageUrl: "https://opengraph.githubassets.com/93f2f73b0a44501549dfdefe4439006241548170d61c52a2d17789f90219f47a/falcosecurity/falcoctl"
---

# 🧰 falcoctl

The official CLI tool for working with [Falco](https://github.com/falcosecurity/falco) and its [ecosystem components](https://falco.org/docs/#what-are-the-ecosystem-projects-that-can-interact-with-falco).

## Installation
### Install falcoctl manually
You can download and install *falcoctl* manually following the appropriate instructions based on your operating system architecture.
#### Linux
##### AMD64
```bash
LATEST=$(curl -sI https://github.com/falcosecurity/falcoctl/releases/latest | awk '/location: /{gsub("\r","",$2);split($2,v,"/");print substr(v[8],2)}')
curl --fail -LS "https://github.com/falcosecurity/falcoctl/releases/download/v${LATEST}/falcoctl_${LATEST}_linux_amd64.tar.gz" | tar -xz
sudo install -o root -g root -m 0755 falcoctl /usr/local/bin/falcoctl
```
##### ARM64
```bash
LATEST=$(curl -sI https://github.com/falcosecurity/falcoctl/releases/latest | awk '/location: /{gsub("\r","",$2);split($2,v,"/");print substr(v[8],2)}')
curl --fail -LS "https://github.com/falcosecurity/falcoctl/releases/download/v${LATEST}/falcoctl_${LATEST}_linux_arm64.tar.gz" | tar -xz
sudo install -o root -g root -m 0755 falcoctl /usr/local/bin/falcoctl
```
> NOTE: Make sure…
