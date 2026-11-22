---
repo: "SUNNYsyy2005/bimanual-vla"
name: "bimanual-vla"
description: "End-to-end Piper bimanual VLA framework with Quest VR teleoperation, human-in-the-loop RECAP interventions, LeRobot datasets, OpenPI π0/π0.5 training, and real-time RTC + Ruckig deployment."
readmeQualityOk: true
url: "https://github.com/SUNNYsyy2005/bimanual-vla"
homepage: "https://sunnysyy2005.github.io/bimanual-vla/"
language: "Python"
languages: ["Python"]
languagePcts: [89]
topics: ["vla", "bimanual", "dual-arm", "real-robots", "rtc", "teleoperation", "recap", "vr-teleoperation"]
stars: 20
forks: 2
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 4
recentReleases: 0
createdAt: "2026-07-24T08:17:38Z"
lastCommitAt: "2026-11-22T11:47:39Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 89
undervaluedScore: 49
maintainers: ["SUNNYsyy2005", "zhugeliao159"]
openGraphImageUrl: "https://opengraph.githubassets.com/b0357f06807d43e99f58e8967d8c45a6ea11bca7d59387384e13337d7fd26894/SUNNYsyy2005/bimanual-vla"
---

# 🤖 bimanual-vla

**End-to-end bimanual robot learning: from VR teleoperation & data collection to VLA fine-tuning and real-time deployment on Piper arms.**

---

- [Overview](#overview)
- [Highlights](#highlights)
- [System Overview](#system-overview)
- [Hardware Setup](#hardware-setup)
- [Installation](#installation)
- [Data Collection](#data-collection)
- [Dataset Pipeline](#dataset-pipeline)
- [VLA Training](#vla-training)
- [Real-Robot Deployment](#real-robot-deployment)
- [Released Models and Datasets](#released-models-and-datasets)
- [Dashboard](#dashboard)
- [Project Layout](#project-layout)
- [Documentation](#documentation)
- [Testing](#testing)
- [License](#license)
- [Acknowledgements](#acknowledgements)

## Overview

`bimanual-vla` connects the complete real-robot learning loop in one repository:
collect synchronized Piper demonstrations, validate and export LeRobot datasets,
manage datasets and checkpoints across workstations and GPU clusters, fine-tune
OpenPI `pi0` / `pi0.5` policies, and deploy action chunks through a latency-aware
execution stack with local safety checks.
