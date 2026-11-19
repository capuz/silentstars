---
repo: "fufu1209/Typeless"
name: "Typeless"
description: "Free unlimited Typeless on macOS: a native Swift menu bar app that auto-rotates multiple accounts when the free 8,000-words-per-week quota runs low, with quota monitoring and batch signup via self-hosted catch-all email."
originalDescription: "Free unlimited Typeless on macOS: a native Swift menu bar app that auto-rotates multiple accounts when the free 8,000-words-per-week quota runs low, with quota monitoring and batch signup via self-hosted catch-all email."
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/fufu1209/Typeless"
language: "Swift"
languages: ["Swift"]
languagePcts: [89]
topics: ["typeless", "automation", "catch-all-email", "cloudflare-workers", "dictation", "macos", "macos-app", "menubar-app", "playwright", "quota"]
stars: 10
forks: 2
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-07-09T17:11:57Z"
lastCommitAt: "2026-11-19T12:01:03Z"
lastReleaseAt: "2026-07-09T17:29:25Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 75
undervaluedScore: 40
maintainers: ["fufu1209"]
openGraphImageUrl: "https://opengraph.githubassets.com/6f462bcdc3cfbd621a6b0ba35b1296867ef99375bda59b84dd0f6e9a30ecc1cc/fufu1209/Typeless"
discussionCount: 0
---

# Typeless Switchboard

**When your free Typeless quota is almost used up, it automatically switches to the next account that still has quota, and you barely notice.**

> 🌍 [English README](https://github.com/fufu1209/Typeless/blob/HEAD/README.en.md)

Typeless is a very useful voice input / transcription tool for macOS, but free accounts only get **2000 characters per week**.
Once that's used up, you have to manually sign out, log into another account, and go through the onboarding again. This can happen two or three times a day.

This tool automates the whole process: register a batch of accounts in advance, and when quota runs low, it **switches silently**.
The switch doesn't interrupt your typing, and you don't have to go through onboarding again.

> ⚠️ This project **contains only code**, with no keys, passwords, or account data.
> Your data is stored only on your machine, in `~/Library/Application Support/TypelessSwitchboard/` and the macOS Keychain.

## Interface preview

The interface is in Chinese. The screenshots below have been redacted. Real email addresses, domains, usernames, passwords, and so on are masked.
