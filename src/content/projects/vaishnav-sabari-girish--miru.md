---
repo: "Vaishnav-Sabari-Girish/miru"
name: "miru"
description: "Wayland-native zooming daemon for streamers (Mirror of https://codeberg.org/Vaishnav-Sabari-Girish/miru)"
readmeQualityOk: true
url: "https://github.com/Vaishnav-Sabari-Girish/miru"
homepage: "https://blog.vaishnavs.is-a.dev/miru/"
language: "C"
languages: ["C"]
languagePcts: [95]
stars: 13
forks: 1
openIssues: 5
closedIssues: 16
watchers: 1
contributors: 2
recentReleases: 4
createdAt: "2026-07-09T16:21:19Z"
lastCommitAt: "2026-08-07T05:14:47Z"
lastReleaseAt: "2026-08-05T03:26:58Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 95
undervaluedScore: 56
maintainers: ["Vaishnav-Sabari-Girish", "yvnth"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1295529160/dd7f490b-23f9-4ba4-b526-d4763a256dda"
---

# Miru

<br>

</div>

<br>
<br>

A Wayland-native screen magnifier and cursor spotlight tool for streamers, built
for Wayland compositors supporting the required wlroots protocols. Miru is
primarily developed and tested on Niri.

Inspired by [boomer](https://github.com/tsoding/boomer), but for Wayland —
written in C, keybind-driven, no GUI, no mouse-required config.

> [!WARNING]
> Early in Development
> See [Roadmap](#roadmap)

> [!IMPORTANT]
> Miru currently requires both `wlr-layer-shell-unstable-v1` and
> `wlr-screencopy-unstable-v1`. Compositors that do not expose these protocols
> are not currently supported.
>
> In particular, **GNOME (Mutter)** and **KDE Plasma (KWin)** are not supported
> at this time.

> [!NOTE]
> `miru` devlogs on YouTube
> <https://youtube.com/playlist?list=PLZraydlsV2t0&si=jystH8Ik1UjDVu5t>

## Demo

https://github.com/user-attachments/assets/be2a4561-ad53-4700-8ddc-b78a5f4eb616

### What it does

Two distinct features — one built, one planned. They share a visual
similarity (dim + soft-edged circle around the cursor) but are not the same
feature, and it's worth being clear about which one you're getting:

* **Magnifier mode** — press a key, the…
