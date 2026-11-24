---
repo: "Nicolasalucin/kinodisc"
name: "kinodisc"
description: "Turn your videos into DVD, AVCHD and Blu-ray discs with real menus. Free desktop studio for Windows, Linux and macOS (Rust + Tauri)."
readmeQualityOk: true
url: "https://github.com/Nicolasalucin/kinodisc"
language: "Rust"
languages: ["Rust", "TypeScript"]
languagePcts: [53, 33]
topics: ["avchd", "blu-ray", "dvd", "dvd-authoring", "rust", "svelte", "tauri", "disc-burning"]
stars: 13
forks: 0
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 2
recentReleases: 10
createdAt: "2026-10-26T01:54:41Z"
lastCommitAt: "2026-11-24T01:57:47Z"
lastReleaseAt: "2026-11-17T03:36:04Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 90
undervaluedScore: 55
maintainers: ["Nicolasalucin"]
openGraphImageUrl: "https://opengraph.githubassets.com/510327d4aa1f5cc10b15809fa5a02206ba03fa9558fe18aa9bd25f31fde3f9be/Nicolasalucin/kinodisc"
---

Turn your videos into a DVD, AVCHD or Blu-ray disc with real menus, like the ones on movies.<br />
  Import, design the menu, try it with a virtual remote, burn.



---

Kinodisc (formerly *DVD Forge*) is a free desktop studio for making optical
discs that play on a living-room player: menus with thumbnails, chapters,
several audio and subtitle tracks, play all, scene selection — the whole disc,
checked before it is burned.

## What's new in 1.3 (nightly)

A nightly build: new and not fully tested (see the [changelog](https://github.com/Nicolasalucin/kinodisc/blob/HEAD/CHANGELOG.md)).

- **More quality for the same size** on AVCHD and Blu-ray: two-pass H.264 with
  B-frames, about 20–30 % fewer bits for the same picture on SD, 15–35 % on HD.
- **Episodes go on to the next one**, and the next-chapter key reaches the next
  episode (R1 on a PS4).
- **Intro on AVCHD and Blu-ray**, when the disc starts and/or when nobody
  chooses anything on the menu.
- **Long-series templates**: 12, 18 or 24 episodes a page.
- **Content type** (film, animation, grainy video), **CPU maximum** encoder and
  a **GOP of 2 seconds** (3 s very experimental).
