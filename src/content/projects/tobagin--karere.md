---
repo: "tobagin/karere"
name: "karere"
description: "Gtk4 Whatsapp client"
readmeQualityOk: true
url: "https://github.com/tobagin/karere"
language: "Rust"
languages: ["Rust"]
languagePcts: [72]
stars: 226
forks: 20
openIssues: 4
closedIssues: 169
watchers: 3
contributors: 13
recentReleases: 0
createdAt: "2023-10-29T15:46:50Z"
lastCommitAt: "2026-11-15T11:17:54Z"
lastReleaseAt: "2026-06-07T21:33:12Z"
status: "thriving"
tags: ["solo_builder", "funded"]
healthScore: 95
undervaluedScore: 40
maintainers: ["tobagin", "riccardomarotti", "sknowledge1"]
openGraphImageUrl: "https://opengraph.githubassets.com/06a9693209fd1246bf94afcd772c7661a1b9b18aa901d6b2f27c6c56d6c442a9/tobagin/karere"
fundingLinks: ["GITHUB:https://github.com/tobagin", "PATREON:https://patreon.com/tobagin", "KO_FI:https://ko-fi.com/tobagin", "LIBERAPAY:https://liberapay.com/tobagin"]
discussionCount: 5
---

# Karere

A fast, native WhatsApp client for Linux that feels right at home on your desktop.

## 🎉 Version 4.4 — CEF/Chromium 156

**Karere 4.0** is a ground-up rewrite that swaps the rendering backend from WebKitGTK to the
**Chromium Embedded Framework (CEF/Chromium 156)** while keeping the same native
GTK4/libadwaita shell. It is a **hard fork** of Karere v3: there is **no automatic migration**
— existing accounts must be re-linked by scanning the QR code again on first launch.

### Why CEF?

WebKitGTK could not play WhatsApp Web's video attachments (a platform-level limitation shared
by all WebKitGTK browsers). Chromium handles them natively. The CEF build ships with
proprietary codecs (H.264/AAC), so **video attachments now play in-app**.

### 🆕 What's New in 4.4.1

- **Run on Startup message (#206)**: on desktops without a Background portal, such as Cinnamon
  on Linux Mint 21, Karere now explains how to add it to the startup applications with
  `--background` instead of pointing at a system setting that does not exist there.

> **Migration from v3.** None. v3 stored sessions under WebKit's data manager; v4 uses CEF
> `RequestContext` directories and a new account record…
