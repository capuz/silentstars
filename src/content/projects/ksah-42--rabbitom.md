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
recentReleases: 8
createdAt: "2022-04-20T10:09:08Z"
lastCommitAt: "2026-10-21T23:35:38Z"
lastReleaseAt: "2026-10-14T07:57:37Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 80
undervaluedScore: 84
maintainers: ["KSAH-42"]
openGraphImageUrl: "https://opengraph.githubassets.com/fef8f6be510dab9f43289b56970a65d693498d323020ad8783c8519cacf934f3/KSAH-42/RabbitOM"
---

# A RTSP client streaming library in .NET Core

Follow this link to download binaries: https://github.com/KSAH-42/RabbitOM/releases

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
* Support multiple authentication schemes as: basic and digest ( MD5, SHA1, SHA256 )
* Support RTP packets reordering
* Support RTSP messages reordering when multiple requests are sended and responses arrive in a different order
* Support Unicast TCP (interleaved mode) transport
* Support Unicast UDP transport 
* Support Multicast transport
* Support auto reconnection in case of network failures
* Support events Handlers for connection loss, receiving packet, etc...
* Reduce memory copy when using large memory blocks by using System.ArraySegment<byte> in order to minimize the usage of System.Buffer.BlockCopy
* Force the creation of ports used for receiving…
