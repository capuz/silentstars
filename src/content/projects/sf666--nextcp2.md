---
repo: "sf666/nextcp2"
name: "nextcp2"
description: "nextcp/2 is a modern web based UPnP control point."
readmeQualityOk: true
url: "https://github.com/sf666/nextcp2"
homepage: "https://sf666.github.io/nextcp2/"
language: "Java"
languages: ["Java"]
languagePcts: [73]
topics: ["upnp", "control-point", "webplayer"]
stars: 6
forks: 1
openIssues: 0
closedIssues: 5
watchers: 4
contributors: 3
recentReleases: 3
createdAt: "2020-10-27T14:29:33Z"
lastCommitAt: "2026-10-31T09:54:26Z"
lastReleaseAt: "2026-08-17T11:28:37Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 96
undervaluedScore: 87
maintainers: ["sf666"]
openGraphImageUrl: "https://opengraph.githubassets.com/d0974c586002bfd5dfae54be8cd2a36bc897b7f9257508f5ff223525753e8303/sf666/nextcp2"
---

# nextCP/2

NextCP/2 is a web-based UPnP control point written in Java and Typescript.

Documentation and installation instructions are available at [GitHub Pages](https://sf666.github.io/nextcp2).

## running the application

Download a platform release or the docker image and start it. 

By default the application will start on the current interface on port `8085`.

Open your browser and connect to the application:

```
http://localhost:8085
```

If nextcp runs on a server or remote machine, replace `localhost` by the IP address of your device.

## system requirements

- minimum JDK 25
- maven 3.8
- yarn
- GIT client

## browser requirements

- Web browser needs support for server-sent-events. Current Chromium based browser should work.

# Developer notice

## Install maven dependencies

nextCP/2 depends on two custom forks that are **not published to Maven Central**
and must be built from source into the local maven repository before building
nextCP/2 itself:

| Fork                                                     | Maven artifact          | git tag                       |
| -------------------------------------------------------- | ----------------------- |…
