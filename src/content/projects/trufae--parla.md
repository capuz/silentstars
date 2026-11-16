---
repo: "trufae/parla"
name: "parla"
description: "Native Gnome DeltaChat client"
readmeQualityOk: true
url: "https://github.com/trufae/parla"
homepage: "https://trufae.github.io/parla/"
language: "Vala"
languages: ["Vala"]
languagePcts: [83]
topics: ["deltachat", "deltachat-client", "gnome"]
stars: 68
forks: 11
openIssues: 7
closedIssues: 62
watchers: 2
contributors: 10
recentReleases: 0
createdAt: "2026-04-07T16:17:21Z"
lastCommitAt: "2026-11-16T11:55:14Z"
lastReleaseAt: "2026-06-17T20:12:03Z"
status: "thriving"
tags: []
healthScore: 97
undervaluedScore: 41
maintainers: ["radare", "trufae", "mguellsegarra"]
openGraphImageUrl: "https://opengraph.githubassets.com/a7cbfc88903f373203b66567f2e8a9412af3f71f8eba313b3124b595dc49228d/trufae/parla"
---

A native <a href="https://delta.chat">Delta Chat</a> client for GNOME &mdash; decentralized, encrypted chat over email.

---

Parla is a lightweight, native **Vala** + **GTK4** + **libadwaita** app that talks to [deltachat-rpc-server](https://github.com/deltachat/deltachat-core-rust) over JSON-RPC. It is designed for GNOME and follows its desktop conventions, while also running on Linux, Windows, and macOS.

## Get Parla and start chatting

Download a package from the [Parla releases page](https://github.com/trufae/parla/releases). It provides Linux packages (`.deb`, Flatpak, and AppImage), macOS `.dmg` images, and a Windows `.zip` archive. On Windows, extract the archive and start `parla.exe`; on macOS, open the disk image and move Parla to Applications.

On first launch, follow the profile setup to choose a display name and a chatmail relay. The relay creates an email address and password for you, while Parla generates your encryption keys on your device. You can also redeem an invitation code or import a second device instead. Then use **New chat** or **New group** to start talking and share an invite link or QR code with others.

Want to build it yourself? See [Build](#build)…
