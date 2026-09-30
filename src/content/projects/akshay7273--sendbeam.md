---
repo: "Akshay7273/sendbeam"
name: "sendbeam"
description: "End-to-end-encrypted, peer-to-peer file transfer for the browser and the CLI. No accounts, no server-side file storage."
readmeQualityOk: true
url: "https://github.com/Akshay7273/sendbeam"
homepage: "https://github.com/Akshay7273/sendbeam"
language: "Go"
languages: ["Go", "TypeScript"]
languagePcts: [67, 28]
topics: ["cli", "e2ee", "end-to-end-encryption", "file-transfer", "golang", "p2p", "privacy", "self-hosted", "svelte", "webrtc"]
stars: 23
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 8
createdAt: "2026-08-08T19:55:17Z"
lastCommitAt: "2026-09-30T09:57:27Z"
lastReleaseAt: "2026-09-20T18:23:35Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 89
undervaluedScore: 46
maintainers: ["Akshay7273", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/4832b5d994d8b45c74e48c720d53cf07d64967813ed2ea8ead1a8b94a68fc55d/Akshay7273/sendbeam"
---

</p>

<h1 align="center">SendBeam</h1>

  <strong>Encrypted peer-to-peer file transfer for the web, the terminal, and the desktop. No accounts, no uploads, no server-side storage.</strong>
</p>

</p>

  · <a href="#browser">Browser</a>
  · <a href="#cli">CLI</a>
  · <a href="#desktop">Desktop</a>
  · <a href="#self-hosting">Self-hosting</a>
  · <a href="#security">Security</a>
  · <a href="#documentation">Documentation</a>
  · <a href="#development">Development</a>
</p>

## About

SendBeam is an open-source, end-to-end-encrypted file transfer application for the browser,
the command line, and the desktop. Files stream directly between two peers over WebRTC; a blind
rendezvous server negotiates the connection and never stores, inspects, or decrypts file
data. When a direct path is blocked by a restrictive NAT, an encrypted relay on the server
carries opaque ciphertext while the transfer stays end-to-end-encrypted.

All clients share one wire protocol: web, Go CLI, and native desktop. Send from a browser
tab and receive in the CLI or desktop — or any other combination — with the same invite code, even
across different networks.

The design is documented in the [protocol…
