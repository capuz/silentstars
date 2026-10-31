---
repo: "erikwb/blueferry"
name: "blueferry"
description: "iMessage/SMS over Bluetooth to Linux. No proxy or cloud!"
readmeQualityOk: true
url: "https://github.com/erikwb/blueferry"
homepage: "https://blueferry.weirdware.io"
language: "Python"
languages: ["Python"]
languagePcts: [92]
topics: ["imessage", "linux", "iphone"]
stars: 324
forks: 26
openIssues: 19
closedIssues: 55
watchers: 2
contributors: 11
recentReleases: 10
createdAt: "2026-08-09T13:11:47Z"
lastCommitAt: "2026-10-31T19:01:54Z"
lastReleaseAt: "2026-10-28T02:57:24Z"
status: "thriving"
tags: ["release_machine"]
healthScore: 94
undervaluedScore: 30
maintainers: ["erikwb", "joshii-h", "techmore"]
openGraphImageUrl: "https://opengraph.githubassets.com/deb3fd5b7ca01cb15f709c9b65d10d718555bef043c9fc5837be5da6cdb19b2d/erikwb/blueferry"
---

# BlueFerry

Use your iPhone's messages on Linux over Bluetooth.

BlueFerry brings SMS, RCS, and iMessage from a paired iPhone to your Linux desktop.
You can read and reply to messages, start a conversation, search synced
contacts, and optionally mirror other iPhone notifications. There is no Mac
relay, Apple login, cloud service, or subscription.

This is still experimental software. Most development has used an iPhone 16
Pro Max on iOS 26.5, with additional successful testing on an iPhone 17 Pro Max
running an iOS 27 beta. Apple can change the Bluetooth behavior BlueFerry relies
on, so don't make it your only way to receive an important message yet.

## What works

- Receive and send SMS, RCS, and iMessage through the iPhone.
- Sync contacts, including phone numbers and Apple-ID email addresses.
- Mark messages read from the desktop.
- Use native GTK, KDE/Kirigami, Quickshell, or terminal clients.
- Keep local history encrypted with GNOME Keyring or KDE Wallet.
- Group chats, when BlueFerry can identify the participants safely.
- Optional: recent calls and missed-call notifications (off by default; see
  [Call history](#call-history-optional)).

BlueFerry only knows about…
