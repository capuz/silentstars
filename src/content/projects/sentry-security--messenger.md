---
repo: "SENTRY-Security/Messenger"
name: "Messenger"
description: "End-to-end encrypted messenger with Signal Protocol, ephemeral chat, and client-side encrypted media streaming."
readmeQualityOk: true
url: "https://github.com/SENTRY-Security/Messenger"
homepage: "https://sentry.red"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [92]
topics: ["e2ee", "e2ee-encryption", "messenger", "ntag424", "signal", "x3dh", "zero-knowledge", "zero-meta"]
stars: 8
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 5
recentReleases: 0
createdAt: "2025-10-08T20:12:39Z"
lastCommitAt: "2026-10-29T14:06:49Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 85
undervaluedScore: 44
maintainers: ["dalton-from-sentry", "claude", "TrustlessDev"]
openGraphImageUrl: "https://opengraph.githubassets.com/e23feb5e5208c941a9dea2d4323c4fb98d8ea3872ee0e2c245dd624c41657974/SENTRY-Security/Messenger"
---

# SENTRY Messenger

[繁體中文](https://github.com/SENTRY-Security/Messenger/blob/HEAD/README.zh-Hant.md) | **English**

Tap to open. Leave to vanish. Communication that leaves no trace.

## Why Not an App?

Traditional messaging apps require installation — leaving icons, notification logs, and entries in app lists permanently on the device. Even after deletion, residual data may be recoverable by forensic tools.

SENTRY Messenger is a pure web application. No installation required.

## How Does It Launch?

Users carry an NFC chip (card, sticker, ring — any form factor) programmed with a dedicated URL. Tap the chip with your phone, the browser opens automatically, enter the password, and you are directly into encrypted communication.

No app icon. No bookmark. No home screen shortcut. The only way to launch is the chip.

## What Happens When You Leave?

When the screen turns off, you switch to another app, or the browser goes to the background — the system immediately:

1. Clears all local data (memory, IndexedDB, LocalStorage)
2. Logs out the account
3. Redirects the browser to a user-configured web page (default: Google)
4. Overwrites browsing history so the back button cannot return…
