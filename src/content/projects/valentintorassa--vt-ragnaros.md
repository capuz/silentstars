---
repo: "ValentinTorassa/VT-Ragnaros"
name: "VT-Ragnaros"
description: "Reverse-engineered Linux driver and daemon for the Ragnaros USB deck - native libusb transport, 10 LCD keys, 4 rotary knobs, touch strip, YAML profiles & idle animations"
readmeQualityOk: true
url: "https://github.com/ValentinTorassa/VT-Ragnaros"
language: "Python"
languages: ["Python"]
languagePcts: [97]
topics: ["driver", "libusb", "linux", "python", "reverse-engineering", "stream-deck", "usb-hid"]
stars: 8
forks: 0
openIssues: 1
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 3
createdAt: "2026-08-10T02:19:37Z"
lastCommitAt: "2026-11-17T12:19:24Z"
lastReleaseAt: "2026-11-10T14:30:06Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 78
undervaluedScore: 37
maintainers: ["ValentinTorassa"]
openGraphImageUrl: "https://opengraph.githubassets.com/60c7fe898e18ab198598e5a63d2b66d3c8f11e92b6341d94d533744eb6445eb8/ValentinTorassa/VT-Ragnaros"
---

# VT-Ragnaros

A reverse-engineered, from-scratch Linux driver and daemon for the **Ragnaros USB control deck** (Redragon SS552, USB `0200:3001`) - a Linux-native alternative to the vendor's Windows software.

The daemon renders icons and animated GIFs onto the deck's LCD keys and touch strip, and runs a configurable command on every input event.

## Features

- **10 LCD keys** (2x5 grid, 112x112 px each) with static icons or animated GIFs
- **4 rotary knobs** with rotate (CW/CCW) and press actions, with detent debouncing
- **4-segment LCD touch strip** (704x124 combined): taps and swipes are real inputs,
  and it shows now playing, a system dashboard, desktop notifications or idle animations
  (generated art by default, opt-in GIF themes)
- **Key layers** - a second set of keys over the same profile, on a knob press
- **Hot profile switching** from a key, a swipe or the CLI
- **`ragnarosctl`** - a control socket for scripts, shortcuts and CI
- **Desktop aware** - toasts on the strip, and the deck goes dark when the session locks
- **YAML keymap profiles** mapping any input to a command or a deck verb
- Runs as a **systemd user service**

## How It Works

The vendor protocol was…
