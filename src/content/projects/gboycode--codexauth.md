---
repo: "GboyCode/CodexAuth"
name: "CodexAuth"
description: "Local Windows desktop account switcher for Codex App with DPAPI-encrypted auth.json snapshots, quota viewer, and token usage dashboard."
originalDescription: "Local Windows desktop account switcher for Codex App with DPAPI-encrypted auth.json snapshots, quota viewer, and token usage dashboard."
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/GboyCode/CodexAuth"
homepage: "https://codexauth.toagi.cc/"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [84]
topics: ["account-switcher", "auth-json", "codex", "codex-app", "dpapi", "electron", "local-first", "multi-account", "openai-codex", "token-usage"]
stars: 18
forks: 1
openIssues: 1
closedIssues: 1
watchers: 0
contributors: 1
recentReleases: 7
createdAt: "2026-05-13T08:02:38Z"
lastCommitAt: "2026-11-17T12:18:54Z"
lastReleaseAt: "2026-09-22T16:05:14Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 74
undervaluedScore: 45
maintainers: ["GboyCode"]
openGraphImageUrl: "https://opengraph.githubassets.com/403b040b714a620f741ab2e42835963a8a89e89c0049095a7db140c44a5c019d/GboyCode/CodexAuth"
---

# CodexAuth Switch

[English README](https://github.com/GboyCode/CodexAuth/blob/HEAD/README.en.md) | Chinese README

CodexAuth Switch is a local desktop tool for Windows and macOS that lets you quickly switch between multiple Codex App login accounts.

It suits people who use several OpenAI / Codex App accounts at the same time. From the panel, you can start an official login or save the current login state, and then use this tool to switch which Codex login is active. Credentials are encrypted and stored locally, and usage data comes from local Codex logs. On Windows, the current account's quota is updated through the Codex desktop interface. For standby accounts, the main process queries OpenAI for quota directly and renews on demand. No credentials or session history are uploaded to the project author or any third party.

In one sentence: **CodexAuth Switch is a local-first multi-account switcher for Codex App, supporting `auth.json` snapshot management, Windows DPAPI / macOS Keychain encryption, quota viewing, and token usage statistics.**

> This is an unofficial project and has no official affiliation with OpenAI.

**Latest version:…
