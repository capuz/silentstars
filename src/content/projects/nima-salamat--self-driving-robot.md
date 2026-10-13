---
repo: "nima-salamat/self-driving-robot"
name: "self-driving-robot"
description: "Self Driving Robot – A Python and OpenCV-based self-driving robot built with Raspberry Pi and Arduino. It can follow lanes, detect AprilTags and crosswalks, and navigate safely through intersections. Designed for educational purposes, prototyping, and robotics competitions, it also supports real-time vision processing and optional live streaming."
readmeQualityOk: true
url: "https://github.com/nima-salamat/self-driving-robot"
language: "Python"
languages: ["Python"]
languagePcts: [87]
topics: ["apriltag", "arduino", "computer-vision", "crosswalk-detection", "diy-robotics", "lane-following", "opencv", "python", "raspberrypi", "robotics-competition"]
stars: 8
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2025-04-10T15:00:05Z"
lastCommitAt: "2026-10-13T10:58:23Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 89
undervaluedScore: 66
maintainers: ["nima-salamat", "ArvinNotDev"]
openGraphImageUrl: "https://opengraph.githubassets.com/aca8d186b5e2096c7073e193573d90a1e63154f97e836e8ad1ee6da55740957c/nima-salamat/self-driving-robot"
---

# Python & Arduino Integration - Self Driving Robot

This document covers the Python and Arduino components of the Self Driving Robot project. These components work together to enable autonomous navigation through computer vision, sensor processing, and motor control.

## 📋 Table of Contents
- [Demo](#demo)
- [Architecture Overview](#architecture-overview)
- [Arduino Component](#arduino-component)
- [Python Component](#python-component)
- [Setup & Installation](#setup--installation)
- [Usage](#usage)
- [Communication Protocol](#communication-protocol)
- [Troubleshooting](#troubleshooting)

---
## Demo

https://github.com/user-attachments/assets/ad7efa66-dcdb-4234-98d1-214cd702bc16

---

## 🏗️ Architecture Overview

The system is built on a two-tier architecture:

```
┌─────────────────────────────────────────────┐
│         PYTHON (Main Controller)            │
│  - Vision Processing (Camera)               │
│  - Traffic Sign Detection                   │
│  - PID Control Logic                        │
│  - Mode Management (City/Race)              │
│  - Serial Communication Handler             │
└──────────────┬──────────────────────────────┘
               │ Serial…
