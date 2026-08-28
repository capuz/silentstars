---
repo: "LarryXu2014/Kuiqr"
name: "Kuiqr"
description: "Local, private QR-code scanner & opener. Chrome/Edge/Firefox extension + macOS/Windows desktop app. Scan from any image or selected screen region and open links instantly — no servers, no tracking."
readmeQualityOk: true
url: "https://github.com/LarryXu2014/Kuiqr"
homepage: "https://www.youtube.com/@larryxu2014"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [89]
stars: 12
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 10
createdAt: "2026-07-15T20:02:59Z"
lastCommitAt: "2026-08-28T11:59:12Z"
lastReleaseAt: "2026-07-31T10:40:59Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 79
undervaluedScore: 52
maintainers: ["LarryXu2014"]
openGraphImageUrl: "https://opengraph.githubassets.com/1da0f4e5efa095f82996e1fc1137e4b1abec5d8a33bb9632d9fa551acc07a592/LarryXu2014/Kuiqr"
---

# Kuiqr

> Scan QR codes instantly — right-click any image, press a keyboard shortcut, or paste a screenshot. Works on your desktop, in your browser, and on the web.

All QR decoding happens **locally on your device**. On macOS the desktop app uses the native **Apple Vision** framework for instant detection, with a fast bounded jsQR fallback for hard or artistic QR codes. No images, URLs, or scan data are ever sent to any server.

> **New in this version:** full **QR generator** (Wi-Fi / contact / event / location templates, styling, logos, print-ready export, batch from CSV), **trackable QR codes** with scan analytics, **Region Watch** (live-scan a screen region), and **phone-like scan actions** — scan a Wi-Fi code and join the network, scan a contact and save it to Contacts, scan an event and add it to Calendar. See the **[User Guide](https://github.com/LarryXu2014/Kuiqr/blob/HEAD/USER_GUIDE.md)** for how everything works.

---

## One-Line Install (Terminal)

### macOS — Homebrew (recommended)

```bash
brew install --cask kuiqr
```

If the cask isn't available in your local Homebrew yet, install from the official tap:

```bash
brew tap LarryXu2014/kuiqr && brew install --cask…
