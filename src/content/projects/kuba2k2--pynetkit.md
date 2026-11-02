---
repo: "kuba2k2/pynetkit"
name: "pynetkit"
description: "Reverse engineering utilities for several popular network protocols."
readmeQualityOk: true
url: "https://github.com/kuba2k2/pynetkit"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 5
forks: 1
openIssues: 0
closedIssues: 0
watchers: 2
contributors: 1
recentReleases: 0
createdAt: "2024-10-08T19:40:40Z"
lastCommitAt: "2026-11-02T11:36:20Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 65
undervaluedScore: 50
maintainers: ["kuba2k2"]
openGraphImageUrl: "https://opengraph.githubassets.com/28c21ffdd0a127bec0c0ceb360b8862db2f29a51cbb79a065d035949805fbe1f/kuba2k2/pynetkit"
---

# pynetkit

Reverse engineering utilities for several popular network protocols.

## Introduction

pynetkit allows running custom servers, that listen and answer to several network protocols. The servers can be
configured programmatically, which lets you easily add network handlers, change their configuration, etc. Additionally,
the servers receive and broadcast events about what's happening, so that you can respond to the current state.

The unconventional style of the network servers is particularly useful for reverse engineering embedded/IoT devices
and finding various kinds of vulnerabilities.

## Installation

pynetkit can be installed from PyPI:

```
pip install pynetkit
```

or from sources, using Poetry.

After installation, a `pynetkit` command will be available to access the built-in CLI.

## Implemented modules

Below are the modules currently implemented in the project.

- `base` - Common utilities and base classes for all modules.
- `dhcp` - DHCP server that can give out dynamic or static leases from a specific IP address range.
- `dns` - DNS server that can answer queries based on a set of RegEx patterns, as well as forward queries to an upstream server.
- `http` -…
