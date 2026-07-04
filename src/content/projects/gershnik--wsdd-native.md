---
repo: "gershnik/wsdd-native"
name: "wsdd-native"
description: "Make your macOS/Linux/BSD/illumos/HaikuOS machine visible in the Network view of Windows Explorer"
url: "https://github.com/gershnik/wsdd-native"
language: "C++"
languages: ["C++"]
languagePcts: [71]
topics: ["bsd", "freebsd", "linux", "macos", "macosx", "samba", "windows-10", "windows-11", "windows-explorer", "ws-discovery"]
stars: 87
forks: 6
openIssues: 1
closedIssues: 25
watchers: 6
contributors: 1
recentReleases: 0
createdAt: "2022-07-14T08:58:58Z"
lastCommitAt: "2026-07-04T06:11:01Z"
lastReleaseAt: "2023-10-18T00:13:49Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 84
undervaluedScore: 43
maintainers: ["gershnik"]
openGraphImageUrl: "https://opengraph.githubassets.com/9b6594d5079464160741bab880a341ce09d9d7b5c7ea83a167536c5ecec85e9e/gershnik/wsdd-native"
---

# wsdd-native

A Unix daemon that makes your macOS/Linux/BSD/illumos/HaikuOS machine visible in the Network view of Windows Explorer on newer versions of Windows.

It implements the WS-Discovery protocol that Windows now uses to discover machines on the local network. It is a native daemon, written in C++. 

- [Features](#features)
- [Binary packages](#binary-packages)
    - [macOS](#macos)
        - [Standalone installer](#standalone-installer)
        - [Homebrew](#homebrew)
        - [MacPorts](#macports)
    - [Ubuntu/Debian/Mint/Raspberry Pi](#ubuntudebianmintraspberry-pi)
    - [RedHat/CentOS/Fedora](#redhatcentosfedora)
    - [OpenSUSE](#opensuse)
    - [Arch Linux](#arch-linux)
    - [Alpine](#alpine)
    - [FreeBSD](#freebsd)
    - [OpenBSD](#openbsd)
    - [Docker](#docker)
- [Building from sources](#building-from-sources)
    - [Prerequisites](#prerequisites)
    - [Building and installing](#building-and-installing)
    - [Setting up daemon](#setting-up-daemon)
- [Usage](#usage)
    - [Firewall Setup](#firewall-setup)
    - [Security](#security)
    - [Custom metadata](#custom-metadata)
- [Acknowledgements](#acknowledgements)
- [Reporting Bugs](#reporting-bugs)

##…
