---
repo: "bedrock-v/webrtc-v"
name: "webrtc-v"
description: "Async WebRTC implementation in V"
readmeQualityOk: true
url: "https://github.com/bedrock-v/webrtc-v"
homepage: "https://vpm.vlang.io/packages/bedrock-v.webrtc-v"
language: "V"
languages: ["V"]
languagePcts: [99]
topics: ["vedrock", "vlang", "webrtc"]
stars: 9
forks: 0
openIssues: 0
closedIssues: 2
watchers: 0
contributors: 5
recentReleases: 1
createdAt: "2026-08-21T12:14:31Z"
lastCommitAt: "2026-08-31T09:58:19Z"
lastReleaseAt: "2026-08-21T13:34:58Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 93
undervaluedScore: 57
maintainers: ["xRookieFight", "nepinhum"]
openGraphImageUrl: "https://opengraph.githubassets.com/af500c1e4a254230d77c67c520981f7fc84304edec8ea3f3b08b43a007de50a0/bedrock-v/webrtc-v"
---

# webrtc-v

A pure [V](https://vlang.io) implementation of the WebRTC protocol stack.

No CGO-style bindings to libwebrtc, no build system to fight. `v install` and
import what you need. The only C dependency is OpenSSL, which the standard
library's `crypto.ecdsa` needs for the DTLS certificate keys.

## Why

WebRTC outside the browser usually means embedding libwebrtc: a multi-hundred
megabyte C++ tree with its own build system, or a binding to it that inherits
every one of its portability problems. Projects like [Pion](https://pion.ly) and
[webrtc-rs](https://webrtc.rs) showed that a native implementation in a memory-
safe language is both possible and considerably easier to work with. This is
that idea in V.

The design goals, in the order they are traded off:

1. **Correctness against the RFCs.** Every packet format is implemented from the
   specification, with the section number in the comment where the rule is not
   obvious. Where the RFC publishes test vectors, they are in the test suite.
2. **Safety against hostile input.** Everything arriving from the network is
   decoded through one bounds-checked reader. A malformed packet is an error, not
   a panic, and never a…
