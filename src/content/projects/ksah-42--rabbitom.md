---
repo: "KSAH-42/RabbitOM"
name: "RabbitOM"
description: "RTSP Client in .net"
readmeQualityOk: true
url: "https://github.com/KSAH-42/RabbitOM"
language: "C#"
languages: ["C#"]
languagePcts: [100]
topics: ["rtp", "rtsp", "csharp", "streaming", "sdp", "socket", "client", "video", "player", "player-statistics"]
stars: 7
forks: 3
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 2
createdAt: "2022-04-20T10:09:08Z"
lastCommitAt: "2026-08-26T04:16:38Z"
lastReleaseAt: "2026-08-23T01:56:25Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 81
maintainers: ["KSAH-42"]
openGraphImageUrl: "https://opengraph.githubassets.com/45b680c11c86d4f3f31206f4bd8a2abd9726e3154655c68275080cabf3cd1a6b/KSAH-42/RabbitOM"
---

# A RTSP client streaming library based on the .NET Framework

Follow this link to download zip/binaries: https://github.com/KSAH-42/RabbitOM/releases

# Main features

* No external dependencies
* Support video format RTP - RFC 7798 - H.265 / HEVC
* Support video format RTP - RFC 6184 - H.264
* Support video format RTP - RFC 2435 - MJPEG
* Support audio format RTP - G711 µ-Law
* Support audio format RTP - G711 A-Law
* Support audio format RTP - G726
* Support audio format RTP - L24
* Support audio format RTP - L16
* Support audio format RTP - L8
* Support multiple authentication schemes as: basic and digest ( MD5, SHA1, SHA256, SHA512 )
* Support RTP packets reordering
* Support RTSP messages reordering when multiple requests are sended and responses arrive in a different order
* Support Unicast TCP (interleaved mode) transport
* Support Unicast UDP transport 
* Support Multicast transport
* Support auto reconnection in case of network failures
* Support events Handlers for connection loss, receiving packet, etc...
* Reduce memory copy when using large memory blocks by using System.ArraySegment<byte> in order to minimize the usage of System.Buffer.BlockCopy
* Force the creation…
