---
repo: "99oblivius/spacecal-for-monado"
name: "spacecal-for-monado"
description: "A monado powered playspace calibrator for mixed VR tracking origins"
url: "https://github.com/99oblivius/spacecal-for-monado"
language: "Rust"
languages: ["Rust"]
languagePcts: [96]
stars: 13
forks: 2
openIssues: 1
closedIssues: 1
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-01-25T23:06:13Z"
lastCommitAt: "2026-06-25T06:41:28Z"
lastReleaseAt: "2026-03-18T14:14:50Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 73
undervaluedScore: 10
maintainers: ["99oblivius"]
openGraphImageUrl: "https://opengraph.githubassets.com/ce18fef9307d25874268dd542d23a124625a6c94b8b455e0608cd5cd7c8d43c1/99oblivius/spacecal-for-monado"
---

</p>

<h1 align="center">SpaceCal for Monado</h1>

  Align mixed VR tracking spaces on Linux
</p>

---

</p>

SpaceCal aligns VR devices from different tracking systems into a single unified space through the Monado OpenXR runtime. Use your Quest headset with lighthouse-tracked controllers, Vive trackers, or any mix of tracking technologies.

## Features

- **Calibrate** — grip both devices together, sweep a figure-eight, done. Audio cues and a progress bar guide you through.
- **Floor** — place a device on the ground and press Floor.
- **Recenter** — face forward and press Recenter. Floor height is preserved.
- **Device identification** — open a dropdown and move a device to see which one it is.
- **Battery status** — see charge levels for all your tracked devices.
- **Reset** — reset individual tracking origins, floor, or center independently.
- **Confidence scoring** — see how good your calibration was with grip consistency and axis coverage metrics.

## Installation

### Arch Linux (AUR)

```bash
yay -S spacecal-for-monado
```

### Debian / Ubuntu

Download the `.deb` from the [latest release](https://github.com/99oblivius/spacecal-for-monado/releases/latest):

```bash
sudo…
