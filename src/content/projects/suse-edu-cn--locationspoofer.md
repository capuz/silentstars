---
repo: "suse-edu-cn/LocationSpoofer"
name: "LocationSpoofer"
description: "A virtual location software that requires root and Lsposed."
originalDescription: "一款虚拟定位软件，需要root以及Lsposed。"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/suse-edu-cn/LocationSpoofer"
language: "Kotlin"
languages: ["Kotlin"]
languagePcts: [100]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 3
recentReleases: 10
createdAt: "2026-04-24T17:04:21Z"
lastCommitAt: "2026-07-18T05:47:09Z"
lastReleaseAt: "2026-05-01T16:32:43Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 78
undervaluedScore: 55
maintainers: ["HuangZhuoRui", "boonlove"]
openGraphImageUrl: "https://opengraph.githubassets.com/cf40b5295f7c518eff1a75150b8319fed179716bf6b6b0f67d720b78a2c0f54f/suse-edu-cn/LocationSpoofer"
---

<h1>LocationSpoofer</h1>

<p>High-fidelity Android system-level location spoofing and wireless environment simulation module based on KernelSU + LSPosed</p>
<p>Join our [Telegram group](https://t.me/+CsxZGItXdW40ZWVl) for**~~ technical discussions, updates, ~~** boasting and abstraction.</p>
<p>Check out the [LocationSpoofer detailed usage tutorial](https://docs.google.com/document/d/1fFEz3k7ATdN2dwY1L3RJn1QuzgokIsslNa88-vUPxPk/edit?usp=sharing)</p>

## 📖 Project Introduction

In the risk control environment of modern Android systems, the traditional "Mock Location" developer option has long been classified as a high-risk feature by various anti-cheat SDKs (such as Gaode risk control, Tencent security, NetEase Yidun, etc.). They can easily detect the `isFromMockProvider` flag and identify anomalies by collecting the following information from the surroundings:

*   **Wi-Fi BSSID list**
*   **Cellular fingerprint of mobile base station cells**
*   **Nearby BLE Bluetooth beacons**
*   Even identifying regular static or linear simulated trajectories through Fourier Transform (FFT) of location data sequences.

**LocationSpoofer** is a **system-level virtual location and radio…
