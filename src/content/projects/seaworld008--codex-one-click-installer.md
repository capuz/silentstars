---
repo: "seaworld008/codex-one-click-installer"
name: "codex-one-click-installer"
description: "One-click installer and updater for OpenAI Codex CLI, with optional Codex Windows App setup"
originalDescription: "One-click installer and updater for OpenAI Codex CLI, with optional Codex Windows App setup"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/seaworld008/codex-one-click-installer"
homepage: "https://github.com/seaworld008/codex-one-click-installer/releases/latest"
language: "Python"
languages: ["Python", "PowerShell", "Shell"]
languagePcts: [48, 30, 20]
topics: ["bash", "china-mirror", "cli", "codex", "codex-cli", "installer", "macos", "nodejs", "npmmirror", "one-click-installer"]
stars: 16
forks: 4
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 1
recentReleases: 2
createdAt: "2026-07-03T12:19:18Z"
lastCommitAt: "2026-11-06T13:19:33Z"
lastReleaseAt: "2026-09-02T04:01:19Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 88
undervaluedScore: 31
maintainers: ["seaworld008"]
openGraphImageUrl: "https://opengraph.githubassets.com/719cb72f7202eeae3e923666b4763016d0a8cc9d3f7d63ab94c648041cbcab8a/seaworld008/codex-one-click-installer"
discussionCount: 0
---

# Codex / ChatGPT Cross-Platform One-Click Installer

An installer and updater entry point for the Codex CLI on Windows, macOS, and Linux, with optional installation of the ChatGPT desktop app and common developer tools.

This project is a community-maintained convenience wrapper. It is not an official OpenAI installer and does not represent OpenAI. It does not repackage the Codex CLI or bundle binaries of unknown origin. Instead, it invokes the [OpenAI official Codex CLI installer](https://learn.chatgpt.com/docs/codex/cli). Product capabilities, account availability, and system requirements are governed by the official documentation.

## Key changes in v2.0.0

- Switched to OpenAI's official standalone installer. Node.js and npm are no longer prerequisites for installing the Codex CLI.
- Added Linux x64 / Arm64 entry points. macOS continues to support Intel and Apple Silicon.
- The Windows desktop app now uses the official ChatGPT Microsoft Store product ID `9PLM9XGG6VKS` instead of the ambiguous `Codex` package name.
- Removed the bundled `Codex Installer.exe` from the repository, the arbitrary remote Skills ZIP, and the custom EXE download-and-execute path.
- The installer no…
