---
repo: "marmot-protocol/whitenoise-linux"
name: "whitenoise-linux"
description: "Whitenoise linux. Please file issues and PRs on ngit"
readmeQualityOk: true
url: "https://github.com/marmot-protocol/whitenoise-linux"
homepage: "https://committish.app/danny@cyberguy.fyi/darkmatter-linux"
language: "Odin"
languages: ["Odin"]
languagePcts: [83]
stars: 5
forks: 3
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 6
recentReleases: 6
createdAt: "2026-06-09T21:16:37Z"
lastCommitAt: "2026-10-29T10:20:00Z"
lastReleaseAt: "2026-10-23T11:29:03Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 80
undervaluedScore: 68
maintainers: ["dannym-arx", "jooray"]
openGraphImageUrl: "https://opengraph.githubassets.com/90cd7f9e1ec4ebf5b302d2f3fdfad8d260acc1c04aae1b743d434903cb611407/marmot-protocol/whitenoise-linux"
---

---

White Noise Linux is a desktop front end for [Marmot](https://github.com/marmot-protocol/mdk): [MLS](https://messaginglayersecurity.rocks/) group messaging carried over [Nostr](https://nostr.com) relays. You get the forward secrecy and post-compromise security of MLS together with a portable, self-owned Nostr identity: no phone number, no central server, no account anyone can take away from you. It is one Odin binary drawing an immediate-mode [clay](https://github.com/nicbarker/clay) layout on SDL3, and every secret lives in a single password-encrypted vault.

> **Status: early.** It works and is usable day-to-day, but it is moving fast, so expect rough edges.

**Jump to:** [Features](#features) · [Install](#install) · [Build from source](#build-from-source) · [Configuration](#configuration) · [Architecture](#architecture) · [Development](#development) · [Contributing](#contributing) · [License](#license)

## Features

**Messaging**

- One-to-one and group chats, end-to-end encrypted through Marmot's MLS, with sealed-sender invites over NIP-59.
- Developer mode shows a clickable MLS badge in chat headers when space allows. Open it to inspect and copy the group ID or read the…
