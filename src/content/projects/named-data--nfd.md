---
repo: "named-data/NFD"
name: "NFD"
description: "Named Data Networking Forwarding Daemon"
readmeQualityOk: true
url: "https://github.com/named-data/NFD"
homepage: "https://docs.named-data.net/NFD"
language: "C++"
languages: ["C++"]
languagePcts: [96]
topics: ["ndn", "forwarding", "packet-forwarder", "router", "networking", "cpp"]
stars: 190
forks: 159
openIssues: 0
closedIssues: 0
watchers: 26
contributors: 46
recentReleases: 0
createdAt: "2014-01-27T07:43:57Z"
lastCommitAt: "2026-08-12T03:36:54Z"
lastReleaseAt: "2024-07-28T20:42:44Z"
status: "thriving"
tags: ["legacy_hero", "fork_magnet"]
healthScore: 77
undervaluedScore: 28
maintainers: ["Pesa", "Jah-yee"]
openGraphImageUrl: "https://opengraph.githubassets.com/9985e13db2d2e8ea3d30c44853a73edfb2d482e6f6ec48a5cdb415a592424aad/named-data/NFD"
---

[<img alt height="65" src="docs/ndn-logo.svg"/>](https://named-data.net/)

# NFD: Named Data Networking Forwarding Daemon

</div>

## Overview

NFD is a network forwarder that implements and evolves together with the Named
Data Networking (NDN) [protocol](https://docs.named-data.net/NDN-packet-spec/).
Since the initial public release in 2014, NFD has been a core component of the
[NDN Platform](https://named-data.net/codebase/platform/).

The main design goal of NFD is to support diverse experimentation of NDN technology.  The
design emphasizes *modularity* and *extensibility* to allow easy experiments with new
protocol features, algorithms, new applications.  We have not fully optimized the code for
performance.  The intention is that performance optimizations are one type of experiments
that developers can conduct by trying out different data structures and different
algorithms; over time, better implementations may emerge within the same design framework.

NFD will keep evolving in three aspects: improvement of the modularity framework, keeping
up with the NDN protocol spec, and addition of other new features. We hope to keep the
modular framework stable and lean, allowing…
