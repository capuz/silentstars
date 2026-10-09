---
repo: "Sentry-Six/Dash-USB"
name: "Dash-USB"
description: "Turn a Raspberry Pi into a smart USB drive for your GM vehicle's built-in dashcam — break the rolling 2-hour limit"
readmeQualityOk: true
url: "https://github.com/Sentry-Six/Dash-USB"
language: "Rust"
languages: ["Rust"]
languagePcts: [94]
stars: 9
forks: 1
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 5
recentReleases: 7
createdAt: "2026-07-26T02:40:11Z"
lastCommitAt: "2026-10-09T18:58:03Z"
lastReleaseAt: "2026-08-09T11:41:23Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 80
undervaluedScore: 52
maintainers: ["Scottmg1", "dependabot[bot]", "ChadR23"]
openGraphImageUrl: "https://opengraph.githubassets.com/5e4dccba7a1d1d85495be4e01ad47bef21d11cdb30fd3a697529aa004a3b9f34/Sentry-Six/Dash-USB"
---

Break the rolling 2-hour limit. Auto-archive everything. Modern web UI.

---

## What it does

GM's Surround Vision Recorder (the built-in dashcam on newer EVs and ICE vehicles)
records four cameras — front, left, right, rear — to a USB drive you plug into any
USB-C port. But it's software-limited to a **rolling 2 hours** of footage, no matter
how big the drive is.

Dash USB defeats that limit:

- **Plugs into your car's USB-C port** and pretends to be a compliant FAT32 drive.
- **Continuously snapshots** the recordings the car writes — before the car's rolling
  delete reaches them.
- **Archives clips automatically** to your NAS, cloud, or wherever — over WiFi, in the
  background. Your footage history is limited by your storage, not by GM's firmware.
- **Multi-camera viewer** — synchronized 4-camera playback in a modern web UI
  (interior camera on 2027+ models supported).
- **Privacy-first.** No fingerprinting by default; everything sensitive is opt-in.

Dash USB is the GM sibling of [Sentry USB](https://github.com/Sentry-Six/Sentry-USB-Rusty)
(for Tesla), from the [Sentry Six](https://sentry-six.com) project. It's built around a
**vehicle profile** system — support for further…
