---
repo: "LINBIT/linstor-gui"
name: "linstor-gui"
description: "Web-Based GUI frontend for LINSTOR"
readmeQualityOk: true
url: "https://github.com/LINBIT/linstor-gui"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [99]
stars: 44
forks: 14
openIssues: 1
closedIssues: 7
watchers: 9
contributors: 27
recentReleases: 0
createdAt: "2024-09-12T07:47:01Z"
lastCommitAt: "2026-09-15T08:38:23Z"
lastReleaseAt: "2024-10-03T08:54:12Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 80
undervaluedScore: 55
maintainers: ["Liang0028", "chrboe"]
openGraphImageUrl: "https://opengraph.githubassets.com/e6110ee26ac10d5834c0c36c2f37cf14a3c87f9e2c5114db56785993bc93f768/LINBIT/linstor-gui"
discussionCount: 1
---

# LINSTOR GUI

A web-based graphical user interface for LINBIT SDS (LINSTOR&reg;, DRBD&reg;, and related software).

## Description

`linstor-gui` is a web-based graphical user interface (GUI) for LINBIT SDS.
It provides a user-friendly way to create, manage, and monitor LINSTOR storage objects, such as storage pools, resource groups, resources, volumes, and snapshots.
`linstor-gui` communicates with the LINSTOR API to perform various operations, such as creating and deleting storage pools.
The GUI also provides a dashboard that displays information about the LINSTOR cluster, such as the status of nodes and volumes.

## Getting Started

### Installation on a LINSTOR controller node

This package does not have a standalone server; it requires the LINSTOR environment and serves files through the LINSTOR server. It should be installed on the machine running the LINSTOR controller. After installation, it can be accessed via a URL like `http://192.168.123.117:3370/ui/#!/`, replacing `192.168.123.117` with the IP address of your LINSTOR controller. Please choose your own Linux distribution, for Ubuntu and Debian:

```
sudo add-apt-repository ppa:linbit/linbit-drbd9-stack
sudo apt…
