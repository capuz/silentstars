---
repo: "WLmutou/gobfd"
name: "gobfd"
description: "bfd协议, golang bfd, BFD, go bfd"
readmeQualityOk: true
url: "https://github.com/WLmutou/gobfd"
language: "Go"
languages: ["Go"]
languagePcts: [100]
stars: 10
forks: 3
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2020-01-10T07:05:44Z"
lastCommitAt: "2026-07-23T06:16:55Z"
status: "thriving"
tags: ["legacy_hero"]
healthScore: 80
undervaluedScore: 43
maintainers: ["WLmutou"]
openGraphImageUrl: "https://opengraph.githubassets.com/0f49a307ae9140c45ab9b23963d1f6bcc96da432fc8929fd49eb0fccf67b4637/WLmutou/gobfd"
---

# gobfd

A Go implementation of the BFD (Bidirectional Forwarding Detection) protocol, supporting RFC 5880 Control mode, Echo mode, Demand mode, RFC 5883 Multihop mode, as well as authentication mechanism and event notification functionality.

## Features

- **RFC 5880 Compliant**: Full implementation of BFD control packet protocol
- **Echo Mode**: Support for RFC 5880 Section 6.4 Echo auxiliary detection mode
- **Demand Mode**: Support for RFC 5880 Section 6.5 low-overhead Demand mode
- **Multihop Mode**: Support for RFC 5883 multihop path detection
- **Authentication**: Support for RFC 5880 authentication methods (Password, Keyed MD5, Keyed SHA1) to prevent packet spoofing and attacks
- **Multi-session Management**: Single Control instance can manage multiple BFD detection sessions
- **IPv4/IPv6**: Dual-stack support
- **State Callback**: Custom callback function triggered on session state changes
- **Event Notification**: Session state change notifications for upper-layer protocols (OSPF/BGP etc.), supporting both interface-based and channel-based subscription modes

## BFD Frame Structure

```
///////////////////////////// BFD Control Frame Structure…
