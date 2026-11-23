---
repo: "voicenux/voicenux"
name: "voicenux"
description: "VoiceMod for Linux"
readmeQualityOk: true
url: "https://github.com/voicenux/voicenux"
language: "Rust"
languages: ["Rust"]
languagePcts: [90]
topics: ["gtk4", "linux", "pipewire", "rust", "soundboard", "voice-changer", "voicemod-alternative", "voicenux"]
stars: 5
forks: 0
openIssues: 4
closedIssues: 7
watchers: 0
contributors: 1
recentReleases: 4
createdAt: "2026-10-14T12:41:48Z"
lastCommitAt: "2026-11-23T13:26:27Z"
lastReleaseAt: "2026-10-30T07:21:21Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 81
undervaluedScore: 58
maintainers: ["Felitendo"]
openGraphImageUrl: "https://opengraph.githubassets.com/e6ff4bfb052b1d886130d4c34847c9062d2ae2755542b56d98f15b5f582dc831/voicenux/voicenux"
---

Change your voice in real time in Discord, games, OBS and any other app.<br>
  69 voices, a soundboard and a lab to build your own. Made for PipeWire.

## Install

```bash
yay -S voicenux-bin
```

```bash
sudo curl -fsSL -o /etc/yum.repos.d/voicenux.repo https://voicenux.github.io/voicenux/voicenux.repo && sudo dnf install voicenux
```

```bash
curl -fsSL https://voicenux.github.io/voicenux/KEY.gpg | sudo gpg --dearmor -o /etc/apt/keyrings/voicenux.gpg && echo "deb [signed-by=/etc/apt/keyrings/voicenux.gpg] https://voicenux.github.io/voicenux/deb/$(. /etc/os-release && echo $VERSION_CODENAME) ./" | sudo tee /etc/apt/sources.list.d/voicenux.list && sudo apt update && sudo apt install voicenux
```

```bash
curl -fsSLO https://github.com/voicenux/voicenux/releases/latest/download/voicenux-x86_64.flatpak && flatpak install --user voicenux-x86_64.flatpak
```

```bash
make && sudo make install
```

Needs Rust, Clang, PipeWire, GTK 4.16 and libadwaita 1.7 or newer, with their development files.

## How to use

1. Open Voicenux and click a voice.
2. In Discord, OBS or your game, pick **Voicenux Microphone** as the microphone.
3. Turn on **Hear myself** to hear yourself. Wear headphones.
