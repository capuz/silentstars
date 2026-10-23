---
repo: "knutwurst/ps5-ultrapack"
name: "ps5-ultrapack"
description: "macOS and Windows app to build PS5 fPKG (.pkg) and .ffpfsc containers from any source. Game folder, archive, or disk image. Pack, unpack, browse a .pkg block-by-block, patch, fake-sign. Verified launching on retail FW 11.60 with kstuff-lite 1.13+."
readmeQualityOk: true
url: "https://github.com/knutwurst/ps5-ultrapack"
language: "Python"
languages: ["Python", "C++"]
languagePcts: [69, 20]
topics: ["fpkg", "homebrew", "jailbreak", "macos", "pkg", "playstation-5", "ps5", "ffpfsc", "libprosperopkg", "shadowmount"]
stars: 51
forks: 3
openIssues: 0
closedIssues: 7
watchers: 0
contributors: 1
recentReleases: 10
createdAt: "2026-06-13T17:30:43Z"
lastCommitAt: "2026-10-23T09:33:07Z"
lastReleaseAt: "2026-10-06T14:00:48Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded", "release_machine"]
healthScore: 90
undervaluedScore: 43
maintainers: ["knutwurst"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1268570842/49e8efe0-538a-415e-b069-ae2b72a56a70"
fundingLinks: ["CUSTOM:https://paypal.me/oliverkoester"]
---

# PS5 UltraPack

A desktop app for macOS and Windows that packs, converts, patches, backports and signs PS5 games, and builds installable `.pkg` files. You add a game folder, an archive, a disk image, a `.ffpfs`/`.ffpfsc` or a `.pkg`, pick what should happen to it and what should come out, and the queue works through it.

The app used to be called PS5 FFPFSC ULTRA.

  If you like what I do, you can buy me a coffee*: <a href="https://paypal.me/oliverkoester"><img src="https://img.shields.io/badge/Donate-PayPal-0070ba?style=for-the-badge&logo=paypal&logoColor=white" alt="Donate with PayPal" align="absmiddle"></a><br>

---

## Download

Grab the latest build from [Releases](https://github.com/knutwurst/ps5-ultrapack/releases).

- **macOS** 26 or newer on Apple Silicon (every M1 or later Mac can update to it for free): unzip and start the app. The app is only ad-hoc signed, so if macOS refuses to open it, run this once:
  ```bash
  xattr -dr com.apple.quarantine "PS5 UltraPack.app"
  ```
- **Windows x64** (preview): unzip and start `PS5 UltraPack.exe`. SmartScreen will warn on first start because the exe isn't signed ("More info", then "Run anyway"). Everything works on Windows 11 in…
