---
repo: "ydvkundan2005/FloatCam"
name: "FloatCam"
description: "Turn your smartphone into a wireless floating desktop webcam. Sub-second WebRTC latency, 100% private, zero cloud. macOS + Windows."
readmeQualityOk: true
url: "https://github.com/ydvkundan2005/FloatCam"
homepage: "https://ydvkundan2005.github.io/FloatCam"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [73]
topics: ["electron", "floating-camera", "macos", "nodejs", "phone-camera", "privacy", "webcam", "webrtc", "wifi", "windows"]
stars: 8
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 1
createdAt: "2026-10-20T17:57:45Z"
lastCommitAt: "2026-11-05T00:22:48Z"
lastReleaseAt: "2026-10-20T18:35:49Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 76
undervaluedScore: 23
maintainers: ["ydvkundan2005"]
openGraphImageUrl: "https://opengraph.githubassets.com/70481e10faa82bd1273bd28e93aaa325e6e8249dafc634a50c0940457272f580/ydvkundan2005/FloatCam"
---

# FloatCam

**Use a phone camera as a floating wireless webcam preview on a desktop.**

[Website](https://ydvkundan2005.github.io/FloatCam) · [Releases](https://github.com/ydvkundan2005/FloatCam/releases) · [Issues](https://github.com/ydvkundan2005/FloatCam/issues)

## Overview

FloatCam is an Electron desktop application for macOS and Windows. It connects a phone browser to a desktop receiver so the phone camera can appear in a small, always-on-top floating preview window.

The phone-side client runs in a modern mobile browser. A local Node.js HTTPS server serves the client and coordinates WebRTC session setup over a WebSocket signalling channel. The application includes a desktop control panel and a separate preview window.

## Engineering scope

- **Desktop application:** Electron main process, renderer windows and preload bridges.
- **Signalling:** Node.js HTTPS and WebSocket server for session setup.
- **Media:** WebRTC peer connection between the mobile browser and desktop receiver.
- **Phone client:** HTML, CSS and JavaScript using browser camera APIs.
- **Desktop interaction:** Floating, transparent preview; window shapes; zoom, opacity and positioning controls.
-…
