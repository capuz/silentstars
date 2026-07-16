---
repo: "KSAH-42/RabbitOM"
name: "RabbitOM"
description: "RTSP Client in .net"
readmeQualityOk: true
url: "https://github.com/KSAH-42/RabbitOM"
language: "C#"
languages: ["C#"]
languagePcts: [100]
topics: ["rtp", "rtsp", "csharp", "streaming", "sdp", "socket", "client", "video"]
stars: 6
forks: 3
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2022-04-20T10:09:08Z"
lastCommitAt: "2026-07-16T05:59:46Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 79
undervaluedScore: 79
maintainers: ["KSAH-42"]
openGraphImageUrl: "https://opengraph.githubassets.com/70c60521d2b992c245d1b0860768b19aa548481c30e13b60e52efb288f54a674/KSAH-42/RabbitOM"
---

# A resilent RTSP client based on the .net framework

A [RTSP](https://www.rfc-editor.org/rfc/rfc2326) .net library for receiving raw audio/video streams. 

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
* Support multiple types of authentications: basic and digest ( MD5, SHA1, SHA256, SHA512 )
* Support RTP packets reordering
* Support RTSP messages reordering when multiple requests are sended and responses arrive in a different order
* Support Unicast TCP (interleaved mode) transport
* Support Unicast UDP transport 
* Support Multicast transport
* Support request / response handshake when receiving video streams on the same tcp channel used for sending requests and receiving responses
* Support auto reconnection in case of network failures
* Support events Handlers for connection loss, receiving packet, etc...
* Provide classes to…
