---
repo: "nima-salamat/self-driving-robot"
name: "self-driving-robot"
description: "Self Driving Robot – A Python and OpenCV-based self-driving robot built with Raspberry Pi and Arduino. It can follow lanes, detect AprilTags and crosswalks, and navigate safely through intersections. Designed for educational purposes, prototyping, and robotics competitions, it also supports real-time vision processing and optional live streaming."
readmeQualityOk: true
url: "https://github.com/nima-salamat/self-driving-robot"
language: "Python"
languages: ["Python"]
languagePcts: [70]
topics: ["apriltag", "arduino", "computer-vision", "crosswalk-detection", "diy-robotics", "lane-following", "opencv", "python", "raspberrypi", "robotics-competition"]
stars: 9
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2025-04-10T15:00:05Z"
lastCommitAt: "2026-11-02T15:19:18Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 90
undervaluedScore: 65
maintainers: ["nima-salamat"]
openGraphImageUrl: "https://opengraph.githubassets.com/7e7a5d7d906643342260ba7ade5e64eb0c50b33ea821715f3b4b54b436cb39d2/nima-salamat/self-driving-robot"
---

# Self-Driving Robot

A Python-and-Arduino autonomous robot project for camera-based navigation, lane detection, motion control, and optional traffic-sign/traffic-light behaviors.

[Watch the demo](https://github.com/user-attachments/assets/ad7efa66-dcdb-4234-98d1-214cd702bc16)

## How it works

- **Python runtime** (`python/main.py`) runs on the host computer/Raspberry Pi. It selects City or Race mode, processes camera frames, runs perception and steering logic, and sends motion commands over serial.
- **Arduino firmware** controls the motors, steering servo, encoder and ultrasonic sensors. The host and firmware communicate using line-based serial commands.
- **Tools** under `python/calibration/`, `python/train_sign_detector/`, `python/dataset_connector/` and `python/tools/` support camera calibration, sign-model data collection, and offline lane-detector tuning.

## Quick start

From the repository root, create an environment and install the project dependencies:

```bash
python -m venv .venv
# Linux / Raspberry Pi
source .venv/bin/activate
# Windows PowerShell instead:
# .venv\Scripts\Activate.ps1

python -m pip install -r requirements.txt
python python/main.py --help
```

Run…
