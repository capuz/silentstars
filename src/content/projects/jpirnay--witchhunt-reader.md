---
repo: "jpirnay/witchhunt-reader"
name: "witchhunt-reader"
description: "Witch(hunt) Reader "
readmeQualityOk: true
url: "https://github.com/jpirnay/witchhunt-reader"
language: "C"
languages: ["C", "C++"]
languagePcts: [62, 34]
stars: 159
forks: 4
openIssues: 6
closedIssues: 47
watchers: 0
contributors: 41
recentReleases: 10
createdAt: "2026-05-28T01:04:03Z"
lastCommitAt: "2026-09-01T08:49:42Z"
lastReleaseAt: "2026-07-13T11:25:16Z"
status: "thriving"
tags: ["solo_builder", "release_machine", "community_hub"]
healthScore: 97
undervaluedScore: 33
maintainers: ["jpirnay"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1251850039/15bf2e69-a97e-4a7c-abf2-7e5d84f8792f"
discussionCount: 21
---

# Witch(hunt) Reader

This firmware is based on the [crosspoint-reader](https://github.com/crosspoint-reader/crosspoint-reader) for the XTEINK X3/X4, a great piece of software by Dave Allie and others.

**Caveat: new hardware batches of the X3 / X4 from xteink seem to come with a newer display panels. These models should work with Witch(hunt) Reader from version 2.21 onwards.**

# Installation

Flashing is done from the browser — no toolchain or driver install needed. Use a Chromium-based browser (Chrome, Edge, Opera) or a recent Firefox version (>151); older versions of Firefox and Safari do not support WebSerial.

1. Download `firmware.bin` for your device from the [latest release](https://github.com/jpirnay/witchhunt-reader/blob/HEAD/../../releases/latest).
2. Open the [CrossPoint flash tools](https://crosspointreader.com/#flash-tools).
3. Pick your device (X3 or X4).
4. Choose **Custom .bin** and upload the `firmware.bin` you downloaded in step 1.
5. Connect the device via USB and start the flash — pick the device's serial port when the browser asks.

# What this reader does differently
- Speed - rendering should be *fast*
- CSS layout - a lot of effort have gone into…
