---
repo: "andersfischernielsen/ssx3-decomp"
name: "ssx3-decomp"
description: "A decompilation/port of SSX 3 in Rust."
readmeQualityOk: true
url: "https://github.com/andersfischernielsen/ssx3-decomp"
language: "Rust"
languages: ["Rust"]
languagePcts: [99]
stars: 25
forks: 2
openIssues: 1
closedIssues: 0
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-10-15T20:01:38Z"
lastCommitAt: "2026-10-24T08:08:20Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 70
undervaluedScore: 30
maintainers: ["andersfischernielsen"]
openGraphImageUrl: "https://opengraph.githubassets.com/4ae3cc2302e1d0fc33334e694d41a9c5d404a889106d999109afec35c88dcc80/andersfischernielsen/ssx3-decomp"
---

# ssx3-decomp

▶ **[Video)](https://github.com/andersfischernielsen/ssx3-decomp/blob/HEAD/docs/ssx3.mp4)**

> SSX 3 is © Electronic Arts; "SSX" is an EA trademark. This project is not affiliated
> with or endorsed by EA. **The repository contains no game data and no game code.** The
> disc image, the executable and everything translated from them (`orig/`,
> `generated/ee`, `generated/iop`, `generated/vu`) are produced locally from **your own
> copy** of the game. They are ignored by git, and must never be committed or shared.

A native **Rust** static recompilation of **SSX 3 (USA)** (`SLUS_207.72`) for the
PlayStation 2, on its way to a native port. The game's Emotion Engine code is translated
to Rust ahead of time; everything around it (rendering, movies, sound, files,
controllers, memory card) is native Rust. No emulator interprets the game's code, and
the PS2's graphics, video and audio hardware are not emulated on the default path.

**Status (2026-10-22):**
- **The game is playable**: boot, movies, menus, every race and freestyle event,
  Conquer the Mountain, music and sound, saves on a file-backed memory card.
- **Native rendering at the game's draw functions.** The game's…
