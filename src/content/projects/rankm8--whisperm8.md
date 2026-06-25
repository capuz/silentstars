---
repo: "RankM8/WhisperM8"
name: "WhisperM8"
description: "Whisper but better"
url: "https://github.com/RankM8/WhisperM8"
language: "Swift"
languages: ["Swift"]
languagePcts: [98]
stars: 11
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 4
recentReleases: 2
createdAt: "2026-02-03T20:08:28Z"
lastCommitAt: "2026-06-25T06:40:31Z"
lastReleaseAt: "2026-06-25T06:43:26Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 89
undervaluedScore: 47
maintainers: ["xeno-suter", "GiulianoCosta71"]
openGraphImageUrl: "https://opengraph.githubassets.com/98f5a86d5ce23ad624e74a1b69a9919f0df7a7af6e4e7e7e3fa54f84af29bbc2/RankM8/WhisperM8"
---

# WhisperM8

</p>

  <strong>Native macOS dictation app with AI-powered transcription</strong>
</p>

</p>

---

## Features

- **Toggle Recording** — Press hotkey to start, press again to stop and transcribe
- **Auto-Paste** — Transcribed text automatically pasted into active app (optional)
- **Dual Provider Support** — Choose between OpenAI Whisper or Groq
- **Menu Bar App** — Runs quietly in your menu bar
- **Real-time Feedback** — Visual recording indicator with audio levels
- **Secure** — API keys stored in macOS Keychain

## Installation

### Homebrew (recommended)

```bash
brew install --cask rankm8/tap/whisperm8
```

(Equivalent: `brew tap rankm8/tap && brew install --cask whisperm8`.)

Updates: `brew upgrade --cask whisperm8`.

> WhisperM8 is distributed self-signed (no Apple Developer ID / notarization).
> The cask automatically removes the Gatekeeper quarantine attribute on install,
> so the app launches without a manual override.

### Build from Source

```bash
git clone https://github.com/RankM8/whisperm8.git
cd whisperm8
make install
```

**Requirements:**
- macOS 14 (Sonoma) or later
- Xcode Command Line Tools (`xcode-select --install`)

### Direct DMG download

Grab…
