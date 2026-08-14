---
repo: "xmidt-org/talaria"
name: "talaria"
description: "The Xmidt routing agent."
readmeQualityOk: true
url: "https://github.com/xmidt-org/talaria"
language: "Go"
languages: ["Go"]
languagePcts: [99]
stars: 11
forks: 24
openIssues: 35
closedIssues: 99
watchers: 21
contributors: 29
recentReleases: 0
createdAt: "2016-03-07T11:18:37Z"
lastCommitAt: "2026-08-14T05:14:49Z"
lastReleaseAt: "2017-06-28T17:46:33Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "hidden_gem", "legacy_hero", "community_watch", "fork_magnet"]
healthScore: 94
undervaluedScore: 68
maintainers: ["dependabot[bot]", "piccione99", "denopink"]
openGraphImageUrl: "https://opengraph.githubassets.com/c5923391bbc05340dfbac83863bbb732efaa2435fde4ad3336216b0034ae4dc1/xmidt-org/talaria"
---

# talaria
(pronounced "tuh-laa-ree-uh")

## Summary
Talaria's primary function is to interact with the devices:
forwarding device events and sending requests to the device then forwarding the response.
The communication with the device happens over a websocket
using [WRP Messages](https://github.com/xmidt-org/wrp-c/wiki/Web-Routing-Protocol).

## Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Details](#details)
- [Build](#build)
- [Deploy](#deploy)
- [Contributing](#contributing)

## Code of Conduct

This project and everyone participating in it are governed by the [XMiDT Code Of Conduct](https://xmidt.io/code_of_conduct/). 
By participating, you agree to this Code.

## Details

### Device Interaction
Talaria's primary function is to interact with the devices.
The communication with the device happens over a websocket
using [WRP Messages](https://github.com/xmidt-org/wrp-c/wiki/Web-Routing-Protocol).

Talaria can send events originating from the device as well as emit its own events.
When this occurs, the event is sent to [Caduceus](https://github.com/xmidt-org/caduceus).

Talaria has three API endpoints to interact with the devices connected to itself.
A…
