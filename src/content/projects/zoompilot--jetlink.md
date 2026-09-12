---
repo: "zoompilot/jetlink"
name: "jetlink"
description: "Runs openpilot's large driving model on macOS (native GUI), CUDA laptops, and Jetson Orin Nano with only your Comma, your computer, and a USB3 cable"
readmeQualityOk: true
url: "https://github.com/zoompilot/jetlink"
language: "Python"
languages: ["Python", "Swift"]
languagePcts: [73, 22]
stars: 6
forks: 2
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 1
createdAt: "2026-09-07T15:14:15Z"
lastCommitAt: "2026-09-12T08:03:45Z"
lastReleaseAt: "2026-09-10T22:30:28Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 70
undervaluedScore: 54
maintainers: ["zephleggett"]
openGraphImageUrl: "https://opengraph.githubassets.com/4cdbd4be179894b4279a74d9b0cd7e0939ee140a7c2278ab714fae8c8ce061a2/zoompilot/jetlink"
---

# Jetlink

Run openpilot's large driving models on a computer plugged into your comma.
The comma keeps the cameras and vehicle control. It sends prepared camera
images over USB, the other computer runs the model, and predictions come back
20 times per second.

Jetlink is experimental. It needs a zoompilot build with Jetlink built in. The
comma side lives on the [zoompilot `jetson-trt` branch](https://github.com/zoompilot/zoompilot/tree/jetson-trt).
The small model you picked in sunnypilot keeps driving whenever the link is down. If the link
drops while engaged, the comma soft-disables and tells you to take over. See
[status and known limitations](https://github.com/zoompilot/jetlink/blob/HEAD/docs/status.md).

</p>

## Quick start

Choose your computer: **[Mac](#mac)** · **[Jetson](#jetson)** · **[CUDA laptop](#cuda-laptop)**.
Then follow the shared [comma setup](#comma-setup-all-platforms).

You need a **comma 3X or comma 4**, a **USB 3 A-to-C data cable**, and
**separate power for both devices**. Charge-only cables will not work.
Keep the comma online and stay parked for the first setup.

### Mac

For **Apple silicon, macOS 15 or later**. 16 GB of memory is recommended.
Mac is…
