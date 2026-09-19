---
repo: "tinic/AmiNetXDuo"
name: "AmiNetXDuo"
description: "An IPv4+IPv6 TCP/IP stack for classic AmigaOS, and the networking commands to go with it. Provides bsdsocket.library on top of Eclipse ThreadX NetX Duo, driving the SANA-II cards you already have."
readmeQualityOk: true
url: "https://github.com/tinic/AmiNetXDuo"
language: "C"
languages: ["C"]
languagePcts: [66]
topics: ["68000", "amiga", "amigaos", "bsdsocket", "ipv6", "m68k", "networking", "netxduo", "retrocomputing", "sana2"]
stars: 16
forks: 0
openIssues: 0
closedIssues: 7
watchers: 2
contributors: 2
recentReleases: 10
createdAt: "2026-07-25T05:39:20Z"
lastCommitAt: "2026-09-19T08:13:02Z"
lastReleaseAt: "2026-08-04T02:12:57Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 100
undervaluedScore: 52
maintainers: ["tinic"]
openGraphImageUrl: "https://opengraph.githubassets.com/9e46dfcbe0c69a825f90677e1bc04c6543894a84d884b7cbb55bf27469de2605/tinic/AmiNetXDuo"
---

# AmiNetXDuo

An IPv4+IPv6 TCP/IP stack for classic AmigaOS, with the network commands that go
with it. It provides `bsdsocket.library`, the socket API that Amiga network
software already speaks, on top of
[Eclipse ThreadX NetX Duo](https://github.com/eclipse-threadx/netxduo). It
drives existing SANA-II network cards, and ships three SANA-II drivers.

> It gets a DHCP lease, configures itself by SLAAC, answers ARP and neighbour
> discovery, and pings its gateway. It resolves DNS, moves TCP in both
> directions, does HTTPS, and accepts incoming connections from other
> machines. It scores **142 of 142** on the independent
> [`bsdsocktest`](https://github.com/tbdye/bsdsocktest) conformance suite.
> `ssh` and `scp` run on it, and so do NFS mounts and ixemul programs.

## Why

AmigaOS has never included a TCP/IP stack. Networking has always come from a
third-party shared library, and each existing option has a limitation. AmiTCP
3.0b2 is free and dates from 1994. AmiTCP 4.x and Miami are proprietary and
effectively unobtainable. Roadshow, the one modern stack, is commercial and
closed.

AmiNetXDuo is MIT-licensed, with the exceptions named under Licence. It speaks
the same socket API…
