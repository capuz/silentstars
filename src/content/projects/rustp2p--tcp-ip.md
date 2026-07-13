---
repo: "rustp2p/tcp_ip"
name: "tcp_ip"
description: "User-space TCP/IP stack"
readmeQualityOk: true
url: "https://github.com/rustp2p/tcp_ip"
language: "Rust"
languages: ["Rust"]
languagePcts: [97]
topics: ["ip", "tcp"]
stars: 39
forks: 5
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 4
recentReleases: 0
createdAt: "2024-12-16T12:44:22Z"
lastCommitAt: "2026-07-13T06:37:16Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 78
undervaluedScore: 58
maintainers: ["vnt-dev", "claude", "lanthora"]
openGraphImageUrl: "https://opengraph.githubassets.com/4d7579446b1917c7da261dd1fafc6ec0fc6a2631a1b18b10a31778d7695e590b/rustp2p/tcp_ip"
---

# tcp_ip

User-space TCP/IP stack

## Features

#### IPv4

- IPv4 fragmentation and reassembly is supported.
- IPv4 options are not supported and are silently ignored.

#### IPv6

- IPv6 fragmentation and reassembly is supported (Fragment extension header, RFC 8200 §4.5).
- Hop-by-Hop Options, Routing and Destination Options extension headers are parsed and skipped.
- AH/ESP and extension headers located inside the fragmentable part are not supported; such packets are rejected.
- NDP is out of scope: the stack sits on a TUN device (layer 3), so there is no link layer to discover.

#### UDP

Use UdpSocket. Supported over IPv4 and IPv6.

#### ICMPv4 & ICMPv6

Use IcmpSocket or IcmpV6Socket. The user needs to handle the ICMP header themselves and calculate the checksum.

#### TCP

Use TcpListener and TcpStream. Supported over IPv4 and IPv6.

- MSS is negotiated
- Window scaling is negotiated.
- Reassembly of out-of-order segments is supported
- The timeout waiting time is fixed and can be configured
- Selective acknowledgements permitted. (Proactively ACK the need for improvement)

#### Other

Using IpSocket to send and receive packets of other protocols.(Handles all IP upper-layer…
