---
repo: "ilikechocopies/sideload-jiostb"
name: "sideload-jiostb"
description: "Clean, step-by-step Windows 11 guide to enable ADB on Jio STB (JMSC200Av2 & JMSB200A) via local DNS spoofing & Docker containers. Tested on firmwares 22.1.09, 24.1.39, 25.1.9, and older builds (excludes JHS models). Includes foolproof network isolation steps, fallback troubleshooting, and Wi-Fi reset fixes for smooth sideloading."
readmeQualityOk: true
url: "https://github.com/ilikechocopies/sideload-jiostb"
language: "Shell"
languages: ["Shell", "Python"]
languagePcts: [60, 35]
stars: 408
forks: 409
openIssues: 27
closedIssues: 2
watchers: 2
contributors: 1
recentReleases: 0
createdAt: "2026-10-31T02:17:57Z"
lastCommitAt: "2026-11-17T12:18:26Z"
status: "newborn"
tags: ["solo_builder", "under_pressure", "fork_magnet"]
healthScore: 70
undervaluedScore: 21
maintainers: ["ilikechocopies"]
openGraphImageUrl: "https://opengraph.githubassets.com/f536c8d3a09d8abd5cee0ce75ca971fa9df2372aa4c88045aed6b1310d24cb16/ilikechocopies/sideload-jiostb"
---

# Jio STB ADB Setup Guide (Windows 11 & 10)

A beginner-friendly, clutter-free walkthrough to enable **network ADB debugging** and sideload custom launchers/apps on supported Jio Set-Top Boxes using a Windows PC and your home Wi-Fi router.

> [!TIP]
> **Need Hands-On Help or Want Vishal Beniwal to Do It For You?**
> * **Mail-In Service:** If you find this guide too technical or complicated, you can ship your box to Vishal Beniwal and he will set it up for you! Pay whatever your heart desires + return shipping.
> * **Twitter / X:** [@ilikechocopies](https://x.com/ilikechocopies)
> * **Reddit:** [u/ilikechocopies](https://www.reddit.com/user/ilikechocopies)
> * **Instagram:** [@soloxsurfer](https://instagram.com/soloxsurfer)

> [!NOTE]
> **Supported Hardware & Firmware:**
> * **JMSC200Av2** and **JMSB200A** across firmware builds `22.1.09`, `24.1.39`, `25.1.9`, and older.
> * **JHS series (JHSC200 v1 / JioOS 2.0)** on firmware build `stb-jhcs200-11.3.46`.
>
> *Both box families use the exact same `./stage1.sh` workflow. The only difference is in **Step 8** (launching the proxy listener).*

> [!TIP]
> **Don't Panic If Something Goes Wrong:**
> * **Box acting up?** Factory reset your…
