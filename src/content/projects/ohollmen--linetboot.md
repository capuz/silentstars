---
repo: "ohollmen/linetboot"
name: "linetboot"
description: "Linux Network Boot and Installation System"
url: "https://github.com/ohollmen/linetboot"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [83]
stars: 6
forks: 1
openIssues: 1
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2018-12-28T21:01:59Z"
lastCommitAt: "2026-06-28T03:08:42Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 59
undervaluedScore: 64
maintainers: ["ohollmen"]
openGraphImageUrl: "https://opengraph.githubassets.com/7d466746aaab690e623e319793851560c5fec9b2e7fcc5b285c6cf4a4c0309f1/ohollmen/linetboot"
---

# Linux NetBoot and Installation System Layout

The sequence of booting installer and installing an OS with netinstall:

# What is Linetboot ?

Linetboot is ...

- PXE Boot and OS Installation Orchestration central
- DHCP and TFTP Server management system (Linetboot can provide configurations and setup for these)
- Hi-Performance HTTP Based OS Install media server
- Host Asset Inventory system - View hosts Network,Hardware and OS/version info and keep track of packages installed on OS
- Host Asset statistics reporting system
- Small scale real-time (snapshot based) host monitoring system (shows network reachability, DNS status, SSH-reachability)
- IPMI, iDRAC and RedFish Remote management system
- SSH Host keys Inventory - enabling archiving and restoration of SSH hostkeys when hosts get re-imaged
- a bunch of documentation and hints to help you in any (non-Linetboot) DIY PXE related project
- Ansible accelerator (thanks to facts caching by Linetboot)

Any of these features can be disabled to use only subset of features.
There is a special synergy between Ansible and Linetboot on multiple fronts (explained better in the documentation, see below).

Linetboot can be made to…
