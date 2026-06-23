---
repo: "skycoin/skywire"
name: "skywire"
description: "Skywire Node implementation"
url: "https://github.com/skycoin/skywire"
language: "Go"
languages: ["Go"]
languagePcts: [82]
topics: ["vpn", "meshnet", "software-defined-network"]
stars: 80
forks: 44
openIssues: 57
closedIssues: 742
watchers: 14
contributors: 29
recentReleases: 0
createdAt: "2019-09-10T13:43:37Z"
lastCommitAt: "2026-06-23T23:16:48Z"
lastReleaseAt: "2021-10-21T12:08:54Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero", "fork_magnet"]
healthScore: 98
undervaluedScore: 52
maintainers: ["0pcom"]
openGraphImageUrl: "https://opengraph.githubassets.com/98c3a9a3a03c4e0f93959ddbf02b3cd8008cea4b8a88c0ec33984709765083f5/skycoin/skywire"
---

![Test](https://github.com/skycoin/skywire/actions/workflows/test.yml/badge.svg)
![Deploy](https://github.com/skycoin/skywire/actions/workflows/deploy.yml/badge.svg)

**PLEASE ALWAYS USE THE [DEVELOP BRANCH](https://github.com/skycoin/skywire/tree/develop)**

# Skywire

Skywire is a fully open-source, privacy-focused suite of networking
tools developed by Skycoin. The public Skywire Network enables this
software to be developed and tested in real-world conditions, with
[daily rewards in Skycoin](rewards/mainnet_rules.md) ($SKY) distributed
to eligible participants.

## Why Skywire

The Internet's security stack is a thirty-year pile of patches over a
network that was designed without any. TCP/IP assumed a trusted
backbone. SMTP, DNS, and HTTP shipped plaintext. Every fix since —
TLS, X.509, Certificate Authorities, DNSSEC, DKIM, SPF, DMARC, HSTS,
CT logs — bolts confidentiality, identity, or authenticity onto a
layer that lacks it, via yet another layer that barely knows about the
ones above and below. CAs get compromised. DNS hijacks break TLS. BGP
hijacks break DNS. The address, the identity, and the name live in
three separate systems, and the browser juggles them on every page…
