---
repo: "huggingface/leLab"
name: "leLab"
description: "🤗 LeLab: A web UI interface on top of LeRobot"
readmeQualityOk: true
url: "https://github.com/huggingface/leLab"
homepage: "https://huggingface.co/spaces/lerobot/LeLab"
language: "TypeScript"
languages: ["TypeScript", "Python"]
languagePcts: [55, 45]
stars: 201
forks: 81
openIssues: 10
closedIssues: 18
watchers: 5
contributors: 34
recentReleases: 0
createdAt: "2026-04-29T10:14:36Z"
lastCommitAt: "2026-10-29T10:21:09Z"
status: "thriving"
tags: []
healthScore: 86
undervaluedScore: 31
maintainers: ["nicolas-rabault", "cn0303", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/4a95d71f3da5910d7357d87f31e47481cd08081b089505b5e4e213b492d63d91/huggingface/leLab"
---

**LeLab** is a web app that puts the full LeRobot workflow — calibrate, teleoperate, record, train, replay — into a single browser UI. Plug in your arm, open the app, and go. No CLI gymnastics, no keyboard prompts.

🤗 A web-native front door to LeRobot, designed so newcomers can get from "unboxing" to "training their first policy" in minutes.

🤗 Install and run everything with a single command.

## Quick Start

Grab the one-liner from the [LeLab Space](https://huggingface.co/spaces/lerobot/LeLab) — it installs and runs LeLab + LeRobot in a single command.

A page will automatically open in your browser and you are ready to go.

## What you can do

## Camera rotation

If a camera is mounted upside down or sideways, select its **Rotation** in the camera setup on the Calibration page.
Choose 0°, 90°, 180°, or 270° clockwise. For an upside-down wrist camera, choose 180°.

LeLab saves the rotation for each camera. Setup and teleoperation previews, recorded frames, and inference use the selected rotation.
Profiles without a rotation setting use 0°.

The resolution setting describes the camera's capture resolution. A 90° or 270° rotation swaps the output dimensions.
For example, a 640…
