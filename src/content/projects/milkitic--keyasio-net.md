---
repo: "Milkitic/KeyASIO.Net"
name: "KeyASIO.Net"
description: "An ASIO/WASAPI Exclusive middleware for osu! players. Exploring the limits of low-latency audio."
readmeQualityOk: true
url: "https://github.com/Milkitic/KeyASIO.Net"
language: "C#"
languages: ["C#"]
languagePcts: [99]
topics: ["osu", "osugame", "audio", "latency"]
stars: 126
forks: 6
openIssues: 6
closedIssues: 20
watchers: 4
contributors: 2
recentReleases: 0
createdAt: "2020-11-19T15:08:53Z"
lastCommitAt: "2026-07-22T06:12:20Z"
lastReleaseAt: "2022-06-30T11:59:38Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero", "funded"]
healthScore: 94
undervaluedScore: 43
maintainers: ["Milkitic"]
openGraphImageUrl: "https://opengraph.githubassets.com/75bfc74b3b65efe6b75cab427af78d9ec8468096cdeef463342ea8a0913791a3/Milkitic/KeyASIO.Net"
fundingLinks: ["KO_FI:https://ko-fi.com/yfextension39365"]
discussionCount: 5
---

# ⚡ KeyASIO.Net
**Low-Latency Audio Middleware for osu!**

  <b>Audio latency as low as 0.6ms.</b><br>
  <i>"I was hearing clicks before I even tapped." — player feedback</i>
</p>

</div>

---

## 🚀 Why KeyASIO?

osu!'s built-in audio stack typically sits around 30–40ms of latency. KeyASIO replaces it with an external
**ASIO / WASAPI Exclusive** backend that talks past the Windows mixer, and reconstructs hitsounds in real time
from the game's own memory.

- **⚡ Low latency:** ~0.6ms on high-end hardware (verified by [EmertxE](https://osu.ppy.sh/users/954557)),
  8–15ms on generic setups.
- **🎮 Real game integration:** reads game state via `ReadProcessMemory` (stable) or a named-pipe IPC bridge
  (lazer), so the hitsounds stay synchronized to the live beatmap and judgement state instead of just firing on keypress.
- **🎧 Full hitsound support:** custom hitsounds, storyboard samples, dynamic volume, skin overrides.
- **🎹 Mania-aware:** per-key sound processing matching the native game's behavior.

## 📸 Screenshots

</p>

---

## ⚙️ Configuration Guide

KeyASIO has two main modes. Pick the one that matches your hardware.

### 🚩 Which mode should I choose?

- **I have a dedicated…
