---
repo: "ZANdewanai/Genshin-Impact-Rich-Presence"
name: "Genshin-Impact-Rich-Presence"
description: "Genshin Impact Rich Presence (somewhat maintained)"
readmeQualityOk: true
url: "https://github.com/ZANdewanai/Genshin-Impact-Rich-Presence"
language: "Python"
languages: ["Python"]
languagePcts: [79]
topics: ["discord-rich-presence", "genshin-impact", "rich-presence", "discord-rpc", "rpc", "discord", "discordrichpresence", "discordrpc", "genshin", "ocr"]
stars: 37
forks: 7
openIssues: 0
closedIssues: 6
watchers: 5
contributors: 1
recentReleases: 0
createdAt: "2022-04-08T16:46:26Z"
lastCommitAt: "2026-11-09T00:53:56Z"
lastReleaseAt: "2023-12-22T01:05:38Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 76
undervaluedScore: 42
maintainers: ["ZANdewanai"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/479468758/036a8a03-40ce-4966-89cd-7f9300018215"
discussionCount: 5
---

# Genshin Impact Rich Presence v3.0

  

A Discord Rich Presence for Genshin Impact that shows your current location,
activity, party, and playtime. It does not tamper with game files — it scans
text in periodic screen captures using OCR (RapidOCR on ONNX Runtime) and
translates what it sees into Discord status updates.

> - **Windows 10/11 only**
> - **GPU required** — OCR runs exclusively through DirectML (NVIDIA, AMD, or Intel); the app refuses to start without it
> - **Game text language must be English**
> - **Single Player mode only**, any party size (1–6)
> - Works at any resolution or aspect ratio (auto-detected, ultrawide included)

-----

## 🚀 Quick Start

1. Download the latest release ZIP from [**GitHub Releases**](https://github.com/ZANdewanai/Genshin-Impact-Rich-Presence/releases) and unzip it.
2. Double-click **`GenshinRichPresence.exe`**. No terminal, no Python install needed.
3. On first launch the app auto-creates `shared_config.json`. Open the
   **Settings** tab and enter:
   - Your Genshin Impact username
   - Your main character (Aether/Lumine)
   - Wanderer name, if you've renamed them in-game
4. Click **Start Rich Presence.** The app detects the Genshin…
