---
repo: "falcosecurity/falcoctl"
name: "falcoctl"
description: "Administrative tooling for Falco"
readmeQualityOk: true
url: "https://github.com/falcosecurity/falcoctl"
language: "Go"
languages: ["Go"]
languagePcts: [100]
stars: 129
forks: 67
openIssues: 4
closedIssues: 117
watchers: 10
contributors: 46
recentReleases: 0
createdAt: "2019-08-30T23:13:43Z"
lastCommitAt: "2026-09-01T08:47:57Z"
lastReleaseAt: "2022-10-20T10:54:10Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero", "fork_magnet"]
healthScore: 96
undervaluedScore: 48
maintainers: ["dependabot[bot]", "arpitjain099", "c2ndev"]
openGraphImageUrl: "https://opengraph.githubassets.com/58404b47184ea7c574a0ec5c5cba9c2cc4fcba634bb0c227f9ad5c0a8e390430/falcosecurity/falcoctl"
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
