---
repo: "davidamunga/handset"
name: "handset"
description: "Mirror and control an Android phone from your Mac inside a realistic device frame. A native Rust client for the scrcpy server."
readmeQualityOk: true
url: "https://github.com/davidamunga/handset"
language: "Rust"
languages: ["Rust"]
languagePcts: [91]
topics: ["android", "device-frames", "homebrew", "macos", "rust", "scrcpy", "screen-mirroring"]
stars: 5
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 8
createdAt: "2026-10-26T06:46:23Z"
lastCommitAt: "2026-10-27T09:17:17Z"
lastReleaseAt: "2026-10-27T09:16:14Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 89
undervaluedScore: 59
maintainers: ["davidamunga", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/e20025b4897320b80bba38fa7ee0299bebc44cc24adcf90a442b569fedbb7eaa/davidamunga/handset"
---

# Handset

Mirror and control an Android phone from your Mac, inside a realistic device frame.

Handset is a small native Rust app. It talks to the unmodified
[scrcpy](https://github.com/Genymobile/scrcpy) server on the phone and replaces the desktop client,
so it can draw things a plain window cannot: phone bezels on a transparent window, a toolbar, and
framed screenshots and recordings with audio.

> **Status: early work in progress.** It works on the author's Mac with one phone. Expect rough edges.
> It has been tested on macOS and on Windows 11.

## What it looks like

With no phone connected, Handset opens on a connect screen inside the frame: USB steps that update as you plug in,
and Wi-Fi and QR code options for connecting without a cable.

## Features

- Live video and device audio over adb (USB), decoded in software and drawn with wgpu
- Twenty-one device frames (punch-hole, notch, island, tablet, foldable, flip, rugged and more, see
  [docs/frames.md](https://github.com/davidamunga/handset/blob/HEAD/docs/frames.md)), or your own PNG, on a transparent window,
  switchable while running
- Touch, scroll, keyboard and text input; landscape rotation
- Framed screenshots…
