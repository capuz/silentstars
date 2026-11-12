---
repo: "Dynesshely/Live-QR"
name: "Live-QR"
description: "Live-stream a dynamic QR code: scan with your camera, share an 8-digit code, and viewers see the QR update in real time. Node.js · Express · WebSocket · Vue 3"
originalDescription: "Live-stream a dynamic QR code: scan with your camera, share an 8-digit code, and viewers see the QR update in real time. Node.js · Express · WebSocket · Vue 3"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/Dynesshely/Live-QR"
homepage: "https://qr-live.cxs.apps.dynesshely.top"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [75]
topics: ["live", "livestream", "livestreaming", "qrcode", "qrcode-reader", "qrcode-scanner", "docker", "express", "nodejs", "qr-code"]
stars: 110
forks: 7
openIssues: 1
closedIssues: 2
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2026-06-15T17:38:27Z"
lastCommitAt: "2026-11-12T11:38:33Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 68
undervaluedScore: 12
maintainers: ["Dynesshely"]
openGraphImageUrl: "https://opengraph.githubassets.com/a68dc13b703abc1018549b32425ceab5d426d36f6f0e3ab32102e2546c412252/Dynesshely/Live-QR"
---

Scan to upload, redraw in real time — a real-time QR code delivery system based on WebSocket

  &nbsp;·&nbsp;
  &nbsp;·&nbsp;
  &nbsp;·&nbsp;
  &nbsp;·&nbsp;
  &nbsp;·&nbsp;
  &nbsp;·&nbsp;
  &nbsp;·&nbsp;
  &nbsp;·&nbsp;

---

## What this is

The uploader scans with the camera (jsQR) to decode a QR code into text. The viewer uses an 8-digit share code to open a WebSocket, receives the text in real time, and regenerates the QR code. Neither side requires login, and they do not communicate directly.

- **Scan to upload**: the uploader only does scan → decode → POST, and does not keep any history locally.
- **Real-time redraw**: the server pushes the latest text over WebSocket, and the viewer redraws the QR code each time it receives a message.
- **No database**: channels are kept in process memory and expire after 30 minutes without an upload by default.

> Official instance: <https://qr-live.cxs.apps.dynesshely.top>

## Architecture

```mermaid
flowchart LR
    U[Uploader<br/>camera + jsQR] -->|POST /api/upload| S[Server<br/>Express + ws<br/>in-memory channels]
    S <-->|WebSocket real-time push| W[Viewer<br/>text → QR code]
    W -->|GET /api/channel/verify| S
```

In…
