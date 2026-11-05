---
repo: "second-state/vibebuddy"
name: "vibebuddy"
description: "Physical status terminal for local AI agents and long-running tasks"
readmeQualityOk: true
url: "https://github.com/second-state/vibebuddy"
homepage: "https://vibekeys.dev/vibebuddy.html"
language: "Rust"
languages: ["Rust"]
languagePcts: [72]
stars: 8
forks: 3
openIssues: 10
closedIssues: 34
watchers: 1
contributors: 11
recentReleases: 10
createdAt: "2026-09-14T03:51:51Z"
lastCommitAt: "2026-11-05T11:25:54Z"
lastReleaseAt: "2026-10-07T10:56:56Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 95
undervaluedScore: 65
maintainers: ["longzhi"]
openGraphImageUrl: "https://opengraph.githubassets.com/1fe505b30acc1f2c7fcc1e5a68527dea0d47b5404502bf0d0b07861dee1f6df7/second-state/vibebuddy"
---

# VibeBuddy

English | [简体中文](https://github.com/second-state/vibebuddy/blob/HEAD/README.zh-CN.md)

VibeBuddy is a desk pet for your AI coding agents. It lives in a small ESP32-S3 box next to your keyboard and keeps an eye on Codex, Claude Code, OpenCode, GitHub Copilot CLI, Pi and your GitHub Actions runs, so you don't have to. When an agent needs you, finishes, or fails, the buddy tells you with an animation, a task card and a short spoken line.

The buddy is an original character. Codex was the first agent it supported, but the device protocol isn't tied to any one client: any local program or script can send it events.

(The project used to be called VibeBuddy; the repository, the `vibebuddyd` daemon and the VibeBuddy Protocol keep that name.)

**Rather not build one?** A ready-to-use VibeBuddy, assembled, flashed and tested, is in stock at [vibekeys.dev](https://vibekeys.dev/vibebuddy.html?utm_source=github&utm_medium=readme&utm_campaign=vibe-buddy-launch). Everything it runs is the open-source code in this repository.

## On the box

Screen captures from a real box running the Rust firmware. Status scenes use example task names and daily stats; Pomodoro scenes show the live…
