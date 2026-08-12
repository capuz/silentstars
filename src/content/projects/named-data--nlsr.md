---
repo: "named-data/NLSR"
name: "NLSR"
description: "Named Data Link State Routing"
readmeQualityOk: true
url: "https://github.com/named-data/NLSR"
homepage: "https://docs.named-data.net/NLSR"
language: "C++"
languages: ["C++"]
languagePcts: [91]
topics: ["ndn", "routing", "routing-protocol", "cpp"]
stars: 51
forks: 41
openIssues: 2
closedIssues: 10
watchers: 20
contributors: 28
recentReleases: 0
createdAt: "2014-04-24T06:02:20Z"
lastCommitAt: "2026-08-12T04:45:25Z"
lastReleaseAt: "2024-08-13T15:12:07Z"
status: "thriving"
tags: ["legacy_hero", "fork_magnet"]
healthScore: 83
undervaluedScore: 37
maintainers: ["Pesa", "agawande"]
openGraphImageUrl: "https://opengraph.githubassets.com/3df93363d9d8407d6a5299d4de13637dd945eb8225bcb9af29e5ff99dd323afb/named-data/NLSR"
---

[<img alt height="65" src="docs/ndn-logo.svg"/>](https://named-data.net/)

# NLSR: Named Data Link State Routing Protocol

</div>

> [!TIP]
> For more extensive documentation, visit the [NLSR homepage](https://docs.named-data.net/NLSR/current/).

## Overview

NLSR is a routing protocol for Named Data Networking (NDN) that populates the Routing Information
Base (RIB) of an NDN router, such as [NFD](https://github.com/named-data/NFD). NLSR continues to
evolve alongside the core [NDN protocol](https://docs.named-data.net/NDN-packet-spec/current/).

The main design goal of NLSR is to provide a routing protocol to populate NDN's RIB.
NLSR calculates the routing table using link-state or hyperbolic routing and produces
multiple faces for each reachable name prefix in a single authoritative domain. NLSR
will continue to evolve over time to include neighbor discovery and to become a full
fledged inter-domain routing protocol for NDN.

NLSR was mainly developed by members of the NSF-sponsored [NDN project](
https://named-data.net/project/participants/). See [`AUTHORS.md`](https://github.com/named-data/NLSR/blob/HEAD/AUTHORS.md) for details.

## Source releases

The source code and…
