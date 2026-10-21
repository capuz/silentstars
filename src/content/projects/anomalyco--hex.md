---
repo: "anomalyco/hex"
name: "hex"
description: "Local-first voice dictation for macOS. Hold a shortcut, speak, and paste into any app. Native Rust, on-device speech recognition, and a Linux beta."
readmeQualityOk: true
url: "https://github.com/anomalyco/hex"
homepage: "https://hex.kitlangton.com/"
language: "Rust"
languages: ["Rust"]
languagePcts: [77]
topics: ["dictation", "linux", "local-first", "macos", "rust", "speech-recognition", "speech-to-text", "voice-control"]
stars: 441
forks: 54
openIssues: 21
closedIssues: 56
watchers: 1
contributors: 15
recentReleases: 10
createdAt: "2026-07-17T23:48:56Z"
lastCommitAt: "2026-10-21T08:48:32Z"
lastReleaseAt: "2026-09-23T00:12:28Z"
status: "thriving"
tags: ["release_machine"]
healthScore: 91
undervaluedScore: 29
maintainers: ["kitlangton", "Hona", "Aypexe"]
openGraphImageUrl: "https://opengraph.githubassets.com/61218b3eda6229a1f9c2f0fc6d08175b3b2eb904a0aa80f42740f5bdb2717105/anomalyco/hex"
---

Local-first voice dictation, built in Rust.

  · <a href="docs/windows.md">Windows beta</a>
  · <a href="docs/linux.md">Linux beta</a>
  · <a href="sdk/typescript/README.md">TypeScript SDK</a>
  · <a href="CONTRIBUTING.md">Contributing</a>

HEX is local-first voice dictation for Apple silicon Macs running macOS 15 or
newer. Hold a shortcut, speak, and release. HEX transcribes on your Mac and
pastes the result into the app you are using.

- **On-device transcription.** Download a local speech model during setup;
  ordinary dictation does not require OpenCode or a cloud transcription service.
- **Your words, your way.** Choose a shortcut, language, and model. Use Modes for
  corrections, application-specific behavior, and optional text processing.
- **Optional voice tools.** Enable Voice Action or voice commands when you need
  them. Both start off; provider-backed rewriting is separate from local speech
  recognition.

The macOS app is available now. The [Windows beta](#windows-beta) covers x64 and
ARM64 PCs, and the [Linux beta](#linux-beta) has a smaller feature set and requires
a source build or Nix. See [Privacy and local data](#privacy-and-local-data)
for what stays on your…
