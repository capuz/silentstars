---
repo: "webrtc-rs/rtc"
name: "rtc"
description: "Sans-IO WebRTC implementation in Rust"
readmeQualityOk: true
url: "https://github.com/webrtc-rs/rtc"
homepage: "https://webrtc.rs"
language: "Rust"
languages: ["Rust"]
languagePcts: [100]
stars: 156
forks: 57
openIssues: 5
closedIssues: 63
watchers: 5
contributors: 26
recentReleases: 0
createdAt: "2021-07-04T00:09:18Z"
lastCommitAt: "2026-08-28T15:34:47Z"
lastReleaseAt: "2026-01-12T16:42:10Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero", "funded"]
healthScore: 98
undervaluedScore: 47
maintainers: ["rainliu", "duszmox", "lovon-spec"]
openGraphImageUrl: "https://opengraph.githubassets.com/4b5559e89a15a18c530fcf73e589280a857724f8232bc2ecf8f14ada16eb5664/webrtc-rs/rtc"
fundingLinks: ["GITHUB:https://github.com/webrtc-rs", "OPEN_COLLECTIVE:https://opencollective.com/webrtc-rs", "PATREON:https://patreon.com/WebRTCrs"]
discussionCount: 1
---

<h1 align="center">
 <br>
</h1>
 </a>
 </a>
 </a>
 </a>
 </a>
 </a>
 </a>
 </a>
</p>
 <strong>Sans-I/O WebRTC implementation in Rust</strong>
</p>

<strong>Sponsored with 💖 by</strong><br>
</p>
<strong>Gold Sponsors:</strong><br>
alt="Recall.ai">
</a><br>
<strong>Silver Sponsors:</strong><br>
</a><br>
</a><br>
<strong>Bronze Sponsors:</strong><br>
</p>

<details>
<summary><b>Table of Content</b></summary>

- [Overview](#overview)
- [Features](#features)
- [Building](#building)
- [Open Source License](#open-source-license)
- [Contributing](#contributing)

</details>

## Overview

**RTC** is a pure Rust implementation of [WebRTC](https://www.w3.org/TR/webrtc/) using a **sans-I/O architecture**.
Unlike traditional WebRTC libraries, RTC separates protocol logic from I/O operations, giving you complete control over
networking, threading, and async runtime integration.

### What is Sans-I/O?

Sans-I/O (without I/O) is a design pattern where the library handles protocol logic but **you** control all I/O
operations. Instead of the library performing network reads and writes directly, you feed it network data and it tells
you what to send.

**Benefits:**

- 🚀 **Runtime Independent** -…
