---
repo: "zrbwsw/Wi-CBR"
name: "Wi-CBR"
description: "Wi-CBR CodeSpace"
readmeQualityOk: true
url: "https://github.com/zrbwsw/Wi-CBR"
language: "Python"
languages: ["Python", "MATLAB"]
languagePcts: [59, 35]
stars: 11
forks: 2
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2025-05-10T07:45:33Z"
lastCommitAt: "2026-09-08T08:17:44Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 55
undervaluedScore: 37
maintainers: ["zrbwsw"]
openGraphImageUrl: "https://opengraph.githubassets.com/60d4139282213abdcf89fd75bd258fe96ed8ac2de22e67e3b2e9e96f538b8414/zrbwsw/Wi-CBR"
---

# Wi-CBR: Salient-aware Adaptive WiFi Sensing for Cross-domain Behavior Recognition (AAAI 2026)

This repository provides the official implementation of **Wi-CBR**, a salient-aware adaptive WiFi sensing framework for **cross-domain human behavior / gesture recognition**.  
Wi-CBR jointly exploits **phase** and **Doppler Frequency Shift (DFS)** signals, and uses a **two-branch self-attention** backbone plus a **saliency guidance module** to learn domain-robust representations. 

---

## 1. Datasets

We evaluate Wi-CBR on two large-scale public WiFi sensing datasets:

- **XRF55 Dataset**  
  <https://aiotgroup.github.io/XRF55/>

- **Widar3.0 Dataset**  
  <https://tns.thss.tsinghua.edu.cn/widar3.0/>

Please follow the official dataset licenses and download them from the above pages.

---

## 2. Project Structure

This project contains two main folders:

- `matlab/`  
  - CSI preprocessing and visualization for both **Widar3.0** and **XRF55**  
  - CSI-ratio denoising, STFT to obtain DFS, and generation of 2D images (e.g., `224×224 RGB`) for later deep learning

- `python/`  
  - Our **Wi-CBR** PyTorch implementation  
  - Training / evaluation scripts for cross-domain behavior…
