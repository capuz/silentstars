---
repo: "OpenVidu/openvidu-meet"
name: "openvidu-meet"
description: "Host and customize your own high-quality video calling service in minutes. OpenVidu's reference app, Community Edition"
readmeQualityOk: true
url: "https://github.com/OpenVidu/openvidu-meet"
homepage: "https://openvidu.io/latest/meet"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [84]
topics: ["openvidu", "video-conferencing", "webrtc", "active", "product", "selh-hosted", "zoom-alternative"]
stars: 13
forks: 9
openIssues: 1
closedIssues: 1
watchers: 5
contributors: 10
recentReleases: 1
createdAt: "2025-03-10T16:19:23Z"
lastCommitAt: "2026-10-29T14:07:03Z"
lastReleaseAt: "2026-09-29T16:13:33Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "fork_magnet"]
healthScore: 87
undervaluedScore: 74
maintainers: ["CSantosM", "github-actions[bot]", "cruizba"]
openGraphImageUrl: "https://opengraph.githubassets.com/5135877ec12b2563079c6d69df3b77751637baf09a522f09182324fb2ccad0ce/OpenVidu/openvidu-meet"
---

# OpenVidu Meet

OpenVidu Meet is a fully featured, self-hosted video conferencing application: a ready-to-use alternative to Zoom, Google Meet or Jitsi Meet that runs on your own servers and needs no code to deploy. It is built with Angular, Node.js and [LiveKit](https://livekit.io/), ships as part of an OpenVidu deployment, and provides user accounts and login, granular roles and per-room permissions, room management, recordings, analytics and webhooks.

It can also be **embedded** into third-party web applications — either as the `<openvidu-meet>` web component or inside an `<iframe>` — so the host application can build its own business layer on top of the meeting.

This repository contains the **Community Edition (CE)**. The **Professional Edition (PRO)** lives in a separate private repository and extends CE rather than forking it.

## Prerequisites

- **Node.js** `24.15.0` or later.
- **pnpm** `11.28.9` (pinned by `packageManager` in `package.json`). `./meet.sh` offers to install it if it is missing.
- **Backing services** (LiveKit, MongoDB, Redis and S3-compatible storage). The simplest way to run them is the [OpenVidu local…
