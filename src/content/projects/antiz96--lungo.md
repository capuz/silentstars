---
repo: "Antiz96/lungo"
name: "lungo"
description: "A simple systray applet to prevent the system from going idle or suspending on demand (including on laptop lid closure)."
readmeQualityOk: true
url: "https://github.com/Antiz96/lungo"
language: "Rust"
languages: ["Rust", "Shell"]
languagePcts: [69, 31]
topics: ["applet", "idle", "inhibit", "rust", "sleep", "suspend", "systray", "caffeine", "elogind", "inhibitor"]
stars: 6
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 6
createdAt: "2026-07-21T17:10:15Z"
lastCommitAt: "2026-10-23T12:04:10Z"
lastReleaseAt: "2026-10-05T10:41:23Z"
status: "thriving"
tags: ["hidden_gem", "funded", "release_machine"]
healthScore: 88
undervaluedScore: 52
maintainers: ["Antiz96", "renovate[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/5e51b024673c6a9820d10d4c856df2fa5434fa5012581ec472b9c390f475a3e3/Antiz96/lungo"
fundingLinks: ["GITHUB:https://github.com/Antiz96", "KO_FI:https://ko-fi.com/Antiz96"]
---

# Lungo

## Table of contents

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Documentation](#documentation)
- [Contributing](#contributing)
- [License](#license)

## Description

A simple systray applet to prevent the system from going idle or suspending on demand (including on laptop lid closure).

Run `lungo` to start the systray applet.

Simply click on the systray applet to toggle it on and off.

The systray icon (first one on the left) automatically changes to reflect the current state ("moon cup" when disabled, "power cup" when enabled):

The state can also be consulted and toggled from the systray applet menu:

Lungo is:

- Simple and minimal by design: No superfluous options and features, no complex background operations.
- Distribution and desktop environment agnostic: Only requires either `systemd-logind` or `elogind`, not tied to any specific graphical / desktop environment.
- Crash and memory safe: Uses a `logind` file descriptor lock (which is automatically released by the kernel on crash or kill), written in a memory safe language.

**Motivation:**

This project is generally inspired by [caffeine](https://launchpad.net/caffeine) /…
