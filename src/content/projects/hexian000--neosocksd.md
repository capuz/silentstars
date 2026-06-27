---
repo: "hexian000/neosocksd"
name: "neosocksd"
description: "A fast, lightweight proxy server with a Lua-powered rules engine."
url: "https://github.com/hexian000/neosocksd"
language: "C"
languages: ["C"]
languagePcts: [79]
topics: ["forwarder", "proxy-server", "socks-protocol", "lua", "internet-gateway", "transparent-proxy"]
stars: 9
forks: 1
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2023-03-26T01:09:52Z"
lastCommitAt: "2026-06-27T00:47:08Z"
lastReleaseAt: "2024-01-27T07:52:59Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 78
undervaluedScore: 60
maintainers: ["hexian000"]
openGraphImageUrl: "https://opengraph.githubassets.com/4aabb2b04f8d53ad2af41878e606130c4faa2de1807c933cf597ea09defa6a94/hexian000/neosocksd"
---

# neosocksd

A fast, lightweight TCP proxy server written in C with a Lua-powered routing engine. Ships with `agent.lua`, an optional module for building an autonomous overlay network across multiple LANs.

Status: **Stable**

- [Features](#features)
- [Usage](#usage)
  - [Protocol Modes](#protocol-modes)
  - [Proxy Chains](#proxy-chains)
  - [Lua Ruleset](#lua-ruleset)
  - [Observability](#observability)
- [Distributed Virtual Network](#distributed-virtual-network)
- [Installation](#installation)
  - [Runtime Dependencies](#runtime-dependencies)
  - [Building from Source](#building-from-source)
    - [Dependencies](#dependencies)
    - [Building with CMake](#building-with-cmake)
- [Credits](#credits)

## Features

- Protocols: [SOCKS4](https://www.openssh.com/txt/socks4.protocol)/[SOCKS4A](https://www.openssh.com/txt/socks4a.protocol) (Ying-Da Lee / NEC), SOCKS5 ([RFC 1928](https://datatracker.ietf.org/doc/html/rfc1928), with [RFC 1929](https://datatracker.ietf.org/doc/html/rfc1929) auth), HTTP CONNECT ([RFC 9110 §9.3.6](https://datatracker.ietf.org/doc/html/rfc9110#section-9.3.6)).
- Transparent proxy: Linux [TPROXY](https://docs.kernel.org/networking/tproxy.html).
- 10+ Gbps…
