---
repo: "besoeasy/gupt"
name: "gupt"
description: "Self-hosted, end-to-end encrypted messenger. A privacy-first alternative to Telegram, Signal, WhatsApp & Discord — built on Nostr relays with WebRTC calls."
url: "https://github.com/besoeasy/gupt"
homepage: "https://gupt.app"
language: "Vue"
languages: ["Vue", "JavaScript"]
languagePcts: [54, 41]
topics: ["messenger", "nostr", "signal", "telegram", "whatsapp", "chat", "chat-application"]
stars: 19
forks: 2
openIssues: 0
closedIssues: 7
watchers: 1
contributors: 3
recentReleases: 3
createdAt: "2026-03-25T19:40:09Z"
lastCommitAt: "2026-06-24T23:37:22Z"
lastReleaseAt: "2026-06-24T20:11:04Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded"]
healthScore: 90
undervaluedScore: 56
maintainers: ["besoeasy"]
openGraphImageUrl: "https://opengraph.githubassets.com/3ec7d84777a082a8a2f229fbf38d7a11ae972f28e66ef3a427ab403cbbaffd43/besoeasy/gupt"
fundingLinks: ["GITHUB:https://github.com/besoeasy"]
---

# GUPT

Self-hosted, end-to-end encrypted messenger. A privacy-first alternative to Telegram, Signal, WhatsApp & Discord — built on Nostr relays with WebRTC calls.

## How to Use

**Web** — easiest, no install, works everywhere → [gupt.app](https://gupt.app)

**Docker** — self-host on your own server → `docker run -p 8000:8000 ghcr.io/besoeasy/gupt:latest`

**Linux** — native desktop app → [Flathub](https://flathub.org/en/apps/com.besoeasy.gupt)

## Showcase

- [Umbrel App Store](https://apps.umbrel.com/app/gupt)
- [Flathub](https://flathub.org/en/apps/com.besoeasy.gupt)
- [GitHub Container Registry](https://github.com/besoeasy/gupt/pkgs/container/gupt)

## Features

**Privacy & Identity**
- Anonymous — no phone number, no email, no account
- Keypair-based identity; optionally password + PIN protected (Argon2id KDF)
- Deterministic avatars — no profile photo required
- Zero server-side user accounts or metadata

**Messaging**
- End-to-end encrypted direct messages (NIP-04 / NIP-59 gift-wrap)
- **Temporary invites** — share a short-lived link instead of your permanent public key (see below)
- Group chats with member management and admin roles
- Message replies, edits, reactions,…
