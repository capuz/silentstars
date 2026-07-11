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
stars: 28
forks: 2
openIssues: 6
closedIssues: 60
watchers: 4
contributors: 8
recentReleases: 1
createdAt: "2024-01-25T12:38:51Z"
lastCommitAt: "2026-07-11T05:55:53Z"
lastReleaseAt: "2026-07-07T21:04:51Z"
status: "thriving"
tags: []
healthScore: 97
undervaluedScore: 63
maintainers: ["rdmark", "dependabot[bot]", "andylemin"]
openGraphImageUrl: "https://opengraph.githubassets.com/3689d26a890efbdec40b2481a50c8f064d582d5718f037b983ad7c82ba779c1f/Netatalk/netatalk-client"
---

# AFP File Sharing Client for Netatalk and Macs

## Description

**Netatalk Client** is a file sharing client written in C
which can be used to access AFP shares exposed by multiple devices,
notably personal file sharing on older Mac OS X and Classic Mac OS computers,
[Netatalk](https://netatalk.io/) servers hosted on Linux/*BSD/Solaris/macOS,
Apple AirPort and Time Capsule products as well as other AFP enabled NAS devices from various vendors.

Netatalk Client is an improved fork of [afpfs-ng](https://sourceforge.net/projects/afpfs-ng/).
It supports most major features of the AFP protocol v2.1 through v3.4, secure authentication,
file and directory operations, filesystem extended attributes, and FUSE-based mounting of AFP shares.

## Usage

You can use Netatalk Client either to mount an AFP share with FUSE,
or interactively with the command-line client.

The shared library *libafpclient* can also be used to add AFP support to other applications.
For instance, [kio-afp](https://invent.kde.org/dmark/kio-afp) which provides a KDE KIO worker for browsing
AFP shares in Dolphin and other KDE applications.

### FUSE

Mount the *File Sharing* volume from afpserver.local on…
