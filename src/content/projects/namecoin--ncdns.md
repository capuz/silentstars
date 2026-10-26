---
repo: "namecoin/ncdns"
name: "ncdns"
description: ":globe_with_meridians: Namecoin to DNS bridge daemon"
readmeQualityOk: true
url: "https://github.com/namecoin/ncdns"
homepage: "https://www.namecoin.org/"
language: "Go"
languages: ["Go"]
languagePcts: [81]
topics: ["dns", "dnssec", "anticensorship", "blockchain", "cryptography", "decentralized", "hacktoberfest", "internet-freedom", "namecoin", "p2p"]
stars: 138
forks: 43
openIssues: 50
closedIssues: 20
watchers: 10
contributors: 4
recentReleases: 0
createdAt: "2014-10-17T15:59:59Z"
lastCommitAt: "2026-10-26T21:06:05Z"
lastReleaseAt: "2020-01-08T23:48:17Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 78
undervaluedScore: 36
maintainers: ["robertmin1"]
openGraphImageUrl: "https://opengraph.githubassets.com/2942cb5b2e3bc5f6b7b3a0b5da0667b9837ce6f11094430f439b39352bfcf9cf/namecoin/ncdns"
---

ncdns
=====

A Go daemon to bridge Namecoin to DNS. The daemon acts as an authoritative
nameserver and queries a Namecoin daemon over JSON-RPC in order to obtain zone
data.

The daemon can optionally sign zones with DNSSEC and supports the use of DS
records in Namecoin. It works best when used by Unbound or another recursive
resolver, or as an authoritative nameserver for a stub zone.

Using ncdns to provide a suffix
-------------------------------
The daemon acts as an authoritative nameserver for any name containing a 'bit'
label. For example, all of the following queries return the same records:

  - example.bit.
  - example.bit.example.com.

This enables the easy use of suffixes. (Note that this will cause a different
hostname to be transmitted for protocols like HTTP, and server configuration
may need to be modified to enable this. In some cases there may be no simple
solution to enabling arbitrary suffix use with a given piece of server
software, in which known suffixes can be configured; patches for such software
would be desirable.)

Using ncdns with a recursive resolver
-------------------------------------
Of course the daemon can also be used simply as an authoritative…
