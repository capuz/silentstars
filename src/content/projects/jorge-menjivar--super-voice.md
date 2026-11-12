---
repo: "jorge-menjivar/super-voice"
name: "super-voice"
description: "Speech-to-text and text-to-speech for Linux, with any model you want. Dictate into any app, hear text read aloud, and swap models anytime, local or cloud, on CPU or GPU."
readmeQualityOk: true
url: "https://github.com/jorge-menjivar/super-voice"
language: "Rust"
languages: ["Rust"]
languagePcts: [96]
topics: ["linux", "speech-recognition", "speech-to-text", "voxtral", "whisper", "stt", "wayland", "asr", "macos", "qwen"]
stars: 78
forks: 7
openIssues: 8
closedIssues: 20
watchers: 1
contributors: 6
recentReleases: 0
createdAt: "2025-08-16T12:24:16Z"
lastCommitAt: "2026-11-12T11:38:24Z"
lastReleaseAt: "2026-07-23T07:45:00Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 94
undervaluedScore: 47
maintainers: ["jorge-menjivar", "glima", "Lib-LOCALE"]
openGraphImageUrl: "https://opengraph.githubassets.com/f1835114bfb969291b9135d1edd816e7f87854054d3182d403c16632c83ee618/jorge-menjivar/super-voice"
discussionCount: 2
---

# Super Voice

**Speak into any app on Linux, and hear any text read aloud.**

*One shortcut to dictate anywhere • Natural voices, or clone your own • Any model from a growing library • An open protocol any app can build on • Built in Rust*

https://github.com/user-attachments/assets/bbbe20c3-6802-4797-afc8-aa81d1b48415

## 🚀 Installation

**Quick install** - detects your system and downloads pre-built binaries:

```bash
curl -sSL https://raw.githubusercontent.com/jorge-menjivar/super-voice/main/install.sh | bash
```

Append `-s -- --beta` for the latest beta.

## What is Super Voice?
Super Voice is speech-to-text and text-to-speech for Linux, with any model you want. Dictate into any app, hear text read aloud, and swap models anytime, local or cloud, on CPU or GPU.

Under the hood it's two things:

- **A model-agnostic engine.** A background daemon installs speech models from a **library** of backends (local or cloud), loads one, and keeps it warm for instant transcription. You pick the model that fits your hardware and swap it whenever you like.
- **An open protocol.** The daemon speaks a documented HTTP protocol over a local socket, so *any* app, in any language, can request…
