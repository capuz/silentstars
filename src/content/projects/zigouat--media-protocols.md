---
repo: "zigouat/media-protocols"
name: "media-protocols"
description: "Media protocols implementation in zig"
readmeQualityOk: true
url: "https://github.com/zigouat/media-protocols"
language: "Zig"
languages: ["Zig"]
languagePcts: [100]
topics: ["rtp", "rtsp", "sdp", "zig", "rfc8489", "stun", "rtcp", "ice", "rfc8445", "srtp"]
stars: 7
forks: 1
openIssues: 1
closedIssues: 1
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2026-04-09T13:56:02Z"
lastCommitAt: "2026-07-06T07:03:46Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 89
undervaluedScore: 44
maintainers: ["gBillal"]
openGraphImageUrl: "https://opengraph.githubassets.com/ed870a51368834db7125b7bcc755a9178b51b3c3d1b2d3350554e5049f38fb72/zigouat/media-protocols"
---

# Media Protocols

Zig implementations of various protocols related to media processing and streaming.

The projects is structured into modules, each module is a separate library that can be used independently. The modules are:

* `rtp/rtcp` - implementation of the real-time transport protocol (RTP) and real-time transport control protocol (RTCP).
    
    The following RFCs are also implemented as part of the `rtp/rtcp` module:
    * [RFC 3550](https://datatracker.ietf.org/doc/html/rfc3550) - RTP: A Transport Protocol for Real-Time Applications.
    * [RFC 4585](https://datatracker.ietf.org/doc/html/rfc4585) - Extended RTP Profile for Real-time Transport Control Protocol (RTCP)-Based Feedback (RTP/AVPF).
    * [RFC 8285](https://datatracker.ietf.org/doc/html/rfc8285) - A General Mechanism for RTP Header Extensions.

* `srtp` - [SRTP (Secure Real-time Transport Protocol)](https://datatracker.ietf.org/doc/html/rfc3711) implementation of the secure real-time transport protocol based on RFC 3711.
* `sdp` - [SDP (Session Description Protocol)](https://datatracker.ietf.org/doc/html/rfc4566) implementation for describing multimedia sessions based on RFC 4566.
* `rtsp` - [RTSP (Real Time…
