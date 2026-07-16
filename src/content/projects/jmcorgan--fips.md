---
repo: "jmcorgan/fips"
name: "fips"
description: "The Free Internetworking Peering System"
readmeQualityOk: true
url: "https://github.com/jmcorgan/fips"
language: "Rust"
languages: ["Rust"]
languagePcts: [86]
stars: 227
forks: 34
openIssues: 2
closedIssues: 42
watchers: 11
contributors: 14
recentReleases: 4
createdAt: "2026-03-10T12:31:46Z"
lastCommitAt: "2026-07-16T05:55:20Z"
lastReleaseAt: "2026-06-27T18:04:39Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 97
undervaluedScore: 32
maintainers: ["jmcorgan", "Origami74"]
openGraphImageUrl: "https://opengraph.githubassets.com/91e33b24238514be03c830212d225b9eff9c2752508055c3a77a57006731aa28/jmcorgan/fips"
---

# FIPS: Free Internetworking Peering System

A self-organizing encrypted mesh network built on Nostr identities,
capable of operating over arbitrary transports without central
infrastructure.

> FIPS is under active development. The protocol and APIs are not
> yet stable. See [Status & roadmap](#status--roadmap) below.

## What FIPS does

A machine running FIPS becomes a node in the mesh with a
self-generated cryptographic identity (a Nostr keypair). There are
two equally-supported deployment modes.

**As an overlay** on top of existing IP networks, FIPS lets your
node reach any other FIPS node wherever it sits — behind a NAT, on
a different ISP, on a phone over cellular, on a laptop with only
Bluetooth in range, or behind a Tor onion. The mesh forwards IPv6
traffic transparently and end-to-end encrypted, with no central VPN
concentrator or coordinating server.

**Ground up** over raw Ethernet, WiFi, or Bluetooth, FIPS provides
a complete permissionless network without any pre-existing IP
infrastructure, ISP, or DNS. Any node that joins the link gets
routable IPv6 addresses, peer discovery, and a path to every other
node automatically.

Either way, existing networking software…
