---
repo: "blacktop/docker-ghidra"
name: "docker-ghidra"
description: "Ghidra Client/Server Docker Image"
readmeQualityOk: true
url: "https://github.com/blacktop/docker-ghidra"
language: "Dockerfile"
languages: ["Dockerfile", "Shell"]
languagePcts: [47, 41]
topics: ["ghidra", "disassembler", "java", "nsa", "docker", "docker-image"]
stars: 263
forks: 67
openIssues: 3
closedIssues: 20
watchers: 8
contributors: 9
recentReleases: 0
createdAt: "2019-03-06T00:16:57Z"
lastCommitAt: "2026-11-15T11:24:09Z"
status: "thriving"
tags: ["legacy_hero", "funded"]
healthScore: 80
undervaluedScore: 26
maintainers: ["blacktop", "dependabot[bot]", "I-Al-Istannen"]
openGraphImageUrl: "https://opengraph.githubassets.com/75980157bed2f8223227b56a57ce0ef51a89beff36806c23d33f1e7a232e2643/blacktop/docker-ghidra"
fundingLinks: ["PATREON:https://patreon.com/blacktop_"]
---

## Why?

Cuz installing Java on your Mac is gross. :smirk:

## Dependencies

- [eclipse-temurin](https://hub.docker.com/_/eclipse-temurin)

## Image Tags

```bash
REPOSITORY               TAG                 SIZE
blacktop/ghidra          latest              1.45GB
blacktop/ghidra          10                  1.45GB
blacktop/ghidra          10-beta             1.4GB
blacktop/ghidra          9.2                 1.33GB
blacktop/ghidra          9.1                 1.18GB
blacktop/ghidra          9.0                 1.18GB
```

> **NOTE:** tag `beta` is built from `master`

## Getting Started

### Client

#### On macOS

1. Install XQuartz `brew install xquartz`
2. Install socat `brew install socat`
3. `open -a XQuartz` and make sure you **"Allow connections from network clients"** (in XQuartz > Preferences... > Security)
4. Now add the IP using Xhost with: `xhost + 127.0.0.1` or `xhost + $(ipconfig getifaddr en0)`
5. Start socat `socat TCP-LISTEN:6000,reuseaddr,fork UNIX-CLIENT:\"$DISPLAY\"`
6. Start up Ghidra

```bash
$ docker run --init -it --rm \
             --name ghidra \
             --cpus 2 \
             --memory 4g \
             -e MAXMEM=4G \
             -e…
