---
repo: "apoorvdarshan/TetherShot"
name: "TetherShot"
description: "macOS menu-bar app that screenshots your iPhone over USB or Wi-Fi — straight into a folder you choose and onto your clipboard. Native Swift + AVFoundation. Install via npm."
readmeQualityOk: true
url: "https://github.com/apoorvdarshan/TetherShot"
homepage: "https://tethershot.apoorvdarshan.com"
language: "Swift"
languages: ["Swift"]
languagePcts: [54]
topics: ["avfoundation", "cli", "developer-tools", "ios", "iphone", "macos", "macos-app", "menubar", "npm", "pymobiledevice3"]
stars: 18
forks: 1
openIssues: 0
closedIssues: 1
watchers: 1
contributors: 3
recentReleases: 10
createdAt: "2026-06-10T20:27:14Z"
lastCommitAt: "2026-10-02T09:59:45Z"
lastReleaseAt: "2026-08-30T18:51:36Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded", "release_machine"]
healthScore: 97
undervaluedScore: 55
maintainers: ["apoorvdarshan", "noah-jacksonn"]
openGraphImageUrl: "https://opengraph.githubassets.com/b3102ee7da030153bd898cd2bc23c41abff7d2af00cd8a8f90c5ae6bc98aca6d/apoorvdarshan/TetherShot"
fundingLinks: ["GITHUB:https://github.com/apoorvdarshan", "KO_FI:https://ko-fi.com/apoorvdarshan"]
---

<h1>TetherShot</h1>

<strong>See and capture your iPhone or Android screen from a native Mac app.</strong>

<p>USB or Wi-Fi · pixel-perfect captures · saved to a folder you choose · copied to your clipboard.</p>

<p>
</p>

<p>
</p>

<p><code>brew install --cask apoorvdarshan/tap/tethershot</code></p>

<br />

</div>

---

> **Status — shipping.** iPhone USB/Wi-Fi capture, Android ADB capture, clipboard, global hotkey, per-device folders, Homebrew and npm installs, and in-app self-update are working. Built and tested on macOS 26 (Tahoe) with iOS 26.

## Why TetherShot

macOS already exposes a tethered iPhone's screen as an AVFoundation source, while Android exposes its framebuffer through ADB. TetherShot turns both into a focused one-click capture workflow that writes straight to disk and your clipboard — including cable-free iPhone Wi-Fi capture through Apple's developer-services tunnel.

## Features

- 🔌 **USB capture** — a trusted, cabled iPhone is grabbed at full resolution via native AVFoundation. Instant, zero setup.
- 📶 **Wi-Fi capture** — cable-free over your local network via a RemoteXPC tunnel ([`pymobiledevice3`](https://github.com/doronz88/pymobiledevice3)).…
