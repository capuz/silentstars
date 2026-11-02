---
repo: "Chatter-Org/Chatter"
name: "Chatter"
description: "Chat with your friends on your own terms. "
readmeQualityOk: true
url: "https://github.com/Chatter-Org/Chatter"
language: "TypeScript"
languages: ["TypeScript", "Rust"]
languagePcts: [66, 32]
stars: 7
forks: 0
openIssues: 0
closedIssues: 1
watchers: 1
contributors: 4
recentReleases: 2
createdAt: "2026-02-11T15:54:36Z"
lastCommitAt: "2026-11-02T15:16:34Z"
lastReleaseAt: "2026-10-25T18:41:29Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 100
undervaluedScore: 66
maintainers: ["Sphyrna-029", "ChristianVaughn"]
openGraphImageUrl: "https://opengraph.githubassets.com/9487b4a40710af6159d8e49dfd55adfafefa5e9d7e1b40f0e1f304813e825c89/Chatter-Org/Chatter"
---

# Chatter

A lightweight, performant, self-hosted chat application built with Rust. Chatter implements real-time messaging, voice chat, and screen sharing.

---

## Features

- Rooms
- Real-Time Messaging
- Voice Chat
- Multi Screen Sharing (requires HTTPS)
- Stream clipping
- File Sharing
- Steam Integration
- Forums
- Collaborative Whiteboard
- Code Snippets and Syntax Highlighting
- Direct Messages
- Custom Emojis
- Room Invite Links
- 2FA (TOTP)
- Themes
- Profile Customization
- Friend Requests
- Chat Search
- Message Pins
- Polls with Timed Results
- Shareable Message Links with Permission-Aware Previews
- Webhooks
- Push Notifications and Installable App (PWA, requires HTTPS)
- Synced Drafts and Video Resume Across Devices
- Per-Room Sound Packs and Entrance Sounds
- Rate Limiting and Per-Channel Slow Mode
- Chat threads
- Moderation Audit Log
- Server backups
- GIF Search (requires Klipy API key)
- Server Admin Dashboard

---

## Deployment

Chatter is deployed via Docker Compose. The stack includes three services: the Chatter application, MongoDB, and coturn (the TURN server required for WebRTC voice and screen sharing).

### Prerequisites

- Docker and Docker Compose
- A…
