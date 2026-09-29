---
repo: "Uninett/zino"
name: "zino"
description: "Zino 2.0 - Network state monitor for research networks"
readmeQualityOk: true
url: "https://github.com/Uninett/zino"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 7
forks: 7
openIssues: 56
closedIssues: 163
watchers: 7
contributors: 10
recentReleases: 0
createdAt: "2023-05-02T11:14:48Z"
lastCommitAt: "2026-09-29T08:10:35Z"
lastReleaseAt: "2025-10-21T09:24:55Z"
status: "thriving"
tags: ["hidden_gem", "fork_magnet"]
healthScore: 92
undervaluedScore: 80
maintainers: ["lunkwill42", "johannaengland", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/7fb9a107c0c1ef62f1960a9c87a98822da718d894a5375e7b35a66f1056eeaa3/Uninett/zino"
---

# Zino 2

This is the modern Python re-implementation of the battle-proven Zino network
state monitor, first implemented in Tcl/Scotty at Uninett in the 1990s.

Development of Zino 2.0 is fully sponsored by [NORDUnet](https://nordu.net/),
on behalf of the nordic NRENs.

## Table of contents

- [What is Zino?](#what-is-zino)
- [Installing](#installing-zino)
- [Configuring](#configuring-zino)
- [Using](#using-zino)
- [Upgrade from Zino 1](https://github.com/Uninett/zino/blob/HEAD/docs/howtos/upgrade-from-zino-1.rst)
- [Contributing](#developing-zino)

## What is Zino?

Zino Is Not OpenView.

Zino is an SNMP network monitor that began its life at Uninett in the mid
1990s.  It was a homegrown system written in Tcl, specifically to monitor the
routers of the Norwegian national research network (NREN), a large backbone
network that connects the widely geographically dispersed higher education and
research institutions of Norway.  Uninett was also part of NORDUnet, the
collaboration that interconnects the NRENs of the Nordic countries, and Zino
is also utilized to monitor the NORDUnet backbone.

Here's a quote about its features from the `README` file of the original Tcl
codebase:

```…
