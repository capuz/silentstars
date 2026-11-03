---
repo: "XenseRobotics-AI/xense-taccap-lerobot"
name: "xense-taccap-lerobot"
description: "Tactile data collection with the XTac-UMI G1 handheld gripper — a LeRobot v5.1 fork with Pico4 teleoperation, visuotactile cameras and a ready-to-pull Docker image."
readmeQualityOk: true
url: "https://github.com/XenseRobotics-AI/xense-taccap-lerobot"
language: "Python"
languages: ["Python"]
languagePcts: [96]
topics: ["data-collection", "embodied-ai", "imitation-learning", "lerobot", "manipulation", "robot-learning", "tactile-sensing", "teleoperation", "umi", "visuotactile"]
stars: 14
forks: 6
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 230
recentReleases: 0
createdAt: "2026-06-30T14:27:58Z"
lastCommitAt: "2026-11-03T12:47:40Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 88
undervaluedScore: 46
maintainers: ["Vertax42", "dctx479", "LewisAcid"]
openGraphImageUrl: "https://opengraph.githubassets.com/dffd3898596a0b81251d4778e7c0684fffb5e61928d77a203cf7359493ac81bd/XenseRobotics-AI/xense-taccap-lerobot"
---

# 🎯 Project Overview

🤗 This repository is a fork of [`lerobot`](https://github.com/huggingface/lerobot)
by XenseRobotics, used for Xense's multimodal tactile data acquisition system.
It is scoped to a single device: the **TacCap-Gripper** (**TacCap** = _Tactile
Capture_ Gripper) — a handheld **UMI** leader gripper for tactile data
collection. This branch tracks **upstream lerobot v5.1**, slimmed to the
TacCap-Gripper (single + bimanual) and its **Pico4** teleoperator/tracker, with
Xense tactile cameras layered on top. Either rig can optionally record the
**Pico headset camera** — one key per eye, `head_left` and `head_right` — plus
the headset pose, in the same position + 6D rotation format and the same world
frame as the gripper trackers, so head and hands can be read against each other. See
[`src/lerobot/robots/taccap_gripper/README.md`](https://github.com/XenseRobotics-AI/xense-taccap-lerobot/blob/HEAD/src/lerobot/robots/taccap_gripper/README.md)
for device-specific usage. For generic lerobot usage (datasets, policies,
training scripts) refer to the
[upstream README](https://github.com/huggingface/lerobot#readme).

## 🔧 Installation

> **Docker users:** a complete GPU +…
