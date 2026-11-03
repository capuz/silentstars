---
repo: "zigouat/webrtc"
name: "webrtc"
description: "WebRTC implementation in zig"
readmeQualityOk: true
url: "https://github.com/zigouat/webrtc"
language: "Zig"
languages: ["Zig"]
languagePcts: [100]
topics: ["media", "webrtc", "zig", "audio", "video", "zig-package"]
stars: 25
forks: 2
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 1
createdAt: "2026-06-20T12:59:01Z"
lastCommitAt: "2026-11-03T19:05:31Z"
lastReleaseAt: "2026-08-25T14:02:12Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 88
undervaluedScore: 33
maintainers: ["gBillal"]
openGraphImageUrl: "https://opengraph.githubassets.com/04496e2aacab833da2ab07783ad225993efb1beabc9e50554d696c4f1a43d5cb/zigouat/webrtc"
discussionCount: 0
---

# WebRTC

A sans-io zig implementation of the WebRTC API.

## Status

The project is under active development. The API and even the whole architecture may change in the future. 
The current implementation is not yet production-ready.

## Supported Zig/Platforms
Supported Zig version: `0.16.0`.

Tested platforms:
* Linux x86_64/aarch64
* macOS x86_64/aarch64
* Windows x86_64 (with zio)

## Architecture
The implementation is a sans-io, the library will not do any I/O, it will only provide the WebRTC API and the user will have to implement the I/O themselves (e.g. sockets, timers, ...etc.).

## Features
The end goal is to implement the whole WebRTC API in pure Zig, the current implementation has the following features:

* SDP parsing and generation
* ICE (Interactive Connectivity Establishment): Support IPv4/IPv6, STUN and TURN candidates. Only UDP is supported for now.
* DTLS using `mbedtls`.
* SRTP encryption and decryption with AES_CM_HMAC_SHA1_80 and AES_CM_HMAC_SHA1_32 profiles.
* Sending and receiving H264 and VP8 video streams.
* Sending and receiving Opus audio streams.
* Bundling of the above features into a `PeerConnection` API. (Note: only bundling is supported for now, no…
