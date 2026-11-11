---
repo: "D3h420/JanOS-app"
name: "JanOS-app"
description: "Python-based controller for JanOS software"
readmeQualityOk: true
url: "https://github.com/D3h420/JanOS-app"
language: "Python"
languages: ["Python"]
languagePcts: [99]
stars: 5
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-01-06T10:55:27Z"
lastCommitAt: "2026-11-11T19:47:30Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 67
undervaluedScore: 35
maintainers: ["D3h420"]
openGraphImageUrl: "https://opengraph.githubassets.com/57bf603da27c6abd78b35676f5cc4dcfa0272adeda56a59fdf38121081355c0e/D3h420/JanOS-app"
---

# 🚀 JanOS-app

## 🧭 What This Script Does

A terminal-based Python controller for [projectZero (JanOS)](https://github.com/C5Lab/projectZero) firmware over UART.
 `JanOS_app.py` connects to a LAB5 devices through a serial port and provides an interactive menu. 
 The script sends text commands to projectZero over UART (115200), parses responses, and displays live status output.

## 📦 Requirements

- Python 3.10+
- `pyserial`
- serial access to your JanOS device (`/dev/ttyUSB0`, `/dev/cu.usbserial-*`, etc.)

Install dependency:

```bash
python3 -m pip install -r requirements.txt
```

## ▶️ Usage

```bash
git clone https://github.com/D3h420/JanOS-app.git
cd JanOS-app
python3 JanOS_app.py
```

When started without arguments, the app waits for MonsterC5 and automatically
opens its USB UART port. On macOS it prefers the `/dev/cu.usbserial-*` call-out
device, so `sudo` and a manually supplied port are not required.

An explicit device path is still available as an override:

```bash
python3 JanOS_app.py /dev/cu.usbserial-230
```

## M5Stack Cardputer Zero

The repository also contains a complete native ARM64 APPLaunch application for
M5Stack Cardputer Zero. It uses the same…
