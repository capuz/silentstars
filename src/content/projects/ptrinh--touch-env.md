---
repo: "ptrinh/touch-env"
name: "touch-env"
description: "touchenv: API keys and SSH keys behind your fingerprint. They live in the macOS Keychain (Touch ID) or behind Windows Hello, and every read shows who is asking, for which key and why, so an app, script or AI coding agent can ask but only you can say yes."
readmeQualityOk: true
url: "https://github.com/ptrinh/touch-env"
language: "Swift"
languages: ["Swift", "Go"]
languagePcts: [54, 44]
topics: ["ai-agents", "api-keys", "cli", "dotenv", "golang", "keychain", "macos", "secrets", "secrets-management", "security"]
stars: 16
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 10
createdAt: "2026-10-25T08:22:16Z"
lastCommitAt: "2026-11-13T05:37:40Z"
lastReleaseAt: "2026-11-11T06:25:08Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 79
undervaluedScore: 41
maintainers: ["ptrinh"]
openGraphImageUrl: "https://opengraph.githubassets.com/c47dc91abb42b5f12d3f70747276bb1db091eb1f0b875b18a5063889606415b0/ptrinh/touch-env"
---

# touch-env

**API keys behind your fingerprint, on a Mac (Touch ID) or a Windows PC (Windows Hello): no app, script or AI agent
reads them without you.**

Keys in `.env` files can be taken by anything that reads files: a hacked dev server, malware, or an AI agent tricked
by a web page. touchenv keeps them locked instead: in the Keychain on a Mac, in a store encrypted to a Windows Hello
key on a PC. Each use shows **who** wants **which key** and **why**, and only you say yes. The commands are the
same on both; [what differs](#mac-and-windows-what-differs) is in one table below.

## Install

**Mac** (macOS 13 or later):

```sh
brew install --cask ptrinh/tap/touchenv
```

Or unzip the app from [Releases](https://github.com/ptrinh/touch-env/releases/latest) into `~/Applications` and
link `touchenv.app/Contents/MacOS/touchenv` into your `PATH`.

**Windows** (10 or 11, x64 or Arm, with Windows Hello set up; a preview): download
`touchenv-<version>-windows-x64.zip` (or `-arm64`) from
[Releases](https://github.com/ptrinh/touch-env/releases/latest) and put `touchenv.exe` in a folder on your `PATH`.
The exe is signed by SENPRINTS LLC. Checking the download, and the service that grants…
