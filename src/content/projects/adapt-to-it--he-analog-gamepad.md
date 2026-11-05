---
repo: "adapt-to-it/he-analog-gamepad"
name: "he-analog-gamepad"
description: "Turn your Hall Effect keyboard into a true analog gamepad. Reads raw analog sensor data from Hall Effect keyboards such as Attack Shark HE and creates a virtual Xbox 360 controller with real analog stick movement."
readmeQualityOk: true
url: "https://github.com/adapt-to-it/he-analog-gamepad"
language: "Python"
languages: ["Python", "JavaScript"]
languagePcts: [54, 42]
topics: ["analog", "attack-shark", "gamepad", "gaming", "hall-effect", "keyboard", "vigem", "virtual-controller", "wasd", "xinput"]
stars: 6
forks: 1
openIssues: 1
closedIssues: 3
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-02-21T18:17:48Z"
lastCommitAt: "2026-11-05T08:06:03Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 92
undervaluedScore: 36
maintainers: ["adapt-to-it"]
openGraphImageUrl: "https://opengraph.githubassets.com/5c1b1f8ececaf49e16977d33d62808cd75215ad2acf69f5cf36fd12579a7198f/adapt-to-it/he-analog-gamepad"
---

# HE Analog Gamepad

**Turn your analog Hall Effect keyboard into a true analog Xbox 360 controller.**

---

Hall Effect keyboards measure how far you press each key. This app reads that value and sends it to a virtual Xbox 360 controller. The result is **true analog stick input from WASD**: press a key lightly to walk, press it fully to run.

## Supported Devices

| Device | Status |
|--------|--------|
| Attack Shark X68PRO HE (PID `0x5030`) | Confirmed working |
| Attack Shark X68HE (PID `0x502D`) | Confirmed working ([#8](https://github.com/adapt-to-it/he-analog-gamepad/issues/8)) |
| Attack Shark X98 HE (PID `0x5029`) | Config ready, waiting for user confirmation ([#4](https://github.com/adapt-to-it/he-analog-gamepad/issues/4)) |
| Attack Shark X82 PRO HE | In development -- data needed ([#4](https://github.com/adapt-to-it/he-analog-gamepad/issues/4)) |
| Other Sonix-based HE keyboards | May work -- run the [capture page](#help-add-your-keyboard) and send us the files |

The app detects the connected model automatically. Is your keyboard missing? See [Help add your keyboard](#help-add-your-keyboard).

## Features

- **True analog input** -- WASD drives the left stick with the…
