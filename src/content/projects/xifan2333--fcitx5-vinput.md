---
repo: "xifan2333/fcitx5-vinput"
name: "fcitx5-vinput"
description: "Voice input for Fcitx5 — local and cloud ASR, LLM rewriting, cross-distro packages"
readmeQualityOk: true
url: "https://github.com/xifan2333/fcitx5-vinput"
homepage: "https://xifan2333.github.io/fcitx5-vinput/"
language: "C++"
languages: ["C++"]
languagePcts: [86]
topics: ["fcitx5", "input-method", "linux", "offline-asr", "sherpa-onnx", "speech-recognition", "voice-input"]
stars: 426
forks: 45
openIssues: 5
closedIssues: 118
watchers: 1
contributors: 14
recentReleases: 0
createdAt: "2026-03-06T10:40:59Z"
lastCommitAt: "2026-09-14T09:12:15Z"
lastReleaseAt: "2026-03-13T19:54:44Z"
status: "thriving"
tags: ["solo_builder", "funded"]
healthScore: 99
undervaluedScore: 28
maintainers: ["xifan2333", "fanzhuyifan", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/60a9eb259d00082aecb7e795d0fb33052322e11a8557761e33b738a5eda99708/xifan2333/fcitx5-vinput"
fundingLinks: ["CUSTOM:https://xifan2333.github.io/fcitx5-vinput/sponsor/"]
discussionCount: 2
---

# fcitx5-vinput

**Voice input for Fcitx5 — local and cloud ASR, LLM rewriting, cross-distro packages**

[English](https://github.com/xifan2333/fcitx5-vinput/blob/HEAD/README.md) | [中文](https://github.com/xifan2333/fcitx5-vinput/blob/HEAD/README_zh.md) | [Documentation](https://xifan2333.github.io/fcitx5-vinput/)

https://github.com/user-attachments/assets/5a548a68-153c-4842-bab6-926f30bb720e

</div>

## Features

- **Two trigger modes** — tap to toggle recording, or hold to push-to-talk
- **Local & cloud ASR** — offline [sherpa-onnx](https://github.com/k2-fsa/sherpa-onnx) models or cloud providers (Doubao, Aliyun Bailian, ElevenLabs, OpenAI-compatible), switchable at runtime from the command palette (`Shift_R` → `/asr`)
- **LLM post-processing** — error correction, formatting, translation via scenes
- **Command mode** — select text, speak an instruction, release to apply
- **GUI & CLI** — `vinput-gui` for quick setup, `vinput` CLI for full control
- **Cross-distro** — Arch, Fedora, Ubuntu/Debian, Nix, Flatpak

## Installation

### Arch Linux ([archlinuxcn](https://www.archlinuxcn.org/archlinux-cn-repo-and-mirror/) / AUR)

If you use the…
