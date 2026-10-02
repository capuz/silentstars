---
repo: "T0mSIlver/localvoxtral"
name: "localvoxtral"
description: "Talk to your coding agents by voice. Realtime, fully local macOS dictation that streams words as you speak and grounds LLM polishing in the exact Claude Code session under your cursor — Ghostty, iTerm2, Terminal.app, even a herdr pane. 100% on-device on Apple Silicon."
readmeQualityOk: true
url: "https://github.com/T0mSIlver/localvoxtral"
homepage: "https://github.com/T0mSIlver/localvoxtral/releases/latest"
language: "Swift"
languages: ["Swift"]
languagePcts: [87]
topics: ["apple-silicon", "local-ai", "macos", "mlx", "speech-to-text", "claude-code", "herdr", "cmux"]
stars: 58
forks: 10
openIssues: 52
closedIssues: 398
watchers: 1
contributors: 5
recentReleases: 0
createdAt: "2026-02-15T21:35:31Z"
lastCommitAt: "2026-10-02T10:00:12Z"
lastReleaseAt: "2026-03-04T22:12:58Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 97
undervaluedScore: 42
maintainers: ["T0mSIlver"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1158755856/886342a3-f30c-4bde-bf5a-898833b5c489"
discussionCount: 0
---

<h1 align="center">localvoxtral</h1>

</p>

  <strong>Talk to your coding agents. Keep every word on your Mac.</strong><br />
  Realtime, fully local dictation for the menu bar. Press a key and speak. Your words appear while you're still talking.
</p>

</p>

  &nbsp;
  &nbsp;
</p>

https://github.com/user-attachments/assets/81a341ff-0c53-4fcf-9b7f-ef148b24dfae

localvoxtral streams text as the audio arrives instead of transcribing after you stop speaking. It runs Mistral AI's [Voxtral Mini 4B Realtime](https://huggingface.co/mistralai/Voxtral-Mini-4B-Realtime-2602) on your own Apple Silicon.

It is built first for [prompting coding agents by voice](https://github.com/T0mSIlver/localvoxtral/blob/HEAD/docs/coding-agents.md), and it works as a general dictation app in any other app too. Everything runs on-device, with no account and no subscription. Nothing leaves your Mac unless you point it at a server yourself.

## Install

```bash
curl -fsSL https://raw.githubusercontent.com/T0mSIlver/localvoxtral/main/scripts/install.sh | bash
```

Or install with Homebrew:

```bash
brew install --cask T0mSIlver/localvoxtral/localvoxtral
```

You can also download the latest DMG from…
