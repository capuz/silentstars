---
repo: "helmcode/nan-desktop"
name: "nan-desktop"
description: "Native cross-platform desktop client for NaN community and Helmcode enterprise inference"
readmeQualityOk: true
url: "https://github.com/helmcode/nan-desktop"
homepage: "http://helmcode.com/download"
language: "Rust"
languages: ["Rust", "TypeScript"]
languagePcts: [52, 41]
stars: 12
forks: 0
openIssues: 1
closedIssues: 1
watchers: 0
contributors: 3
recentReleases: 10
createdAt: "2026-10-28T21:42:34Z"
lastCommitAt: "2026-11-18T12:06:09Z"
lastReleaseAt: "2026-11-16T14:00:33Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 84
undervaluedScore: 52
maintainers: ["barckcode"]
openGraphImageUrl: "https://opengraph.githubassets.com/543173ce6912e8d6af3333497115a0327aff607248c82c27db468f0e4cb4e01f/helmcode/nan-desktop"
discussionCount: 0
---

# Helmcode Desktop (nan-desktop)

-red)

Native desktop app for two AI inference platforms that share one product:

- **NaN community** ([nan.builders](https://nan.builders)): a paid community
  of Spanish-speaking builders working with AI and agents.
- **Helmcode enterprise** ([helmcode.com](https://helmcode.com)): a
  self-service inference platform for companies.

You need an account on one of them to use the app. Built with Tauri v2
(Rust core) + React 19 + Vite. No Docker, no external runtime, and **no
third parties**: the app only talks to the two platforms' own APIs.

**Telemetry (always on, technical only).** To fix bugs and understand how
the app is used, it sends technical usage and error data (app start, how a
reply ended, which built-in tool ran and whether it worked, which kind of
error was shown, where a crash happened) to the signed-in platform's own API.
It never sends your conversations, prompts, files, file names, paths, URLs,
commands, searches, emails or anything you write. It cannot be turned off.
The exact events and fields are listed in
[SECURITY.md](https://github.com/helmcode/nan-desktop/blob/HEAD/SECURITY.md#telemetry-what-the-app-sends).
