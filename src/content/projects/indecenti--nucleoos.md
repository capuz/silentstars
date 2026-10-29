---
repo: "indecenti/NucleoOs"
name: "NucleoOs"
description: "Web-native OS for the M5Stack Cardputer (ESP32-S3): native firmware + a desktop-class browser shell, offline AI assistant (ANIMA), bilingual voice, games, a security lab, OTA."
readmeQualityOk: true
url: "https://github.com/indecenti/NucleoOs"
homepage: "https://nucleoos.indexhub.it/cardputer/"
language: "C"
languages: ["C", "C++"]
languagePcts: [52, 41]
topics: ["cardputer", "embedded", "esp-idf", "esp32", "esp32-s3", "firmware", "iot", "m5stack", "offline-ai", "operating-system"]
stars: 93
forks: 5
openIssues: 0
closedIssues: 4
watchers: 3
contributors: 2
recentReleases: 0
createdAt: "2026-06-13T10:30:10Z"
lastCommitAt: "2026-10-29T21:24:15Z"
lastReleaseAt: "2026-07-21T09:19:17Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 90
undervaluedScore: 35
maintainers: ["indecenti"]
openGraphImageUrl: "https://opengraph.githubassets.com/29742b6519e9be2c1745a81a3c6c13159830d1a818bbbcb718f1d901d1872d05/indecenti/NucleoOs"
discussionCount: 1
---

# NucleoOS

### The web‑native operating system for the M5Stack Cardputer

**The OS runs on the device. Your browser is the rich operator console.**
One ESP32‑S3, no PSRAM, ~512 KB of RAM — turned into a real, modern, multi‑app OS with an AI
assistant that uses the best brain you have (offline on the device, your own PC's models, or the
cloud), a desktop‑class web shell, a pocket game console, a security lab, voice transcription and
image generation.

`ESP32‑S3 / M5StampS3` · `ESP‑IDF firmware` · `PWA web shell` · `English‑only codebase`

**[⬇️ Install](#-install--three-ways)** · **[📋 What's new in v0.8.0](#-new-in-v080)** · **[📖 User Guide](https://github.com/indecenti/NucleoOs/blob/HEAD/docs/user-guide.md)** · **[💬 Discord](https://discord.gg/84tyTPtWus)**

---

## 🚀 Install — three ways

**You need:** a Cardputer (original or ADV — same firmware), a USB‑C data cable and a microSD card formatted **FAT32**.
> ⚠️ **FAT32 only — not exFAT.** Cards over 32 GB come exFAT from the factory and Windows won't offer FAT32 for them:
> reformat with a tool such as guiformat or Rufus. On an exFAT card the firmware boots, but the web OS can't be read
> and the browser shows the *Rescue*…
