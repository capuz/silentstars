---
repo: "NLnetLabs/domain"
name: "domain"
description: "A DNS library for Rust."
readmeQualityOk: true
url: "https://github.com/NLnetLabs/domain"
homepage: "https://nlnetlabs.nl/projects/domain/"
language: "Rust"
languages: ["Rust"]
languagePcts: [100]
topics: ["rust", "dns"]
stars: 468
forks: 76
openIssues: 55
closedIssues: 89
watchers: 17
contributors: 53
recentReleases: 0
createdAt: "2018-08-21T16:37:32Z"
lastCommitAt: "2026-10-02T09:59:29Z"
lastReleaseAt: "2023-10-27T09:26:10Z"
status: "thriving"
tags: ["legacy_hero", "funded"]
healthScore: 90
undervaluedScore: 35
maintainers: ["partim", "bal-e", "withjannisNLnetLabs"]
openGraphImageUrl: "https://opengraph.githubassets.com/210154cfa215a8007a996fe3975239e75781d3c5a605cff326c171d7b1fe56bc/NLnetLabs/domain"
fundingLinks: ["GITHUB:https://github.com/NLnetLabs", "CUSTOM:https://nlnetlabs.nl/funding/"]
discussionCount: 8
---

# domain – A DNS library for Rust

A library for interacting with the Domain Name System. The crate contains
an ever-growing set of building blocks for including DNS functionality in
applications.

Currently, these blocks include:

* basic data structures and functionality for creating and parsing DNS
  data and messages,
* a simple Tokio-based stub resolver,
* experimental support for DNS client and server transports,
* experimental support for reading data from DNS zone files, storing them
  in memory and answering queries,
* experimental support for zone transfer, including support for TSIG,
* experimental and as yet incomplete support for DNSSEC signing and
  validation.

The library is currently under
[heavy development](https://blog.nlnetlabs.nl/domain-foundations-the-first-of-our-five-year-vision/)
and additional building blocks and features are being added.

## Applications

We are maintaining several applications that are built on top of domain, 
including:

* [cascade](https://github.com/NLnetLabs/cascade) – a DNSSEC signing pipeline
* [dnsi](https://github.com/NLnetLabs/dnsi) – a command-line tool to inspect
  various aspects of the DNS
*…
