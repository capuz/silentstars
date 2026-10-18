---
repo: "Agtom-FN/Ollidar"
name: "Ollidar"
description: "LidarScan: Android capture + SLAM app for COIN-D6 pushbroom 3D scanning (Pixel 8 Pro + ARCore)"
readmeQualityOk: true
url: "https://github.com/Agtom-FN/Ollidar"
language: "C++"
languages: ["C++", "Kotlin"]
languagePcts: [48, 45]
topics: ["android", "android-app", "lidar", "lidar-point-cloud", "lidar-slam"]
stars: 5
forks: 1
openIssues: 3
closedIssues: 6
watchers: 0
contributors: 4
recentReleases: 3
createdAt: "2026-08-19T18:12:54Z"
lastCommitAt: "2026-10-18T08:16:32Z"
lastReleaseAt: "2026-08-25T08:13:41Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 89
undervaluedScore: 62
maintainers: ["Tommy-Ohnooo", "JasonTT123", "frankyagent007-hue"]
openGraphImageUrl: "https://opengraph.githubassets.com/370c16ca1ce232194935c873dedd42cad3e777bb5239c1ad6de1be7d00459031/Agtom-FN/Ollidar"
---

# Ollidar

Strap a small spinning lidar to your phone, walk around a room, and get a
corrected 3D point cloud out the other end.

Current version: **1.0.3** (Android).

The app and this repository are both called **Ollidar**. The Android package
(`com.lidarscan.app`), the `.lscan` files and the `Downloads/LidarScan/`
export folder keep the old **lidarscan** name on purpose: on Android the
package name *is* the app's identity, and changing it would install a second
app rather than rename the one already on the phone.

---

## What it does

- **Tap Scan, hold still, walk, tap Stop.** The app measures the sensor's
  exact angle on your phone at the start of every scan, then sweeps its
  spinning lidar slice along the path your phone's camera tracks. No manual
  calibration step.
- **Live coverage guidance while you walk.** Thin or missed walls show up as
  amber arcs in the live view so you know where to walk back over before you
  stop, not after.
- **A big warning when tracking is lost.** An amber card fills the screen —
  *"Tracking lost. Stop. Hold still."* — because walking through a tracking
  gap usually makes it unrepairable afterwards.
- **The mount is re-measured every…
