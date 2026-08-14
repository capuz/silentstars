---
repo: "Netatalk/netatalk-client"
name: "netatalk-client"
description: "Free and Open Source AFP file sharing client"
readmeQualityOk: true
url: "https://github.com/Netatalk/netatalk-client"
homepage: "https://netatalk.io"
language: "C"
languages: ["C"]
languagePcts: [95]
stars: 30
forks: 1
openIssues: 8
closedIssues: 62
watchers: 4
contributors: 7
recentReleases: 1
createdAt: "2024-01-25T12:38:51Z"
lastCommitAt: "2026-08-14T05:14:02Z"
lastReleaseAt: "2026-07-07T21:04:51Z"
status: "thriving"
tags: []
healthScore: 97
undervaluedScore: 62
maintainers: ["rdmark", "dependabot[bot]", "andylemin"]
openGraphImageUrl: "https://opengraph.githubassets.com/49184fc5832d75d371b50101c52f9d302745f56e2b94042f6ce82b35c64c7d98/Netatalk/netatalk-client"
---

# AFP File Sharing Client for Netatalk and Macs

## Description

**Netatalk Client** is a suite of file sharing clients and libraries for AFP
(Apple Filing Protocol)
which can be used to access remote shares exposed by multiple devices,
notably personal file sharing on older Mac OS X and Classic Mac OS computers,
[Netatalk](https://netatalk.io/) servers hosted on Linux/*BSD/Solaris/macOS,
Apple AirPort and Time Capsule products as well as other AFP enabled NAS devices from various vendors.

Netatalk Client is an improved fork of [afpfs-ng](https://sourceforge.net/projects/afpfs-ng/).
It supports most major features of the AFP protocol v2.1 through v3.4, secure authentication,
file and directory operations, filesystem extended attributes, and FUSE-based mounting of AFP shares.

## Usage

You can use Netatalk Client either to mount an AFP share with FUSE,
or interactively with the command-line client.

Applications can use the stateless *libafpsl* API through
`<netatalk-client/afpsl.h>`, or the opaque stateful *libafpclient* transport API
through `<netatalk-client/transport.h>`.
The stateless API is intended for integrations such as KDE KIO workers and
other applications that need…
