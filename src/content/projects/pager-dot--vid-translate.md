---
repo: "Pager-dot/vid_translate"
name: "vid_translate"
description: "Tauri desktop app for live JA/ES → EN video translation; Vosk ASR + CTranslate2 (int8-quantized MarianMT), paced-reveal captions, cross-platform CI release pipeline (AppImage/.deb/.msi)"
readmeQualityOk: true
url: "https://github.com/Pager-dot/vid_translate"
language: "Rust"
languages: ["Rust", "JavaScript"]
languagePcts: [68, 20]
stars: 12
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 3
recentReleases: 5
createdAt: "2026-06-20T04:02:36Z"
lastCommitAt: "2026-10-09T18:56:18Z"
lastReleaseAt: "2026-10-08T12:37:04Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 84
undervaluedScore: 50
maintainers: ["Pager-dot", "priyansu-rout19"]
openGraphImageUrl: "https://opengraph.githubassets.com/29deeae6461621e8d7c11eda58ae779ef3d4b257ebf0962d8a999c5530926e16/Pager-dot/vid_translate"
---

# vid_translate 🎙️

A transparent, always-on-top, frameless **live caption & translation overlay** for your
desktop — built with **Tauri v2 + React**.

It listens to your **system audio** (whatever is playing — YouTube, a meeting, a film) and
shows live captions at the bottom of your screen:

- **EN** — live English captions, streaming, fully offline
- **JA** — Japanese speech → English, translated directly from the audio
- **ES** — Spanish speech → English, with the Spanish kept on screen too

The overlay is draggable, remembers its position and size, spans the full display width by
default, and stays out of your way.

> ### 👀 Looking for the polished one? Try [Mimi](https://github.com/yuxino/Mimi).
>
> This project's entire interface is borrowed from **[Mimi](https://github.com/yuxino/Mimi)**
> by [yuxino](https://github.com/yuxino) — a far more complete, more polished and more
> capable live speech-translation app, for desktop *and* Android, with many more providers,
> languages and settings than this one has. If you want the real thing rather than my take
> on part of it, go there first. The UI you see here is theirs, under the MIT license;
> see [Credits](#-credits).

---…
