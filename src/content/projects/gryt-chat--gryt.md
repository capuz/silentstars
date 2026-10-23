---
repo: "Gryt-chat/gryt"
name: "gryt"
description: "The Gryt monorepo. Self-hosted voice, video and text chat over WebRTC: desktop and web client, signalling server, Go SFU, auth, and the ops to deploy them. Every component is a submodule with its own repo."
readmeQualityOk: true
url: "https://github.com/Gryt-chat/gryt"
homepage: "https://gryt.chat"
language: "Shell"
languages: ["Shell", "TypeScript"]
languagePcts: [55, 29]
topics: ["chat", "discord", "gryt", "teamspeak", "text-chat", "video-chat", "voice-chat", "webrtc", "gryt-chat", "communication"]
stars: 38
forks: 3
openIssues: 2
closedIssues: 25
watchers: 0
contributors: 4
recentReleases: 0
createdAt: "2026-02-21T12:51:56Z"
lastCommitAt: "2026-10-23T08:47:36Z"
lastReleaseAt: "2026-03-08T19:06:20Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded"]
healthScore: 98
undervaluedScore: 47
maintainers: ["github-actions[bot]", "grytchat"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1163318209/c04bf808-4ec3-40f3-896e-6b082421c2b3"
fundingLinks: ["GITHUB:https://github.com/Gryt-chat", "GITHUB:https://github.com/sivert-io", "KO_FI:https://ko-fi.com/sivert"]
---

> [!NOTE]
> **In development since May 2022.** Gryt ships often, from a stable channel and a beta channel. Read the [changelog](https://gryt.chat/changelog) before you update a server.

## Why

Most voice platforms are owned by companies that monetise the conversation and
decide who gets to leave. Gryt is built the other way round — you run the
server, the data sits on your disk, and nobody needs an account with us to talk
to you.

**No account required**

A server chooses which identities it admits. Guests hold a keypair on their own
device. An account carries your identity *between* servers — it is not the price
of entry.

**Real-time voice and video**

Go and Pion WebRTC relay voice, camera and screen share without transcoding.
Noise suppression, echo cancellation and voice activity detection run on the
client.

**Yours to run**

Docker Compose, Helm, or a Cloudflare Tunnel. One compose file can host as many
servers as you like — they share an SFU.

**Desktop and web**

Electron app for Linux, macOS and Windows with auto-updates, plus a browser
client. The desktop app can host a server on its own.

**Files and messages**

Persistent chat backed by SQLite, uploads to any…
