---
repo: "clintcan/macrdp"
name: "macrdp"
description: "A native RDP server for macOS, written in Rust on top of IronRDP. "
readmeQualityOk: true
url: "https://github.com/clintcan/macrdp"
language: "Rust"
languages: ["Rust"]
languagePcts: [82]
stars: 76
forks: 27
openIssues: 5
closedIssues: 12
watchers: 0
contributors: 5
recentReleases: 0
createdAt: "2026-05-13T23:47:08Z"
lastCommitAt: "2026-11-13T11:25:33Z"
lastReleaseAt: "2026-05-19T21:59:58Z"
status: "thriving"
tags: ["needs_contributors", "funded"]
healthScore: 91
undervaluedScore: 34
maintainers: ["clintcan", "SferaDev", "antonmos"]
openGraphImageUrl: "https://opengraph.githubassets.com/9db93af53301d8edc38c395399d8df76b26f565dab7117640dff4df5d9ddd55c/clintcan/macrdp"
fundingLinks: ["KO_FI:https://ko-fi.com/clintcan"]
discussionCount: 1
---

# macrdp

A native RDP server for macOS, written in Rust on top of [IronRDP]. Connect from `mstsc`, the Windows App / Microsoft Remote Desktop, or FreeRDP and drive your Mac — authenticated against your local Mac account (NLA/CredSSP, TLS). What you get:

- **Desktop:** H.264 video (hardware-encoded, opt-in, with optional adaptive bitrate) or legacy bitmaps; keyboard (non-US layouts auto-detected) and mouse with the real cursor shape; the session follows your client's resolution.
- **Clipboard & files:** text, images and rich text both ways; copy files and folders between Mac and Windows.
- **Audio:** Mac audio to the client; the client's microphone as a real Mac input device *(experimental)*.
- **Devices from the client:** drives mounted in Finder (read-write), smart cards for macOS apps, the webcam as a real Mac camera, and USB devices *(experimental)*.
- **Headless:** serve a virtual display so the Mac needs no monitor, with the physical screen blanked while you're connected.

This is the macOS equivalent of `xrdp`. Not a client, not a VNC bridge.

## Status

v0 — daily-driver usable on a trusted LAN and over a VPN (ZeroTier, high-latency and mobile links included). Scope and…
