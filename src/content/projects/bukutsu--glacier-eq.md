---
repo: "Bukutsu/glacier-eq"
name: "glacier-eq"
description: "Cross-platform parametric EQ editor for USB DACs. Offline, direct Tauri+React app for desktop and Android."
readmeQualityOk: true
url: "https://github.com/Bukutsu/glacier-eq"
language: "TypeScript"
languages: ["TypeScript", "Rust"]
languagePcts: [41, 36]
topics: ["android", "audio", "dac", "equalizer", "hid", "parametric-eq", "react", "rust", "tauri", "usb-dac"]
stars: 5
forks: 0
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 1
recentReleases: 10
createdAt: "2026-06-10T17:32:18Z"
lastCommitAt: "2026-07-12T06:15:12Z"
lastReleaseAt: "2026-06-30T16:53:39Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 100
undervaluedScore: 64
maintainers: ["Bukutsu", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/174f3126cd71c7427f8cb6a0ffc8c8dae5ff404f4d4ed096ba290da50b17dd82/Bukutsu/glacier-eq"
discussionCount: 1
---

<h1>
  Glacier EQ
</h1>

</div>

Cross-platform parametric EQ editor for compatible USB DACs. Glacier EQ talks to
hardware over HID, edits EQ locally, and works offline.

⚡ **Try the web version directly in your browser:** [bukutsu.github.io/glacier-eq](https://bukutsu.github.io/glacier-eq/)

## Features

- 10-band PEQ editor with preamp, undo/redo, graph preview, and target curves
- Pull, RAM-apply, push, verify, and rollback EQ on supported DACs
- Local profiles with search, import/export, copy/paste, and one-tap apply
- Measurement overlays from files or optional Squiglink offline cache
- Native AutoEQ matching against measurement and target curves
- Walkplay/Savitech, Moondrop, and FiiO EQ protocol support
- Hardware controls for supported Walkplay/Savitech DACs: DAC filter, amp mode,
  output gain, balance, mic monitor, and reset modes
- Desktop and Android layouts, themes, diagnostics, and dev dummy DAC

## Install

Download builds from the
[releases page](https://github.com/Bukutsu/glacier-eq/releases).

Arch Linux:

```sh
git clone https://github.com/Bukutsu/glacier-eq.git
cd glacier-eq
makepkg -si
```

The Arch package installs `udev/99-glacier-eq.rules`; after replugging…
